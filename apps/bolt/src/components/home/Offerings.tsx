import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const offerings = [
  {
    title: 'City Workshops',
    description:
      'Join us for evening breathwork experiences across Sydney, Newcastle, Central Coast, Gold Coast, and Melbourne. 3-4 hour guided journeys with live music. From $50.',
    cta: 'See Events',
    link: '/events',
    image: '/610195304_17992334459911758_6541602778669642153_n.jpg',
  },
  {
    title: '4-Day Transformation Retreat',
    description:
      'Our flagship experience. 4 days, 3 nights at a private 5-acre sanctuary in Port Stephens. Daily breathwork, firewalk ceremony, ice baths, live music, and 28-day integration support.',
    cta: 'Learn More',
    link: '/immersion-retreat',
    image: '/612397448_17993039438911758_7429263740297513285_n.jpg',
  },
];

export default function Offerings() {
  return (
    <section className="section-padding bg-earth-100">
      <div className="container-wide mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-sm">Our Offerings</span>
          <h2 className="heading-lg text-earth-900 mt-4">
            Two Paths to Transformation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="group bg-warm-50 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-earth-900/10" />
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="heading-md text-earth-900">{offering.title}</h3>
                <p className="body-md mt-4">{offering.description}</p>
                <Link
                  to={offering.link}
                  className="btn-tertiary mt-6 inline-flex"
                >
                  {offering.cta}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
