import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Insights = () => {
  const articles = [
    {
      title: "The Five Pillars of Regenerative Business",
      excerpt: "Exploring the structural foundations that enable organizations to thrive while contributing positively to their ecosystems.",
      date: "December 2024",
      category: "Framework"
    },
    {
      title: "Conscious Leadership in Practice",
      excerpt: "How embodied authenticity and presence transform decision-making and organizational culture.",
      date: "November 2024", 
      category: "Leadership"
    },
    {
      title: "Integrating Well-being as Performance Foundation",
      excerpt: "Why workplace wellness isn't just a benefit—it's essential infrastructure for sustainable success.",
      date: "October 2024",
      category: "Well-being"
    },
    {
      title: "From Linear to Regenerative: A Business Evolution",
      excerpt: "Understanding the shift from extractive to regenerative business models and what it means for the future.",
      date: "September 2024",
      category: "Regenerative Business"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-primary mb-8 leading-tight">
              Insights
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              Thoughts, frameworks, and discoveries from our work in regenerative 
              organizational transformation.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <Card key={index} className="bg-card shadow-soft hover:shadow-elegant transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-body text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm font-body text-muted-foreground">
                        {article.date}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-display text-primary group-hover:text-primary/80 transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 font-body leading-relaxed">
                      {article.excerpt}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-6 bg-gradient-subtle">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-6">
              Stay Connected
            </h2>
            <p className="text-lg text-foreground/80 font-body mb-8 leading-relaxed">
              Subscribe to receive our latest insights on regenerative business practices 
              and conscious leadership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-body font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;