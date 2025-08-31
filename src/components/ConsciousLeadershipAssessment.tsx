import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ConsciousLeadershipForm from "./ConsciousLeadershipForm";
import ConsciousLeadershipResults from "./ConsciousLeadershipResults";

export interface LeadershipAssessmentResult {
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
}

const ConsciousLeadershipAssessment = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'assessment' | 'results'>('intro');
  const [results, setResults] = useState<LeadershipAssessmentResult | null>(null);

  const handleStartAssessment = () => {
    setCurrentStep('assessment');
  };

  const handleAssessmentComplete = (assessmentResults: LeadershipAssessmentResult) => {
    setResults(assessmentResults);
    setCurrentStep('results');
  };

  const handleRetakeAssessment = () => {
    setResults(null);
    setCurrentStep('assessment');
  };

  if (currentStep === 'assessment') {
    return <ConsciousLeadershipForm onComplete={handleAssessmentComplete} />;
  }

  if (currentStep === 'results' && results) {
    return <ConsciousLeadershipResults results={results} onRetake={handleRetakeAssessment} />;
  }

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-card shadow-elegant border-primary/10">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl font-display font-semibold text-primary mb-6">
              COIREA Conscious Leadership Assessment
            </CardTitle>
            <div className="space-y-4 text-foreground/80 font-body text-lg leading-relaxed">
              <p>
                Discover whether you're leading from above or below the line with our comprehensive 
                emotional and regenerative intelligence assessment.
              </p>
              <p>
                Complete 84 personalized questions across work, personal, and social contexts to receive 
                insights into your leadership evolution path.
              </p>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold text-primary mb-4">
                Leadership Domains:
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  'Self-Awareness', 
                  'Self-Management', 
                  'Empathy', 
                  'Relationship Management', 
                  'Regenerative Leadership'
                ].map((domain) => (
                  <div key={domain} className="bg-accent/5 rounded-lg p-4">
                    <span className="text-accent font-body font-medium text-sm">{domain}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-warm/10 rounded-xl p-6 mb-8">
              <p className="text-sm text-foreground/70 font-body mb-4">
                Takes approximately 15-20 minutes to complete
              </p>
              <p className="text-sm text-foreground/70 font-body mb-4">
                Mixed question types: Likert scale (0-5) and Yes/No responses
              </p>
              <p className="text-sm text-foreground/70 font-body">
                Receive your Above/Below the Line percentage and personalized evolution map
              </p>
            </div>

            <Button 
              onClick={handleStartAssessment}
              variant="accent" 
              size="lg"
              className="text-lg px-12 py-6"
            >
              Start Your Leadership Assessment
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConsciousLeadershipAssessment;