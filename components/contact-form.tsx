
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-headline sm:text-4xl">Get in Touch</h2>
              <div className="mt-2 h-1.5 w-20 bg-primary rounded-full"></div>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities 
                to be part of your visions. Feel free to send a message!
              </p>

              <div className="mt-12 space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@mydevfolio.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 000-0000' },
                  { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{item.label}</div>
                      <div className="text-lg font-semibold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border shadow-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mb-6 flex justify-center">
                    <CheckCircle2 className="h-20 w-20 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-4">Message Received!</h3>
                  <p className="text-muted-foreground mb-8">
                    I appreciate you reaching out. You'll hear from me within 24 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Collaboration Proposal" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project..." 
                      className="min-h-[150px] resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>Send Message <Send className="ml-2 h-4 w-4" /></>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
