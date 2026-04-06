
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { AssessmentResult } from "./OrganizationalHealthScanner";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/hooks/useLanguage";

interface AssessmentFormProps {
  onComplete: (results: AssessmentResult) => void;
}

interface Question {
  id: string;
  text: string;
  pillar: 'purposeCulture' | 'collaboration' | 'leadership' | 'selfLeadership' | 'wellBeing' | 'organizationalStrategy' | 'interconnectivity';
}

const questions: Question[] = [
  // Purpose & Culture (4 questions)
  { id: 'pc2', text: 'Our purpose as a company is clear and lived.', pillar: 'purposeCulture' },
  { id: 'pc3', text: 'Company values are embodied in everyday behaviors.', pillar: 'purposeCulture' },
  { id: 'pc5', text: 'There is coherence between what we say and what we do.', pillar: 'purposeCulture' },
  { id: 'pc6', text: 'Our culture promotes belonging and authenticity.', pillar: 'purposeCulture' },
  
  // Collaboration (3 questions)
  { id: 'col1', text: 'Our team communicates openly and effectively.', pillar: 'collaboration' },
  { id: 'col3', text: 'Feedback is shared constructively across levels.', pillar: 'collaboration' },
  { id: 'col5', text: 'Conflict is navigated with maturity and care.', pillar: 'collaboration' },
  
  // Leadership (4 questions)
  { id: 'l1', text: 'Our leaders inspire through example, not just words.', pillar: 'leadership' },
  { id: 'l3', text: 'There is accountability at all levels.', pillar: 'leadership' },
  { id: 'l4', text: 'I trust the integrity of decision-making.', pillar: 'leadership' },
  { id: 'l5', text: 'Leaders empower us rather than control us.', pillar: 'leadership' },

  // Self-Leadership (3 questions)
  { id: 'l8', text: 'I am aware of how my emotions affect my leadership.', pillar: 'selfLeadership' },
  { id: 'l10', text: 'I pause and choose how to respond, even under pressure.', pillar: 'selfLeadership' },
  { id: 'l14', text: 'I lead from purpose and long-term vision, not just immediate demands.', pillar: 'selfLeadership' },
  
  // Well-Being (4 questions)
  { id: 'w1', text: 'I feel supported in managing stress and energy.', pillar: 'wellBeing' },
  { id: 'w3', text: 'Burnout is actively prevented, not just treated.', pillar: 'wellBeing' },
  { id: 'w5', text: 'I feel safe taking time to rest and recharge.', pillar: 'wellBeing' },
  { id: 'w7', text: 'Our work rhythm feels regenerative, not extractive.', pillar: 'wellBeing' },
  
  // Organizational Strategy (4 questions)
  { id: 'os1', text: 'Our strategic goals are clear and aligned with our purpose.', pillar: 'organizationalStrategy' },
  { id: 'os4', text: 'Our structure supports agility, not bureaucracy.', pillar: 'organizationalStrategy' },
  { id: 'os5', text: 'There is space for experimentation and iteration.', pillar: 'organizationalStrategy' },
  { id: 'os7', text: 'I feel part of the strategic evolution of the company.', pillar: 'organizationalStrategy' },
  
  // Interconnectivity (3 questions)
  { id: 'i3', text: 'There is alignment between our values and operations.', pillar: 'interconnectivity' },
  { id: 'i4', text: 'Well-being is considered when setting goals or timelines.', pillar: 'interconnectivity' },
  { id: 'i7', text: 'Our organization feels like a connected whole, not separate silos.', pillar: 'interconnectivity' },
];

// Number of questions per pillar for percentage calculation
const pillarQuestionCounts: Record<string, number> = {
  purposeCulture: 4,
  collaboration: 3,
  leadership: 4,
  selfLeadership: 3,
  wellBeing: 4,
  organizationalStrategy: 4,
  interconnectivity: 3,
};

const pillarNames = {
  purposeCulture: 'Purpose & Culture',
  collaboration: 'Collaboration',
  leadership: 'Leadership',
  selfLeadership: 'Self-Leadership',
  wellBeing: 'Well-Being',
  organizationalStrategy: 'Organizational Strategy',
  interconnectivity: 'Interconnectivity'
};

const TOTAL_QUESTIONS = 25;

const AssessmentForm = ({ onComplete }: AssessmentFormProps) => {
  const { t } = useTranslation('assessment');
  const { currentLanguage } = useLanguage();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentPillarIndex, setCurrentPillarIndex] = useState(0);

  const getQuestionText = (questionId: string) => {
    return t(`questions.${questionId}`);
  };
  
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentPillarIndex > 0) {
      setCurrentPillarIndex(currentPillarIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

    questions.forEach(question => {
      const score = answers[question.id] || 0;
      pillarScores[question.pillar] += score;
    });

    // Calculate percentage per pillar (each question max = 5)
    const pillarPercentages: Record<string, number> = {};
    for (const [pillar, score] of Object.entries(pillarScores)) {
      const maxScore = pillarQuestionCounts[pillar] * 5;
      pillarPercentages[pillar] = Math.round((score / maxScore) * 100);
    }

    // Main pillars for overall score
    const mainPillars = ['purposeCulture', 'collaboration', 'leadership', 'wellBeing', 'organizationalStrategy'] as const;
    const mainPillarPercentages = mainPillars.map(p => pillarPercentages[p]);
    const overallPercent = Math.round(mainPillarPercentages.reduce((a, b) => a + b, 0) / mainPillars.length);

    const totalScore = mainPillars.reduce((sum, pillar) => sum + pillarScores[pillar], 0);
    
    const interconnectivityScore = pillarScores.interconnectivity;
    const selfLeadershipScore = pillarScores.selfLeadership;
    const selfLeadershipPercent = Math.round((selfLeadershipScore / (pillarQuestionCounts.selfLeadership * 5)) * 100);

    // Status based on overall percentage
    let organizationalStatus = '';
    if (overallPercent <= 30) organizationalStatus = 'Misaligned';
    else if (overallPercent <= 50) organizationalStatus = 'Emerging';
    else if (overallPercent <= 65) organizationalStatus = 'Stabilizing';
    else if (overallPercent <= 80) organizationalStatus = 'Evolving';
    else organizationalStatus = 'Thriving';

    // Find pain point and strength from main pillars
    const mainPillarEntries = mainPillars.map(pillar => [pillar, pillarPercentages[pillar]] as const);
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
      strength,
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-card shadow-elegant border-primary/10">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <CardTitle className="text-2xl font-display font-semibold text-primary">
                {t(`pillars.${currentPillar}`)}
              </CardTitle>
              <span className="text-sm text-muted-foreground font-body">
                {t('navigation.progress', { answered: totalAnswered, total: TOTAL_QUESTIONS })}
              </span>
            </div>
            <Progress value={progress} className="w-full" />
            <p className="text-xs text-muted-foreground mt-2 font-body">
              {currentPillarIndex + 1} / {pillars.length} {t('navigation.sections') || 'sections'}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {currentQuestions.map((question, index) => (
              <div key={question.id} className="space-y-4">
                <Label className="text-base font-body leading-relaxed text-foreground">
                  {index + 1}. {getQuestionText(question.id)}
                </Label>
                
                <RadioGroup
                  value={answers[question.id]?.toString() || ""}
                  onValueChange={(value) => handleAnswerChange(question.id, value)}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-2">
                    <span>{t('scale.stronglyDisagree')}</span>
                    <span>{t('scale.stronglyAgree')}</span>
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
                {t('navigation.previous')}
              </Button>
              
              <Button
                onClick={handleNext}
                disabled={!isCurrentPillarComplete}
                variant="hero"
              >
                {currentPillarIndex === pillars.length - 1 ? t('navigation.complete') : t('navigation.next')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AssessmentForm;
