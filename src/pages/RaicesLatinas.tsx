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
import { useState } from "react";
import coireaLogo from "@/assets/coirea-logo.png";
const raicesCulturalHero = "/lovable-uploads/raices-cultural-hero.png";
import mayanPatternsBg from "@/assets/mayan-patterns-bg.png";
import andeanPeopleBg from "@/assets/andean-people-bg.jpg";

const RaicesLatinas = () => {
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
        title="COIREA - Raíces Latinas | Strengthening Latin American Organizations"
        description="Social impact division dedicated to strengthening NGOs, social enterprises, and community-led initiatives across Latin America using the COIREA Regenerative Operating System."
        keywords="Latin America NGOs, social enterprises, indigenous communities, organizational development, capacity building, COIREA OS, regenerative organizations, community impact"
        url="/raices-latinas"
      />

      <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--raices-sandstone))] to-background overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
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
                COIREA – Raíces Latinas
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl text-[hsl(var(--raices-charcoal-earth))] font-body font-normal max-w-5xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
                Strengthening organizations that shape the future of Latin America
              </p>

              <div className="max-w-5xl mx-auto bg-[hsl(var(--raices-sandstone))]/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <p className="text-lg md:text-xl text-[hsl(var(--raices-charcoal-earth))] leading-relaxed font-medium drop-shadow-sm">
                  Latin America is not a region in need of saving. It is a land of memory, courage, and creation — where transformation already lives in communities, collectives, and leaders building change every day. What is missing is not purpose. What is missing is structure that sustains purpose.
                </p>
                <p className="text-lg md:text-xl text-[hsl(var(--raices-charcoal-earth))] leading-relaxed mt-4 font-medium drop-shadow-sm">
                  <strong className="text-[hsl(var(--raices-earth-brown))] font-semibold">COIREA – Raíces Latinas</strong> exists to strengthen the organizations that protect territory, culture, and human dignity across the region. We bring capacity, clarity, and long-term sustainability to NGOs, social enterprises, and community-led initiatives — so their work can grow with integrity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* A New Path Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-6">
                A New Path for Impact in Latin America
              </h2>
              <p className="text-xl text-[hsl(var(--raices-charcoal-earth))] max-w-5xl mx-auto leading-relaxed font-medium">
                Latin America is a land of intelligence, resilience, and cultural depth. But many organizations working for social transformation struggle to sustain their impact over time. Not because of lack of purpose — but because of lack of structure.
              </p>
            </div>

            {/* Challenges Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { icon: MayanDiamond, text: "Teams operate without aligned roles or rhythm" },
                { icon: MayanConcentric, text: "Leadership is exhausted by reactive operations" },
                { icon: MayanChevron, text: "Growth is limited by donor dependency" },
                { icon: MayanSteps, text: "Programs lack system continuity" },
                { icon: MayanCross, text: "Culture and purpose get lost as organizations grow" },
              ].map((item, index) => (
                <Card key={index} className="border-[hsl(var(--raices-andean-clay))]/20 bg-white/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <item.icon className="w-8 h-8 text-[hsl(var(--raices-deep-copper))] mb-3" strokeWidth={2} />
                    <p className="text-[hsl(var(--raices-charcoal-earth))] leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-6 max-w-5xl mx-auto">
              <p className="text-2xl font-display text-[hsl(var(--raices-sage-green))] font-semibold">
                Raíces Latinas exists to change that.
              </p>
              <p className="text-lg text-[hsl(var(--raices-charcoal-earth))] leading-relaxed font-medium">
                We work with organizations ready to evolve from good intentions to scalable transformation — in a way that remains human, ethical, and deeply grounded in purpose.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="relative py-24 px-6 overflow-hidden">
          {/* Background with pattern image */}
          <div className="absolute inset-0">
            <img 
              src={mayanPatternsBg} 
              alt="Mayan patterns background" 
              className="w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-[hsl(var(--raices-sandstone))]/60" />
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-6">
                What We Do
              </h2>
              <p className="text-xl text-[hsl(var(--raices-charcoal-earth))] max-w-5xl mx-auto leading-relaxed font-medium">
                We support organizations to lead, organize, and grow with clarity and integrity by applying COIREA OS through co-created transformation journeys.
              </p>
            </div>

            {/* Focus Areas Table */}
            <div className="space-y-4 mb-12">
              {[
                {
                  area: "Organizational Clarity",
                  purpose: "Define structure, roles, responsibilities and decision-making models",
                  icon: MayanSteps
                },
                {
                  area: "Strategic Direction",
                  purpose: "Align mission and execution through operational roadmaps",
                  icon: MayanConcentric
                },
                {
                  area: "Leadership Development",
                  purpose: "Train leadership teams in conscious, collaborative, and accountable leadership",
                  icon: MayanSun
                },
                {
                  area: "Sustainability & Partnerships",
                  purpose: "Design long-term funding and impact partnership strategies",
                  icon: MayanBird
                },
              ].map((item, index) => (
                <Card key={index} className="border-[hsl(var(--raices-earth-brown))]/20 hover:border-[hsl(var(--raices-sage-green))]/40 transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[hsl(var(--raices-sage-green))]/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[hsl(var(--raices-sage-green))]" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-2">
                        {item.area}
                      </h3>
                      <p className="text-[hsl(var(--raices-charcoal-earth))] leading-relaxed font-medium">
                        {item.purpose}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl font-display italic text-[hsl(var(--raices-deep-copper))]">
                We don't deliver templates. We co-create systems with each organization based on their culture, context, and purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-[hsl(var(--raices-sage-green))] mb-6">
                Our Approach
              </h2>
              <p className="text-xl text-[hsl(var(--raices-charcoal-earth))] max-w-5xl mx-auto leading-relaxed font-medium">
                Our work is relational, strategic, and grounded in Latin American realities. We build transformation from the inside out.
              </p>
            </div>

            {/* Transformation Cycle */}
            <div className="grid md:grid-cols-5 gap-6 mb-12">
              {[
                { step: "Diagnose", desc: "current reality, patterns, system gaps" },
                { step: "Design", desc: "custom operating model based on COIREA OS" },
                { step: "Implement", desc: "structure + leadership + execution rhythm" },
                { step: "Sustain", desc: "internal ownership + long-term growth" },
                { step: "Evolve", desc: "continuous improvement and adaptive strategy" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--raices-sage-green))] to-[hsl(var(--raices-earth-brown))] flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-display font-bold text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-2">
                    {item.step}
                  </h3>
                  <p className="text-sm text-[hsl(var(--raices-charcoal-earth))] font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center space-y-4">
              <p className="text-2xl font-display text-[hsl(var(--raices-deep-copper))] font-semibold">
                This is not consulting.
              </p>
              <p className="text-xl text-[hsl(var(--raices-charcoal-earth))] font-medium">
                This is capacity transfer and organizational empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-6">
                Programs
              </h2>
              <p className="text-xl text-[hsl(var(--raices-charcoal-earth))] max-w-5xl mx-auto leading-relaxed mb-4 font-medium">
                Co-Created With Each Partner
              </p>
              <p className="text-lg text-[hsl(var(--raices-charcoal-earth))] max-w-5xl mx-auto font-medium">
                Every organization is unique. That's why our programs are designed as co-creation journeys, not pre-made packages.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: MayanPyramid,
                  name: "Seed Program",
                  subtitle: "Organizational Foundations",
                  description: "Build internal clarity and structure with COIREA OS.",
                  color: "raices-sage-green"
                },
                {
                  icon: MayanSun,
                  name: "Build Program",
                  subtitle: "Leadership & Execution",
                  description: "Develop strong operational rhythm and leadership capacity.",
                  color: "raices-deep-copper"
                },
                {
                  icon: MayanConcentric,
                  name: "Thrive Program",
                  subtitle: "Regenerative Growth",
                  description: "Create long-term sustainability and aligned partnership ecosystems.",
                  color: "raices-earth-brown"
                },
              ].map((program, index) => (
                <Card key={index} className="border-[hsl(var(--raices-andean-clay))]/30 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-full bg-[hsl(var(--${program.color}))]/10 flex items-center justify-center mb-6`}>
                      <program.icon className={`w-8 h-8 text-[hsl(var(--${program.color}))]`} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-[hsl(var(--raices-earth-brown))] mb-2">
                      {program.name}
                    </h3>
                    <p className="text-lg text-[hsl(var(--raices-sage-green))] font-medium mb-4">
                      {program.subtitle}
                    </p>
                    <p className="text-[hsl(var(--raices-charcoal-earth))] leading-relaxed font-medium">
                      {program.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-[hsl(var(--raices-charcoal-earth))] italic font-medium">
                Each program can be delivered in Spanish or English, onsite or online, and fully adapted to local context, culture, and team reality.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Work With Section */}
        <section className="py-24 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-[hsl(var(--raices-sage-green))] mb-6">
                Who We Work With
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "NGOs and nonprofit organizations",
                "Indigenous and rural cooperatives",
                "Women-led economic initiatives",
                "Regenerative community projects",
                "Social enterprises",
                "Capacity-building foundations and alliances",
              ].map((partner, index) => (
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

            <div className="text-center mt-8">
              <p className="text-[hsl(var(--raices-charcoal-earth))] font-medium">
                Or reach us directly at{" "}
                <a href="mailto:raices@coirea.com" className="text-[hsl(var(--raices-sage-green))] hover:text-[hsl(var(--raices-earth-brown))] transition-colors underline">
                  raices@coirea.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-12 px-6 bg-[hsl(var(--raices-earth-brown))]/5 border-t border-[hsl(var(--raices-andean-clay))]/20">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-sm text-[hsl(var(--raices-charcoal-earth))]">
              © 2024 COIREA - Raíces Latinas. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default RaicesLatinas;
