import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOFAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  className?: string;
}

const SEOFAQSection = ({ 
  title = "Frequently Asked Questions", 
  faqs, 
  className = "" 
}: SEOFAQSectionProps) => {
  return (
    <section className={`py-16 px-6 bg-background ${className}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-4">
            {title}
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-sage to-primary mx-auto"></div>
        </div>

        <Card className="bg-card/60 backdrop-blur-sm border-primary/10">
          <CardContent className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
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