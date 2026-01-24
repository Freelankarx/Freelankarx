import { Link } from 'wouter';
import { ArrowRight, CheckCircle, BookOpen, Zap, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Get Your Book Edited, Published & Marketed —{' '}
                <span className="gradient-text">Properly</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We help authors write, edit, publish, and market books that actually sell. Fiction • Non-fiction • Faith • Business.
              </p>

              {/* Key Benefits */}
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-foreground">Done-for-you services from manuscript to bestseller</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-foreground">Professional editors with 10+ years experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-foreground">100% satisfaction guarantee on all services</span>
                </li>
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <a className="btn-primary inline-flex items-center justify-center gap-2">
                    Book Free Consultation
                    <ArrowRight size={18} />
                  </a>
                </Link>
                <Link href="/pricing">
                  <a className="btn-secondary inline-flex items-center justify-center gap-2">
                    View Pricing
                    <ArrowRight size={18} />
                  </a>
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Trusted by 500+ authors worldwide</p>
                <div className="flex items-center gap-3">
                  <span className="inline-block px-3 py-1 bg-card border border-border rounded-full text-xs text-accent font-semibold">
                    ⭐ 4.9/5 Rating
                  </span>
                  <span className="inline-block px-3 py-1 bg-card border border-border rounded-full text-xs text-accent font-semibold">
                    ✓ Verified Seller
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image Placeholder */}
            <div className="relative h-96 md:h-full min-h-96 rounded-xl overflow-hidden bg-gradient-to-br from-card to-card/50 border border-border flex items-center justify-center">
              <div className="text-center space-y-4">
                <BookOpen size={64} className="text-accent mx-auto opacity-50" />
                <p className="text-muted-foreground">Premium book imagery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Authors Fail Section */}
      <section className="section-spacing bg-card/50 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Most Authors Fail</h2>
            <p className="text-lg text-muted-foreground">
              Without professional support, authors struggle with editing, formatting, distribution, and marketing. We eliminate these barriers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Poor Editing Quality',
                description: 'Typos, grammar issues, and inconsistent formatting damage credibility and sales.',
              },
              {
                icon: Award,
                title: 'Publishing Confusion',
                description: 'Navigating KDP, IngramSpark, and distribution channels is overwhelming without guidance.',
              },
              {
                icon: BookOpen,
                title: 'Zero Marketing Strategy',
                description: 'Most authors launch their books with no visibility or marketing plan in place.',
              },
            ].map((item, index) => (
              <div key={index} className="card-premium">
                <item.icon className="text-accent mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Differently */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What We Do Differently</h2>
            <p className="text-lg text-muted-foreground">
              We provide end-to-end support that transforms your manuscript into a published, marketed book.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Professional editors, formatters, and marketing specialists dedicated to your success.',
              },
              {
                title: 'Transparent Pricing',
                description: 'No hidden fees. Clear packages with defined deliverables and timelines.',
              },
              {
                title: 'Proven Process',
                description: 'Systematic approach that has helped 500+ authors publish successfully.',
              },
              {
                title: 'Full Support',
                description: 'From manuscript evaluation through launch and beyond—we are with you every step.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-spacing bg-card/50 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Comprehensive solutions for every stage of your book journey.
            </p>
            <Link href="/services">
              <a className="btn-secondary inline-flex items-center gap-2">
                View All Services
                <ArrowRight size={18} />
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'Developmental Editing', desc: 'Structure, flow, and content optimization' },
              { title: 'Copy Editing', desc: 'Grammar, style, and consistency refinement' },
              { title: 'Publishing Support', desc: 'KDP, IngramSpark, and distribution setup' },
            ].map((service, index) => (
              <div key={index} className="card-premium text-center">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="bg-gradient-to-r from-card to-card/50 border border-border rounded-xl p-8 md:p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Publish Your Book?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start with a free consultation. We'll evaluate your manuscript and create a custom publishing plan.
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
