// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowRight, Target, Eye, Users, Award, Lightbulb, Heart } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import PageTransition from "@/components/PageTransition";
// import teamImage from "@/assets/team.jpg";
// import heroImage from "@/assets/hero-tech.jpg";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0 },
// };

// const About = () => {
//   const values = [
//     {
//       icon: Lightbulb,
//       title: "Innovation",
//       description: "We embrace new technologies and creative solutions to stay ahead of the curve.",
//     },
//     {
//       icon: Heart,
//       title: "Passion",
//       description: "We pour our heart into every project, treating your success as our own.",
//     },
//     {
//       icon: Award,
//       title: "Excellence",
//       description: "We strive for perfection in every line of code and pixel of design.",
//     },
//     {
//       icon: Users,
//       title: "Collaboration",
//       description: "We work closely with our clients, fostering transparent partnerships.",
//     },
//   ];

//   const stats = [
//     { number: "100+", label: "Projects Completed" },
//     { number: "50+", label: "Happy Clients" },
//     { number: "5+", label: "Years Experience" },
//     { number: "24/7", label: "Support Available" },
//   ];

//   return (
//     <PageTransition>
//       <div className="min-h-screen">
//         <Navbar />

//         {/* Hero Section */}
//         <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
//           <div className="absolute inset-0 z-0">
//             <img
//               src={heroImage}
//               alt="About Hakam TechSol"
//               className="w-full h-full object-cover opacity-20"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
//           </div>

//           <div className="container mx-auto px-4 relative z-10">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
//               className="max-w-3xl mx-auto text-center"
//             >
//               <motion.span
//                 variants={fadeInUp}
//                 className="inline-block px-4 py-2 rounded-full bg-secondary text-accent font-medium text-sm mb-6"
//               >
//                 About Us
//               </motion.span>
//               <motion.h1
//                 variants={fadeInUp}
//                 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
//               >
//                 The Story Behind{" "}
//                 <span className="text-gradient">Hakam TechSol</span>
//               </motion.h1>
//               <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
//                 We are a passionate team of developers and innovators dedicated to
//                 transforming businesses through technology.
//               </motion.p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Our Story */}
//         <section className="py-15 lg:py-15">
//           <div className="container mx-auto px-4">
//             <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 <div className="rounded-2xl overflow-hidden shadow-card-hover">
//                   <img
//                     src={teamImage}
//                     alt="Hakam TechSol Team"
//                     className="w-full h-[400px] lg:h-[500px] object-cover"
//                   />
//                 </div>
//                 <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-hero-gradient rounded-2xl -z-10 opacity-50" />
//                 <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-2xl -z-10 opacity-30" />
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <span className="text-accent font-medium text-sm  uppercase tracking-wider">
//                   Our Story
//                 </span>
//                 <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6">
//                   Building Dreams, One Line of Code at a Time
//                 </h2>
//                 <div className="space-y-4 text-muted-foreground">
                  // <p>
                  //   Hakam TechSol was founded with a simple yet powerful vision: to bridge
                  //   the gap between cutting-edge technology and real-world business needs.
                  //   What started as a small team of passionate developers has grown into a
                  //   full-service technology partner for businesses of all sizes.
                  // </p>
                  // <p>
                  //   Our journey has been fueled by an unwavering commitment to excellence
                  //   and a deep understanding that every business is unique. We don't just
                  //   build software – we craft digital experiences that drive growth, enhance
                  //   efficiency, and create lasting value.
                  // </p>
                  // <p>
                  //   Today, we continue to push the boundaries of what's possible, embracing
                  //   new technologies while staying true to our core values of innovation,
                  //   quality, and client success.
                  // </p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Mission & Vision */}
//         <section className="py-10 lg:py-15 bg-secondary/50">
//           <div className="container mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-8">
//               <motion.div
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-card rounded-2xl p-6 lg:p-8 shadow-card max-w-md mx-auto"            >
//                 <div className="w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center mb-6">
//                   <Target className="text-primary-foreground" size={32} />
//                 </div>
//                 <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">Our Mission</h3>
                // <p className="text-muted-foreground leading-relaxed">
                //   To empower businesses with innovative technology solutions that transform
                //   challenges into opportunities, enabling our clients to achieve their goals
                //   and stay ahead in an ever-evolving digital landscape. We are committed to
                //   delivering excellence in every project while fostering long-term partnerships
                //   built on trust and mutual success.
                // </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.15 }}
