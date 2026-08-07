import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Users,
  Globe,
  Palette,
  Database,
  Cloud,
  Headphones,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import webDevImage from "@/assets/web-dev.jpg";
import mobileDevImage from "@/assets/mobile-dev.jpg";
import freelanceImage from "@/assets/freelance.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const mainServices = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "We create stunning, high-performance websites and web applications that drive results. From responsive landing pages to complex enterprise solutions, our team delivers excellence.",
      image: webDevImage,
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Progressive Web Apps (PWA)",
        "API Development & Integration",
        "Performance Optimization",
        "SEO-Friendly Architecture",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Build powerful mobile experiences for iOS and Android. We specialize in both native and cross-platform development, ensuring your app reaches users on any device.",
      image: mobileDevImage,
      features: [
        "iOS & Android Native Apps",
        "Cross-Platform Development",
        "React Native & Flutter",
        "App Store Optimization",
        "Push Notifications",
        "Offline-First Architecture",
      ],
    },
    {
      icon: Users,
      title: "AI Automation",
      description:
        "Access our pool of expert AI Automation developers for your specific project needs. Whether you need temporary support or specialized skills, our team delivers.",
      image: freelanceImage,
      features: [
        "Customer Service",
        "Content Creation",
        "E-commerce",
        "Finance",
        // "Code Review & Audit",
        // "Technology Migration",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love.",
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Scalable database architecture and optimization.",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "AWS, Azure, and Google Cloud deployment.",
    },
    {
      icon: Globe,
      title: "Digital Strategy",
      description: "Strategic planning for digital transformation.",
    },
    {
      icon: Headphones,
      title: "Maintenance & Support",
      description: "24/7 support and ongoing maintenance.",
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
              Solutions That{" "}
              <span className="text-gradient">Power Growth</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              From concept to deployment, we offer comprehensive technology services
              designed to elevate your business to new heights.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      {/* <section className="py-10 lg:py-17 px-8 lg:px-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24 lg:space-y-17">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-hero-gradient flex items-center justify-center">
                      <service.icon className="text-primary-foreground" size={28} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="text-accent flex-shrink-0" size={18} />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button className="bg-hero-gradient hover:opacity-90 hover:scale-105 transition-all gap-2">
                      Get Started <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>

                <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="rounded-2xl overflow-hidden shadow-card-hover">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[350px] lg:h-[450px] object-cover"
                    />
                  </div>
                  <div
                    className={`absolute w-32 h-32 rounded-2xl -z-10 opacity-40 ${
                      index % 2 === 0
                        ? "bg-hero-gradient -bottom-6 -right-6"
                        : "bg-accent -bottom-6 -left-6"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}


      {/* Main Services Section - Updated with dynamic animations */}
<section className="py-10 lg:py-17 px-8 lg:px-16">
  <div className="container mx-auto px-4">
    <div className="space-y-24 lg:space-y-17">
      {mainServices.map((service, index) => {
        // Yeh logic check karega ke item left se aana chahiye ya right se
        const isEven = index % 2 === 0;

        return (
          <div
            key={service.title}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              !isEven ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* --- Text Content Side --- */}
            <motion.div
              className={!isEven ? "lg:order-2" : ""}
              initial={{ opacity: 0, x: isEven ? -70 : 70 }} // Even hai toh left se, Odd hai toh right se
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-hero-gradient flex items-center justify-center">
                  <service.icon className="text-primary-foreground" size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  {service.title}
                </h2>
              </div>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {service.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="text-accent flex-shrink-0" size={18} />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="bg-hero-gradient hover:opacity-90 hover:scale-105 transition-all gap-2">
                  Get Started <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>

            {/* --- Image Side --- */}
            <motion.div
              className={`relative ${!isEven ? "lg:order-1" : ""}`}
              initial={{ opacity: 0, x: isEven ? 70 : -70 }} // Image hamesha text ke opposite side se aayegi
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // Halka sa delay pro look ke liye
            >
              <div className="rounded-2xl overflow-hidden shadow-card-hover border border-white/10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[350px] lg:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div
                className={`absolute w-32 h-32 rounded-2xl -z-10 opacity-40 ${
                  isEven
                    ? "bg-hero-gradient -bottom-6 -right-6"
                    : "bg-accent -bottom-6 -left-6"
                }`}
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  </div>
</section>
      
      {/* Additional Services */}
      <section className="py-10 lg:py-17 bg-secondary/25 px-8 lg:px-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              More Solutions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4">
              Additional Services
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Beyond our core offerings, we provide a range of specialized services to
              support your complete digital journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary group-hover:bg-hero-gradient flex items-center justify-center mb-4 transition-colors duration-300">
                  <service.icon
                    className="text-accent group-hover:text-primary-foreground transition-colors duration-300"
                    size={24}
                  />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4">
              How We Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
              { step: "02", title: "Planning", desc: "Creating a detailed project roadmap" },
              { step: "03", title: "Development", desc: "Building your solution with precision" },
              { step: "04", title: "Launch", desc: "Deploying and ongoing support" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                <div className="text-6xl font-display font-bold text-gradient opacity-30 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Let's Build Your Next Big Thing
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Ready to transform your ideas into reality? Our team is here to help
              you every step of the way.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 hover:scale-105 transition-all gap-2">
                Start Your Project <ArrowRight size={18} />
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

export default Services;
