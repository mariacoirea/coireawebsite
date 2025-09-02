import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AssessmentResult } from "./OrganizationalHealthScanner";

interface AssessmentResultsProps {
  results: AssessmentResult;
  onRetake: () => void;
}

const statusMessages = {
  'Misaligned': 'There is deep misalignment across your system. This is a signal to pause and realign from the roots.',
  'Emerging': 'You\'re in the early stages of conscious transformation. There\'s awareness building — and that\'s the first step.',
  'Stabilizing': 'You\'re laying a solid foundation, but some structural elements need care for long-term coherence.',
  'Evolving': 'You\'re in a phase of conscious growth. Keep nurturing the flow between strategy, leadership, and team dynamics.',
  'Thriving': 'Your organization is thriving — rooted in purpose, balanced in leadership, and aligned in its structure and well-being.'
};

const painPointMessages = {
  'Purpose & Culture': 'Your lowest score is in Purpose & Culture. This signals a misalignment between your values and day-to-day behaviors. When people don\'t feel emotionally connected to a shared mission, or the culture doesn\'t reflect the stated purpose, energy and trust begin to erode. This weakens belonging, motivation, and long-term alignment.',
  'Collaboration': 'Your lowest score is in Collaboration. This suggests friction or fragmentation in how people work together. Poor communication, silos, or lack of shared ownership can quietly drain momentum. Without strong collaboration, teams lose their creative and connective power.',
  'Leadership': 'Your lowest score is in Leadership. This means leadership may not be offering clarity, inspiration, or trust. When leadership feels distant, reactive, or disconnected, it affects every other layer of the organization. Healing begins with presence, transparency, and relational trust.',
  'Well-Being': 'Your lowest score is in Well-Being. This points to burnout, fatigue, or emotional disconnection. Well-being is not a luxury — it\'s the energetic baseline of a regenerative organization. Without it, purpose fades and performance suffers. This is a call to slow down and recalibrate.',
  'Organizational Strategy': 'Your lowest score is in Organizational Strategy. This reveals that structure may be rigid, unclear, or disconnected from your purpose. When strategy feels mechanical or misaligned with reality, teams lose direction. A regenerative organization flows from inner clarity into outer execution — this pillar needs a re-tuning.'
};

const selfLeadershipMessages = {
  'Below the Line': 'You are likely operating in reactive leadership patterns (urgency, fear, control), and your organization reflects that disconnection.',
  'In Transition': 'You\'re awakening. Both your leadership and your org are shifting — but full embodiment and consistency are still maturing.',
  'Conscious Leadership Emerging': 'You are leading with emotional intelligence and holding relational trust — but there\'s still growth to stabilize the culture around you.',
  'Regenerative Leadership Embodied': 'You and your organization are operating from clarity, trust, and integrity. You are modeling regenerative leadership that inspires transformation.'
};

const AssessmentResults = ({ results, onRetake }: AssessmentResultsProps) => {
  const { pillarScores, totalScore, interconnectivityScore, selfLeadershipScore, selfLeadershipPercent, organizationalStatus, painPoint, strength } = results;

  const getPillarPercentage = (score: number) => {
    return Math.round((score / 35) * 100);
  };

  const getInterconnectivityMessage = () => {
    if (interconnectivityScore < 21) {
      return {
        title: "Systemic Misalignment Detected",
        message: "Your interconnectivity score suggests that even if individual pillars are strong, they may not be working together as one ecosystem. Strategy may not flow into collaboration. Leadership may not reinforce well-being. A regenerative system thrives not just through strong parts — but through coherence."
      };
    } else {
      return {
        title: "Systemic Coherence is Emerging",
        message: "Your interconnectivity score shows encouraging signs that your organizational system is beginning to breathe as one. The connection between purpose, people, and performance is forming a regenerative rhythm. Keep nurturing this ecosystem through aligned practices and conscious leadership."
      };
    }
  };

  const getSelfLeadershipStatus = () => {
    if (selfLeadershipPercent <= 39) return 'Below the Line';
    if (selfLeadershipPercent <= 59) return 'In Transition';
    if (selfLeadershipPercent <= 79) return 'Conscious Leadership Emerging';
    return 'Regenerative Leadership Embodied';
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
                  {Math.round((totalScore / 175) * 100)}%
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
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {Object.entries(pillarScores).filter(([pillar]) => pillar !== 'interconnectivity' && pillar !== 'selfLeadership').map(([pillar, score]) => {
                  const pillarDisplayNames = {
                    purposeCulture: 'Purpose & Culture',
                    collaboration: 'Collaboration',
                    leadership: 'Leadership',
                    wellBeing: 'Well-Being',
                    organizationalStrategy: 'Organizational Strategy'
                  };
                  const pillarName = pillarDisplayNames[pillar as keyof typeof pillarDisplayNames];
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

            {/* Self-Leadership Assessment */}
            <div className="bg-gradient-warm/10 rounded-xl p-6">
              <h3 className="text-xl font-display font-semibold text-primary mb-6 text-center">
                Self-Leadership Assessment
              </h3>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                  <span className="text-xl font-display font-bold text-primary">
                    {selfLeadershipPercent}%
                  </span>
                </div>
                <h4 className="text-lg font-display font-semibold text-primary mb-2">
                  {getSelfLeadershipStatus()}
                </h4>
                <p className="text-foreground/80 font-body leading-relaxed">
                  {selfLeadershipMessages[getSelfLeadershipStatus() as keyof typeof selfLeadershipMessages]}
                </p>
              </div>
            </div>

            {/* Insights */}
            <div className="space-y-6">
              <div className="bg-card border border-accent/20 rounded-lg p-6">
                <h4 className="text-lg font-display font-semibold text-accent mb-3">
                  Your Greatest Challenge: {painPoint}
                </h4>
                <p className="text-foreground/80 font-body leading-relaxed">
                  {painPointMessages[painPoint as keyof typeof painPointMessages]}
                </p>
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-6">
                <h4 className="text-lg font-display font-semibold text-primary mb-3">
                  Your Greatest Strength: {strength}
                </h4>
                <p className="text-foreground/80 font-body leading-relaxed">
                  On the other hand, your strongest area is {strength}. This is your current source of power and stability. Building on this strength can create momentum and inspire evolution across other areas. It's where your organization is already aligned — and it can become the anchor for transformation.
                </p>
              </div>

              {/* Interconnectivity Insight */}
              <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-6 text-center border border-purple-200 dark:border-purple-800">
                <h4 className="text-lg font-display font-semibold text-purple-600 mb-3">
                  🔄 {getInterconnectivityMessage().title}
                </h4>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-3">
                  <span className="text-lg font-display font-bold text-purple-600">
                    {Math.round((interconnectivityScore / 35) * 100)}%
                  </span>
                </div>
                <p className="text-foreground/80 font-body leading-relaxed">
                  {getInterconnectivityMessage().message}
                </p>
              </div>
            </div>

            {/* Success Message */}
            <div className="bg-primary/5 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                Your Results Have Been Sent!
              </h3>
              <p className="text-lg text-foreground/80 font-body leading-relaxed mb-4">
                A comprehensive copy of your organizational health assessment has been sent to your email. 
                We'll be in touch within 24 hours to discuss your personalized transformation roadmap.
              </p>
              <p className="text-sm text-foreground/60 font-body">
                Check your inbox for your detailed results and next steps.
              </p>
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