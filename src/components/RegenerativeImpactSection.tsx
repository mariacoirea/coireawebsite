import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LocalizedLink from "@/components/LocalizedLink";
import { useTranslation } from "react-i18next";

const RegenerativeImpactSection = () => {
  const { t } = useTranslation('home');

  return (
    <section 
      className="py-24 px-6 relative overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/e1245c87-e916-4502-8adf-fb8970e5bb4c.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-warm-beige/85" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <p className="text-secondary font-body text-sm tracking-widest uppercase mb-4">
          {t('impact.badge')}
        </p>
        
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-primary mb-8 leading-tight">
          {t('impact.title')}
        </h2>
        
        <p className="text-lg text-foreground/80 font-body leading-relaxed mb-4 max-w-3xl mx-auto">
          {t('impact.description1')}
        </p>
        
        <p className="text-lg text-foreground/70 font-body leading-relaxed mb-10 max-w-3xl mx-auto">
          {t('impact.description2')}
        </p>
        
        <LocalizedLink to="/raices-latinas">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 text-lg font-body group"
          >
            {t('impact.cta')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </LocalizedLink>
      </div>
    </section>
  );
};

export default RegenerativeImpactSection;
