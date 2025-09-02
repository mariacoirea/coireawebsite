import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { AssessmentResult } from "./OrganizationalHealthScanner";

interface EmailCollectionStepProps {
  results: AssessmentResult;
  onEmailSubmitted: () => void;
}

interface EmailFormData {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
}

const EmailCollectionStep = ({ results, onEmailSubmitted }: EmailCollectionStepProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<EmailFormData>({
    mode: "onChange"
  });

  const handleFormSubmit = async (formData: EmailFormData) => {
    setIsSubmitting(true);
    
    try {
      const payload = {
        ...formData,
        assessmentResults: results
      };

      const { error } = await supabase.functions.invoke('send-assessment-results', {
        body: payload
      });

      if (error) {
        console.error('Error sending assessment results:', error);
        toast({
          title: "Error",
          description: "There was an issue sending your results. Please try again.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Success!",
        description: "Your results have been sent to your email. Check your inbox!"
      });
      
      onEmailSubmitted();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was an issue sending your results. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-card shadow-elegant border-primary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">
              Get Your Results
            </CardTitle>
            <p className="text-lg text-foreground/80 font-body leading-relaxed">
              Enter your details below to receive your comprehensive organizational health assessment results.
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
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
              
              <div className="text-center pt-4">
                <Button 
                  type="submit"
                  variant="hero" 
                  size="lg"
                  className="text-lg px-8 py-3 w-full md:w-auto"
                  disabled={!isValid || isSubmitting}
                >
                  {isSubmitting ? "Sending Results..." : "Get My Results"}
                </Button>
                <p className="text-xs text-foreground/60 font-body mt-2">
                  Your results will be sent to your email and displayed on the next screen
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmailCollectionStep;