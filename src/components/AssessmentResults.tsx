
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { AssessmentResult } from "./OrganizationalHealthScanner";

interface ConsultationFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
}

interface AssessmentResultsProps {
  results: AssessmentResult;
  onRetake: () => void;
}

const statusMessages = {
  'Misaligned': 'There is deep misalignment across your system. This is a signal to pause and realign from the roots.',
  'Emerging': 'You\'re in the early stages of conscious transformation. There\'s awareness building — and that\'s the first step.',
  'Stabilizing': 'You\'re laying a solid foundation, but some structural elements need care for long-term coherence.',
  'Evolving': 'You\'re in a phase of conscious growth. Keep nurturing the flow between strategy, leadership, and team dynamics.',
  'Thriving': 'Your organization is thriving — rooted in purpose, balanced in leadership, and aligned in its structure and well-being.'
};

const painPointMessages = {
  'Purpose & Culture': 'Your lowest score is in Purpose & Culture. This signals a misalignment between your values and day-to-day behaviors. When people don\'t feel emotionally connected to a shared mission, or the culture doesn\'t reflect the stated purpose, energy and trust begin to erode. This weakens belonging, motivation, and long-term alignment.',
  'Collaboration': 'Your lowest score is in Collaboration. This suggests friction or fragmentation in how people work together. Poor communication, silos, or lack of shared ownership can quietly drain momentum. Without strong collaboration, teams lose their creative and connective power.',
  'Leadership': 'Your lowest score is in Leadership. This means leadership may not be offering clarity, inspiration, or trust. When leadership feels distant, reactive, or disconnected, it affects every other layer of the organization. Healing begins with presence, transparency, and relational trust.',
  'Well-Being': 'Your lowest score is in Well-Being. This points to burnout, fatigue, or emotional disconnection. Well-being is not a luxury — it\'s the energetic baseline of a regenerative organization. Without it, purpose fades and performance suffers. This is a call to slow down and recalibrate.',
  'Organizational Strategy': 'Your lowest score is in Organizational Strategy. This reveals that structure may be rigid, unclear, or disconnected from your purpose. When strategy feels mechanical or misaligned with reality, teams lose direction. A regenerative organization flows from inner clarity into outer execution — this pillar needs a re-tuning.'
};

