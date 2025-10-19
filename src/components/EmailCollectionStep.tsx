import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { AssessmentResult } from "./OrganizationalHealthScanner";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

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
  const { t } = useTranslation('results');
  const { currentLanguage } = useLanguage();
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
        assessmentResults: results,
        language: currentLanguage
      };

      const { error } = await supabase.functions.invoke('send-assessment-results', {
        body: payload
      });

      if (error) {
        console.error('Error sending assessment results:', error);
        toast({
          title: t('email.form.validation.emailRequired'),
          description: t('email.form.error'),
          variant: "destructive"
        });
        return;
      }

      toast({
        title: t('email.form.success'),
        description: t('email.form.success')
      });
      
      onEmailSubmitted();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: t('email.form.error'),
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
              {t('email.form.title')}
            </CardTitle>
            <p className="text-lg text-foreground/80 font-body leading-relaxed">
              {t('email.form.description')}
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-body text-foreground/70 mb-1 block">
                    {t('email.form.firstName')} *
                  </Label>
                  <Input
                    id="firstName"
                    placeholder={t('email.form.firstNamePlaceholder')}
                    {...register("firstName", { required: t('email.form.validation.firstNameRequired') })}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-destructive mt-1">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-body text-foreground/70 mb-1 block">
                    {t('email.form.lastName')} *
                  </Label>
                  <Input
                    id="lastName"
                    placeholder={t('email.form.lastNamePlaceholder')}
                    {...register("lastName", { required: t('email.form.validation.lastNameRequired') })}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-destructive mt-1">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-body text-foreground/70 mb-1 block">
                  {t('email.form.email')} *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('email.form.emailPlaceholder')}
                  {...register("email", { 
                    required: t('email.form.validation.emailRequired'),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t('email.form.validation.emailInvalid')
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="company" className="text-sm font-body text-foreground/70 mb-1 block">
                  {t('email.form.company')} *
                </Label>
                <Input
                  id="company"
                  placeholder={t('email.form.companyPlaceholder')}
                  {...register("company", { required: t('email.form.validation.companyRequired') })}
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
                  {isSubmitting ? t('email.form.submitting') : t('email.form.submitButton')}
                </Button>
                <p className="text-xs text-foreground/60 font-body mt-2">
                  {t('email.form.helperText')}
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