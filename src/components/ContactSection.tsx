import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Send, MessageSquare, Github, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { SectionBackground } from './SectionBackground';

import { siteConfig } from '@/data';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.contactEmail}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
        })
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: 'Message sent successfully!',
          description: 'Thank you for reaching out. I will get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          variant: "destructive",
          title: 'Something went wrong',
          description: 'Please try again later or email me directly.',
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: 'Error sending message',
        description: 'Please try again later or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <SectionBackground />
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Contact
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            If you would like to connect or discuss opportunities, feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Let us Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am always interested in hearing about new opportunities,
                interesting projects, or simply connecting with fellow professionals
                in the technology space.
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="glass-card p-4 flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground break-all">
                    {siteConfig.contactEmail}
                  </div>
                </div>
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">
                    Connect on LinkedIn
                  </div>
                </div>
              </a>

              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">GitHub</div>
                  <div className="text-sm text-muted-foreground">
                    Follow on GitHub
                  </div>
                </div>
              </a>

              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Youtube className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">YouTube</div>
                  <div className="text-sm text-muted-foreground">
                    Subscribe to Channel
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card-elevated p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
