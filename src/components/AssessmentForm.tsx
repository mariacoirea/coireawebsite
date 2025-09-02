
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { AssessmentResult } from "./OrganizationalHealthScanner";

interface AssessmentFormProps {
  onComplete: (results: AssessmentResult) => void;
}

interface Question {
  id: string;
  text: string;
  pillar: 'purposeCulture' | 'collaboration' | 'leadership' | 'selfLeadership' | 'wellBeing' | 'organizationalStrategy' | 'interconnectivity';
}

const questions: Question[] = [
  // Purpose & Culture (7 questions)
  { id: 'pc1', text: 'I feel my work contributes to a meaningful mission.', pillar: 'purposeCulture' },
  { id: 'pc2', text: 'Our purpose as a company is clear and lived.', pillar: 'purposeCulture' },
  { id: 'pc3', text: 'Company values are embodied in everyday behaviors.', pillar: 'purposeCulture' },
  { id: 'pc4', text: 'I feel emotionally connected to the organization\'s vision.', pillar: 'purposeCulture' },
  { id: 'pc5', text: 'There is coherence between what we say and what we do.', pillar: 'purposeCulture' },
  { id: 'pc6', text: 'Our culture promotes belonging and authenticity.', pillar: 'purposeCulture' },
  { id: 'pc7', text: 'I understand how my role supports the long-term direction.', pillar: 'purposeCulture' },
  
  // Collaboration (7 questions)
  { id: 'col1', text: 'Our team communicates openly and effectively.', pillar: 'collaboration' },
  { id: 'col2', text: 'I feel heard and respected in group settings.', pillar: 'collaboration' },
  { id: 'col3', text: 'Feedback is shared constructively across levels.', pillar: 'collaboration' },
  { id: 'col4', text: 'People collaborate across departments.', pillar: 'collaboration' },
  { id: 'col5', text: 'Conflict is navigated with maturity and care.', pillar: 'collaboration' },
  { id: 'col6', text: 'I feel trust among team members is high.', pillar: 'collaboration' },
  { id: 'col7', text: 'We regularly co-create solutions together.', pillar: 'collaboration' },
  
  // Leadership & Conscious Leadership (14 questions)
  // Organizational Leadership (external experience)
  { id: 'l1', text: 'Our leaders inspire through example, not just words.', pillar: 'leadership' },
  { id: 'l2', text: 'Leadership listens, adapts, and evolves.', pillar: 'leadership' },
  { id: 'l3', text: 'There is accountability at all levels.', pillar: 'leadership' },
  { id: 'l4', text: 'I trust the integrity of decision-making.', pillar: 'leadership' },
  { id: 'l5', text: 'Leaders empower us rather than control us.', pillar: 'leadership' },
  { id: 'l6', text: 'I feel encouraged to step into my own leadership.', pillar: 'leadership' },
  { id: 'l7', text: 'Our leaders operate with clarity, courage, and presence.', pillar: 'leadership' },
  // Self-Leadership (internal reflection)
  { id: 'l8', text: 'I am aware of how my emotions affect my leadership.', pillar: 'selfLeadership' },
  { id: 'l9', text: 'I recognize when I\'m leading from fear, control, or urgency.', pillar: 'selfLeadership' },
  { id: 'l10', text: 'I pause and choose how to respond, even under pressure.', pillar: 'selfLeadership' },
  { id: 'l11', text: 'I lead with emotional presence, not performance.', pillar: 'selfLeadership' },
  { id: 'l12', text: 'I prioritize coherence over productivity when needed.', pillar: 'selfLeadership' },
  { id: 'l13', text: 'I make space for others\' emotions without needing to fix or manage them.', pillar: 'selfLeadership' },
  { id: 'l14', text: 'I lead from purpose and long-term vision, not just immediate demands.', pillar: 'selfLeadership' },
  
  // Well-Being (7 questions)
  { id: 'w1', text: 'I feel supported in managing stress and energy.', pillar: 'wellBeing' },
  { id: 'w2', text: 'The company normalizes healthy work boundaries.', pillar: 'wellBeing' },
  { id: 'w3', text: 'Burnout is actively prevented, not just treated.', pillar: 'wellBeing' },
  { id: 'w4', text: 'Emotional and mental health is acknowledged.', pillar: 'wellBeing' },
  { id: 'w5', text: 'I feel safe taking time to rest and recharge.', pillar: 'wellBeing' },
  { id: 'w6', text: 'Leadership models well-being by example.', pillar: 'wellBeing' },
  { id: 'w7', text: 'Our work rhythm feels regenerative, not extractive.', pillar: 'wellBeing' },
  
  // Organizational Strategy (7 questions)
  { id: 'os1', text: 'Our strategic goals are clear and aligned with our purpose.', pillar: 'organizationalStrategy' },
  { id: 'os2', text: 'Long-term thinking guides daily decisions.', pillar: 'organizationalStrategy' },
  { id: 'os3', text: 'I understand how decisions are made across the org.', pillar: 'organizationalStrategy' },
  { id: 'os4', text: 'Our structure supports agility, not bureaucracy.', pillar: 'organizationalStrategy' },
  { id: 'os5', text: 'There is space for experimentation and iteration.', pillar: 'organizationalStrategy' },
  { id: 'os6', text: 'Strategy evolves based on learning, not rigidity.', pillar: 'organizationalStrategy' },
  { id: 'os7', text: 'I feel part of the strategic evolution of the company.', pillar: 'organizationalStrategy' },
  
  // Interconnectivity (7 questions)
  { id: 'i1', text: 'Our purpose flows clearly into how we collaborate.', pillar: 'interconnectivity' },
  { id: 'i2', text: 'Leadership reinforces both strategy and culture.', pillar: 'interconnectivity' },
  { id: 'i3', text: 'There is alignment between our values and operations.', pillar: 'interconnectivity' },
  { id: 'i4', text: 'Well-being is considered when setting goals or timelines.', pillar: 'interconnectivity' },
  { id: 'i5', text: 'Strategic decisions take collaboration and team input into account.', pillar: 'interconnectivity' },
  { id: 'i6', text: 'Communication flows fluidly between leadership and teams.', pillar: 'interconnectivity' },
  { id: 'i7', text: 'Our organization feels like a connected whole, not separate silos.', pillar: 'interconnectivity' },
];

