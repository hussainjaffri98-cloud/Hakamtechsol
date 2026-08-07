import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-14 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4 ">
           <Link to="/" className="flex items-center gap-3">
  <img 
    // src={logo} 
    // alt="Hakam TechSol Logo" 
    // className="h-50 w-auto   antialiased [image-rendering:crisp-edges] [image-rendering:-webkit-optimize-contrast]" 
  />
</Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed ">
              Digitalizing your businesses with innovative technology solutions. Your vision, our expertise.
            </p>
            <div className="flex gap-8 pt-12 items-start">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3 items-start">
              {["Web Development", "Mobile Development", "AI Automation", "Consulting"].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 items-start">
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <span>alhakamsofts@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <span>+92 309 2271214  , +92 320 123 5249</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span>Glushan E Iqbal Block 6, Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex items-start flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Hakam TechSol. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div> */}
        {/* --- Footer Bottom Bar --- */}
<div className="w-full border-t border-gray-700 mt-12 pt-8">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
    
    {/* Left Side: Copyright */}
    <p className="text-sm opacity-70">
      © 2026 Hakam TechSol. All rights reserved.
    </p>

    {/* Right Side: Links */}
    <div className="flex gap-6 mt-4 md:mt-0">
      <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
        Privacy Policy
      </a>
      <a href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
        Terms of Service
      </a>
    </div>

  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
