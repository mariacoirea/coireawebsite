import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/hooks/useLanguage";
import { type BilingualFAQItem, getLocalizedFAQs } from "@/data/faqData";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOFAQSectionProps {
  title?: string;
  titleEs?: string;
  faqs: FAQItem[] | BilingualFAQItem[];
  className?: string;
}

const SEOFAQSection = ({ 
  title = "Frequently Asked Questions", 
  titleEs,
  faqs, 
  className = "" 
}: SEOFAQSectionProps) => {
  const { currentLanguage } = useLanguage();
  
  // Check if faqs are bilingual
  const isBilingual = faqs.length > 0 && 'questionEs' in faqs[0];
  const localizedFaqs = isBilingual 
    ? getLocalizedFAQs(faqs as BilingualFAQItem[], currentLanguage)
    : faqs as FAQItem[];
  
  const displayTitle = currentLanguage === 'es' && titleEs ? titleEs : title;

  return (
    <section className={`py-16 px-6 bg-background ${className}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">
            {displayTitle}
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto"></div>
        </div>

        <Card className="bg-card/60 backdrop-blur-sm border-primary/10">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {localizedFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-display font-medium text-primary hover:text-primary/80">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 font-body leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SEOFAQSection;