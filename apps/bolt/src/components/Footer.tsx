import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Retreat', path: '/immersion-retreat' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const locations = [
  'Sydney',
  'Newcastle',
  'Central Coast',
  'Gold Coast',
  'Melbourne',
  'Port Stephens',
];

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-100">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-display text-2xl font-medium text-white"
            >
              Altered States Experience
            </Link>
            <p className="mt-4 text-earth-300 max-w-md leading-relaxed">
              Transformational breathwork experiences across Australia.
              Neuroscience-backed practices for profound healing and personal growth.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/alteredstatesexperience"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-earth-800 hover:bg-earth-700 transition-colors rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/alteredstatesexperience"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-earth-800 hover:bg-earth-700 transition-colors rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:gene@gkfitness.com.au"
                className="p-3 bg-earth-800 hover:bg-earth-700 transition-colors rounded-full"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-earth-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-medium text-white mb-4">
              Locations
            </h4>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li key={loc} className="text-earth-300">
                  {loc}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="mailto:gene@gkfitness.com.au"
                className="text-earth-300 hover:text-white transition-colors"
              >
                gene@gkfitness.com.au
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-earth-800">
          <p className="text-earth-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Altered States Experience. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
