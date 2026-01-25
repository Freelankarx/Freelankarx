import { Link } from 'wouter';
import { ArrowRight, MessageSquare, FileText, PenTool, Rocket, BookOpen, Headphones } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Process() {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: 'Free Consultation',
      description: 'We discuss your book, goals, target audience, and publishing timeline. This helps us understand your vision and recommend the best services.',
      details: [
        'Initial project assessment',
        'Goal and timeline discussion',
        'Service recommendations',
        'Custom quote provided',
      ],
    },
    {
      number: 2,
      icon: FileText,
      title: 'Manuscript Evaluation',
      description: 'We thoroughly review your manuscript, identifying strengths, areas for improvement, and creating a detailed action plan.',
      details: [
        'Comprehensive manuscript analysis',
        'Detailed editorial feedback',
        'Improvement recommendations',
        'Revision roadmap created',
      ],
    },
    {
      number: 3,
      icon: PenTool,
      title: 'Editing & Revisions',
      description: 'Our expert editors work on your manuscript according to your chosen service level, providing professional editing and unlimited revisions.',
      details: [
        'Professional editing applied',
        'Unlimited revision rounds',
        'Author feedback incorporated',
        'Quality assurance checks',
      ],
    },
    {
      number: 4,
      icon: Rocket,
      title: 'Publishing Setup',
      description: 'We handle all technical aspects of publishing including ISBN acquisition, cover formatting, and platform setup.',
      details: [
        'ISBN and metadata setup',
        'Cover formatting optimization',
        'File preparation for all formats',
        'Platform account creation',
      ],
    },
    {
      number: 5,
      icon: BookOpen,
      title: 'Launch & Marketing',
      description: 'Your book goes live with coordinated marketing efforts to maximize visibility and sales from day one.',
      details: [
        'Strategic launch planning',
        'Marketing campaign execution',
        'Social media promotion',
        'Email marketing support',
      ],
    },
    {
      number: 6,
      icon: Headphones,
      title: 'Ongoing Support',
      description: 'We continue supporting your book\'s success with post-launch marketing, reader engagement, and sales optimization.',
      details: [
        'Sustained marketing efforts',
        'Sales performance tracking',
        'Reader engagement support',
        'Long-term growth strategy',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 via-transparent to-transparent">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground">
              Our proven 6-step process takes your manuscript from concept to published bestseller.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-spacing">
        <div className="container">
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {/* Connector Line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-8 top-32 w-1 h-24 bg-gradient-to-b from-accent to-accent/20 md:hidden" />
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Left: Step Number and Icon */}
                    <div className="flex gap-6">
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                          <Icon className="text-accent" size={32} />
                        </div>
                        {index !== steps.length - 1 && (
                          <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-accent to-accent/20" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-bold mb-2">
                          Step {step.number}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div className="card-premium">
                      <h4 className="font-bold text-foreground mb-4">What Happens:</h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-accent font-bold flex-shrink-0">✓</span>
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-spacing bg-card/50 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Timeline & Expectations</h2>
            <p className="text-lg text-muted-foreground">
              Most projects take 4-12 weeks from consultation to launch, depending on scope and your availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { phase: 'Consultation', duration: '1 week', desc: 'Initial meeting and planning' },
              { phase: 'Editing', duration: '2-4 weeks', desc: 'Manuscript revisions' },
              { phase: 'Publishing Setup', duration: '1-2 weeks', desc: 'Technical preparation' },
              { phase: 'Launch', duration: '1-2 weeks', desc: 'Go live and market' },
            ].map((item, index) => (
              <div key={index} className="card-premium text-center">
                <p className="text-sm text-accent font-bold mb-2">PHASE {index + 1}</p>
                <h3 className="text-xl font-bold mb-2">{item.phase}</h3>
                <p className="text-lg text-accent font-bold mb-3">{item.duration}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Our Process Works</h2>
            <p className="text-lg text-muted-foreground">
              We have refined this process through 500+ successful book projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Expert Guidance',
                description: 'Each step is guided by publishing industry experts with 10+ years of experience.',
              },
              {
                title: 'Clear Communication',
                description: 'You are updated at every stage with detailed feedback and next steps.',
              },
              {
                title: 'Proven Results',
                description: 'Authors who follow our process see 3x higher launch sales on average.',
              },
            ].map((item, index) => (
              <div key={index} className="card-premium space-y-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="bg-gradient-to-r from-card to-card/50 border border-border rounded-xl p-8 md:p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Start Your Publishing Journey?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a free consultation to discuss your project and get started with step 1.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <a className="btn-primary inline-flex items-center justify-center gap-2">
                  Book Free Consultation
                  <ArrowRight size={18} />
                </a>
              </Link>
              <a
                href="https://www.fiverr.com/bookeditorproff"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Order on Fiverr
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
