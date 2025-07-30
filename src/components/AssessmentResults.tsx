
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
  'Misaligned': 'There is deep misalignment across your organization. This is a call to pause, realign, and begin an intentional transformation.',
  'Emerging': 'Your organization is at the start of a conscious transformation. While cracks are showing, the desire to evolve is present.',
  'Stabilizing': 'You\'re stabilizing — your foundation is forming, but key gaps must be addressed for sustainable culture and well-being.',
  'Evolving': 'You\'re in the evolution stage — things are working, but deeper coherence and leadership alignment can unlock your next level.',
  'Thriving': 'Your organization is thriving with a strong inner ecosystem. You\'re ready to scale, deepen impact, and sustain success consciously.'
};

const painPointMessages = {
  'Purpose': 'Your lowest score is in Purpose. This usually means there\'s a disconnect between daily operations and the deeper "why" of the organization. This misalignment can result in disengagement and lack of motivation across teams.',
  'Culture': 'Your lowest score is in Culture. This suggests your people may not feel safe, seen, or truly part of something meaningful. When culture is weak, innovation and trust suffer.',
  'Well-Being': 'Your lowest score is in Well-Being. High stress, burnout, or emotional disconnection may be present in your team. Without well-being, even high-performing teams eventually collapse.',
  'Collaboration': 'Your lowest score is in Collaboration. Silos, distrust, or poor communication might be blocking your team from achieving their potential. Connection is the foundation of high-functioning teams.',
  'Leadership': 'Your lowest score is in Leadership. When leadership lacks clarity, integrity, or inspiration, the ripple effect touches the entire organization. Without strong leadership, transformation is impossible.'
};

const AssessmentResults = ({ results, onRetake }: AssessmentResultsProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { pillarScores, totalScore, organizationalStatus, painPoint, strength } = results;

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
    return Math.round((score / 25) * 100);
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
                  {Math.round((totalScore / 125) * 100)}%
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
              <div className="grid md:grid-cols-5 gap-4">
                {Object.entries(pillarScores).map(([pillar, score]) => {
                  const pillarName = pillar === 'wellBeing' ? 'Well-Being' : 
                                   pillar.charAt(0).toUpperCase() + pillar.slice(1);
                  const percentage = getPillarPercentage(score);
                  const isLowest = pillarName === painPoint;
                  const isHighest = pillarName === strength;
                  
                  return (
                    <div 
                      key={pillar} 
                      className={`text-center p-4 rounded-lg border-2 ${
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
                      {isLowest && (
                        <div className="text-xs text-accent font-medium mt-1">Pain Point</div>
                      )}
                      {isHighest && (
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
                  On the other hand, your highest pillar is {strength}. This is your current strength. 
                  Building on this area can give you the momentum needed to evolve other parts of your system.
                </p>
              </div>

              <div className="bg-gradient-warm/10 rounded-lg p-6 text-center">
                <h4 className="text-lg font-display font-semibold text-primary mb-3">
                  COIREA Insight
                </h4>
                <p className="text-foreground/80 font-body leading-relaxed mb-4">
                  Pain in the {painPoint} area can result in decreased engagement, reduced innovation, 
                  and disconnection from company values. However, your strength in {strength} provides 
                  a solid foundation for conscious transformation.
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
                  Let us reach out to discuss how COIREA can support your organization's conscious transformation.
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
