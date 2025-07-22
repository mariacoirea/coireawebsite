
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
  pillar: 'purpose' | 'culture' | 'wellBeing' | 'collaboration' | 'leadership';
}

const questions: Question[] = [
  // Purpose (5 questions)
  { id: 'p1', text: 'I understand the deeper mission of our organization beyond profit.', pillar: 'purpose' },
  { id: 'p2', text: 'I feel that my daily work contributes to something meaningful.', pillar: 'purpose' },
  { id: 'p3', text: 'Our leadership consistently communicates a clear vision.', pillar: 'purpose' },
  { id: 'p4', text: 'Decisions made in the company reflect our stated purpose and values.', pillar: 'purpose' },
  { id: 'p5', text: 'I feel personally aligned with the direction this organization is heading.', pillar: 'purpose' },
  
  // Culture (5 questions)
  { id: 'c1', text: 'I feel safe expressing new ideas or concerns at work.', pillar: 'culture' },
  { id: 'c2', text: 'Our team lives by shared values, not just written ones.', pillar: 'culture' },
  { id: 'c3', text: 'Feedback is part of our culture and used to grow, not punish.', pillar: 'culture' },
  { id: 'c4', text: 'I feel respected and included regardless of my background or role.', pillar: 'culture' },
  { id: 'c5', text: 'There is consistency between what we say and how we act as a company.', pillar: 'culture' },
  
  // Well-Being (5 questions)
  { id: 'w1', text: 'I feel emotionally and mentally supported by the organization.', pillar: 'wellBeing' },
  { id: 'w2', text: 'Burnout and chronic stress are addressed, not normalized.', pillar: 'wellBeing' },
  { id: 'w3', text: 'I have space for rest and recovery in my work rhythm.', pillar: 'wellBeing' },
  { id: 'w4', text: 'Leadership genuinely cares about employee well-being.', pillar: 'wellBeing' },
  { id: 'w5', text: 'I don\'t feel drained or depleted after most workdays.', pillar: 'wellBeing' },
  
  // Collaboration (5 questions)
  { id: 'col1', text: 'Our team communicates openly and transparently.', pillar: 'collaboration' },
  { id: 'col2', text: 'I trust the people I work with.', pillar: 'collaboration' },
  { id: 'col3', text: 'Conflict is addressed in healthy, constructive ways.', pillar: 'collaboration' },
  { id: 'col4', text: 'Collaboration is encouraged over silos or competition.', pillar: 'collaboration' },
  { id: 'col5', text: 'My ideas and contributions are valued in group settings.', pillar: 'collaboration' },
  
  // Leadership (5 questions)
  { id: 'l1', text: 'Leadership is authentic, transparent, and accountable.', pillar: 'leadership' },
  { id: 'l2', text: 'I feel inspired by the way our leaders show up.', pillar: 'leadership' },
  { id: 'l3', text: 'Leaders actively listen and adjust based on feedback.', pillar: 'leadership' },
  { id: 'l4', text: 'There\'s a clear sense of integrity in leadership decisions.', pillar: 'leadership' },
  { id: 'l5', text: 'Leaders empower us rather than control us.', pillar: 'leadership' },
];

const pillarNames = {
  purpose: 'Purpose',
  culture: 'Culture',
  wellBeing: 'Well-Being',
  collaboration: 'Collaboration',
  leadership: 'Leadership'
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
      purpose: 0,
      culture: 0,
      wellBeing: 0,
      collaboration: 0,
      leadership: 0
    };

    // Calculate pillar scores
    questions.forEach(question => {
      const score = answers[question.id] || 0;
      pillarScores[question.pillar] += score;
    });

    const totalScore = Object.values(pillarScores).reduce((sum, score) => sum + score, 0);

    // Determine organizational status
    let organizationalStatus = '';
    if (totalScore <= 40) organizationalStatus = 'Misaligned';
    else if (totalScore <= 65) organizationalStatus = 'Emerging';
    else if (totalScore <= 90) organizationalStatus = 'Stabilizing';
    else if (totalScore <= 110) organizationalStatus = 'Evolving';
    else organizationalStatus = 'Thriving';

    // Find pain point (lowest score) and strength (highest score)
    const pillarEntries = Object.entries(pillarScores) as Array<[keyof typeof pillarScores, number]>;
    const lowestPillar = pillarEntries.reduce((min, current) => 
      current[1] < min[1] ? current : min
    );
    const highestPillar = pillarEntries.reduce((max, current) => 
      current[1] > max[1] ? current : max
    );

    const painPoint = pillarNames[lowestPillar[0]];
    const strength = pillarNames[highestPillar[0]];

    onComplete({
      pillarScores,
      totalScore,
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
                {totalAnswered}/25 questions answered
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
