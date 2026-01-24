import { Link } from 'wouter';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Pricing() {
  const packages = [
    {
      name: 'Basic',
      subtitle: 'Editing Only',
      description: 'Perfect for authors who want professional editing.',
      price: 'Custom Quote',
      features: [
        'Developmental Editing',
        'Copy Editing',
        'Proofreading',
        'Unlimited Revisions',
        'Detailed Editorial Letter',
      ],
      timeline: '4-6 weeks',
      cta: 'Get Started',
      featured: false,
    },
    {
      name: 'Standard',
      subtitle: 'Edit + Publish',
      description: 'Complete editing and publishing support.',
      price: 'Custom Quote',
      features: [
        'All Basic Package Services',
        'Publishing Support',
        'ISBN & Metadata Setup',
        'Cover Formatting',
        'File Preparation',
        'KDP & IngramSpark Setup',
      ],
      timeline: '6-10 weeks',
      cta: 'Get Started',
      featured: true,
    },
    {
      name: 'Premium',
      subtitle: 'Edit + Publish + Marketing',
      description: 'Complete solution from manuscript to bestseller.',
      price: 'Custom Quote',
      features: [
        'All Standard Package Services',
        'Book Marketing & Launch',
        'Launch Strategy Development',
        'Social Media Promotion',
        'Email Campaign Setup',
        'Post-Launch Support',
      ],
      timeline: '8-12 weeks',
      cta: 'Get Started',
      featured: false,
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
              Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the package that fits your needs. All prices are custom quotes based on your specific project.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`card-premium flex flex-col h-full ${
                  pkg.featured ? 'ring-2 ring-accent transform md:scale-105' : ''
                }`}
              >
                {pkg.featured && (
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-1">{pkg.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-2">{pkg.subtitle}</p>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                </div>

                <div className="mb-6">
                  <p className="text-4xl font-bold text-accent mb-1">{pkg.price}</p>
                  <p className="text-sm text-muted-foreground">Timeline: {pkg.timeline}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <a className={pkg.featured ? 'btn-primary block text-center' : 'btn-secondary block text-center'}>
                    {pkg.cta}
                  </a>
                </Link>
              </div>
            ))}
          </div>

          {/* Pricing Note */}
          <div className="mt-12 p-6 bg-card border border-border rounded-lg text-center">
            <p className="text-muted-foreground">
              All pricing is customized based on manuscript length, service scope, and timeline. Contact us for a detailed quote.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-spacing bg-card/50 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Every Package Includes</h2>
            <p className="text-lg text-muted-foreground">
              Beyond the specific services, all packages include these benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Professional Support',
                items: [
                  'Dedicated project manager',
                  'Direct communication channel',
                  'Regular progress updates',
                  'Expert guidance throughout',
                ],
              },
              {
                title: 'Quality Assurance',
                items: [
                  'Multiple revision rounds',
                  'Quality checks at each stage',
                  'Final manuscript approval',
                  '100% satisfaction guarantee',
                ],
              },
              {
                title: 'Deliverables',
                items: [
                  'Edited manuscript files',
                  'Detailed editorial feedback',
                  'Publishing-ready files',
                  'Marketing materials',
                ],
              },
              {
                title: 'Support',
                items: [
                  'Pre-launch consultation',
                  'Launch day support',
                  'Post-launch follow-up',
                  'Ongoing availability',
                ],
              },
            ].map((section, index) => (
              <div key={index} className="card-premium">
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold flex-shrink-0">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: 'How are prices determined?',
                  a: 'Pricing is based on manuscript length, service scope, timeline, and complexity. We provide custom quotes after reviewing your project.',
                },
                {
                  q: 'Do you offer payment plans?',
                  a: 'Yes, we offer flexible payment options. Discuss payment plans during your free consultation.',
                },
                {
                  q: 'What if I am not satisfied?',
                  a: 'We offer a 100% satisfaction guarantee. If you are not happy with our work, we will revise until you are satisfied.',
                },
                {
                  q: 'Can I upgrade my package?',
                  a: 'Absolutely. You can upgrade at any time during the project. We will adjust the scope and pricing accordingly.',
                },
                {
                  q: 'What is your refund policy?',
                  a: 'We offer refunds for services not rendered. Once work has begun, refunds are prorated based on completed work.',
                },
                {
                  q: 'Do you offer rush services?',
                  a: 'Yes, rush services are available for an additional fee. Contact us to discuss expedited timelines.',
                },
              ].map((faq, index) => (
                <div key={index} className="card-premium">
                  <h3 className="text-lg font-bold mb-3 text-accent">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="bg-gradient-to-r from-card to-card/50 border border-border rounded-xl p-8 md:p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Invest in Your Book?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start with a free consultation. We will discuss your project and provide a detailed, custom quote.
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