const AssessmentResults = ({ results, onRetake }: AssessmentResultsProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { pillarScores, totalScore, interconnectivityScore, organizationalStatus, painPoint, strength } = results;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch
  } = useForm<ConsultationFormData>({
    mode: "onChange"
  });

  const handleFormSubmit = async (formData: ConsultationFormData) => {
    setIsSubmitting(true);
    
    try {
      const payload = {
        ...formData,
        assessmentResults: {
          pillarScores,
          totalScore,
          interconnectivityScore,
          organizationalStatus,
          painPoint,
          strength
        }
      };

      const { error } = await supabase.functions.invoke('send-assessment-results', {
        body: payload
      });

      if (error) {
        console.error('Error sending assessment results:', error);
        toast({
          title: "Error",
          description: "There was an issue submitting your request. Please try again.",
          variant: "destructive"
        });
        return;
      }

      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Your consultation request has been submitted. We'll contact you within 24 hours."
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an issue submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPillarPercentage = (score: number) => {
    return Math.round((score / 35) * 100);
  };

  const getInterconnectivityMessage = () => {
    if (interconnectivityScore < 21) {
      return {
        title: "Systemic Misalignment Detected",
        message: "Your interconnectivity score suggests that even if individual pillars are strong, they may not be working together as one ecosystem. Strategy may not flow into collaboration. Leadership may not reinforce well-being. A regenerative system thrives not just through strong parts — but through coherence. Right now, your organization may be operating more in parts than as a whole."
      };
    } else {
      return {
        title: "Systemic Coherence is Emerging",
        message: "Your interconnectivity score shows encouraging signs that your organizational system is beginning to breathe as one. The connection between purpose, people, and performance is forming a regenerative rhythm. Keep nurturing this ecosystem through aligned practices and conscious leadership."
      };
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Misaligned': return 'text-destructive';
      case 'Emerging': return 'text-accent';
      case 'Stabilizing': return 'text-muted-foreground';
      case 'Evolving': return 'text-primary';
      case 'Thriving': return 'text-success';
      default: return 'text-foreground';
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-card shadow-elegant border-primary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">
              Your Organizational Health Results
            </CardTitle>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-4">
                <span className="text-2xl font-display font-bold text-primary">
                  {Math.round((totalScore / 175) * 100)}%
                </span>
              </div>
              <h2 className={`text-2xl font-display font-semibold mb-2 ${getStatusColor(organizationalStatus)}`}>
                {organizationalStatus}
              </h2>
              <p className="text-lg text-foreground/80 font-body leading-relaxed">
                {statusMessages[organizationalStatus as keyof typeof statusMessages]}
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Pillar Scores */}
            <div className="bg-gradient-subtle rounded-xl p-6">
              <h3 className="text-xl font-display font-semibold text-primary mb-6 text-center">
                Pillar Breakdown
              </h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                {Object.entries(pillarScores).map(([pillar, score]) => {
                  const pillarDisplayNames = {
                    purposeCulture: 'Purpose & Culture',
                    collaboration: 'Collaboration',
                    leadership: 'Leadership',
                    wellBeing: 'Well-Being',
                    organizationalStrategy: 'Organizational Strategy',
                    interconnectivity: 'Interconnectivity'
                  };
                  const pillarName = pillarDisplayNames[pillar as keyof typeof pillarDisplayNames];
                  const percentage = getPillarPercentage(score);
                  const isLowest = pillarName === painPoint;
                  const isHighest = pillarName === strength;
                  const isInterconnectivity = pillar === 'interconnectivity';
                  
                  return (
                    <div 
                      key={pillar} 
                      className={`text-center p-4 rounded-lg border-2 ${
                        isInterconnectivity ? 'border-purple-400 bg-purple-50 dark:bg-purple-950/20' :
                        isLowest ? 'border-accent bg-accent/5' : 
                        isHighest ? 'border-primary bg-primary/5' : 
                        'border-border bg-background'
                      }`}
                    >
                      <div className="text-2xl font-display font-bold text-primary mb-1">
                        {percentage}%
                      </div>
                      <div className="text-sm font-body text-foreground/80">
                        {pillarName}
                      </div>
                      {isInterconnectivity && (
                        <div className="text-xs text-purple-600 font-medium mt-1">System Flow</div>
                      )}
                      {!isInterconnectivity && isLowest && (
                        <div className="text-xs text-accent font-medium mt-1">Pain Point</div>
                      )}
                      {!isInterconnectivity && isHighest && (
                        <div className="text-xs text-primary font-medium mt-1">Strength</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Insights */}
            <div className="space-y-6">
              <div className="bg-card border border-accent/20 rounded-lg p-6">
                <h4 className="text-lg font-display font-semibold text-accent mb-3">
                  Your Greatest Challenge: {painPoint}
                </h4>
                <p className="text-foreground/80 font-body leading-relaxed">
                  {painPointMessages[painPoint as keyof typeof painPointMessages]}
                </p>
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-6">
                <h4 className="text-lg font-display font-semibold text-primary mb-3">
                  Your Greatest Strength: {strength}
                </h4>
                <p className="text-foreground/80 font-body leading-relaxed">
                  On the other hand, your strongest area is {strength}. This is your current source of power and stability. Building on this strength can create momentum and inspire evolution across other areas. It's where your organization is already aligned — and it can become the anchor for transformation.
                </p>
              </div>

              {/* Interconnectivity Insight */}
              <div className="bg-gradient-warm/10 rounded-lg p-6 text-center">
                <h4 className="text-lg font-display font-semibold text-purple-600 mb-3">
                  🔄 {getInterconnectivityMessage().title}
                </h4>
                <p className="text-foreground/80 font-body leading-relaxed mb-4">
                  {getInterconnectivityMessage().message}
                </p>
              </div>
            </div>

            {/* Sign Up Form */}
            <div className="bg-primary/5 rounded-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                  Ready to Transform Your Organization?
                </h3>
                <p className="text-lg text-foreground/80 font-body leading-relaxed">
                  Want to turn insight into action? Book a Free Clarity Call with COIREA to explore a personalized regenerative roadmap for your team.
                </p>
              </div>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit(handleFormSubmit)} className="max-w-2xl mx-auto space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-body text-foreground/70 mb-1 block">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        {...register("firstName", { required: "First name is required" })}
                      />
                      {errors.firstName && (
                        <p className="text-xs text-destructive mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-body text-foreground/70 mb-1 block">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        {...register("lastName", { required: "Last name is required" })}
                      />
                      {errors.lastName && (
                        <p className="text-xs text-destructive mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-body text-foreground/70 mb-1 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-sm font-body text-foreground/70 mb-1 block">
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your organization"
                      {...register("company", { required: "Company name is required" })}
                    />
                    {errors.company && (
                      <p className="text-xs text-destructive mt-1">{errors.company.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="role" className="text-sm font-body text-foreground/70 mb-1 block">
                      Your Role *
                    </Label>
                    <Input
                      id="role"
                      placeholder="CEO, Manager, HR Director, etc."
                      {...register("role", { required: "Role is required" })}
                    />
                    {errors.role && (
                      <p className="text-xs text-destructive mt-1">{errors.role.message}</p>
                    )}
                  </div>
                  
                  <div className="text-center pt-4">
                    <Button 
                      type="submit"
                      variant="hero" 
                      size="lg"
                      className="text-lg px-8 py-3"
                      disabled={!isValid || isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Get Your Free Consultation"}
                    </Button>
                    <p className="text-xs text-foreground/60 font-body mt-2">
                      We'll reach out within 24 hours to schedule your clarity call
                    </p>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <p className="text-lg text-primary font-body mb-2">
                    Thank you for your interest!
                  </p>
                  <p className="text-foreground/80 font-body">
                    We'll reach out to {watch("email")} within 24 hours to schedule your free consultation.
                  </p>
                </div>
              )}
            </div>

            {/* Retake Option */}
            <div className="text-center pt-4">
              <Button variant="ghost" onClick={onRetake}>
                Retake Assessment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AssessmentResults;
