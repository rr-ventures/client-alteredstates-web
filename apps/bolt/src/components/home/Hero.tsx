import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/611185010_17992576616911758_6359808428520505471_n.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-earth-950/70 via-earth-950/50 to-earth-950/80" />
      </div>

      <div className="relative z-10 container-wide mx-auto px-6 md:px-12 py-32 md:py-40">
        <div className="max-w-4xl">
          <h1 className="heading-xl text-white text-balance animate-fade-in-up">
            The Psychedelic-Inspired Breathwork Experience Guaranteed to Open Your Heart and Blow Your Mind
          </h1>
          <p className="mt-8 text-lg md:text-xl text-earth-200 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience non-ordinary states of consciousness as a powerful method of healing and transformation — without substances. Safe. Legal. Life-changing.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/events" className="btn-primary bg-white text-earth-900 hover:bg-earth-100">
              View Upcoming Events
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <Link to="/immersion-retreat" className="btn-secondary border-white text-white hover:bg-white hover:text-earth-900">
              Explore the Retreat
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-50 to-transparent" />
    </section>
  );
}
