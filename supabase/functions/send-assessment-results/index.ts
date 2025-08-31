import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from "npm:zod@3.23.8";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface OrganizationalAssessmentData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  assessmentResults: {
    pillarScores: {
      purposeCulture: number;
      collaboration: number;
      leadership: number;
      wellBeing: number;
      organizationalStrategy: number;
      interconnectivity: number;
    };
    totalScore: number;
    interconnectivityScore: number;
    organizationalStatus: string;
    painPoint: string;
    strength: string;
  };
}

interface LeadershipAssessmentData {
  email: string;
  name: string;
  assessmentType: 'leadership';
  results: {
    domainScores: {
      selfAwareness: number;
      selfManagement: number;
      empathy: number;
      relationshipManagement: number;
      regenerativeLeadership: number;
    };
    totalPercentage: number;
    leadershipState: string;
    primaryDevelopmentArea: string;
    strongestDomain: string;
    stateMessage?: string;
    evolutionMap?: {
      from: string;
      to: string;
    };
  };
}

const OrganizationalAssessmentSchema = z.object({
  firstName: z.string().max(200),
  lastName: z.string().max(200),
  email: z.string().email().max(320),
  company: z.string().max(200),
  role: z.string().max(200),
  assessmentResults: z.object({
    pillarScores: z.object({
      purposeCulture: z.number().min(0).max(35),
      collaboration: z.number().min(0).max(35),
      leadership: z.number().min(0).max(35),
      wellBeing: z.number().min(0).max(35),
      organizationalStrategy: z.number().min(0).max(35),
      interconnectivity: z.number().min(0).max(35),
    }),
    totalScore: z.number().min(0).max(175),
    interconnectivityScore: z.number().min(0).max(35),
    organizationalStatus: z.string().max(200),
    painPoint: z.string().max(100),
    strength: z.string().max(100),
  }),
});

const LeadershipAssessmentSchema = z.object({
  email: z.string().email().max(320),
  name: z.string().max(200),
  assessmentType: z.literal('leadership'),
  results: z.object({
    domainScores: z.object({
      selfAwareness: z.number().min(0).max(100),
      selfManagement: z.number().min(0).max(100),
      empathy: z.number().min(0).max(100),
      relationshipManagement: z.number().min(0).max(100),
      regenerativeLeadership: z.number().min(0).max(100),
    }),
    totalPercentage: z.number().min(0).max(100),
    leadershipState: z.string().max(100),
    primaryDevelopmentArea: z.string().max(100),
    strongestDomain: z.string().max(100),
    stateMessage: z.string().optional(),
    evolutionMap: z.object({
      from: z.string(),
      to: z.string(),
    }).optional(),
  }),
});

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