const pillarNames = {
  purposeCulture: 'Purpose & Culture',
  collaboration: 'Collaboration',
  leadership: 'Leadership',
  selfLeadership: 'Self-Leadership',
  wellBeing: 'Well-Being',
  organizationalStrategy: 'Organizational Strategy',
  interconnectivity: 'Interconnectivity'
};

const AssessmentForm = ({ onComplete }: AssessmentFormProps) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentPillarIndex, setCurrentPillarIndex] = useState(0);
  
  const pillars = Object.keys(pillarNames) as Array<keyof typeof pillarNames>;
  const currentPillar = pillars[currentPillarIndex];
  const currentQuestions = questions.filter(q => q.pillar === currentPillar);
  
  const progress = ((currentPillarIndex + 1) / pillars.length) * 100;
  const isCurrentPillarComplete = currentQuestions.every(q => answers[q.id] !== undefined);
  const totalAnswered = Object.keys(answers).length;

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: parseInt(value)
    }));
  };

  const handleNext = () => {
    if (currentPillarIndex < pillars.length - 1) {
      setCurrentPillarIndex(currentPillarIndex + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentPillarIndex > 0) {
      setCurrentPillarIndex(currentPillarIndex - 1);
    }
  };

  const calculateResults = () => {
    const pillarScores = {
      purposeCulture: 0,
      collaboration: 0,
      leadership: 0,
      selfLeadership: 0,
      wellBeing: 0,
      organizationalStrategy: 0,
      interconnectivity: 0
    };

    // Calculate pillar scores
    questions.forEach(question => {
      const score = answers[question.id] || 0;
      pillarScores[question.pillar] += score;
    });

    // Calculate organizational health total (5 main pillars)
    const mainPillars = ['purposeCulture', 'collaboration', 'leadership', 'wellBeing', 'organizationalStrategy'] as const;
    const totalScore = mainPillars.reduce((sum, pillar) => sum + pillarScores[pillar], 0);
    
    // Separate interconnectivity and self-leadership scores
    const interconnectivityScore = pillarScores.interconnectivity;
    const selfLeadershipScore = pillarScores.selfLeadership;
    const selfLeadershipPercent = Math.round((selfLeadershipScore / 35) * 100);

    // Determine organizational status based on new tiers (out of 175 total)
    let organizationalStatus = '';
    if (totalScore <= 60) organizationalStatus = 'Misaligned';
    else if (totalScore <= 100) organizationalStatus = 'Emerging';
    else if (totalScore <= 135) organizationalStatus = 'Stabilizing';
    else if (totalScore <= 160) organizationalStatus = 'Evolving';
    else organizationalStatus = 'Thriving';

    // Find pain point (lowest score) and strength (highest score) from main pillars only
    const mainPillarEntries = mainPillars.map(pillar => [pillar, pillarScores[pillar]] as const);
    const lowestPillar = mainPillarEntries.reduce((min, current) => 
      current[1] < min[1] ? current : min
    );
    const highestPillar = mainPillarEntries.reduce((max, current) => 
      current[1] > max[1] ? current : max
    );

    const painPoint = pillarNames[lowestPillar[0]];
    const strength = pillarNames[highestPillar[0]];

    onComplete({
      pillarScores,
      totalScore,
      interconnectivityScore,
      selfLeadershipScore,
      selfLeadershipPercent,
      organizationalStatus,
      painPoint,
      strength
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-card shadow-elegant border-primary/10">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-2xl font-display font-semibold text-primary">
                {pillarNames[currentPillar]} Assessment
              </CardTitle>
              <span className="text-sm text-muted-foreground font-body">
                {totalAnswered}/55 questions answered
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </CardHeader>
          
          <CardContent className="space-y-8">
            {currentQuestions.map((question, index) => (
              <div key={question.id} className="space-y-4">
                <Label className="text-base font-body leading-relaxed text-foreground">
                  {index + 1}. {question.text}
                </Label>
                
                <RadioGroup
                  value={answers[question.id]?.toString() || ""}
                  onValueChange={(value) => handleAnswerChange(question.id, value)}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                    <span>Strongly Disagree</span>
                    <span>Strongly Agree</span>
                  </div>
                  <div className="flex justify-between items-center">
                    {[0, 1, 2, 3, 4, 5].map((value) => (
                      <div key={value} className="flex flex-col items-center space-y-1">
                        <RadioGroupItem value={value.toString()} id={`${question.id}-${value}`} />
                        <Label htmlFor={`${question.id}-${value}`} className="text-xs">
                          {value}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            ))}
            
            <div className="flex justify-between pt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentPillarIndex === 0}
              >
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!isCurrentPillarComplete}
                variant="hero"
              >
                {currentPillarIndex === pillars.length - 1 ? 'Complete Assessment' : 'Next Section'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AssessmentForm;
