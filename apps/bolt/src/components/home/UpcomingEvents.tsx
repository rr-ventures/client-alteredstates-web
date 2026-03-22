import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const events = [
  {
    date: 'Fri 20 Feb',
    location: 'Newcastle',
    time: '6pm - 9:30pm',
    price: '$75',
    link: '#',
  },
  {
    date: 'Sat 21 Feb',
    location: 'Newcastle Full Day',
    time: '9:30am - 6pm',
    price: '$150',
    link: '#',
  },
  {
    date: 'Sun 22 Feb',
    location: 'Central Coast',
    time: '4pm - 7:30pm',
    price: '$75',
    link: '#',
  },
];

export default function UpcomingEvents() {
  return (
    <section className="section-padding bg-earth-100">
      <div className="container-wide mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-sm">Don't Miss Out</span>
          <h2 className="heading-lg text-earth-900 mt-4">
            Upcoming Experiences
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-warm-50 p-8 border border-earth-200 hover:border-earth-400 transition-colors"
            >
              <div className="flex items-center gap-2 text-earth-600 mb-4">
                <Calendar size={18} />
                <span className="font-medium">{event.date}</span>
              </div>
              <h3 className="heading-sm text-earth-900">{event.location}</h3>
              <div className="flex items-center gap-2 text-earth-500 mt-3">
                <Clock size={16} />
                <span>{event.time}</span>
              </div>
              <div className="mt-6 pt-6 border-t border-earth-200 flex items-center justify-between">
                <span className="text-2xl font-display font-medium text-earth-900">
                  {event.price}
                </span>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tertiary"
                >
                  Book Now
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/events" className="btn-secondary">
            View All Events
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
