import { useTranslation } from "react-i18next";
import { 
  Brain, 
  Shield, 
  Activity,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Clock
} from "lucide-react";

const AIAgentSection = () => {
  const { t } = useTranslation('platform');

  const aiCapabilities = [
    { key: 'analyze', icon: Activity },
    { key: 'detect', icon: AlertTriangle },
    { key: 'learn', icon: Brain },
    { key: 'generate', icon: Sparkles },
    { key: 'support', icon: Shield },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            {t('aiAgent.title')}
          </h2>
          <p className="text-xl text-secondary font-medium mb-4">{t('aiAgent.subtitle')}</p>
          <p className="text-muted-foreground font-body leading-relaxed">
            {t('aiAgent.description')}
          </p>
        </div>

        {/* What It Does */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-xl font-display font-semibold text-foreground text-center mb-6">
            {t('aiAgent.whatItDoes.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {aiCapabilities.map(({ key, icon: Icon }) => (
              <div 
                key={key}
                className="flex items-center gap-3 p-4 rounded-xl bg-[hsl(var(--warm-beige))] border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-foreground font-body text-sm font-medium">
                  {t(`aiAgent.capabilities.${key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* MVP & Roadmap Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                {t('aiAgent.mvp.badge')}
              </span>
              <h3 className="text-xl font-display font-bold text-foreground">
                {t('aiAgent.mvp.title')}
              </h3>
            </div>
            <ul className="space-y-4">
              {['scanner', 'insights', 'indicators', 'burnout'].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-body">
                    {t(`aiAgent.mvp.features.${feature}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                {t('aiAgent.future.badge')}
              </span>
              <h3 className="text-xl font-display font-bold text-foreground">
                {t('aiAgent.future.title')}
              </h3>
            </div>
            <ul className="space-y-4">
              {['predictive', 'automation', 'api', 'realtime'].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-body">
                    {t(`aiAgent.future.features.${feature}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgentSection;
