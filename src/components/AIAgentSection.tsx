import { useTranslation } from "react-i18next";
import { 
  Compass, 
  Battery, 
  Users,
  Rocket,
  AlertTriangle,
  Lightbulb
} from "lucide-react";

const AIAgentSection = () => {
  const { t } = useTranslation('platform');

  const giaNodes = [
    { 
      key: 'directionCoherence', 
      icon: Compass,
    },
    { 
      key: 'systemCapacity', 
      icon: Battery,
    },
    { 
      key: 'roleClarity', 
      icon: Users,
    },
    { 
      key: 'projectContribution', 
      icon: Rocket,
    },
    { 
      key: 'systemTensions', 
      icon: AlertTriangle,
    },
    { 
      key: 'nextEvolution', 
      icon: Lightbulb,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            {t('aiAgent.title', "Meet GiA: COIREA's Trained Organizational AI")}
          </h2>
          <p className="text-xl text-secondary font-medium mb-6">
            {t('aiAgent.subtitle', 'Your System Intelligence Layer')}
          </p>
        </div>

        {/* Description Block */}
        <div className="max-w-6xl mx-auto mb-14 space-y-4">
          <p className="text-muted-foreground font-body leading-relaxed text-center">
            {t('aiAgent.description')}
          </p>
          <p className="text-muted-foreground font-body leading-relaxed text-center">
            {t('aiAgent.description2')}
          </p>
          <div className="text-center pt-2 space-y-1">
            <p className="text-foreground font-semibold italic">
              {t('aiAgent.closingNote1', 'The intelligence stays inside your field.')}
            </p>
            <p className="text-foreground font-semibold italic">
              {t('aiAgent.closingNote2', 'The insights are specific to your organization.')}
            </p>
          </div>
        </div>

        {/* What GiA Makes Visible */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-3">
            {t('aiAgent.nodes.title', 'What GiA Makes Visible')}
          </h3>
          <p className="text-muted-foreground text-center font-body mb-10 max-w-3xl mx-auto">
            {t('aiAgent.nodes.subtitle', 'Six system-level questions GiA continuously interprets from your organizational data.')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {giaNodes.map(({ key, icon: Icon }) => (
              <div 
                key={key}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-display font-semibold text-foreground">
                      {t(`aiAgent.nodes.items.${key}.title`)}
                    </h4>
                    <p className="text-sm text-foreground/80 font-body italic leading-relaxed">
                      {t(`aiAgent.nodes.items.${key}.question`)}
                    </p>
                    <p className="text-xs text-muted-foreground font-body leading-relaxed">
                      {t(`aiAgent.nodes.items.${key}.clarification`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgentSection;
