import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { LeadershipAssessmentResult } from "./ConsciousLeadershipAssessment";

interface ConsciousLeadershipFormProps {
  onComplete: (results: LeadershipAssessmentResult) => void;
}

interface Question {
  id: string;
  text: string;
  type: 'likert' | 'yesno';
  domain: 'selfAwareness' | 'selfManagement' | 'empathy' | 'relationshipManagement' | 'regenerativeLeadership';
  subdomain: 'work' | 'personal' | 'social' | 'inner' | 'systemic';
}

const questions: Question[] = [
  // Self-Awareness - Work (6 questions)
  { id: 'sa_w_1', text: 'I am aware of how my emotions affect my work performance.', type: 'likert', domain: 'selfAwareness', subdomain: 'work' },
  { id: 'sa_w_2', text: 'I can name the emotions I\'m experiencing during a workday.', type: 'yesno', domain: 'selfAwareness', subdomain: 'work' },
  { id: 'sa_w_3', text: 'When I feel stressed at work, I recognize the early signs.', type: 'likert', domain: 'selfAwareness', subdomain: 'work' },
  { id: 'sa_w_4', text: 'I understand how my behavior impacts my team.', type: 'yesno', domain: 'selfAwareness', subdomain: 'work' },
  { id: 'sa_w_5', text: 'I can recognize when I\'m operating from fear rather than vision.', type: 'likert', domain: 'selfAwareness', subdomain: 'work' },
  { id: 'sa_w_6', text: 'I pause and reflect before reacting to difficult situations.', type: 'yesno', domain: 'selfAwareness', subdomain: 'work' },
  
  // Self-Awareness - Personal (6 questions)
  { id: 'sa_p_1', text: 'I reflect on my emotional state each day.', type: 'likert', domain: 'selfAwareness', subdomain: 'personal' },
  { id: 'sa_p_2', text: 'I can identify personal triggers for frustration or sadness.', type: 'yesno', domain: 'selfAwareness', subdomain: 'personal' },
  { id: 'sa_p_3', text: 'I notice patterns in how I react to challenges.', type: 'likert', domain: 'selfAwareness', subdomain: 'personal' },
  { id: 'sa_p_4', text: 'I\'m aware of my inner dialogue and self-talk.', type: 'yesno', domain: 'selfAwareness', subdomain: 'personal' },
  { id: 'sa_p_5', text: 'I give myself space to process emotions instead of suppressing them.', type: 'likert', domain: 'selfAwareness', subdomain: 'personal' },
  { id: 'sa_p_6', text: 'I check in with myself emotionally before making decisions.', type: 'yesno', domain: 'selfAwareness', subdomain: 'personal' },
  
  // Self-Awareness - Social (6 questions)
  { id: 'sa_s_1', text: 'I notice when I\'m reacting emotionally in conversations.', type: 'likert', domain: 'selfAwareness', subdomain: 'social' },
  { id: 'sa_s_2', text: 'I can describe how I feel in social gatherings.', type: 'yesno', domain: 'selfAwareness', subdomain: 'social' },
  { id: 'sa_s_3', text: 'I remain present in emotionally intense situations.', type: 'likert', domain: 'selfAwareness', subdomain: 'social' },
  { id: 'sa_s_4', text: 'I recognize when I\'m avoiding vulnerability.', type: 'yesno', domain: 'selfAwareness', subdomain: 'social' },
  { id: 'sa_s_5', text: 'I take responsibility for my part in relational tensions.', type: 'likert', domain: 'selfAwareness', subdomain: 'social' },
  { id: 'sa_s_6', text: 'I\'m aware of how I influence the energy of a group.', type: 'yesno', domain: 'selfAwareness', subdomain: 'social' },
  
  // Self-Management - Work (6 questions)
  { id: 'sm_w_1', text: 'I stay calm under pressure at work.', type: 'likert', domain: 'selfManagement', subdomain: 'work' },
  { id: 'sm_w_2', text: 'I manage my emotional responses in meetings.', type: 'yesno', domain: 'selfManagement', subdomain: 'work' },
  { id: 'sm_w_3', text: 'I can shift from reaction to response quickly.', type: 'likert', domain: 'selfManagement', subdomain: 'work' },
  { id: 'sm_w_4', text: 'I return to center after emotional disruption.', type: 'yesno', domain: 'selfManagement', subdomain: 'work' },
  { id: 'sm_w_5', text: 'I set boundaries to protect my energy.', type: 'likert', domain: 'selfManagement', subdomain: 'work' },
  { id: 'sm_w_6', text: 'I avoid emotional outbursts in professional settings.', type: 'yesno', domain: 'selfManagement', subdomain: 'work' },
  
  // Self-Management - Personal (6 questions)
  { id: 'sm_p_1', text: 'I have techniques to manage emotional lows.', type: 'likert', domain: 'selfManagement', subdomain: 'personal' },
  { id: 'sm_p_2', text: 'I recover quickly after being upset or disappointed.', type: 'yesno', domain: 'selfManagement', subdomain: 'personal' },
  { id: 'sm_p_3', text: 'I prioritize rest and renewal.', type: 'likert', domain: 'selfManagement', subdomain: 'personal' },
  { id: 'sm_p_4', text: 'I respond with compassion when I make mistakes.', type: 'yesno', domain: 'selfManagement', subdomain: 'personal' },
  { id: 'sm_p_5', text: 'I take breaks when I notice I\'m overstimulated.', type: 'likert', domain: 'selfManagement', subdomain: 'personal' },
  { id: 'sm_p_6', text: 'I hold myself accountable without falling into shame.', type: 'yesno', domain: 'selfManagement', subdomain: 'personal' },
  
  // Self-Management - Social (6 questions)
  { id: 'sm_s_1', text: 'I control my impulses when others provoke me.', type: 'likert', domain: 'selfManagement', subdomain: 'social' },
  { id: 'sm_s_2', text: 'I avoid saying things I regret in personal arguments.', type: 'yesno', domain: 'selfManagement', subdomain: 'social' },
  { id: 'sm_s_3', text: 'I self-regulate before entering emotionally charged spaces.', type: 'likert', domain: 'selfManagement', subdomain: 'social' },
  { id: 'sm_s_4', text: 'I can disagree with others without escalating.', type: 'yesno', domain: 'selfManagement', subdomain: 'social' },
  { id: 'sm_s_5', text: 'I allow others to have their emotional process without interference.', type: 'likert', domain: 'selfManagement', subdomain: 'social' },
  { id: 'sm_s_6', text: 'I avoid gossip, even when triggered.', type: 'yesno', domain: 'selfManagement', subdomain: 'social' },
  
  // Empathy - Work (6 questions)
  { id: 'e_w_1', text: 'I can sense how colleagues feel, even without them saying it.', type: 'likert', domain: 'empathy', subdomain: 'work' },
  { id: 'e_w_2', text: 'I adjust my communication based on others\' emotional state.', type: 'yesno', domain: 'empathy', subdomain: 'work' },
  { id: 'e_w_3', text: 'I make space for others\' emotional realities.', type: 'likert', domain: 'empathy', subdomain: 'work' },
  { id: 'e_w_4', text: 'I can distinguish between empathy and over-responsibility.', type: 'yesno', domain: 'empathy', subdomain: 'work' },
  { id: 'e_w_5', text: 'I adapt my leadership style based on people\'s emotional needs.', type: 'likert', domain: 'empathy', subdomain: 'work' },
  { id: 'e_w_6', text: 'I avoid dismissing emotions I don\'t understand.', type: 'yesno', domain: 'empathy', subdomain: 'work' },
  
  // Empathy - Personal (6 questions)
  { id: 'e_p_1', text: 'I listen without needing to "fix" things immediately.', type: 'likert', domain: 'empathy', subdomain: 'personal' },
  { id: 'e_p_2', text: 'I am present with loved ones in their emotional states.', type: 'yesno', domain: 'empathy', subdomain: 'personal' },
  { id: 'e_p_3', text: 'I can feel into what others need, even when unspoken.', type: 'likert', domain: 'empathy', subdomain: 'personal' },
  { id: 'e_p_4', text: 'I validate others\' feelings even when I disagree.', type: 'yesno', domain: 'empathy', subdomain: 'personal' },
  { id: 'e_p_5', text: 'I sit with discomfort rather than bypassing it.', type: 'likert', domain: 'empathy', subdomain: 'personal' },
  { id: 'e_p_6', text: 'I honor others\' timing in healing or expression.', type: 'yesno', domain: 'empathy', subdomain: 'personal' },
  
  // Empathy - Social (6 questions)
  { id: 'e_s_1', text: 'I often anticipate how my words affect others.', type: 'likert', domain: 'empathy', subdomain: 'social' },
  { id: 'e_s_2', text: 'I recognize when someone feels unsafe emotionally.', type: 'yesno', domain: 'empathy', subdomain: 'social' },
  { id: 'e_s_3', text: 'I hold space for emotions in group dynamics.', type: 'likert', domain: 'empathy', subdomain: 'social' },
  { id: 'e_s_4', text: 'I notice subtle shifts in group energy.', type: 'yesno', domain: 'empathy', subdomain: 'social' },
  { id: 'e_s_5', text: 'I ask questions to understand before offering advice.', type: 'likert', domain: 'empathy', subdomain: 'social' },
  { id: 'e_s_6', text: 'I can hold compassion for people even when I disagree.', type: 'yesno', domain: 'empathy', subdomain: 'social' },
  
  // Relationship Management - Work (6 questions)
  { id: 'rm_w_1', text: 'I resolve conflicts without escalating them.', type: 'likert', domain: 'relationshipManagement', subdomain: 'work' },
  { id: 'rm_w_2', text: 'I regularly give constructive feedback with empathy.', type: 'yesno', domain: 'relationshipManagement', subdomain: 'work' },
  { id: 'rm_w_3', text: 'I maintain relationships across hierarchies and roles.', type: 'likert', domain: 'relationshipManagement', subdomain: 'work' },
  { id: 'rm_w_4', text: 'I advocate for fairness even when it\'s uncomfortable.', type: 'yesno', domain: 'relationshipManagement', subdomain: 'work' },
  { id: 'rm_w_5', text: 'I know when to step back and when to lead.', type: 'likert', domain: 'relationshipManagement', subdomain: 'work' },
  { id: 'rm_w_6', text: 'I manage team energy as much as tasks.', type: 'yesno', domain: 'relationshipManagement', subdomain: 'work' },
  
  // Relationship Management - Personal (6 questions)
  { id: 'rm_p_1', text: 'I invest time to maintain strong relationships.', type: 'likert', domain: 'relationshipManagement', subdomain: 'personal' },
  { id: 'rm_p_2', text: 'I communicate clearly during emotionally charged moments.', type: 'yesno', domain: 'relationshipManagement', subdomain: 'personal' },
  { id: 'rm_p_3', text: 'I clean up relational ruptures when I notice them.', type: 'likert', domain: 'relationshipManagement', subdomain: 'personal' },
  { id: 'rm_p_4', text: 'I take time to repair emotional distance.', type: 'yesno', domain: 'relationshipManagement', subdomain: 'personal' },
  { id: 'rm_p_5', text: 'I balance truth and compassion when expressing needs.', type: 'likert', domain: 'relationshipManagement', subdomain: 'personal' },
  { id: 'rm_p_6', text: 'I avoid using silence or withdrawal as punishment.', type: 'yesno', domain: 'relationshipManagement', subdomain: 'personal' },
  
  // Relationship Management - Social (6 questions)
  { id: 'rm_s_1', text: 'I know how to navigate difficult conversations calmly.', type: 'likert', domain: 'relationshipManagement', subdomain: 'social' },
  { id: 'rm_s_2', text: 'People trust me with their emotions.', type: 'yesno', domain: 'relationshipManagement', subdomain: 'social' },
  { id: 'rm_s_3', text: 'I take responsibility for my energy in social spaces.', type: 'likert', domain: 'relationshipManagement', subdomain: 'social' },
  { id: 'rm_s_4', text: 'I avoid manipulative or performative behavior.', type: 'yesno', domain: 'relationshipManagement', subdomain: 'social' },
  { id: 'rm_s_5', text: 'I support group coherence over personal agenda.', type: 'likert', domain: 'relationshipManagement', subdomain: 'social' },
  { id: 'rm_s_6', text: 'I speak up when I witness harm.', type: 'yesno', domain: 'relationshipManagement', subdomain: 'social' },
  
  // Regenerative Leadership - Inner (6 questions)
  { id: 'rl_i_1', text: 'I lead from inner alignment, not from pressure.', type: 'likert', domain: 'regenerativeLeadership', subdomain: 'inner' },
  { id: 'rl_i_2', text: 'I check in with my body and intuition before major decisions.', type: 'yesno', domain: 'regenerativeLeadership', subdomain: 'inner' },
  { id: 'rl_i_3', text: 'I honor cycles of rest and regeneration in my leadership.', type: 'likert', domain: 'regenerativeLeadership', subdomain: 'inner' },
  { id: 'rl_i_4', text: 'I trust organic timing rather than forcing outcomes.', type: 'yesno', domain: 'regenerativeLeadership', subdomain: 'inner' },
  { id: 'rl_i_5', text: 'I lead with presence instead of urgency.', type: 'likert', domain: 'regenerativeLeadership', subdomain: 'inner' },
  { id: 'rl_i_6', text: 'I stay grounded in purpose even during external chaos.', type: 'yesno', domain: 'regenerativeLeadership', subdomain: 'inner' },
  
  // Regenerative Leadership - Systemic (6 questions)
  { id: 'rl_s_1', text: 'I see my leadership as part of a larger ecosystem.', type: 'likert', domain: 'regenerativeLeadership', subdomain: 'systemic' },
  { id: 'rl_s_2', text: 'I design systems that support life, not just efficiency.', type: 'yesno', domain: 'regenerativeLeadership', subdomain: 'systemic' },
  { id: 'rl_s_3', text: 'I integrate well-being into performance goals.', type: 'likert', domain: 'regenerativeLeadership', subdomain: 'systemic' },
  { id: 'rl_s_4', text: 'I consider impact on the whole (people, planet, profit) when leading.', type: 'yesno', domain: 'regenerativeLeadership', subdomain: 'systemic' },
  { id: 'rl_s_5', text: 'I believe leadership is a shared, evolving responsibility.', type: 'likert', domain: 'regenerativeLeadership', subdomain: 'systemic' },
  { id: 'rl_s_6', text: 'I see transformation as nonlinear and relational.', type: 'yesno', domain: 'regenerativeLeadership', subdomain: 'systemic' },
];