//                 className="bg-card rounded-2xl p-6 lg:p-8 shadow-card max-w-md mx-auto"            >
//                 <div className="w-10 h-10 rounded-2xl bg-accent flex items-center justify-center mb-6">
//                   <Eye className="text-accent-foreground" size={22} />
//                 </div>
//                 <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">Our Vision</h3>
                // <p className="text-muted-foreground leading-relaxed">
                //   To be a global leader in technology innovation, recognized for our ability
                //   to turn visionary ideas into reality. We aspire to create a future where
                //   technology seamlessly enhances every aspect of business and life, making
                //   digital transformation accessible to organizations of all sizes and across
                //   all industries.
                // </p>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Stats */}
//         <section className="py-10 lg:py-15 bg-hero-gradient text-primary-foreground">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="text-center"
//                 >
//                   <div className="text-4xl lg:text-5xl font-display font-bold mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-primary-foreground/70 text-sm lg:text-base">
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Our Values */}
//         <section className="py-15 lg:py-15">
//           <div className="container mx-auto px-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <span className="text-accent font-medium text-sm uppercase tracking-wider">
//                 Our Values
//               </span>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4">
//                 What Drives Us Forward
//               </h2>
//             </motion.div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {values.map((value, index) => (
//                 <motion.div
//                   key={value.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="text-center p-6"
//                 >
//                   <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-hero-gradient transition-colors">
//                     <value.icon className="text-accent" size={32} />
//                   </div>
//                   <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
//                   <p className="text-muted-foreground text-sm">{value.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="py-20 lg:py-32 bg-secondary/50">
//           <div className="container mx-auto px-4 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
//                 Ready to Join Our Journey?
//               </h2>
//               <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
//                 Let's work together to bring your ideas to life. Contact us today and
//                 discover how Hakam TechSol can transform your business.
//               </p>
//               <Link to="/contact">
//                 <Button size="lg" className="bg-hero-gradient hover:opacity-90 hover:scale-105 transition-all gap-2">
//                   Get In Touch <ArrowRight size={18} />
//                 </Button>
//               </Link>
//             </motion.div>
//           </div>
//         </section>

//         <Footer />
//       </div>
//     </PageTransition>
//   );
// };

// export default About;



import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Users, Award, Lightbulb, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import teamImage from "@/assets/team.jpg";
import heroImage from "@/assets/hero-tech.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to stay ahead of the curve.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our heart into every project, treating your success as our own.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every line of code and pixel of design.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients, fostering transparent partnerships.",
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-12 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="About Hakam TechSol"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="max-w-3xl mx-auto text-center pl-10 md:pl-20"
            >


              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              >
                The Story Behind{" "}
                <span className="text-gradient">Hakam TechSol</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
                We are a passionate team of developers and innovators dedicated to
                transforming businesses through technology.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-10 lg:py-12">
          <div className="container mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative lg:pl-16"
              >
                <div className="rounded-3xl ">
                  <img
                    src={teamImage}
                    alt="Hakam TechSol Team"
                    className="w-full h-full object-cover rounded-3xl shadow-card-hover"
                  />

                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6">
                  Building Dreams, One Line of Code at a Time
                </h2>
                <div className="space-y-4 text-muted-foreground">
                 <p>
                    Hakam TechSol was founded with a simple yet powerful vision: to bridge
                    the gap between cutting-edge technology and real-world business needs.
                    What started as a small team of passionate developers has grown into a
                    full-service technology partner for businesses of all sizes.
                  </p>
                  <p>
                    Our journey has been fueled by an unwavering commitment to excellence
                    and a deep understanding that every business is unique. We don't just
                    build software – we craft digital experiences that drive growth, enhance
                    efficiency, and create lasting value.
                  </p>
                  <p>
                    Today, we continue to push the boundaries of what's possible, embracing
                    new technologies while staying true to our core values of innovation,
                    quality, and client success.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-10 lg:py-15 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-card max-w-md mx-auto"
              >
                <div className="w-16 h-16 rounded-2xl bg-hero-gradient flex items-center justify-center mb-6">
                  <Target className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed font-semibold">
                  To empower businesses with innovative technology solutions that transform
                  challenges into opportunities, enabling our clients to achieve their goals
                  and stay ahead in an ever-evolving digital landscape. We are committed to
                  delivering excellence in every project while fostering long-term partnerships
                  built on trust and mutual success.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-card rounded-2xl p-6 lg:p-8 shadow-card max-w-md mx-auto"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <Eye className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed font-semibold">
                  To be a global leader in technology innovation, recognized for our ability
                  to turn visionary ideas into reality. We aspire to create a future where
                  technology seamlessly enhances every aspect of business and life, making
                  digital transformation accessible to organizations of all sizes and across
                  all industries.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 lg:py-15 bg-hero-gradient text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-display font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/70 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-15 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-4">
                What Drives Us Forward
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
                    <value.icon className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm font-medium">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;