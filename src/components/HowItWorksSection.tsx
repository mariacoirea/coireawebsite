import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const HowItWorksSection = () => {
  const { t } = useTranslation('home');

  const steps = [
    { key: 'platform' },
    { key: 'results' },
    { key: 'impact' },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-medium mb-2">
            {t('howItWorks.badge')}
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {t('howItWorks.title')}
          </h2>
        </div>

        {/* Flow visualization */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={step.key} className="flex flex-col md:flex-row items-center">
              {/* Circle */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-primary flex items-center justify-center p-6 shadow-lg">
                  <div className="text-center">
                    <span className="text-primary-foreground font-display font-bold text-sm md:text-base leading-tight block">
                      {t(`howItWorks.steps.${step.key}.title`)}
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground font-body text-sm text-center max-w-[180px]">
                  {t(`howItWorks.steps.${step.key}.description`)}
                </p>
              </div>
              
              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center mx-4">
                  <div className="w-16 h-0.5 bg-secondary" />
                  <ArrowRight className="w-6 h-6 text-secondary -ml-1" />
                </div>
              )}
              
              {/* Mobile arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex items-center justify-center my-4">
                  <div className="h-8 w-0.5 bg-secondary" />
                  <ArrowRight className="w-5 h-5 text-secondary rotate-90 absolute" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quote */}
        <p className="text-center text-lg md:text-xl text-foreground/70 font-body italic max-w-3xl mx-auto">
          {t('howItWorks.quote')}
        </p>
      </div>
    </section>
  );
};

export default HowItWorksSection;
