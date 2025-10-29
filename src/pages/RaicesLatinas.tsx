import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  MayanDiamond, 
  MayanConcentric, 
  MayanChevron, 
  MayanSteps, 
  MayanCross,
  MayanPyramid,
  MayanSun,
  MayanBird
} from "@/components/MayanIcons";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import coireaLogo from "@/assets/coirea-logo.png";
const raicesCulturalHero = "/lovable-uploads/raices-cultural-hero-new.png";
import mayanPatternsBg from "@/assets/mayan-patterns-bg.png";
import andeanPeopleBg from "@/assets/andean-people-bg.jpg";

const RaicesLatinas = () => {
  const { t } = useTranslation('raices');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Implement form submission
  };

  return (
    <>
      <SEOHead
        title="COIREA Raíces Latinas - Social Impact Initiative for Latin America"
        description="Empowering purpose-driven organizations to scale with clarity, structure, and integrity. Bridging global resources with local initiatives across Latin America."
        keywords="social impact Latin America, NGOs capacity building, indigenous cooperatives, women-led initiatives, regenerative community projects, social enterprises, funding readiness, conscious leadership, COIREA OS, Ayni reciprocity"
        url="/raices-latinas"
      />
      
      <Header />

      <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--raices-sandstone))] to-background overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-6">
          {/* Background image */}
          <div className="absolute inset-0 -left-px -right-px">
            <img 
              src={raicesCulturalHero} 
              alt="Traditional Latin American cultural collage with Andean heritage" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--raices-sandstone))]/65 to-[hsl(var(--raices-sandstone))]/45" />
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center space-y-8">
              {/* Logo/Icon */}
              <div className="flex justify-center mb-8">
                <img 
                  src={coireaLogo} 
                  alt="COIREA Logo" 
                  className="w-24 h-24 drop-shadow-lg"
                />
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-semibold text-[hsl(var(--raices-sage-green))] leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                {t('hero.title')}
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-[hsl(var(--raices-charcoal-earth))] font-body font-normal max-w-5xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                {t('hero.subtitle')}
              </p>
              
              <p className="text-lg md:text-xl text-[hsl(var(--raices-earth-brown))] font-medium max-w-4xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                {t('hero.description')}
              </p>

            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="space-y-8 max-w-5xl mx-auto">
              <p className="text-xl md:text-2xl text-[hsl(var(--raices-charcoal-earth))] leading-relaxed font-medium text-center">
                {t('intro.text1')}
              </p>
              
              <p className="text-2xl md:text-3xl font-display text-[hsl(var(--raices-sage-green))] font-semibold text-center">
                {t('intro.text2')}
              </p>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[hsl(var(--raices-andean-clay))]/20">
                <p className="text-lg md:text-xl text-[hsl(var(--raices-charcoal-earth))] leading-relaxed mb-6 font-medium">
                  <strong className="text-[hsl(var(--raices-earth-brown))] font-semibold">COIREA Raíces Latinas</strong> {t('intro.bridge')}
                </p>
                <p className="text-lg md:text-xl text-[hsl(var(--raices-charcoal-earth))] leading-relaxed font-medium">
                  {t('intro.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={mayanPatternsBg} 
              alt="Mayan patterns background" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-[hsl(var(--raices-sandstone))]/70" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-8">
                {t('mission.title')}
              </h2>
              <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[hsl(var(--raices-andean-clay))]/20">
                <p className="text-xl md:text-2xl text-[hsl(var(--raices-charcoal-earth))] leading-relaxed font-medium mb-6">
                  {t('mission.text1')}
                </p>
                <p className="text-lg md:text-xl text-[hsl(var(--raices-charcoal-earth))] leading-relaxed font-medium">
                  {t('mission.text2')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-6">
                {t('whatWeOffer.title')}
              </h2>
            </div>

            {/* Service Areas */}
            <div className="space-y-4">
              {[
                { icon: MayanSteps },
                { icon: MayanConcentric },
                { icon: MayanSun },
                { icon: MayanBird },
                { icon: MayanDiamond },
              ].map((item, index) => (
                <Card key={index} className="border-[hsl(var(--raices-earth-brown))]/20 hover:border-[hsl(var(--raices-sage-green))]/40 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(var(--raices-sage-green))]/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[hsl(var(--raices-sage-green))]" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-2">
                        {t(`whatWeOffer.services.${index}.area`)}
                      </h3>
                      <p className="text-[hsl(var(--raices-charcoal-earth))] leading-relaxed font-medium">
                        {t(`whatWeOffer.services.${index}.purpose`)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={mayanPatternsBg} 
              alt="Mayan patterns background" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-[hsl(var(--raices-sandstone))]/70" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-[hsl(var(--raices-sage-green))] mb-6">
                {t('howItWorks.title')}
              </h2>
            </div>

            {/* 5-Step Process */}
            <div className="grid md:grid-cols-5 gap-6 mb-12">
              {(t('howItWorks.steps', { returnObjects: true }) as Array<{ step: string; desc: string }>).map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--raices-sage-green))] to-[hsl(var(--raices-earth-brown))] flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-display font-bold text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-2">
                    {item.step}
                  </h3>
                  <p className="text-sm text-[hsl(var(--raices-charcoal-earth))] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center space-y-4 max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[hsl(var(--raices-andean-clay))]/20">
              <p className="text-2xl md:text-3xl font-display text-[hsl(var(--raices-deep-copper))] font-semibold">
                {t('howItWorks.notConsulting')}
              </p>
              <p className="text-xl md:text-2xl text-[hsl(var(--raices-charcoal-earth))] font-medium">
                {t('howItWorks.empowerment')}
              </p>
            </div>
          </div>
        </section>

        {/* Why COIREA Raíces Latinas Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-[hsl(var(--raices-sandstone))]/30 to-[hsl(var(--raices-sage-green))]/10">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-8">
                {t('whyCoirea.title')}
              </h2>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[hsl(var(--raices-andean-clay))]/20">
                <p className="text-lg md:text-xl text-[hsl(var(--raices-charcoal-earth))] leading-relaxed font-medium mb-6">
                  {t('whyCoirea.text1')}
                </p>
                <p className="text-lg md:text-xl text-[hsl(var(--raices-charcoal-earth))] leading-relaxed font-medium">
                  {t('whyCoirea.text2')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: MayanSteps },
                  { icon: MayanSun },
                  { icon: MayanConcentric },
                ].map((item, index) => (
                  <Card key={index} className="border-[hsl(var(--raices-andean-clay))]/30 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-[hsl(var(--raices-sage-green))]/10 flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-8 h-8 text-[hsl(var(--raices-sage-green))]" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-3">
                        {t(`whyCoirea.values.${index}.title`)}
                      </h3>
                      <p className="text-[hsl(var(--raices-charcoal-earth))] leading-relaxed font-medium">
                        {t(`whyCoirea.values.${index}.description`)}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={andeanPeopleBg} 
              alt="Andean people in traditional clothing" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-[hsl(var(--raices-sandstone))]/75" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-[hsl(var(--raices-sage-green))] mb-6">
                {t('whoWeWorkWith.title')}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(t('whoWeWorkWith.partners', { returnObjects: true }) as string[]).map((partner, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-[hsl(var(--raices-sage-green))]/5">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[hsl(var(--raices-sage-green))] flex items-center justify-center mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-[hsl(var(--raices-charcoal-earth))] leading-relaxed">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Invitation Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-[hsl(var(--raices-sandstone))]/30 to-[hsl(var(--raices-earth-brown))]/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-6">
                Partnership Invitation
              </h2>
              <p className="text-xl text-[hsl(var(--raices-charcoal-earth))] leading-relaxed mb-8 font-medium">
                We are building a network of organizations, funders, and allies committed to strengthening Latin America from within.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "NGOs seeking to strengthen internal capacity",
                "Community-led projects growing impact sustainably",
                "Foundations and donors funding capacity building",
                "Ecosystem builders creating regenerative change in the region",
              ].map((item, index) => (
                <Card key={index} className="border-[hsl(var(--raices-earth-brown))]/20 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <p className="text-[hsl(var(--raices-charcoal-earth))] leading-relaxed">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mb-12">
              <p className="text-xl text-[hsl(var(--raices-earth-brown))] font-medium mb-4">
                If you're building impact with purpose — we are ready to build with you.
              </p>
            </div>

            {/* Contact Form */}
            <Card className="border-[hsl(var(--raices-earth-brown))]/30 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-6 text-center">
                  Let's Co-Create Together
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[hsl(var(--raices-charcoal-earth))] mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-[hsl(var(--raices-andean-clay))]/30 focus:border-[hsl(var(--raices-sage-green))]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--raices-charcoal-earth))] mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-[hsl(var(--raices-andean-clay))]/30 focus:border-[hsl(var(--raices-sage-green))]"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-[hsl(var(--raices-charcoal-earth))] mb-2">
                      Organization
                    </label>
                    <Input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      required
                      className="border-[hsl(var(--raices-andean-clay))]/30 focus:border-[hsl(var(--raices-sage-green))]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[hsl(var(--raices-charcoal-earth))] mb-2">
                      Tell us about your organization and what you're looking for
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="border-[hsl(var(--raices-andean-clay))]/30 focus:border-[hsl(var(--raices-sage-green))]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[hsl(var(--raices-earth-brown))] hover:bg-[hsl(var(--raices-sage-green))] text-white transition-all duration-300"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
      
      <Footer />
    </>
  );
};

export default RaicesLatinas;
