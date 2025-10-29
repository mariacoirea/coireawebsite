import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from "npm:zod@3.23.8";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RaicesFormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}

const RaicesSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  organization: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(5000),
});

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const raw = await req.json();
    const parsed = RaicesSchema.safeParse(raw);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid payload" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
    const formData: RaicesFormData = parsed.data as RaicesFormData;
    console.log("Received Raíces Latinas form submission:", { ...formData, email: "[redacted]" });

    // Create email content
    const emailContent = `
      <h2>Nueva Solicitud de Colaboración - Raíces Latinas</h2>
      
      <h3>Información de Contacto:</h3>
      <ul>
        <li><strong>Nombre:</strong> ${escapeHtml(formData.name)}</li>
        <li><strong>Email:</strong> ${escapeHtml(formData.email)}</li>
        <li><strong>Organización:</strong> ${escapeHtml(formData.organization)}</li>
      </ul>

      <h3>Mensaje:</h3>
      <p>${escapeHtml(formData.message).replace(/\n/g, '<br>')}</p>

      <hr>
      <p><em>Este mensaje fue enviado desde el formulario de COIREA Raíces Latinas.</em></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "COIREA Raíces Latinas <raices@coirea.com>",
      to: ["maria@coirea.com"],
      replyTo: formData.email,
      subject: `Nueva Solicitud de Colaboración: ${formData.name} - ${formData.organization}`,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-raices-form function:", error);
    return new Response(
      JSON.stringify({ error: error.message, success: false }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
