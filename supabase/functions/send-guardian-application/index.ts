import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from "npm:zod@3.23.8";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const GuardianSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  country: z.string().trim().max(200).optional().default(""),
  work: z.string().trim().max(500).optional().default(""),
  processes: z.string().trim().max(2000).optional().default(""),
  resonance: z.string().trim().max(2000).optional().default(""),
  practice: z.string().trim().max(500).optional().default(""),
  linkedin: z.string().trim().min(1).max(500),
  website: z.string().trim().max(500).optional().default(""),
});

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const raw = await req.json();
    const parsed = GuardianSchema.safeParse(raw);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid payload" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
    const data = parsed.data;
    console.log("Received guardian application from:", data.name);

    const html = `
      <h2>New Guardian Application</h2>
      <h3>Applicant</h3>
      <ul>
        <li><strong>Name:</strong> ${escapeHtml(data.name)}</li>
        <li><strong>Country:</strong> ${escapeHtml(data.country) || "—"}</li>
        <li><strong>Current work / practice:</strong> ${escapeHtml(data.work) || "—"}</li>
        <li><strong>LinkedIn / website:</strong> ${escapeHtml(data.link) || "—"}</li>
      </ul>

      <h3>Processes accompanied</h3>
      <p>${escapeHtml(data.processes) || "—"}</p>

      <h3>Why COIREA resonates</h3>
      <p>${escapeHtml(data.resonance) || "—"}</p>

      <h3>Personal practice</h3>
      <p>${escapeHtml(data.practice) || "—"}</p>

      <hr>
      <p><em>Submitted through the Guardians application form on coirea.com.</em></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "COIREA Guardians <guardians@coirea.com>",
      to: ["hello@coirea.com"],
      subject: `New Guardian Application — ${data.name}`,
      html,
    });

    console.log("Guardian email sent:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, emailId: emailResponse.data?.id }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in send-guardian-application function:", error);
    return new Response(
      JSON.stringify({ error: error.message, success: false }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
