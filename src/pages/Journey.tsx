
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle, Users, Lightbulb, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";
import { RelatedContent } from "@/components/InternalLinkingStrategy";
import { supabase } from "@/integrations/supabase/client";

const Journey = () => {
  const { t } = useTranslation('journey');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    challenges: [] as string[],
    customChallenge: "",
    goals: "",
    urgency: "",
    vision: "",
    additionalContext: "",
    timeline: "",
    budget: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const challenges = t('form.challenges.list', { returnObjects: true }) as string[];

  const handleChallengeChange = (challenge: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      challenges: checked 
        ? [...prev.challenges, challenge]
        : prev.challenges.filter(c => c !== challenge)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const { data, error } = await supabase.functions.invoke('send-journey-form', {
        body: formData
      });

      if (error) {
        throw error;
      }

      console.log('Form submitted successfully:', data);
      setIsSubmitted(true);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitError(t('form.submit.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <SEOHead
          title={t('seo.successTitle')}
          description={t('seo.successDescription')}
          keywords={t('seo.successKeywords')}
          url="/journey"
        />
        <StructuredData type="organization" />
        
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="py-20 px-6">
            <div className="container mx-auto max-w-3xl text-center">
              <div className="mb-8">
                <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
                <h1 className="text-4xl font-display font-semibold text-primary mb-4">
                  {t('success.title')}
                </h1>
                <p className="text-xl text-foreground/80 font-body leading-relaxed mb-8">
                  {t('success.subtitle')}
                </p>
              </div>
              
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20 p-8">
                <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                  {t('success.nextSteps.title')}
                </h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <p className="text-foreground/80 font-body">
                      <strong>{t('success.nextSteps.step1.title')}</strong> {t('success.nextSteps.step1.description')}
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-primary">2</span>
                    </div>
                    <p className="text-foreground/80 font-body">
                      <strong>{t('success.nextSteps.step2.title')}</strong> {t('success.nextSteps.step2.description')}
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-primary">3</span>
                    </div>
                    <p className="text-foreground/80 font-body">
                      <strong>{t('success.nextSteps.step3.title')}</strong> {t('success.nextSteps.step3.description')}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={t('seo.title')}
        description={t('seo.description')}
        keywords={t('seo.keywords')}
        url="/journey"
      />
      <StructuredData type="organization" />
      
    <div className="min-h-screen bg-background">
      <Header />
      <main id="journey-start" className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-warm-beige via-aura-pearl/80 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-foreground/80 font-body leading-relaxed mb-8 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex justify-center items-center space-x-8 mb-12">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-foreground/70 font-body">{t('hero.features.proven')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                <span className="text-foreground/70 font-body">{t('hero.features.regenerative')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-card/60 backdrop-blur-sm border-primary/10">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-display font-semibold text-primary mb-4">
                  {t('form.mainTitle')}
                </CardTitle>
                <p className="text-lg text-foreground/70 font-body">
                  {t('form.mainDescription')}
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-semibold text-primary">{t('form.contact.title')}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-body text-foreground/70 mb-1 block">
                          {t('form.contact.name')} *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder={t('form.contact.namePlaceholder')}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-body text-foreground/70 mb-1 block">
                          {t('form.contact.email')} *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder={t('form.contact.emailPlaceholder')}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="organization" className="text-sm font-body text-foreground/70 mb-1 block">
                          {t('form.contact.organization')} *
                        </Label>
                        <Input
                          id="organization"
                          value={formData.organization}
                          onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                          placeholder={t('form.contact.organizationPlaceholder')}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="role" className="text-sm font-body text-foreground/70 mb-1 block">
                          {t('form.contact.role')} *
                        </Label>
                        <Input
                          id="role"
                          value={formData.role}
                          onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                          placeholder={t('form.contact.rolePlaceholder')}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Current Challenges */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-semibold text-primary">{t('form.challenges.title')}</h3>
                    <p className="text-sm text-foreground/70 font-body">
                      {t('form.challenges.description')}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {challenges.map((challenge) => (
                        <div key={challenge} className="flex items-center space-x-2">
                          <Checkbox
                            id={challenge}
                            checked={formData.challenges.includes(challenge)}
                            onCheckedChange={(checked) => handleChallengeChange(challenge, checked as boolean)}
                          />
                          <Label htmlFor={challenge} className="text-sm font-body cursor-pointer">
                            {challenge}
                          </Label>
                        </div>
                      ))}
                    </div>
                    <div>
                      <Label htmlFor="customChallenge" className="text-sm font-body text-foreground/70 mb-1 block">
                        {t('form.challenges.customLabel')}
                      </Label>
                      <Textarea
                        id="customChallenge"
                        value={formData.customChallenge}
                        onChange={(e) => setFormData(prev => ({ ...prev, customChallenge: e.target.value }))}
                        placeholder={t('form.challenges.customPlaceholder')}
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Goals and Vision */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-semibold text-primary">{t('form.goals.title')}</h3>
                    <div>
                      <Label htmlFor="goals" className="text-sm font-body text-foreground/70 mb-1 block">
                        {t('form.goals.goalsLabel')} *
                      </Label>
                      <Textarea
                        id="goals"
                        value={formData.goals}
                        onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                        placeholder={t('form.goals.goalsPlaceholder')}
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="vision" className="text-sm font-body text-foreground/70 mb-1 block">
                        {t('form.goals.visionLabel')} *
                      </Label>
                      <Textarea
                        id="vision"
                        value={formData.vision}
                        onChange={(e) => setFormData(prev => ({ ...prev, vision: e.target.value }))}
                        placeholder={t('form.goals.visionPlaceholder')}
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="urgency" className="text-sm font-body text-foreground/70 mb-1 block">
                        {t('form.goals.urgencyLabel')}
                      </Label>
                      <Select value={formData.urgency} onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('form.goals.urgencyPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">{t('form.goals.urgencyOptions.high')}</SelectItem>
                          <SelectItem value="medium">{t('form.goals.urgencyOptions.medium')}</SelectItem>
                          <SelectItem value="low">{t('form.goals.urgencyOptions.low')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Timeline and Budget */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-semibold text-primary">{t('form.scope.title')}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="timeline" className="text-sm font-body text-foreground/70 mb-1 block">
                          {t('form.scope.timelineLabel')}
                        </Label>
                        <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder={t('form.scope.timelinePlaceholder')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">{t('form.scope.timelineOptions.immediate')}</SelectItem>
                            <SelectItem value="1-3months">{t('form.scope.timelineOptions.1-3months')}</SelectItem>
                            <SelectItem value="3-6months">{t('form.scope.timelineOptions.3-6months')}</SelectItem>
                            <SelectItem value="6-12months">{t('form.scope.timelineOptions.6-12months')}</SelectItem>
                            <SelectItem value="exploring">{t('form.scope.timelineOptions.exploring')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget" className="text-sm font-body text-foreground/70 mb-1 block">
                          {t('form.scope.budgetLabel')}
                        </Label>
                        <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder={t('form.scope.budgetPlaceholder')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">{t('form.scope.budgetOptions.under-10k')}</SelectItem>
                            <SelectItem value="10k-25k">{t('form.scope.budgetOptions.10k-25k')}</SelectItem>
                            <SelectItem value="25k-50k">{t('form.scope.budgetOptions.25k-50k')}</SelectItem>
                            <SelectItem value="50k-100k">{t('form.scope.budgetOptions.50k-100k')}</SelectItem>
                            <SelectItem value="100k+">{t('form.scope.budgetOptions.100k+')}</SelectItem>
                            <SelectItem value="discuss">{t('form.scope.budgetOptions.discuss')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Context */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-semibold text-primary">{t('form.additional.title')}</h3>
                    <div>
                      <Label htmlFor="additionalContext" className="text-sm font-body text-foreground/70 mb-1 block">
                        {t('form.additional.label')}
                      </Label>
                      <Textarea
                        id="additionalContext"
                        value={formData.additionalContext}
                        onChange={(e) => setFormData(prev => ({ ...prev, additionalContext: e.target.value }))}
                        placeholder={t('form.additional.placeholder')}
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    {submitError && (
                      <div className="text-destructive text-sm mb-4 p-3 bg-destructive/10 rounded-md">
                        {submitError}
                      </div>
                    )}
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? t('form.submit.submitting') : t('form.submit.button')}
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                    <p className="text-xs text-foreground/60 font-body mt-4">
                      {t('form.submit.note')}
                    </p>
                  </div>
                  </form>
                </CardContent>
              </Card>

              {/* Related Content for Internal Linking */}
              <div className="mt-16">
                <RelatedContent currentPage="journey" />
              </div>
            </div>
          </section>
        </main>
      <Footer />
    </div>
    </>
  );
};

export default Journey;
