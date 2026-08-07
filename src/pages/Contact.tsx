import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@hakamtechsol.com",
      subtext: "We reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "03131027500",
      subtext: "Mon-Fri, 9am-6pm EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Street",
      subtext: "Innovation City, IC 12345",
    },
    {
      icon: Clock,
      title: "Business Hours",
      // details: "Monday - Friday",
      subtext: "24/7 Available",
    },
  ];

  return (
    <PageTransition>
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="max-w-3xl mx-auto text-center"
          >
            
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Let's Start a{" "}
              <span className="text-gradient">Conversation</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Have a project in mind or just want to say hello? We'd love to hear from
              you. Reach out and let's create something amazing together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8 px-4 lg:px-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {info.title}
                </h3>
                <p className="text-foreground font-medium">{info.details}</p>
                <p className="text-muted-foreground text-sm">{info.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 lg:py-32 px-4 lg:px-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-accent" size={28} />
                <h2 className="text-3xl font-display font-bold">Send Us a Message</h2>
              </div>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
                All fields are required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-hero-gradient hover:opacity-90 gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="sticky top-32">
                <h2 className="text-3xl font-display font-bold mb-6">Our Location</h2>
                <p className="text-muted-foreground mb-8">
                  Visit our office or schedule a virtual meeting. We're always excited
                  to meet new clients and discuss potential collaborations.
                </p>

                {/* Map Embed */}
                <div className="rounded-2xl overflow-hidden shadow-card-hover h-[400px] bg-secondary">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7236.505274815302!2d67.09204843914836!3d24.92346206155236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338cb9fb8217f%3A0x9b93f73c2303295c!2sBlock%206%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1773937132996!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hakam TechSol Office Location"
                  />
                </div>

                {/* Quick Actions */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {/* <a
                    href="mailto:alhakamsofts@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    <Mail size={18} className="text-accent" />
                    <span className="text-sm font-medium">Email Us Directly</span>
                  </a> */}
 
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=alhakamsofts@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
>
  <Mail size={18} className="text-accent" />
  <span className="text-sm font-medium">Email Us Directly</span>
</a> 
                  <a
                    href="tel:+923092271214"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    <Phone size={18} className="text-accent" />
                    <span className="text-sm font-medium">Call Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Have questions? We've compiled answers to the most common inquiries
              to help you get started quickly.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: "How long does a typical project take?",
                  a: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex apps may take 2-6 months.",
                },
                {
                  q: "Do you provide ongoing support?",
                  a: "Yes! We offer maintenance packages and 24/7 support for all our clients after project completion.",
                },
                {
                  q: "What's your pricing structure?",
                  a: "We offer both fixed-price and hourly rates depending on project scope. Contact us for a custom quote.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 text-left shadow-card"
                >
                  <h3 className="font-display font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      

      <Footer />
    </div>
    </PageTransition>
  );
};

export default Contact;



