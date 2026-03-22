import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Retreat", href: "/immersion-retreat" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const locations = [
  "Sydney",
  "Newcastle", 
  "Central Coast",
  "Gold Coast",
  "Melbourne",
  "Port Stephens",
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-lg py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-semibold">
                Altered States
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              The psychedelic-inspired breathwork experience guaranteed to open
              your heart and blow your mind.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/alteredstatesexperience"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/alteredstatesexperience"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Navigate</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Locations</h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <MapPin size={14} />
                  {location}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <a
              href="mailto:gene@gkfitness.com.au"
              className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              <Mail size={16} />
              gene@gkfitness.com.au
            </a>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Based in Port Stephens, NSW
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} Altered States Experience. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
