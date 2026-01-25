import { Link } from 'wouter';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Services() {
  const services = [
    {
      id: 'developmental',
      title: 'Developmental Editing',
      description: 'Comprehensive manuscript evaluation and restructuring',
      includes: [
        'Full manuscript analysis',
        'Plot and character development feedback',
        'Structure and pacing optimization',
        'Content gaps identification',
        'Detailed editorial letter',
      ],
      benefits: [
        'Stronger narrative arc',
        'Better character development',
        'Improved reader engagement',
        'Professional manuscript quality',
      ],
      forWho: 'Authors with first drafts or manuscripts needing significant restructuring',
      outcome: 'A professionally structured manuscript ready for copy editing',
      price: 'Custom quote based on word count',
    },
    {
      id: 'copy',
      title: 'Copy Editing',
      description: 'Grammar, style, and consistency refinement',
      includes: [
        'Grammar and punctuation corrections',
        'Style consistency throughout',
        'Sentence flow optimization',
        'Redundancy removal',
        'Formatting standardization',
      ],
      benefits: [
        'Polished, professional prose',
        'Consistent voice and style',
        'Improved readability',
        'Industry-standard formatting',
      ],
      forWho: 'Authors with completed manuscripts ready for final polish',
      outcome: 'Publication-ready manuscript with flawless grammar and style',
      price: 'Custom quote based on word count',
    },
    {
      id: 'proofreading',
      title: 'Proofreading',
      description: 'Final quality check before publication',
      includes: [
        'Typo and spelling corrections',
        'Final formatting review',
        'Page break verification',
        'Consistency checks',
        'Final quality assurance',
      ],
      benefits: [
        'Error-free final manuscript',
        'Professional appearance',
        'Reader confidence',
        'Reduced returns and reviews',
      ],
      forWho: 'Authors with nearly-final manuscripts before publication',
      outcome: 'Publication-ready, error-free manuscript',
      price: 'Custom quote based on word count',
    },
    {
      id: 'ghostwriting',
      title: 'Ghostwriting',
      description: 'Complete manuscript creation from your ideas',
      includes: [
        'Concept development',
        'Outline creation',
        'Full manuscript writing',
        'Your voice and style',
        'Unlimited revisions',
      ],
      benefits: [
        'Complete manuscript in your voice',
        'Professional quality',
        'Faster time to market',
        'Your vision realized',
      ],
      forWho: 'Authors with great ideas but limited time or writing skills',
      outcome: 'A complete, publication-ready manuscript',
      price: 'Custom quote based on project scope',
    },
    {
      id: 'publishing',
      title: 'Publishing Support',
      description: 'Complete publishing setup and distribution',
      includes: [
        'KDP account setup',
        'IngramSpark distribution',
        'ISBN acquisition',
        'Cover formatting',
        'File preparation',
        'Distribution optimization',
      ],
      benefits: [
        'Wider distribution reach',
        'Professional setup',
        'Retail availability',
        'Maximized sales potential',
      ],
      forWho: 'Authors ready to publish and need technical support',
      outcome: 'Your book available on Amazon, bookstores, and major retailers',
      price: 'Custom quote based on format and distribution',
    },
    {
      id: 'marketing',
      title: 'Book Marketing & Launch',
      description: 'Strategic marketing and successful book launch',
      includes: [
        'Launch strategy development',
        'Marketing plan creation',
        'Social media promotion',
        'Email campaign setup',
        'Launch day coordination',
        'Post-launch promotion',
      ],
      benefits: [
        'Increased book visibility',
        'Strong launch momentum',
        'Sustained sales',
        'Author platform growth',
      ],
      forWho: 'Authors wanting to maximize their book\'s reach and sales',
      outcome: 'Successful book launch with sustained visibility and sales',
      price: 'Custom quote based on marketing scope',
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
              Professional Services for Every Stage of Your Book
            </h1>
            <p className="text-xl text-muted-foreground">
              From manuscript to bestseller, we provide expert support at every step of your publishing journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start pb-12 ${
                  index !== services.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                {/* Left: Content */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-3">{service.title}</h2>
                    <p className="text-lg text-muted-foreground">{service.description}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground mb-3">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="text-accent flex-shrink-0 mt-1" size={18} />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <a className="btn-primary inline-flex items-center gap-2">
                      Get Started
                      <ArrowRight size={18} />
                    </a>
                  </Link>
                </div>

                {/* Right: Details */}
                <div className="space-y-6">
                  <div className="card-premium">
                    <h3 className="font-bold text-foreground mb-3">Key Benefits:</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent font-bold">✓</span>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-premium">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Who It's For:</p>
                        <p className="text-foreground font-medium">{service.forWho}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Outcome:</p>
                        <p className="text-foreground font-medium">{service.outcome}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Pricing:</p>
                        <p className="text-accent font-bold">{service.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Done-For-You Packages */}
      <section className="section-spacing bg-card/50 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Done-For-You Author Packages</h2>
            <p className="text-lg text-muted-foreground">
              Complete solutions that handle everything from editing to marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Essentials',
                services: ['Developmental Editing', 'Copy Editing', 'Proofreading'],
                description: 'Perfect for authors who want professional editing.',
              },
              {
                name: 'Complete',
                services: [
                  'Developmental Editing',
                  'Copy Editing',
                  'Proofreading',
                  'Publishing Support',
                ],
                description: 'Full editing and publishing support.',
                featured: true,
              },
              {
                name: 'Premium',
                services: [
                  'Developmental Editing',
                  'Copy Editing',
                  'Proofreading',
                  'Publishing Support',
                  'Book Marketing & Launch',
                ],
                description: 'Complete solution from manuscript to bestseller.',
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`card-premium text-center space-y-6 ${
                  pkg.featured ? 'ring-2 ring-accent transform scale-105' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <p className="text-muted-foreground">{pkg.description}</p>
                <ul className="space-y-2 text-left">
                  {pkg.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <a className={pkg.featured ? 'btn-primary block' : 'btn-secondary block'}>
                    Get Started
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="bg-gradient-to-r from-card to-card/50 border border-border rounded-xl p-8 md:p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact us for a free consultation. We'll discuss your project and recommend the perfect service package.
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
