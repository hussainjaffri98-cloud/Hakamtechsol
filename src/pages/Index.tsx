// Hakam TechSol Home Page
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Smartphone, Users, CheckCircle, Zap, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-tech.jpg";
import webDevImage from "@/assets/web-dev.jpg";
import mobileDevImage from "@/assets/mobile-dev.jpg";
import freelanceImage from "@/assets/freelance.jpg";
import logo from "@/assets/logo.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const logoReveal = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  },
};

const circuitLines = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut" as const,
      delay: 0.3
    }
  },
};

const Index = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies.",
      image: webDevImage,
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional experiences.",
      image: mobileDevImage,
    },
    {
      icon: Users,
      title: "AI Automation",
      description: "Expert AI Automation developers ready to bring your vision to life.",
      image: freelanceImage,
    },
  ];

  const features = [
    { icon: Zap, text: "Fast Delivery" },
    { icon: Shield, text: "Secure Solutions" },
    { icon: Star, text: "Quality First" },
    { icon: CheckCircle, text: "24/7 Support" },
  ];

  return (
    <PageTransition>
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center pt-20 px-4 md:px-10 lg:px-20 overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 z-0">
    <img
      src={heroImage}
      alt="Technology innovation"
      className="w-full h-full object-cover opacity-30"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
  </div>

  <div className="container mx-auto relative z-10">
    <div className="flex flex-col items-center justify-center text-center">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl flex flex-col items-center" 
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
          Transforming Ideas Into{" "}
          <span className="text-gradient">Digital Reality</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl bg-color-black">
          At Hakam TechSol, we craft innovative technology solutions that empower
          businesses to thrive in the digital age. Your vision, our expertise.
        </p>

        {/* Buttons Container - Isko check karein */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center w-full">
          {/* Pehla Button (Gradient wala) */}
          <Link to="/contact" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              className="bg-hero-gradient text-white border-none hover:scale-105 transition-all w-full px-8 py-6 text-lg"
            >
              Start Your Project <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>

          {/* Doosra Button (Outline wala) */}
          <Link to="/services" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-foreground hover:bg-primary/10 hover:scale-105 transition-all w-full px-8 py-6 text-lg"
            >
              Explore Services
            </Button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 pt-8 border-t border-border w-full">
          {features.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-muted-foreground">
              <Icon size={18} className="text-accent" />
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>
      {/* Services Preview */}
      <section className="py-8 lg:py-10 bg-secondary/25">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We deliver comprehensive technology solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 px-4 lg:px-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center mb-4 -mt-12 relative z-10 shadow-lg">
                    <service.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 lg:py-24 px-4 lg:px-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
                Technology That Drives{" "}
                <span className="text-gradient">Success</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We combine technical expertise with creative thinking to deliver
                solutions that not only meet but exceed your expectations. Our
                commitment to quality and innovation sets us apart.
              </p>

              <div className="space-y-4">
                {[
                  "Expert team with years of industry experience",
                  "Cutting-edge technologies and best practices",
                  "Transparent communication throughout projects",
                  "Ongoing support and maintenance services",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="text-accent flex-shrink-0" size={20} />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/about" className="inline-block mt-8">
                <Button className="bg-hero-gradient hover:opacity-90 gap-2">
                  About Our Company <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={webDevImage}
                  alt="Professional workspace"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                      <Zap className="text-accent-foreground" size={24} />
                    </div>
                    <div>
                      <p className="font-display font-semibold">100+ Projects Delivered</p>
                      <p className="text-sm text-muted-foreground">Across multiple industries</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-hero-gradient rounded-2xl -z-10 opacity-50" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-2xl -z-10 opacity-30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let's collaborate to bring your ideas to life. Get in touch with us today
              and start your digital transformation journey.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-card text-foreground hover:bg-card/90 gap-2"
              >
                Get Started Today <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    </PageTransition>
  );
};

export default Index;
