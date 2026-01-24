import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/process', label: 'Process' },
    { href: '/results', label: 'Results' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 text-xl font-bold text-accent hover:text-yellow-400 transition-colors">
            <span className="font-playfair text-2xl">Author Edit</span>
            <span className="text-xs text-muted-foreground">MARKETING</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                {link.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact">
            <a className="btn-secondary text-sm">Book Consultation</a>
          </Link>
          <a
            href="https://www.fiverr.com/bookeditorproff"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Order on Fiverr
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Link href="/contact">
                <a className="btn-secondary text-sm text-center" onClick={() => setIsOpen(false)}>
                  Book Consultation
                </a>
              </Link>
              <a
                href="https://www.fiverr.com/bookeditorproff"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm text-center"
              >
                Order on Fiverr
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
