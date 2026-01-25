import { Link } from 'wouter';
import { ArrowRight, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Results() {
  const caseStudies = [
    {
      id: 1,
      title: 'From Self-Published to Bestseller',
      author: 'Sarah M.',
      genre: 'Fiction',
      image: '📚',
      before: 'Self-published on Amazon with no marketing strategy',
      after: 'Ranked #5 in Fiction category after professional editing and launch campaign',
      testimonial: 'The editing was incredible. My book went from amateur to professional quality. The marketing support helped me reach readers I never would have found on my own.',
      rating: 5,
    },
    {
      id: 2,
      title: 'Non-Fiction Author Success',
      author: 'James L.',
      genre: 'Business',
      image: '📖',
      before: 'Completed manuscript with no publishing experience',
      after: 'Published on KDP, IngramSpark, and major retailers within 8 weeks',
      testimonial: 'I had no idea how to navigate the publishing process. They handled everything professionally and kept me informed every step of the way.',
      rating: 5,
    },
    {
      id: 3,
      title: 'Faith-Based Author Launch',
      author: 'Michelle T.',
      genre: 'Faith',
      image: '✨',
      before: 'Manuscript needed significant structural editing',
      after: 'Successfully launched with strong initial sales and positive reviews',
      testimonial: 'The developmental editing completely transformed my book. The structure is now clear and compelling. Highly recommend!',
      rating: 5,
    },
  ];

  const testimonials = [
    {
      text: 'Professional, thorough, and incredibly supportive. They made the entire publishing process stress-free.',
      author: 'Jennifer K.',
      role: 'Fiction Author',
      rating: 5,
    },
    {
      text: 'Best investment I made for my book. The editing quality is exceptional and the marketing guidance was invaluable.',
      author: 'David R.',
      role: 'Business Author',
      rating: 5,
    },
    {
      text: 'From manuscript to published book in under 3 months. They exceeded all my expectations.',
      author: 'Lisa P.',
      role: 'First-Time Author',
      rating: 5,
    },
    {
      text: 'The attention to detail and commitment to excellence is unmatched. Highly recommended!',
      author: 'Robert M.',
      role: 'Non-Fiction Author',
      rating: 5,
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
              Real Results from Real Authors
            </h1>
            <p className="text-xl text-muted-foreground">
              See how we have helped 500+ authors publish and market their books successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-spacing">
        <div className="container">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12 ${
                  index !== caseStudies.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                {/* Left: Before/After */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{study.title}</h3>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-accent">{study.author}</span> • {study.genre} Author
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="card-premium">
                      <p className="text-sm text-muted-foreground font-semibold mb-2">BEFORE</p>
                      <p className="text-foreground">{study.before}</p>
                    </div>
                    <div className="card-premium border-2 border-accent">
                      <p className="text-sm text-accent font-semibold mb-2">AFTER</p>
                      <p className="text-foreground font-semibold">{study.after}</p>
                    </div>
                  </div>

                  <div className="card-premium">
                    <div className="flex gap-1 mb-3">
                      {[...Array(study.rating)].map((_, i) => (
                        <Star key={i} className="text-accent fill-accent" size={18} />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{study.testimonial}"</p>
                    <p className="text-sm text-accent font-semibold mt-3">— {study.author}</p>
                  </div>
                </div>

                {/* Right: Image Placeholder */}
                <div className="h-80 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl">{study.image}</div>
                    <p className="text-muted-foreground">{study.genre} Book Cover</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing bg-card/50 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { stat: '500+', label: 'Authors Served' },
              { stat: '1000+', label: 'Books Published' },
              { stat: '4.9/5', label: 'Average Rating' },
              { stat: '95%', label: 'Repeat Clients' },
            ].map((item, index) => (
              <div key={index} className="card-premium text-center">
                <p className="text-4xl font-bold text-accent mb-2">{item.stat}</p>
                <p className="text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Authors Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear directly from authors who have worked with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-premium">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={18} />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-accent">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-spacing bg-card/50 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trusted Platforms & Services</h2>
            <p className="text-lg text-muted-foreground">
              We are verified sellers and partners on leading platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Amazon KDP', icon: '📚' },
              { name: 'IngramSpark', icon: '🌟' },
              { name: 'Goodreads', icon: '📖' },
              { name: 'Fiverr Pro', icon: '✓' },
            ].map((badge, index) => (
              <div key={index} className="card-premium text-center">
                <div className="text-4xl mb-3">{badge.icon}</div>
                <p className="font-semibold text-foreground">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Guarantee */}
      <section className="section-spacing">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="card-premium border-2 border-accent space-y-6">
              <h2 className="text-3xl font-bold">100% Satisfaction Guarantee</h2>
              <p className="text-lg text-muted-foreground">
                We are confident in the quality of our work. If you are not completely satisfied with any service, we will revise it until you are happy or provide a full refund.
              </p>
              <div className="space-y-3">
                <p className="flex items-start gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span>Unlimited revision rounds until you are satisfied</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span>Professional quality or your money back</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-accent font-bold flex-shrink-0">✓</span>
                  <span>Dedicated support throughout your project</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="bg-gradient-to-r from-card to-card/50 border border-border rounded-xl p-8 md:p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Join Our Success Stories?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your publishing journey today with a free consultation.
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
