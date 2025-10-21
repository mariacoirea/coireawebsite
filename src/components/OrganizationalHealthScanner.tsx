import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AssessmentForm from "./AssessmentForm";
import AssessmentResults from "./AssessmentResults";
import EmailCollectionStep from "./EmailCollectionStep";
import { useTranslation } from "react-i18next";

export interface AssessmentResult {
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
}

const ScannerContent = () => {
  const { t } = useTranslation('tools');
  const [currentStep, setCurrentStep] = useState<'intro' | 'assessment' | 'email' | 'results'>('intro');
  const [assessmentResults, setAssessmentResults] = useState<AssessmentResult | null>(null);

  const handleStartAssessment = () => {
    setCurrentStep('assessment');
  };

  const handleAssessmentComplete = (results: AssessmentResult) => {
    setAssessmentResults(results);
    setCurrentStep('email');
  };

  const handleEmailSubmitted = () => {
    setCurrentStep('results');
  };

  const handleRetakeAssessment = () => {
    setCurrentStep('intro');
    setAssessmentResults(null);
  };

  if (currentStep === 'assessment') {
    return <AssessmentForm onComplete={handleAssessmentComplete} />;
  }

  if (currentStep === 'email' && assessmentResults) {
    return <EmailCollectionStep results={assessmentResults} onEmailSubmitted={handleEmailSubmitted} />;
  }

  if (currentStep === 'results' && assessmentResults) {
    return <AssessmentResults results={assessmentResults} onRetake={handleRetakeAssessment} />;
  }

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-card shadow-elegant border-primary/10">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl font-display font-semibold text-primary mb-6">
              {t('scanner.title')}
            </CardTitle>
            <div className="space-y-4 text-foreground/80 font-body text-lg leading-relaxed">
              <p>
                {t('scanner.intro1')}
              </p>
              <p>
                {t('scanner.intro2')}
              </p>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold text-primary mb-4">
                {t('scanner.pillarsTitle')}
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  t('scanner.pillars.purposeCulture'),
                  t('scanner.pillars.collaboration'),
                  t('scanner.pillars.leadership'),
                  t('scanner.pillars.wellBeing'),
                  t('scanner.pillars.strategy')
                ].map((pillar) => (
                  <div key={pillar} className="bg-primary/5 rounded-lg p-4">
                    <span className="text-primary font-body font-medium text-sm">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-warm/10 rounded-xl p-6 mb-8">
              <p className="text-sm text-foreground/70 font-body mb-4">
                {t('scanner.duration')}
              </p>
              <p className="text-sm text-foreground/70 font-body">
                {t('scanner.results')}
              </p>
            </div>

            <Button 
              onClick={handleStartAssessment}
              variant="hero" 
              size="lg"
              className="text-lg px-12 py-6"
            >
              {t('scanner.startButton')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const OrganizationalHealthScanner = () => {
  return (
    <Suspense fallback={
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-card shadow-elegant border-primary/10 animate-pulse">
            <CardHeader className="text-center pb-8">
              <div className="h-10 bg-primary/10 rounded w-3/4 mx-auto mb-6"></div>
              <div className="space-y-4">
                <div className="h-6 bg-primary/5 rounded w-full"></div>
                <div className="h-6 bg-primary/5 rounded w-5/6 mx-auto"></div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    }>
      <ScannerContent />
    </Suspense>
  );
};

export default OrganizationalHealthScanner;