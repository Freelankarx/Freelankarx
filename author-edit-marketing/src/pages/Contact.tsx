import { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    genre: '',
    wordCount: '',
    services: '',
    deadline: '',
    message: '',
  });

  const [fileSelected, setFileSelected] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileSelected(e.target.files[0]);
    }
  };

  const submitMutation = trpc.contact.submit.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.genre || !formData.services) {
        toast.error('Please fill in all required fields');
        return;
      }

      // Submit form
      await submitMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        genre: formData.genre,
        wordCount: formData.wordCount,
        servicesNeeded: formData.services,
        deadline: formData.deadline,
        message: formData.message,
        manuscriptFileName: fileSelected?.name,
      });

      // Show success message
      toast.success('Intake form submitted! We will contact you within 24 hours.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        genre: '',
        wordCount: '',
        services: '',
        deadline: '',
        message: '',
      });
      setFileSelected(null);
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 via-transparent to-transparent">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Get Your Book Published
            </h1>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we will contact you within 24 hours to discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Have questions? Reach out to us directly or fill out the intake form.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:freelankarx@gmail.com" className="text-accent hover:text-yellow-400 transition-colors">
                      freelankarx@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Response Time</h3>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">Availability</h3>
                    <p className="text-muted-foreground">Available worldwide</p>
                  </div>
                </div>
              </div>

              {/* Fiverr Link */}
              <div className="card-premium">
                <h3 className="font-bold mb-3">Order on Fiverr</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Prefer to order through Fiverr? We offer secure payment and buyer protection.
                </p>
                <a
                  href="https://www.fiverr.com/bookeditorproff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary block text-center text-sm"
                >
                  Visit Fiverr Profile
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="card-premium space-y-6">
                <h2 className="text-2xl font-bold">Author Intake Form</h2>

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="bg-background border-border"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="bg-background border-border"
                  />
                </div>

                {/* Genre */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Book Genre <span className="text-accent">*</span>
                  </label>
                  <Select value={formData.genre} onValueChange={(value) => handleSelectChange('genre', value)}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select your book genre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fiction">Fiction</SelectItem>
                      <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                      <SelectItem value="faith">Faith/Spirituality</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="self-help">Self-Help</SelectItem>
                      <SelectItem value="memoir">Memoir</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Word Count */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Manuscript Word Count
                  </label>
                  <Select value={formData.wordCount} onValueChange={(value) => handleSelectChange('wordCount', value)}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select word count range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-20k">0 - 20,000 words</SelectItem>
                      <SelectItem value="20-50k">20,000 - 50,000 words</SelectItem>
                      <SelectItem value="50-80k">50,000 - 80,000 words</SelectItem>
                      <SelectItem value="80-100k">80,000 - 100,000 words</SelectItem>
                      <SelectItem value="100k+">100,000+ words</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Services Needed */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Services Needed <span className="text-accent">*</span>
                  </label>
                  <Select value={formData.services} onValueChange={(value) => handleSelectChange('services', value)}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select services" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="editing">Editing Only</SelectItem>
                      <SelectItem value="editing-publishing">Editing + Publishing</SelectItem>
                      <SelectItem value="full-package">Full Package (Edit + Publish + Marketing)</SelectItem>
                      <SelectItem value="ghostwriting">Ghostwriting</SelectItem>
                      <SelectItem value="marketing">Marketing Only</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Deadline */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Target Deadline
                  </label>
                  <Input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                  />
                </div>

                {/* Manuscript Upload */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Upload Sample Manuscript (Optional)
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-accent transition-colors">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".doc,.docx,.pdf,.txt"
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <p className="text-muted-foreground">
                        {fileSelected ? (
                          <>
                            <span className="text-accent font-semibold">{fileSelected.name}</span> selected
                          </>
                        ) : (
                          <>
                            Click to upload or drag and drop
                            <br />
                            <span className="text-xs">(DOC, DOCX, PDF, TXT)</span>
                          </>
                        )}
                      </p>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Additional Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your book and goals..."
                    rows={5}
                    className="bg-background border-border resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {submitMutation.isPending ? 'Submitting...' : 'Submit Intake Form'}
                  {!submitMutation.isPending && <Send size={18} />}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We will contact you within 24 hours to discuss your project and provide a custom quote.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-card/50 border-y border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {[
                {
                  q: 'How long does it take to hear back?',
                  a: 'We respond to all inquiries within 24 hours. Usually much faster!',
                },
                {
                  q: 'Do you require a deposit?',
                  a: 'Yes, we require a deposit to secure your spot. The remaining balance is due upon completion.',
                },
                {
                  q: 'Can I upload my manuscript later?',
                  a: 'Absolutely. You can submit your manuscript during your consultation call.',
                },
                {
                  q: 'What file formats do you accept?',
                  a: 'We accept DOC, DOCX, PDF, and TXT formats. We can also work with other formats if needed.',
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

      <Footer />
    </div>
  );
}
