import { Link } from 'wouter';
import { Mail, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-bold text-accent">Author Edit Marketing</h3>
            <p className="text-sm text-muted-foreground">
              Professional book editing, publishing, and marketing services for authors who want to succeed.
            </p>
            <a
              href="mailto:freelankarx@gmail.com"
              className="inline-flex items-center gap-2 text-accent hover:text-yellow-400 transition-colors"
            >
              <Mail size={16} />
              <span className="text-sm">freelankarx@gmail.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-sm text-muted-foreground hover:text-accent transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-sm text-muted-foreground hover:text-accent transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a className="text-sm text-muted-foreground hover:text-accent transition-colors">Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#editing" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Developmental Editing
                </a>
              </li>
              <li>
                <a href="#publishing" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Publishing Support
                </a>
              </li>
              <li>
                <a href="#marketing" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Book Marketing
                </a>
              </li>
              <li>
                <a href="#ghostwriting" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Ghostwriting
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.fiverr.com/bookeditorproff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Fiverr Profile"
              >
                <span className="text-sm font-semibold">Fiverr</span>
              </a>
              <a
                href="https://www.instagram.com/authoreditmarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <a
              href="https://www.fiverr.com/bookeditorproff"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-primary text-sm"
            >
              Order on Fiverr
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Author Edit Marketing. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
