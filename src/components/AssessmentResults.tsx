
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AssessmentResult } from "./OrganizationalHealthScanner";

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
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const { pillarScores, totalScore, organizationalStatus, painPoint, strength } = results;

  const handleEmailSubmit = () => {
    // In a real implementation, this would send the email to a backend
    console.log('Email submitted:', email);
    setIsEmailSubmitted(true);
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
                  🔍 Your Greatest Challenge: {painPoint}
                </h4>
                <p className="text-foreground/80 font-body leading-relaxed">
                  {painPointMessages[painPoint as keyof typeof painPointMessages]}
                </p>
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-6">
                <h4 className="text-lg font-display font-semibold text-primary mb-3">
                  ✨ Your Greatest Strength: {strength}
                </h4>
                <p className="text-foreground/80 font-body leading-relaxed">
                  On the other hand, your highest pillar is {strength}. This is your current strength. 
                  Building on this area can give you the momentum needed to evolve other parts of your system.
                </p>
              </div>

              <div className="bg-gradient-warm/10 rounded-lg p-6 text-center">
                <h4 className="text-lg font-display font-semibold text-primary mb-3">
                  🌀 COIREA Insight
                </h4>
                <p className="text-foreground/80 font-body leading-relaxed mb-4">
                  Pain in the {painPoint} area can result in decreased engagement, reduced innovation, 
                  and disconnection from company values. However, your strength in {strength} provides 
                  a solid foundation for conscious transformation.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-primary/5 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                Curious how your team can evolve from here?
              </h3>
              <p className="text-lg text-foreground/80 font-body mb-6 leading-relaxed">
                Book a Free Clarity Call with COIREA to explore a customized path toward conscious transformation.
              </p>
              
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                  Book Your Free Clarity Call
                </Button>
                
                {!isEmailSubmitted ? (
                  <div className="max-w-md mx-auto">
                    <Label htmlFor="email" className="text-sm font-body text-foreground/70 mb-2 block">
                      Get your detailed results via email (optional)
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1"
                      />
                      <Button 
                        onClick={handleEmailSubmit}
                        variant="outline"
                        disabled={!email}
                      >
                        Send Results
                      </Button>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-primary font-body">
                    ✓ Results sent to {email}
                  </p>
                )}
              </div>
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
