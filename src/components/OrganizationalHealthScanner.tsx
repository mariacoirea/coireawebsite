
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AssessmentForm from "./AssessmentForm";
import AssessmentResults from "./AssessmentResults";

export interface AssessmentResult {
  pillarScores: {
    purpose: number;
    culture: number;
    wellBeing: number;
    collaboration: number;
    leadership: number;
  };
  totalScore: number;
  organizationalStatus: string;
  painPoint: string;
  strength: string;
}

const OrganizationalHealthScanner = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'assessment' | 'results'>('intro');
  const [results, setResults] = useState<AssessmentResult | null>(null);

  const handleStartAssessment = () => {
    setCurrentStep('assessment');
  };

  const handleAssessmentComplete = (assessmentResults: AssessmentResult) => {
    setResults(assessmentResults);
    setCurrentStep('results');
  };

  const handleRetakeAssessment = () => {
    setResults(null);
    setCurrentStep('assessment');
  };

  if (currentStep === 'assessment') {
    return <AssessmentForm onComplete={handleAssessmentComplete} />;
  }

  if (currentStep === 'results' && results) {
    return <AssessmentResults results={results} onRetake={handleRetakeAssessment} />;
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
                A free diagnostic tool that enables employees to assess their organization's 
                well-being across five critical pillars.
              </p>
              <p>
                Answer 25 questions (5 per pillar) to receive an instant diagnostic of your 
                organization's health, pain points, and strengths.
              </p>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold text-primary mb-4">
                Assessment Pillars:
              </h3>
              <div className="grid md:grid-cols-5 gap-4 mb-8">
                {['Purpose', 'Culture', 'Well-Being', 'Collaboration', 'Leadership'].map((pillar) => (
                  <div key={pillar} className="bg-primary/5 rounded-lg p-4">
                    <span className="text-primary font-body font-medium">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-warm/10 rounded-xl p-6 mb-8">
              <p className="text-sm text-foreground/70 font-body mb-4">
                Takes approximately 5-7 minutes to complete
              </p>
              <p className="text-sm text-foreground/70 font-body">
                Receive instant results with personalized insights
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
