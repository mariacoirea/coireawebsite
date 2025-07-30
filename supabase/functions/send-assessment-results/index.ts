import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AssessmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  assessmentResults: {
    pillarScores: {
      purpose: number;
      culture: number;
      wellBeing: number;
      collaboration: number;
      leadership: number;
    };
    totalScore: number;
    organizationalStatus: string;
    painPoint: string;
    strength: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: AssessmentFormData = await req.json();
    console.log("Received assessment results submission:", formData);

    const { assessmentResults } = formData;
    const overallPercentage = Math.round((assessmentResults.totalScore / 125) * 100);

    // Format pillar scores for email
    const formatPillarScores = () => {
      const pillars = [
        { name: 'Purpose', score: assessmentResults.pillarScores.purpose },
        { name: 'Culture', score: assessmentResults.pillarScores.culture },
        { name: 'Well-Being', score: assessmentResults.pillarScores.wellBeing },
        { name: 'Collaboration', score: assessmentResults.pillarScores.collaboration },
        { name: 'Leadership', score: assessmentResults.pillarScores.leadership }
      ];

      return pillars.map(pillar => {
        const percentage = Math.round((pillar.score / 25) * 100);
        const isLowest = pillar.name === assessmentResults.painPoint;
        const isHighest = pillar.name === assessmentResults.strength;
        const indicator = isLowest ? ' 🔴 (Pain Point)' : isHighest ? ' 🟢 (Strength)' : '';
        return `<li><strong>${pillar.name}:</strong> ${percentage}%${indicator}</li>`;
      }).join('\n');
    };

    // Create email content
    const emailContent = `
      <h2>🎯 New Organizational Health Assessment + Consultation Request</h2>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>📋 Contact Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Company:</strong> ${formData.company}</li>
          <li><strong>Role:</strong> ${formData.role}</li>
        </ul>
      </div>

      <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>📊 Assessment Overview:</h3>
        <ul>
          <li><strong>Overall Score:</strong> ${overallPercentage}% (${assessmentResults.totalScore}/125 points)</li>
          <li><strong>Organizational Status:</strong> <em>${assessmentResults.organizationalStatus}</em></li>
          <li><strong>Greatest Challenge:</strong> ${assessmentResults.painPoint}</li>
          <li><strong>Greatest Strength:</strong> ${assessmentResults.strength}</li>
        </ul>
      </div>

      <div style="background-color: #fff8f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>🔍 Detailed Pillar Breakdown:</h3>
        <ul>
          ${formatPillarScores()}
        </ul>
      </div>

      <div style="background-color: #f0fff0; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>💡 Key Insights:</h3>
        <p><strong>Primary Pain Point:</strong> ${assessmentResults.painPoint} - This area needs immediate attention and could be blocking organizational growth.</p>
        <p><strong>Core Strength:</strong> ${assessmentResults.strength} - This pillar can serve as a foundation for transformation and should be leveraged in the improvement strategy.</p>
      </div>

      <div style="background-color: #fff0f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>🎯 Next Steps:</h3>
        <p>This prospect has completed the full organizational health assessment and is requesting a consultation. They are likely ready for a deeper conversation about transformation opportunities.</p>
        <p><strong>Recommended approach:</strong> Focus the consultation on their ${assessmentResults.painPoint} challenges while highlighting how their ${assessmentResults.strength} strength can accelerate transformation.</p>
      </div>

      <hr style="margin: 30px 0;">
      <p style="color: #666; font-style: italic;">This request was submitted through the COIREA Organizational Health Scanner tool.</p>
    `;

    const emailResponse = await resend.emails.send({
      from: "COIREA Health Scanner <assessment@coirea.com>",
      to: ["maria@coirea.com"],
      replyTo: formData.email,
      subject: `🎯 New Assessment + Consultation: ${formData.firstName} ${formData.lastName} (${formData.company}) - ${assessmentResults.organizationalStatus}`,
      html: emailContent,
    });

    console.log("Assessment results email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-assessment-results function:", error);
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