const handleOrganizationalAssessment = async (formData: OrganizationalAssessmentData): Promise<Response> => {
  console.log("Received organizational assessment results submission:", { ...formData, email: "[redacted]" });

  const { assessmentResults } = formData;
  const overallPercentage = Math.round((assessmentResults.totalScore / 175) * 100);
  const interconnectivityPercentage = Math.round((assessmentResults.interconnectivityScore / 35) * 100);

  // Format pillar scores for email
  const formatPillarScores = () => {
    const pillars = [
      { name: 'Purpose & Culture', score: assessmentResults.pillarScores.purposeCulture },
      { name: 'Collaboration', score: assessmentResults.pillarScores.collaboration },
      { name: 'Leadership', score: assessmentResults.pillarScores.leadership },
      { name: 'Well-Being', score: assessmentResults.pillarScores.wellBeing },
      { name: 'Organizational Strategy', score: assessmentResults.pillarScores.organizationalStrategy },
      { name: 'Interconnectivity', score: assessmentResults.pillarScores.interconnectivity }
    ];

    return pillars.map(pillar => {
      const percentage = Math.round((pillar.score / 35) * 100);
      const isLowest = pillar.name === assessmentResults.painPoint;
      const isHighest = pillar.name === assessmentResults.strength;
      const isInterconnectivity = pillar.name === 'Interconnectivity';
      const indicator = isInterconnectivity ? ' 🔄 (System Flow)' : 
                       isLowest ? ' 🔴 (Pain Point)' : 
                       isHighest ? ' 🟢 (Strength)' : '';
      return `<li><strong>${pillar.name}:</strong> ${percentage}%${indicator}</li>`;
    }).join('\n');
  };

  // Create email content
  const emailContent = `
    <h2>🎯 New Organizational Health Assessment + Consultation Request</h2>
    
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>📋 Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${escapeHtml(formData.firstName)} ${escapeHtml(formData.lastName)}</li>
        <li><strong>Email:</strong> ${escapeHtml(formData.email)}</li>
        <li><strong>Company:</strong> ${escapeHtml(formData.company)}</li>
        <li><strong>Role:</strong> ${escapeHtml(formData.role)}</li>
      </ul>
    </div>

    <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>📊 Assessment Overview:</h3>
      <ul>
        <li><strong>Overall Score:</strong> ${overallPercentage}% (${assessmentResults.totalScore}/175 points)</li>
        <li><strong>Interconnectivity Score:</strong> ${interconnectivityPercentage}% (${assessmentResults.interconnectivityScore}/35 points)</li>
        <li><strong>Organizational Status:</strong> <em>${escapeHtml(assessmentResults.organizationalStatus)}</em></li>
        <li><strong>Greatest Challenge:</strong> ${escapeHtml(assessmentResults.painPoint)}</li>
        <li><strong>Greatest Strength:</strong> ${escapeHtml(assessmentResults.strength)}</li>
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
    subject: `🎯 New Assessment + Consultation: ${escapeHtml(formData.firstName)} ${escapeHtml(formData.lastName)} (${escapeHtml(formData.company)}) - ${escapeHtml(assessmentResults.organizationalStatus)}`,
    html: emailContent,
  });

  console.log("Organizational assessment email sent successfully:", emailResponse);

  return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
};

const handleLeadershipAssessment = async (data: LeadershipAssessmentData): Promise<Response> => {
  console.log("Received leadership assessment results submission:", { ...data, email: "[redacted]" });

  const { results } = data;
  
  // Format domain scores for email
  const formatDomainScores = () => {
    const domains = [
      { name: 'Self-Awareness', score: results.domainScores.selfAwareness },
      { name: 'Self-Management', score: results.domainScores.selfManagement },
      { name: 'Empathy', score: results.domainScores.empathy },
      { name: 'Relationship Management', score: results.domainScores.relationshipManagement },
      { name: 'Regenerative Leadership', score: results.domainScores.regenerativeLeadership }
    ];

    return domains.map(domain => {
      const isLowest = domain.name === results.primaryDevelopmentArea;
      const isHighest = domain.name === results.strongestDomain;
      const indicator = isLowest ? ' 🔴 (Development Area)' : 
                       isHighest ? ' 🟢 (Strength)' : '';
      return `<li><strong>${domain.name}:</strong> ${domain.score}%${indicator}</li>`;
    }).join('\n');
  };

  // Create email content for leadership assessment
  const emailContent = `
    <h2>🧭 Your Conscious Leadership Assessment Results</h2>
    
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>👤 Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${escapeHtml(data.name)}</li>
        <li><strong>Email:</strong> ${escapeHtml(data.email)}</li>
      </ul>
    </div>

    <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>📊 Leadership Assessment Overview:</h3>
      <ul>
        <li><strong>Overall Score:</strong> ${results.totalPercentage}%</li>
        <li><strong>Leadership State:</strong> <em>${escapeHtml(results.leadershipState)}</em></li>
        <li><strong>Primary Development Area:</strong> ${escapeHtml(results.primaryDevelopmentArea)}</li>
        <li><strong>Greatest Strength:</strong> ${escapeHtml(results.strongestDomain)}</li>
      </ul>
      ${results.stateMessage ? `<p><strong>Leadership Insight:</strong> ${escapeHtml(results.stateMessage)}</p>` : ''}
    </div>

    <div style="background-color: #fff8f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>🔍 Domain Breakdown:</h3>
      <ul>
        ${formatDomainScores()}
      </ul>
    </div>

    ${results.evolutionMap ? `
    <div style="background-color: #f0fff0; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>🌱 Evolution Path:</h3>
      <p><strong>From:</strong> ${escapeHtml(results.evolutionMap.from)}</p>
      <p><strong>To:</strong> ${escapeHtml(results.evolutionMap.to)}</p>
    </div>
    ` : ''}

    <div style="background-color: #fff0f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>🎯 Next Steps:</h3>
      <p>This individual has completed the conscious leadership assessment and may be interested in leadership development opportunities.</p>
      <p><strong>Focus Area:</strong> ${results.primaryDevelopmentArea} development while leveraging their ${results.strongestDomain} strength.</p>
    </div>

    <hr style="margin: 30px 0;">
    <p style="color: #666; font-style: italic;">This assessment was completed through the COIREA Conscious Leadership Assessment tool.</p>
  `;

  const emailResponse = await resend.emails.send({
    from: "COIREA Leadership Assessment <assessment@coirea.com>",
    to: [data.email],
    bcc: ["maria@coirea.com"],
    subject: `🧭 Your Conscious Leadership Assessment Results - ${results.leadershipState}`,
    html: emailContent,
  });

  console.log("Leadership assessment email sent successfully:", emailResponse);

  return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const raw = await req.json();
    
    // Try to parse as leadership assessment first
    const leadershipParsed = LeadershipAssessmentSchema.safeParse(raw);
    if (leadershipParsed.success) {
      return await handleLeadershipAssessment(leadershipParsed.data);
    }
    
    // Try organizational assessment
    const orgParsed = OrganizationalAssessmentSchema.safeParse(raw);
    if (orgParsed.success) {
      return await handleOrganizationalAssessment(orgParsed.data);
    }
    
    return new Response(
      JSON.stringify({ success: false, error: "Invalid payload" }),
      { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
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