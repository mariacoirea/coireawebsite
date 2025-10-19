import { useState } from "react";
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

const OrganizationalHealthScanner = () => {
  const { t } = useTranslation('assessment');
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

  const pillarsList = [
    { key: 'purposeCulture', count: 7 },
    { key: 'collaboration', count: 7 },
    { key: 'leadership', count: 14 },
    { key: 'wellBeing', count: 7 },
    { key: 'organizationalStrategy', count: 7 }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-card shadow-elegant border-primary/10">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl font-display font-semibold text-primary mb-6">
              {t('intro.title')}
            </CardTitle>
            <div className="space-y-4 text-foreground/80 font-body text-lg leading-relaxed">
              <p>
                {t('intro.description1')}
              </p>
              <p>
                {t('intro.description2')}
              </p>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold text-primary mb-4">
                {t('intro.pillarsTitle')}
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {pillarsList.map((pillar) => (
                  <div key={pillar.key} className="bg-primary/5 rounded-lg p-4">
                    <span className="text-primary font-body font-medium text-sm">
                      {t(`pillars.${pillar.key}`)} ({pillar.count})
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-warm/10 rounded-xl p-6 mb-8">
              <p className="text-sm text-foreground/70 font-body mb-4">
                {t('intro.timeEstimate')}
              </p>
              <p className="text-sm text-foreground/70 font-body">
                {t('intro.resultsInfo')}
              </p>
            </div>

            <Button 
              onClick={handleStartAssessment}
              variant="hero" 
              size="lg"
              className="text-lg px-12 py-6"
            >
              {t('intro.startButton')}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrganizationalHealthScanner;