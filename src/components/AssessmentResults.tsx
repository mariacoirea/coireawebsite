import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AssessmentResult } from "./OrganizationalHealthScanner";
import { useTranslation } from "react-i18next";

interface AssessmentResultsProps {
  results: AssessmentResult;
  onRetake: () => void;
}

const AssessmentResults = ({ results, onRetake }: AssessmentResultsProps) => {
  const { t } = useTranslation('results');
  const { pillarScores, totalScore, interconnectivityScore, selfLeadershipScore, selfLeadershipPercent, organizationalStatus, painPoint, strength } = results;

  const getPillarPercentage = (score: number) => {
    return Math.round((score / 35) * 100);
  };

  const getInterconnectivityMessage = () => {
    if (interconnectivityScore < 21) {
      return {
        title: t('organizational.interconnectivityMessages.low.title'),
        message: t('organizational.interconnectivityMessages.low.message')
      };
    } else {
      return {
        title: t('organizational.interconnectivityMessages.strong.title'),
        message: t('organizational.interconnectivityMessages.strong.message')
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
              {t('organizational.title')}
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
                {t(`organizational.statusMessages.${organizationalStatus}`)}
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Pillar Scores */}
            <div className="bg-gradient-subtle rounded-xl p-6">
              <h3 className="text-xl font-display font-semibold text-primary mb-6 text-center">
                {t('organizational.pillarBreakdown')}
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
                        <div className="text-xs text-accent font-medium mt-1">{t('organizational.painPoint')}</div>
                      )}
                      {isHighest && (
                        <div className="text-xs text-primary font-medium mt-1">{t('organizational.strength')}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Self-Leadership Assessment */}
            <div className="bg-gradient-warm/10 rounded-xl p-6">
              <h3 className="text-xl font-display font-semibold text-primary mb-6 text-center">
                {t('organizational.selfLeadership')}
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
                  {t(`organizational.selfLeadershipMessages.${getSelfLeadershipStatus()}`)}
                </p>
              </div>
            </div>

            {/* Insights */}
            <div className="space-y-6">
              <div className="bg-card border border-accent/20 rounded-lg p-6">
                <h4 className="text-lg font-display font-semibold text-accent mb-3">
                  {t('organizational.greatestChallenge')}: {painPoint}
                </h4>
                <p className="text-foreground/80 font-body leading-relaxed">
                  {t(`organizational.painPointMessages.${painPoint}`)}
                </p>
              </div>

              <div className="bg-card border border-primary/20 rounded-lg p-6">
                <h4 className="text-lg font-display font-semibold text-primary mb-3">
                  {t('organizational.greatestStrength')}: {strength}
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
                {t('organizational.resultsSent')}
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
                {t('organizational.retakeButton')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AssessmentResults;