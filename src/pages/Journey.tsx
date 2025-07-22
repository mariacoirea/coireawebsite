
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle, Users, Lightbulb, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Journey = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    teamSize: "",
    challenges: [] as string[],
    customChallenge: "",
    goals: "",
    timeline: "",
    budget: "",
    foundUs: "",
    additionalContext: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const challenges = [
    "Lack of organizational clarity and purpose",
    "Poor team collaboration and communication",
    "High stress and burnout levels",
    "Weak leadership alignment",
    "Cultural disconnect",
    "Low employee engagement",
    "Resistance to change",
    "Siloed departments",
    "Unclear vision and strategy",
    "Performance and well-being imbalance"
  ];

  const handleChallengeChange = (challenge: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      challenges: checked 
        ? [...prev.challenges, challenge]
        : prev.challenges.filter(c => c !== challenge)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="py-20 px-6">
            <div className="container mx-auto max-w-3xl text-center">
              <div className="mb-8">
                <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
                <h1 className="text-4xl font-display font-semibold text-primary mb-4">
                  Your Journey Begins Now
                </h1>
                <p className="text-xl text-foreground/80 font-body leading-relaxed mb-8">
                  Thank you for taking the first step toward conscious organizational transformation.
                </p>
              </div>
              
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20 p-8">
                <h2 className="text-2xl font-display font-semibold text-primary mb-4">
                  What Happens Next?
                </h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <p className="text-foreground/80 font-body">
                      <strong>Within 24 hours:</strong> We'll reach out to schedule your complimentary clarity call
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-primary">2</span>
                    </div>
                    <p className="text-foreground/80 font-body">
                      <strong>Discovery Call (30-45 min):</strong> We'll explore your specific challenges and co-create a tailored approach
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-primary">3</span>
                    </div>
                    <p className="text-foreground/80 font-body">
                      <strong>Custom Proposal:</strong> We'll design a transformation pathway aligned with your organization's unique needs and timeline
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" id="journey-start">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-warm-beige via-aura-pearl/80 to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-6 leading-tight">
              Begin Your Transformation Journey
            </h1>
            <p className="text-xl text-foreground/80 font-body leading-relaxed mb-8 max-w-3xl mx-auto">
              Every meaningful transformation starts with a single step. Share your context with us, 
              and let's co-create a pathway toward organizational coherence, vitality, and purpose.
            </p>
            <div className="flex justify-center items-center space-x-8 mb-12">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-foreground/70 font-body">500+ Leaders Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-foreground/70 font-body">Proven Framework</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                <span className="text-foreground/70 font-body">Regenerative Approach</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-card/60 backdrop-blur-sm border-primary/10">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-display font-semibold text-primary mb-4">
                  Tell Us About Your Organization
                </CardTitle>
                <p className="text-lg text-foreground/70 font-body">
                  Help us understand your unique context so we can design the most effective approach for your transformation.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-semibold text-primary">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-body text-foreground/70 mb-1 block">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          placeholder="Your first name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-body text-foreground/70 mb-1 block">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          placeholder="Your last name"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-sm font-body text-foreground/70 mb-1 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-body text-foreground/70 mb-1 block">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Organization Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-semibold text-primary">Organization Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company" className="text-sm font-body text-foreground/70 mb-1 block">
                          Company Name *
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                          placeholder="Your organization"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="role" className="text-sm font-body text-foreground/70 mb-1 block">
                          Your Role *
                        </Label>
                        <Input
                          id="role"
                          value={formData.role}
                          onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                          placeholder="CEO, Manager, HR Director, etc."
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="teamSize" className="text-sm font-body text-foreground/70 mb-1 block">
                        Team/Organization Size
                      </Label>
                      <Select value={formData.teamSize} onValueChange={(value) => setFormData(prev => ({ ...prev, teamSize: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 people</SelectItem>
                          <SelectItem value="11-50">11-50 people</SelectItem>
                          <SelectItem value="51-200">51-200 people</SelectItem>
                          <SelectItem value="201-500">201-500 people</SelectItem>
                          <SelectItem value="500+">500+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Current Challenges */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-semibold text-primary">Current Challenges</h3>
                    <p className="text-sm text-foreground/70 font-body">
                      Select all that apply to your organization:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {challenges.map((challenge) => (
                        <div key={challenge} className="flex items-center space-x-2">
                          <Checkbox
                            id={challenge}
                            checked={formData.challenges.includes(challenge)}
                            onCheckedChange={(checked) => handleChallengeChange(challenge, checked as boolean)}
                          />
                          <Label htmlFor={challenge} className="text-sm font-body cursor-pointer">
                            {challenge}
                          </Label>
                        </div>
                      ))}
                    </div>
                    <div>
                      <Label htmlFor="customChallenge" className="text-sm font-body text-foreground/70 mb-1 block">
                        Other challenges (please describe):
                      </Label>
                      <Textarea
                        id="customChallenge"
                        value={formData.customChallenge}
                        onChange={(e) => setFormData(prev => ({ ...prev, customChallenge: e.target.value }))}
                        placeholder="Describe any specific challenges not listed above..."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Goals and Outcomes */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-semibold text-primary">Desired Outcomes</h3>
                    <div>
                      <Label htmlFor="goals" className="text-sm font-body text-foreground/70 mb-1 block">
                        What are your main goals for this transformation? *
                      </Label>
                      <Textarea
                        id="goals"
                        value={formData.goals}
                        onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                        placeholder="Describe what success looks like for your organization..."
                        rows={4}
                        required
                      />
                    </div>
                  </div>

                  {/* Timeline and Budget */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-semibold text-primary">Project Scope</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="timeline" className="text-sm font-body text-foreground/70 mb-1 block">
                          Preferred Timeline
                        </Label>
                        <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Start immediately</SelectItem>
                            <SelectItem value="1-3months">Within 1-3 months</SelectItem>
                            <SelectItem value="3-6months">Within 3-6 months</SelectItem>
                            <SelectItem value="6-12months">Within 6-12 months</SelectItem>
                            <SelectItem value="exploring">Just exploring options</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget" className="text-sm font-body text-foreground/70 mb-1 block">
                          Investment Range
                        </Label>
                        <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">Under $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k+">$100,000+</SelectItem>
                            <SelectItem value="discuss">Prefer to discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Context */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-semibold text-primary">Additional Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="foundUs" className="text-sm font-body text-foreground/70 mb-1 block">
                          How did you find COIREA?
                        </Label>
                        <Select value={formData.foundUs} onValueChange={(value) => setFormData(prev => ({ ...prev, foundUs: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select source" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="search">Google search</SelectItem>
                            <SelectItem value="referral">Referral from colleague</SelectItem>
                            <SelectItem value="social">Social media</SelectItem>
                            <SelectItem value="event">Event or conference</SelectItem>
                            <SelectItem value="content">Blog or content</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="additionalContext" className="text-sm font-body text-foreground/70 mb-1 block">
                        Anything else you'd like us to know?
                      </Label>
                      <Textarea
                        id="additionalContext"
                        value={formData.additionalContext}
                        onChange={(e) => setFormData(prev => ({ ...prev, additionalContext: e.target.value }))}
                        placeholder="Share any additional context, questions, or specific areas of focus..."
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button 
                      type="submit"
                      variant="hero" 
                      size="lg"
                      className="text-lg px-12 py-4 group"
                    >
                      Begin My Transformation Journey
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-xs text-foreground/60 font-body mt-4">
                      We'll reach out within 24 hours to schedule your complimentary clarity call
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Journey;
