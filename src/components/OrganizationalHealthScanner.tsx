import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AssessmentForm from "./AssessmentForm";
import AssessmentResults from "./AssessmentResults";
import EmailCollectionStep from "./EmailCollectionStep";

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
              COIREA Organizational Health Scanner
            </CardTitle>
            <div className="space-y-4 text-foreground/80 font-body text-lg leading-relaxed">
              <p>
                A comprehensive diagnostic tool that assesses your organization's health across five regenerative pillars.
              </p>
              <p>
                Answer 55 questions covering organizational health, leadership dynamics, and system interconnectivity to receive an instant diagnostic of your 
                organization's overall well-being, leadership consciousness, pain points, and strengths.
              </p>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold text-primary mb-4">
                Assessment Pillars:
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {['Purpose & Culture (7)', 'Collaboration (7)', 'Leadership (14)', 'Well-Being (7)', 'Organizational Strategy (7)'].map((pillar) => (
                  <div key={pillar} className="bg-primary/5 rounded-lg p-4">
                    <span className="text-primary font-body font-medium text-sm">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-warm/10 rounded-xl p-6 mb-8">
              <p className="text-sm text-foreground/70 font-body mb-4">
                Takes approximately 12-15 minutes to complete
              </p>
              <p className="text-sm text-foreground/70 font-body">
                Receive instant results with organizational health & leadership consciousness insights
              </p>
            </div>

            <Button 
              onClick={handleStartAssessment}
              variant="hero" 
              size="lg"
              className="text-lg px-12 py-6"
            >
              Start Your Organizational Health Scan
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrganizationalHealthScanner;