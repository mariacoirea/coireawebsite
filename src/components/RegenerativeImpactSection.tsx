import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalizedLink from "@/components/LocalizedLink";
import { useTranslation } from "react-i18next";
import mayanPatternsBg from "@/assets/mayan-patterns-bg.png";

const RegenerativeImpactSection = () => {
  const { t } = useTranslation('home');

  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${mayanPatternsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--warm-beige))]/90 to-[hsl(var(--warm-beige))]/80" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10 px-4">
        <p className="text-secondary font-medium mb-2">
          {t('impact.badge')}
        </p>
        
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
          {t('impact.title')}
        </h2>
        
        <p className="text-lg text-muted-foreground font-body leading-relaxed mb-4 max-w-2xl mx-auto">
          {t('impact.description1')}
        </p>
        
        <p className="text-muted-foreground font-body leading-relaxed mb-8 max-w-2xl mx-auto">
          {t('impact.description2')}
        </p>
        
        <LocalizedLink to="/raices-latinas">
          <Button 
            variant="outline" 
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary/10"
          >
            {t('impact.cta')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </LocalizedLink>
      </div>
    </section>
  );
};

export default RegenerativeImpactSection;
