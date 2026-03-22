import { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';

const events = [
  {
    date: 'Fri 20 Feb 2026',
    day: 'Friday',
    location: 'Newcastle',
    venue: 'The Yoga Space',
    time: '6pm - 9:30pm',
    price: '$75',
    link: '#',
  },
  {
    date: 'Sat 21 Feb 2026',
    day: 'Saturday',
    location: 'Newcastle',
    venue: 'The Yoga Space',
    time: '9:30am - 6pm',
    price: '$150',
    link: '#',
    fullDay: true,
  },
  {
    date: 'Sun 22 Feb 2026',
    day: 'Sunday',
    location: 'Central Coast',
    venue: 'Erina Community Centre',
    time: '4pm - 7:30pm',
    price: '$75',
    link: '#',
  },
  {
    date: 'Fri 28 Feb 2026',
    day: 'Friday',
    location: 'Sydney',
    venue: 'Surry Hills Studio',
    time: '6pm - 9:30pm',
    price: '$85',
    link: '#',
  },
  {
    date: 'Sat 7 Mar 2026',
    day: 'Saturday',
    location: 'Gold Coast',
    venue: 'Burleigh Heads',
    time: '2pm - 5:30pm',
    price: '$75',
    link: '#',
  },
  {
    date: 'Sun 8 Mar 2026',
    day: 'Sunday',
    location: 'Melbourne',
    venue: 'Fitzroy Wellness Centre',
    time: '3pm - 6:30pm',
    price: '$85',
    link: '#',
  },
];

const included = [
  'Guided breathwork journey',
  'Live music soundscape by Joshua Tree',
  'Optional Lion\'s Mane mushroom',
  'Integration sharing circle',
  'Light refreshments',
];

const benefits = [
  'Release stress and emotional blocks',
  'Gain clarity and insight',
  'Experience non-ordinary states safely',
  'Connect with a supportive community',
];

const faqs = [
  {
    question: 'Is breathwork safe?',
    answer:
      'Yes. Our sessions are facilitated by experienced practitioners in a supportive environment. We screen for contraindications and provide modifications as needed.',
  },
  {
    question: 'What should I bring?',
    answer:
      'Comfortable clothes, a yoga mat if you have one, water, and an open mind. Everything else is provided.',
  },
  {
    question: 'Is this like taking psychedelics?',
    answer:
      'Our breathwork creates similar states of expanded consciousness through breathing techniques alone. It\'s 100% legal, drug-free, and you remain in control throughout.',
  },
  {
    question: 'How is this different from meditation?',
    answer:
      'While meditation typically calms the mind, breathwork actively activates your nervous system to release stored emotions and access deeper states of awareness.',
  },
];

export default function EventsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-earth-100">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="label-sm">Workshops & Events</span>
            <h1 className="heading-xl text-earth-900 mt-4">
              Upcoming Breathwork Experiences
            </h1>
            <p className="body-lg mt-6">
              Join us across Australia for transformational breathwork journeys with live music.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white border border-earth-200 hover:border-earth-400 transition-all hover:shadow-lg"
              >
                <div className="p-8">
                  {event.fullDay && (
                    <span className="inline-block px-3 py-1 bg-sage-100 text-sage-700 text-xs font-medium tracking-wide mb-4">
                      FULL DAY INTENSIVE
                    </span>
                  )}
                  <div className="flex items-center gap-2 text-earth-600">
                    <Calendar size={18} />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <h3 className="heading-md text-earth-900 mt-3">
                    {event.location}
                  </h3>
                  <div className="flex items-center gap-2 text-earth-500 mt-2">
                    <MapPin size={16} />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-earth-500 mt-1">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="mt-6 pt-6 border-t border-earth-200 flex items-center justify-between">
                    <span className="text-3xl font-display font-medium text-earth-900">
                      {event.price}
                    </span>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-6 py-3"
                    >
                      Book on Humanitix
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-earth-100">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="label-sm">What You Get</span>
              <h2 className="heading-lg text-earth-900 mt-4">What's Included</h2>
              <ul className="mt-8 space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <Check className="text-sage-600 flex-shrink-0 mt-1" size={20} />
                    <span className="body-md">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="label-sm">Benefits</span>
              <h2 className="heading-lg text-earth-900 mt-4">Is This For Me?</h2>
              <p className="body-md mt-6">Yes, if you want to:</p>
              <ul className="mt-4 space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-4">
                    <Check className="text-sage-600 flex-shrink-0 mt-1" size={20} />
                    <span className="body-md">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="body-md mt-8 p-6 bg-warm-50 border-l-4 border-earth-400">
                No experience necessary. Beginners welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <span className="label-sm">Got Questions?</span>
            <h2 className="heading-lg text-earth-900 mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-earth-200 bg-white"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="heading-sm text-earth-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-earth-600 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-earth-600 flex-shrink-0" size={24} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 animate-fade-in">
                    <p className="body-md">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-earth-800 text-white">
        <div className="container-narrow mx-auto text-center">
          <h2 className="heading-lg text-white">Ready to Experience It?</h2>
          <p className="body-lg text-earth-300 mt-4">
            Browse our upcoming events and secure your spot today.
          </p>
          <a
            href="https://www.humanitix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex btn-primary bg-white text-earth-900 hover:bg-earth-100"
          >
            View Events on Humanitix
            <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
