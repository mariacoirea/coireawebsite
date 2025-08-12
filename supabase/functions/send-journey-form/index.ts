import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from "npm:zod@3.23.8";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface JourneyFormData {
  name: string;
  email: string;
  organization: string;
  role: string;
  challenges: string[];
  customChallenge: string;
  goals: string;
  urgency: string;
  vision: string;
  additionalContext: string;
  timeline: string;
  budget: string;
}

const JourneySchema = z.object({
  name: z.string().max(200),
  email: z.string().email().max(320),
  organization: z.string().max(200),
  role: z.string().max(200),
  challenges: z.array(z.string().max(200)).max(20),
  customChallenge: z.string().max(500).optional().default(""),
  goals: z.string().max(2000),
  urgency: z.string().max(100),
  vision: z.string().max(2000),
  additionalContext: z.string().max(5000).optional().default(""),
  timeline: z.string().max(200).optional().default(""),
  budget: z.string().max(200).optional().default("")
});

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const raw = await req.json();
    const parsed = JourneySchema.safeParse(raw);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid payload" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
    const formData: JourneyFormData = parsed.data as JourneyFormData;
    console.log("Received journey form submission:", { ...formData, email: "[redacted]" });

    // Format challenges for email
    const challengesList = formData.challenges.length > 0 
      ? formData.challenges.map((c) => escapeHtml(c)).join(", ") 
      : "None selected";
    
    const customChallengeText = formData.customChallenge 
      ? `\n   Custom Challenge: ${escapeHtml(formData.customChallenge)}` 
      : "";

    // Create email content
    const emailContent = `
      <h2>New Strategy Call Request</h2>
      
      <h3>Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${escapeHtml(formData.name)}</li>
        <li><strong>Email:</strong> ${escapeHtml(formData.email)}</li>
        <li><strong>Organization:</strong> ${escapeHtml(formData.organization)}</li>
        <li><strong>Role:</strong> ${escapeHtml(formData.role)}</li>
      </ul>

      <h3>Current Challenges:</h3>
      <p>${challengesList}${customChallengeText}</p>

      <h3>Goals & Vision:</h3>
      <p><strong>Desired Outcomes:</strong> ${escapeHtml(formData.goals)}</p>
      <p><strong>Vision:</strong> ${escapeHtml(formData.vision)}</p>
      <p><strong>Urgency Level:</strong> ${escapeHtml(formData.urgency)}</p>

      <h3>Project Details:</h3>
      <ul>
        <li><strong>Timeline:</strong> ${escapeHtml(formData.timeline)}</li>
        <li><strong>Budget Range:</strong> ${escapeHtml(formData.budget)}</li>
      </ul>

      <h3>Additional Information:</h3>
      <p>${formData.additionalContext ? escapeHtml(formData.additionalContext) : "None provided"}</p>

      <hr>
      <p><em>This request was submitted through the COIREA strategy call booking form.</em></p>
    `;

    const emailResponse = await resend.emails.send({
      from: "COIREA Strategy Calls <strategy@coirea.com>",
      to: ["maria@coirea.com"],
      replyTo: formData.email,
      subject: `New Strategy Call Request from ${formData.name} - ${formData.organization}`,
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
    console.error("Error in send-journey-form function:", error);
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