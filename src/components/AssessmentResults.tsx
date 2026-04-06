
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AssessmentResult } from "./OrganizationalHealthScanner";
import { useTranslation } from "react-i18next";
import { ArrowRight, TrendingUp, AlertTriangle, Sparkles, Link2, Brain } from "lucide-react";

interface AssessmentResultsProps {
  results: AssessmentResult;
  onRetake: () => void;
}

const pillarQuestionCounts: Record<string, number> = {
  purposeCulture: 4,
  collaboration: 3,
  leadership: 4,
  selfLeadership: 3,
  wellBeing: 4,
  organizationalStrategy: 4,
  interconnectivity: 3,
};

const pillarIcons: Record<string, string> = {
  purposeCulture: '🧭',
  collaboration: '🤝',
  leadership: '🏛️',
  wellBeing: '🌿',
  organizationalStrategy: '🎯',
};

const AssessmentResults = ({ results, onRetake }: AssessmentResultsProps) => {
  const { t } = useTranslation('results');
  const { pillarScores, interconnectivityScore, selfLeadershipPercent, organizationalStatus, painPoint, strength } = results;

  const getPillarPercentage = (pillar: string, score: number) => {
    const maxScore = (pillarQuestionCounts[pillar] || 4) * 5;
    return Math.round((score / maxScore) * 100);
  };

  const mainPillars = ['purposeCulture', 'collaboration', 'leadership', 'wellBeing', 'organizationalStrategy'] as const;
  const mainPercentages = mainPillars.map(p => getPillarPercentage(p, pillarScores[p]));
  const overallPercent = Math.round(mainPercentages.reduce((a, b) => a + b, 0) / mainPillars.length);

  const interconnectivityPercent = getPillarPercentage('interconnectivity', interconnectivityScore);

  const getInterconnectivityMessage = () => {
    if (interconnectivityPercent < 40) {
      return { title: t('organizational.interconnectivityMessages.low.title'), message: t('organizational.interconnectivityMessages.low.message') };
    }
    return { title: t('organizational.interconnectivityMessages.strong.title'), message: t('organizational.interconnectivityMessages.strong.message') };
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
      case 'Thriving': return 'text-sage';
      default: return 'text-foreground';
    }
  };

  const getScoreBarColor = (percent: number) => {
    if (percent <= 30) return 'bg-destructive';
    if (percent <= 50) return 'bg-accent';
    if (percent <= 70) return 'bg-primary/70';
    return 'bg-sage';
  };

  const pillarDisplayNames: Record<string, string> = {
    purposeCulture: 'Purpose & Culture',
    collaboration: 'Collaboration',
    leadership: 'Leadership',
    wellBeing: 'Well-Being',
    organizationalStrategy: 'Organizational Strategy'
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-5xl space-y-8">
        
        {/* Overall Score Hero */}
        <Card className="bg-card shadow-elegant border-primary/10 overflow-hidden">
          <div className="bg-gradient-subtle p-8 md:p-12 text-center">
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-6">
              {t('organizational.title')}
            </h1>
            <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-background shadow-lg mb-4">
              <div className="text-center">
                <span className="text-4xl font-display font-bold text-primary block">{overallPercent}%</span>
                <span className="text-xs text-muted-foreground font-body">OVI Score</span>
              </div>
            </div>
            <h2 className={`text-2xl font-display font-semibold mb-3 ${getStatusColor(organizationalStatus)}`}>
              {organizationalStatus}
            </h2>
            <p className="text-foreground/80 font-body leading-relaxed max-w-2xl mx-auto">
              {t(`organizational.statusMessages.${organizationalStatus}`)}
            </p>
          </div>
        </Card>

        {/* Pillar Breakdown - Visual Bars */}
        <Card className="bg-card shadow-elegant border-primary/10">
          <CardHeader>
            <CardTitle className="text-xl font-display font-semibold text-primary flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              {t('organizational.pillarBreakdown')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {mainPillars.map((pillar) => {
              const percent = getPillarPercentage(pillar, pillarScores[pillar]);
              const isLowest = pillarDisplayNames[pillar] === painPoint;
              const isHighest = pillarDisplayNames[pillar] === strength;
              
              return (
                <div key={pillar} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{pillarIcons[pillar]}</span>
                      <span className="font-body font-medium text-foreground text-sm md:text-base">
                        {pillarDisplayNames[pillar]}
                      </span>
                      {isLowest && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                          {t('organizational.painPoint')}
                        </span>
                      )}
                      {isHighest && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-sage bg-sage/10 px-2 py-0.5 rounded-full">
                          {t('organizational.strength')}
                        </span>
                      )}
                    </div>
                    <span className="font-display font-bold text-primary text-lg">{percent}%</span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${getScoreBarColor(percent)}`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Pain Point */}
          <Card className="bg-card border-accent/20 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-display font-semibold text-accent">
                  {t('organizational.greatestChallenge')}
                </h3>
              </div>
              <p className="font-display font-bold text-foreground text-xl mb-3">{painPoint}</p>
              <p className="text-foreground/70 font-body text-sm leading-relaxed">
                {t(`organizational.painPointMessages.${painPoint}`)}
              </p>
            </CardContent>
          </Card>

          {/* Strength */}
          <Card className="bg-card border-sage/20 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-sage" />
                </div>
                <h3 className="text-lg font-display font-semibold text-sage">
                  {t('organizational.greatestStrength')}
                </h3>
              </div>
              <p className="font-display font-bold text-foreground text-xl mb-3">{strength}</p>
              <p className="text-foreground/70 font-body text-sm leading-relaxed">
                {t(`organizational.strengthMessages.${strength}`)}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Self-Leadership + Interconnectivity Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Self-Leadership */}
          <Card className="bg-card shadow-sm border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-primary">
                  {t('organizational.selfLeadership')}
                </h3>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-display font-bold text-primary">{selfLeadershipPercent}%</span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">{getSelfLeadershipStatus()}</p>
                </div>
              </div>
              <p className="text-foreground/70 font-body text-sm leading-relaxed">
                {t(`organizational.selfLeadershipMessages.${getSelfLeadershipStatus()}`)}
              </p>
            </CardContent>
          </Card>

          {/* Interconnectivity */}
          <Card className="bg-card shadow-sm border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Link2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-primary">
                  {getInterconnectivityMessage().title}
                </h3>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-display font-bold text-primary">{interconnectivityPercent}%</span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">{t('organizational.interconnectivity')}</p>
                </div>
              </div>
              <p className="text-foreground/70 font-body text-sm leading-relaxed">
                {getInterconnectivityMessage().message}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-primary/5 border-primary/10 shadow-sm">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-display font-semibold text-primary mb-3">
              {t('organizational.resultsSent')}
            </h3>
            <p className="text-foreground/70 font-body leading-relaxed mb-6 max-w-xl mx-auto">
              {t('organizational.ctaDescription', 'We\'ve sent a detailed copy of your organizational health assessment. Ready to explore what these insights mean for your team?')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/journey"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium hover:bg-primary/90 transition-colors"
              >
                {t('organizational.exploreJourney', 'Explore Participation')}
                <ArrowRight className="w-4 h-4" />
              </a>
              <Button variant="ghost" onClick={onRetake} className="text-muted-foreground">
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
