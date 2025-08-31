import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { LeadershipAssessmentResult } from "./ConsciousLeadershipAssessment";

interface ConsciousLeadershipResultsProps {
  results: LeadershipAssessmentResult;
  onRetake: () => void;
}

const ConsciousLeadershipResults = ({ results, onRetake }: ConsciousLeadershipResultsProps) => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const getStateMessage = (percentage: number) => {
    if (percentage <= 39) {
      return "You're leading mostly from fear, control, urgency, or disconnection. A core shift is needed.";
    } else if (percentage <= 59) {
      return "You're toggling between reactive and conscious states. There's awareness — now action is needed.";
    } else if (percentage <= 79) {
      return "You are building presence, emotional intelligence, and relational leadership. Still maturing, but on the path.";
    } else {
      return "You are embodying regenerative leadership. You lead from clarity, coherence, and trust.";
    }
  };

  const getDomainInsight = (domain: string, score: number) => {
    const insights = {
      'Self-Awareness': score < 50 ? 
        "You're becoming aware of your emotions and impact — but still get caught off-guard or act unconsciously when triggered." :
        "You have strong emotional awareness and understand your impact on others.",
      'Self-Management': score < 50 ?
        "You recover sometimes, but still operate from reactivity when overwhelmed. Energy regulation needs support." :
        "You demonstrate good emotional regulation and can maintain composure under pressure.",
      'Empathy': score < 50 ?
        "You attune well, especially one-on-one — but may still bypass, rush to fix, or protect yourself emotionally." :
        "You show strong empathetic abilities and can hold space for others' emotions.",
      'Relationship Management': score < 50 ?
        "Relationships are under strain — maybe due to control, avoidance, or unclear communication." :
        "You navigate relationships with skill and maintain healthy connections.",
      'Regenerative Leadership': score < 50 ?
        "Your leadership is still rooted in urgency, overgiving, or linear execution. It's time to decondition." :
        "You embody regenerative leadership principles and lead from inner alignment."
    };
    return insights[domain as keyof typeof insights] || '';
  };

  const getEvolutionMap = (primaryArea: string) => {
    const maps = {
      'Self-Awareness': {
        from: 'Operating unconsciously',
        to: 'Leading with emotional intelligence'
      },
      'Self-Management': {
        from: 'Reacting from urgency',
        to: 'Responding with presence'
      },
      'Empathy': {
        from: 'Avoiding emotions',
        to: 'Holding space for all feelings'
      },
      'Relationship Management': {
        from: 'Overcontrolling relationships',
        to: 'Leading through trust and clarity'
      },
      'Regenerative Leadership': {
        from: 'Leading for results',
        to: 'Leading from coherence and regeneration'
      }
    };
    return maps[primaryArea as keyof typeof maps] || { from: 'Current state', to: 'Evolved state' };
  };

  const handleSendResults = async () => {
    if (!email || !name) {
      toast({
        title: "Missing Information",
        description: "Please provide both your name and email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.functions.invoke('send-assessment-results', {
        body: {
          email,
          name,
          assessmentType: 'leadership',
          results: {
            ...results,
            stateMessage: getStateMessage(results.totalPercentage),
            evolutionMap: getEvolutionMap(results.primaryDevelopmentArea)
          }
        }
      });

      if (error) throw error;

      setIsEmailSent(true);
      toast({
        title: "Results Sent Successfully",
        description: "Your leadership assessment results have been sent to your email.",
      });
    } catch (error) {
      console.error('Error sending results:', error);
      toast({
        title: "Error Sending Results",
        description: "There was an issue sending your results. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl space-y-8">
        {/* Above/Below the Line Score */}
        <Card className="bg-gradient-subtle border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-display font-semibold text-primary mb-4">
              Your Leadership Assessment Results
            </CardTitle>
            <div className="flex items-center justify-center mb-4">
              <div className="text-6xl font-bold text-accent mr-4">
                {results.totalPercentage}%
              </div>
              <div className="text-left">
                <p className="text-xl font-semibold text-foreground">
                  {results.leadershipState}
                </p>
                <p className="text-sm text-muted-foreground">
                  Above/Below the Line Status
                </p>
              </div>
            </div>
            <p className="text-foreground/80 font-body leading-relaxed max-w-2xl mx-auto">
              {getStateMessage(results.totalPercentage)}
            </p>
          </CardHeader>
        </Card>

        {/* Domain Scores */}
        <Card className="bg-card shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl font-display font-semibold text-primary text-center">
              Leadership Domain Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(results.domainScores).map(([domain, score]) => {
              const domainName = {
                selfAwareness: 'Self-Awareness',
                selfManagement: 'Self-Management', 
                empathy: 'Empathy',
                relationshipManagement: 'Relationship Management',
                regenerativeLeadership: 'Regenerative Leadership'
              }[domain] || domain;

              return (
                <div key={domain} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-foreground">{domainName}</h3>
                    <span className="text-lg font-bold text-accent">{score}%</span>
                  </div>
                  <Progress value={score} className="h-3" />
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {getDomainInsight(domainName, score)}
                  </p>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Evolution Map */}
        <Card className="bg-card shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl font-display font-semibold text-primary text-center">
              Your Evolution Path
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-warm/10 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Primary Development Area</h4>
                  <p className="text-lg text-accent font-medium">{results.primaryDevelopmentArea}</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Current Strength</h4>
                  <p className="text-lg text-primary font-medium">{results.strongestDomain}</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-background/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-4 text-center">Evolution Journey</h4>
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <p className="text-sm text-muted-foreground mb-1">FROM</p>
                    <p className="font-medium text-foreground">
                      {getEvolutionMap(results.primaryDevelopmentArea).from}
                    </p>
                  </div>
                  <div className="mx-4 text-accent">→</div>
                  <div className="text-center flex-1">
                    <p className="text-sm text-muted-foreground mb-1">TO</p>
                    <p className="font-medium text-foreground">
                      {getEvolutionMap(results.primaryDevelopmentArea).to}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Email Results */}
        {!isEmailSent ? (
          <Card className="bg-card shadow-elegant">
            <CardHeader>
              <CardTitle className="text-xl font-display font-semibold text-primary text-center">
                Get Your Detailed Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <Button 
                onClick={handleSendResults}
                disabled={isLoading}
                className="w-full"
                variant="accent"
                size="lg"
              >
                {isLoading ? "Sending..." : "Send My Leadership Assessment Results"}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-success/10 border-success/30">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold text-success mb-4">
                Results Sent Successfully!
              </h3>
              <p className="text-success/80 mb-6">
                Your detailed leadership assessment results have been sent to {email}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <Card className="bg-success/5 border-success/20">
          <CardContent className="text-center py-8">
            <h3 className="text-2xl font-display font-semibold text-success mb-4">
              Ready to Evolve Your Leadership?
            </h3>
            <p className="text-success/80 font-body leading-relaxed mb-6 max-w-2xl mx-auto">
              Transform insights into action with personalized guidance. Book a free clarity call 
              to explore your unique leadership evolution path.
            </p>
            <div className="space-y-4">
              <Button variant="accent" size="lg" className="mr-4 bg-success hover:bg-success/90 text-success-foreground border-success">
                Book Your Free Clarity Call
              </Button>
              <Button variant="outline" size="lg" onClick={onRetake} className="border-success text-success hover:bg-success/10">
                Retake Assessment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConsciousLeadershipResults;