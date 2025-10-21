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
  assessmentResults: {
    pillarScores: {
      purposeCulture: number;
      collaboration: number;
      leadership: number;
      selfLeadership: number;
      wellBeing: number;
      organizationalStrategy: number;
      interconnectivity: number;
    };
    totalScore: number;
    interconnectivityScore: number;
    selfLeadershipScore: number;
    selfLeadershipPercent: number;
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
  assessmentResults: z.object({
    pillarScores: z.object({
      purposeCulture: z.number().min(0).max(35),
      collaboration: z.number().min(0).max(35),
      leadership: z.number().min(0).max(35),
      selfLeadership: z.number().min(0).max(35),
      wellBeing: z.number().min(0).max(35),
      organizationalStrategy: z.number().min(0).max(35),
      interconnectivity: z.number().min(0).max(35),
    }),
    totalScore: z.number().min(0).max(175),
    interconnectivityScore: z.number().min(0).max(35),
    selfLeadershipScore: z.number().min(0).max(35),
    selfLeadershipPercent: z.number().min(0).max(100),
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
  
  const getSelfLeadershipStatus = () => {
    if (assessmentResults.selfLeadershipPercent <= 39) return 'Below the Line';
    if (assessmentResults.selfLeadershipPercent <= 59) return 'In Transition';
    if (assessmentResults.selfLeadershipPercent <= 79) return 'Conscious Leadership Emerging';
    return 'Regenerative Leadership Embodied';
  };

  // Format pillar scores for email (only main 5 pillars for results)
  const formatPillarScores = () => {
    const mainPillars = [
      { name: 'Purpose & Culture', score: assessmentResults.pillarScores.purposeCulture },
      { name: 'Collaboration', score: assessmentResults.pillarScores.collaboration },
      { name: 'Leadership', score: assessmentResults.pillarScores.leadership },
      { name: 'Well-Being', score: assessmentResults.pillarScores.wellBeing },
      { name: 'Organizational Strategy', score: assessmentResults.pillarScores.organizationalStrategy }
    ];

    return mainPillars.map(pillar => {
      const percentage = Math.round((pillar.score / 35) * 100);
      const isLowest = pillar.name === assessmentResults.painPoint;
      const isHighest = pillar.name === assessmentResults.strength;
      const indicator = isLowest ? ' 🔴 (Pain Point)' : 
                       isHighest ? ' 🟢 (Strength)' : '';
      return `<li><strong>${pillar.name}:</strong> ${percentage}%${indicator}</li>`;
    }).join('\n');
  };

  // User email with comprehensive results
  const userEmailHtml = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Your Organizational Health Results</h1>
      </div>
      
      <div style="padding: 40px 20px;">
        <p style="font-size: 16px; color: #333; margin-bottom: 20px;">Hi ${escapeHtml(formData.firstName)},</p>
        
        <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 30px;">
          Thank you for completing the COIREA Organizational Health Scanner. Here are your comprehensive results:
        </p>
        
        <div style="background-color: #f8f9fa; border-radius: 12px; padding: 30px; margin-bottom: 30px; text-align: center;">
          <div style="display: inline-block; width: 80px; height: 80px; border-radius: 50%; background-color: #667eea; color: white; line-height: 80px; font-size: 24px; font-weight: bold; margin-bottom: 15px;">
            ${overallPercentage}%
          </div>
          <h2 style="color: #667eea; margin: 0 0 10px 0; font-size: 24px;">${escapeHtml(assessmentResults.organizationalStatus)}</h2>
          <p style="color: #666; margin: 0; font-size: 14px;">Overall Organizational Health Score</p>
        </div>
        
        <h3 style="color: #333; font-size: 20px; margin-bottom: 20px;">Pillar Breakdown:</h3>
        <div style="margin-bottom: 30px;">
          ${formatPillarScores()}
        </div>
        
        <div style="background-color: #e7e3ff; border-radius: 12px; padding: 25px; margin-bottom: 20px; border-left: 4px solid #6f42c1;">
          <h4 style="color: #4c1d95; margin: 0 0 10px 0; font-size: 18px;">Self-Leadership Assessment</h4>
          <p style="color: #4c1d95; margin: 0 0 15px 0; line-height: 1.5;"><strong>${getSelfLeadershipStatus()} (${assessmentResults.selfLeadershipPercent}%)</strong></p>
          <p style="color: #4c1d95; margin: 0; font-size: 14px;">Your conscious leadership development level and emotional intelligence.</p>
        </div>
        
        <div style="background-color: #fff3cd; border-radius: 12px; padding: 25px; margin-bottom: 20px; border-left: 4px solid #ffc107;">
          <h4 style="color: #856404; margin: 0 0 10px 0; font-size: 18px;">Greatest Challenge: ${escapeHtml(assessmentResults.painPoint)}</h4>
          <p style="color: #856404; margin: 0; line-height: 1.5;">This is your primary area for improvement and growth.</p>
        </div>
        
        <div style="background-color: #d4edda; border-radius: 12px; padding: 25px; margin-bottom: 20px; border-left: 4px solid #28a745;">
          <h4 style="color: #155724; margin: 0 0 10px 0; font-size: 18px;">Greatest Strength: ${escapeHtml(assessmentResults.strength)}</h4>
          <p style="color: #155724; margin: 0; line-height: 1.5;">This is your anchor for transformation and growth.</p>
        </div>
        
        <div style="background-color: #f0f8ff; border-radius: 12px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #0066cc;">
          <h4 style="color: #003d7a; margin: 0 0 10px 0; font-size: 18px;">System Interconnectivity: ${interconnectivityPercentage}%</h4>
          <p style="color: #003d7a; margin: 0; line-height: 1.5;">
            ${interconnectivityPercentage < 60 ? 
              'Your organizational elements need better alignment and flow between pillars.' : 
              'Your organizational system shows good coherence and interconnected flow.'}
          </p>
        </div>
        
        <div style="background-color: #667eea; border-radius: 12px; padding: 30px; text-align: center; color: white;">
          <h3 style="margin: 0 0 15px 0; font-size: 22px;">Ready to Transform Your Organization?</h3>
          <p style="margin: 0 0 20px 0; line-height: 1.6;">Let's discuss how to turn these insights into actionable transformation strategies.</p>
          <p style="margin: 0; font-size: 14px;">We'll be in touch within 24 hours to schedule your free consultation.</p>
        </div>
        
        <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 14px; margin: 0;">
            Best regards,<br>
            The COIREA Team
          </p>
        </div>
      </div>
    </div>
  `;

  // Admin notification email
  const adminEmailContent = `
    <h2>🎯 New Organizational Health Assessment Completed</h2>
    
    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>📋 Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${escapeHtml(formData.firstName)} ${escapeHtml(formData.lastName)}</li>
        <li><strong>Email:</strong> ${escapeHtml(formData.email)}</li>
        <li><strong>Company:</strong> ${escapeHtml(formData.company)}</li>
      </ul>
    </div>

    <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>📊 Assessment Overview:</h3>
      <ul>
        <li><strong>Overall Score:</strong> ${overallPercentage}% (${assessmentResults.totalScore}/175 points)</li>
        <li><strong>Self-Leadership:</strong> ${assessmentResults.selfLeadershipPercent}% (${getSelfLeadershipStatus()})</li>
        <li><strong>System Flow:</strong> ${interconnectivityPercentage}%</li>
        <li><strong>Organizational Status:</strong> <em>${escapeHtml(assessmentResults.organizationalStatus)}</em></li>
        <li><strong>Greatest Challenge:</strong> ${escapeHtml(assessmentResults.painPoint)}</li>
        <li><strong>Greatest Strength:</strong> ${escapeHtml(assessmentResults.strength)}</li>
      </ul>
    </div>

    <div style="background-color: #fff8f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>🔍 Detailed Pillar Breakdown:</h3>
      <ul>
        ${formatPillarScores()}
        <li><strong>Self-Leadership:</strong> ${assessmentResults.selfLeadershipPercent}% (${getSelfLeadershipStatus()})</li>
        <li><strong>System Interconnectivity:</strong> ${interconnectivityPercentage}%</li>
      </ul>
    </div>

    <div style="background-color: #fff0f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>🎯 Next Steps:</h3>
      <p>This prospect has completed the full organizational health assessment and provided their contact information. They are ready for a consultation.</p>
      <p><strong>Recommended approach:</strong> Focus on their ${assessmentResults.painPoint} challenges while leveraging their ${assessmentResults.strength} strength.</p>
    </div>

    <hr style="margin: 30px 0;">
    <p style="color: #666; font-style: italic;">This request was submitted through the COIREA Organizational Health Scanner.</p>
  `;

  // Send user email
  const userEmailResponse = await resend.emails.send({
    from: "COIREA <noreply@coirea.com>",
    to: [formData.email],
    subject: `Your Organizational Health Results - ${escapeHtml(assessmentResults.organizationalStatus)}`,
    html: userEmailHtml,
  });

  console.log("User email sent:", userEmailResponse);

  // Send admin notification
  const adminEmailResponse = await resend.emails.send({
    from: "COIREA Health Scanner <assessment@coirea.com>",
    to: ["maria@coirea.com"],
    replyTo: formData.email,
    subject: `🎯 New Assessment: ${escapeHtml(formData.firstName)} ${escapeHtml(formData.lastName)} (${escapeHtml(formData.company)}) - ${escapeHtml(assessmentResults.organizationalStatus)}`,
    html: adminEmailContent,
  });

  console.log("Admin email sent:", adminEmailResponse);

  return new Response(JSON.stringify({ 
    success: true, 
    userEmailId: userEmailResponse.data?.id,
    adminEmailId: adminEmailResponse.data?.id 
  }), {
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