import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-footer text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-1 order-1 sm:order-4 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display text-xl">S</span>
              </div>
              <span className="font-display text-2xl">SchoolPlate</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Connecting donors with students through partner restaurants. Your donation becomes a
              hot meal — guaranteed, no cash involved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-amber/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-amber/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-amber/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-amber/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="order-2 sm:order-1 lg:order-2">
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-amber transition-colors"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-amber transition-colors"
                >
                  Browse Students
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-amber transition-colors"
                >
                  Sponsorship Plans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-amber transition-colors"
                >
                  Partner Restaurants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-amber transition-colors"
                >
                  Our Impact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="order-3 sm:order-2 lg:order-3">
            <h4 className="font-display text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-amber transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-amber transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-amber transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-amber transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/60 hover:text-amber transition-colors"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="order-4 sm:order-3 lg:order-4">
            <h4 className="font-display text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-center">
                <MapPin className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                <span className="text-primary-foreground/60 text-sm">
                  123 Unity Avenue, Bastos
                  <br />
                  Yaoundé, Cameroon
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber shrink-0" />
                <a href="tel:681248724" className="text-primary-foreground/60 text-sm">
                  +237 681248724
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber shrink-0" />
                <a
                  href="mailto:support@schoolplate.cm"
                  className="text-primary-foreground/60 text-sm"
                >
                  support@schoolplate.cm
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © 2026 SchoolPlate. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-sm">
            Made with ❤️ for Cameroonian students
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