const domainNames = {
  selfAwareness: 'Self-Awareness',
  selfManagement: 'Self-Management',
  empathy: 'Empathy',
  relationshipManagement: 'Relationship Management',
  regenerativeLeadership: 'Regenerative Leadership'
};

const ConsciousLeadershipForm = ({ onComplete }: ConsciousLeadershipFormProps) => {
  const [currentDomainIndex, setCurrentDomainIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const domains = Object.keys(domainNames) as Array<keyof typeof domainNames>;
  const currentDomain = domains[currentDomainIndex];
  const currentQuestions = questions.filter(q => q.domain === currentDomain);
  
  const totalDomains = domains.length;
  const progress = ((currentDomainIndex + 1) / totalDomains) * 100;

  const handleAnswerChange = (questionId: string, value: string | boolean) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: typeof value === 'boolean' ? (value ? 5 : 0) : parseInt(value)
    }));
  };

  const handleNext = () => {
    if (currentDomainIndex < totalDomains - 1) {
      setCurrentDomainIndex(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentDomainIndex > 0) {
      setCurrentDomainIndex(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    const domainScores = {
      selfAwareness: 0,
      selfManagement: 0,
      empathy: 0,
      relationshipManagement: 0,
      regenerativeLeadership: 0
    };

    const domainQuestionCounts = {
      selfAwareness: 18,
      selfManagement: 18,
      empathy: 18,
      relationshipManagement: 18,
      regenerativeLeadership: 12
    };

    // Calculate domain scores as percentages
    domains.forEach(domain => {
      const domainQuestions = questions.filter(q => q.domain === domain);
      const domainTotal = domainQuestions.reduce((sum, question) => {
        return sum + (answers[question.id] || 0);
      }, 0);
      const maxPossible = domainQuestionCounts[domain] * 5;
      domainScores[domain] = Math.round((domainTotal / maxPossible) * 100);
    });

    // Calculate total percentage
    const totalScore = Object.values(domainScores).reduce((sum, score) => sum + score, 0);
    const totalPercentage = Math.round(totalScore / 5);

    // Determine leadership state
    let leadershipState = '';
    if (totalPercentage <= 39) {
      leadershipState = 'Below the Line';
    } else if (totalPercentage <= 59) {
      leadershipState = 'In Transition';
    } else if (totalPercentage <= 79) {
      leadershipState = 'Emerging Above the Line';
    } else {
      leadershipState = 'Above the Line';
    }

    // Find primary development area (lowest score) and strongest domain
    const domainEntries = Object.entries(domainScores) as Array<[keyof typeof domainScores, number]>;
    const lowestDomain = domainEntries.reduce((min, [domain, score]) => 
      score < min[1] ? [domain, score] : min
    );
    const highestDomain = domainEntries.reduce((max, [domain, score]) => 
      score > max[1] ? [domain, score] : max
    );

    const results: LeadershipAssessmentResult = {
      domainScores,
      totalPercentage,
      leadershipState,
      primaryDevelopmentArea: domainNames[lowestDomain[0]],
      strongestDomain: domainNames[highestDomain[0]]
    };

    onComplete(results);
  };

  const isCurrentDomainComplete = () => {
    return currentQuestions.every(question => answers[question.id] !== undefined);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-card shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-display font-semibold text-primary mb-4">
              {domainNames[currentDomain]}
            </CardTitle>
            <div className="w-full bg-secondary rounded-full h-2 mb-4">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Domain {currentDomainIndex + 1} of {totalDomains} • {currentQuestions.length} questions
            </p>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {currentQuestions.map((question, index) => (
              <div key={question.id} className="space-y-4">
                <h3 className="text-lg font-body font-medium text-foreground leading-relaxed">
                  {index + 1}. {question.text}
                </h3>
                
                {question.type === 'likert' ? (
                  <RadioGroup
                    value={answers[question.id]?.toString() || ''}
                    onValueChange={(value) => handleAnswerChange(question.id, value)}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                      {[0, 1, 2, 3, 4, 5].map((value) => (
                        <div key={value} className="flex items-center space-x-2">
                          <RadioGroupItem value={value.toString()} id={`${question.id}_${value}`} />
                          <Label 
                            htmlFor={`${question.id}_${value}`} 
                            className="text-sm cursor-pointer"
                          >
                            {value === 0 ? 'Never' : 
                             value === 1 ? 'Rarely' :
                             value === 2 ? 'Sometimes' :
                             value === 3 ? 'Often' :
                             value === 4 ? 'Usually' : 'Always'}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                ) : (
                  <div className="flex gap-8">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`${question.id}_yes`}
                        checked={answers[question.id] === 5}
                        onCheckedChange={(checked) => handleAnswerChange(question.id, !!checked)}
                      />
                      <Label htmlFor={`${question.id}_yes`} className="cursor-pointer">
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`${question.id}_no`}
                        checked={answers[question.id] === 0}
                        onCheckedChange={(checked) => handleAnswerChange(question.id, !checked)}
                      />
                      <Label htmlFor={`${question.id}_no`} className="cursor-pointer">
                        No
                      </Label>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex justify-between pt-8">
              <Button 
                onClick={handlePrevious}
                variant="outline"
                disabled={currentDomainIndex === 0}
              >
                Previous Domain
              </Button>
              
              <Button 
                onClick={handleNext}
                disabled={!isCurrentDomainComplete()}
                variant="accent"
              >
                {currentDomainIndex === totalDomains - 1 ? 'Complete Assessment' : 'Next Domain'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConsciousLeadershipForm;