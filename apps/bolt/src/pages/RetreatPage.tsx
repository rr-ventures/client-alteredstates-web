import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Quote,
  Users,
  Phone,
} from 'lucide-react';

const included = [
  'Private room accommodation',
  'All meals (dietary requirements catered)',
  'Daily breathwork journeys',
  'Firewalk ceremony',
  'Ice bath experience',
  'Tribal drumming with Kaya Boom',
  'Bodywork/fascia release sessions',
  'Music of the Plants sound journey',
  'Daily Lion\'s Mane mushrooms',
  'Pre-retreat preparation program',
  '28-day live guided integration program',
  '42 guided breathwork recordings',
  'Lifetime access to resources',
];

const testimonials = [
  {
    quote:
      'In just three nights, I experienced profound healing, renewal, and a deeper connection to the mystical than I ever thought possible.',
    author: 'Vi',
  },
  {
    quote:
      'Attending the Altered States retreat has been nothing short of life-changing. I came in with curiosity, and I left with a new sense of calm, clarity, and empowerment.',
    author: 'Lynda',
  },
  {
    quote:
      'Attending the Altered States Immersion Retreat was the most profound experience I have ever invested in myself.',
    author: 'Travis',
  },
  {
    quote:
      'While I have nothing but amazing things to say about my retreat experience, the growth and expansion really takes hold in the integration program following the retreat.',
    author: 'Grant',
  },
];

const team = [
  {
    name: 'Gene Kelly',
    role: 'Lead Facilitator',
    bio: 'Rebirthing breathwork facilitator with a background in health, fitness and wellness. Certified Holistic Health Coach, death doula, and firewalk facilitator.',
  },
  {
    name: 'Joshua Tree',
    role: 'Sound Journey Specialist',
    bio: 'Extraordinary multi-instrumentalist weaving instruments of breath, skin and wood. Currently completing Masters in Mental Health (Art Therapy).',
  },
  {
    name: 'Clara Marri',
    role: 'Bodywork Specialist',
    bio: 'Holistic practitioner blending bodywork, breathwork, energy work and somatic practices.',
  },
];

const faqs = [
  {
    question: 'Who is this retreat for?',
    answer:
      'Anyone seeking deep personal transformation, whether you\'re new to breathwork or experienced. We welcome seekers who are ready to invest in themselves.',
  },
  {
    question: 'Is this safe?',
    answer:
      'Yes. All practices are facilitated by experienced professionals. Breathwork is drug-free and you remain in control. We conduct health screenings prior to the retreat.',
  },
  {
    question: 'What if I can\'t do the firewalk or ice bath?',
    answer:
      'Participation in all activities is optional. You\'ll never be pressured. Many participants surprise themselves with what they\'re capable of.',
  },
  {
    question: 'What\'s the accommodation like?',
    answer:
      'Private self-contained cabins set in nature. Comfortable, clean, and designed for rest.',
  },
  {
    question: 'Can I pay in installments?',
    answer:
      'Yes. Contact us to discuss payment plan options.',
  },
];

export default function RetreatPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/612397448_17993039438911758_7429263740297513285_n.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-earth-950/80 to-earth-950/40" />
        </div>

        <div className="relative z-10 container-wide mx-auto px-6 md:px-12 py-32">
          <div className="max-w-2xl">
            <span className="label-sm text-earth-300">4-Day Immersion</span>
            <h1 className="heading-xl text-white mt-4">
              Altered States Immersion Retreat
            </h1>
            <p className="body-lg text-earth-200 mt-6">
              4 Days of Deep Transformation at a Private Sanctuary
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-earth-200">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>February 27 - March 2, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Port Stephens, NSW</span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm inline-block">
              <div className="flex items-baseline gap-3">
                <span className="text-earth-400 line-through text-xl">$2,499</span>
                <span className="text-4xl font-display font-medium text-white">
                  $1,997 AUD
                </span>
              </div>
              <p className="text-sage-300 text-sm mt-1">
                Golden Ticket Offer - Save $500
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-earth-900 hover:bg-earth-100"
              >
                Book a Discovery Call
                <Phone className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <span className="label-sm">The Journey</span>
            <h2 className="heading-lg text-earth-900 mt-4">The Experience</h2>
            <p className="body-lg mt-6">
              Embark on a rite of passage. Over 4 days and 3 nights, you'll journey
              through daily breathwork, firewalk ceremony, ice baths, live music,
              bodywork sessions, and tribal drumming — all in a private 5-acre
              sanctuary surrounded by Melaleuca forest.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img
              src="/610195304_17992334459911758_6541602778669642153_n.jpg"
              alt="Breathwork ceremony"
              className="w-full aspect-square object-cover"
            />
            <img
              src="/611185010_17992576616911758_6359808428520505471_n.jpg"
              alt="Group session"
              className="w-full aspect-square object-cover"
            />
            <img
              src="/612140471_17992465088911758_4226749362652590923_n.jpg"
              alt="Retreat venue"
              className="w-full aspect-square object-cover md:col-span-2 lg:col-span-1"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-earth-100">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="label-sm">All-Inclusive Package</span>
              <h2 className="heading-lg text-earth-900 mt-4">What's Included</h2>
              <p className="body-md mt-4">
                Everything you need for your transformation is covered.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="text-sage-600 flex-shrink-0 mt-1" size={18} />
                  <span className="text-earth-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label-sm">The Location</span>
              <h2 className="heading-lg text-earth-900 mt-4">The Venue</h2>
              <p className="body-lg mt-6">
                The Oasis at One Mile Beach — 5 acres of Melaleuca forest and
                sub-tropical gardens. Spacious self-contained cabins around a central
                billabong. Trickling water features and ceremony spaces create the
                perfect container for transformation.
              </p>
              <div className="mt-8 p-6 bg-earth-100">
                <div className="flex items-center gap-2 text-earth-600">
                  <MapPin size={20} />
                  <span className="font-medium">Port Stephens, NSW</span>
                </div>
                <p className="mt-2 text-earth-500">
                  2.5 hours from Sydney, 45 minutes from Newcastle
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/610195304_17992334459911758_6541602778669642153_n_(1).jpg"
                alt="The Oasis retreat venue"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-earth-900/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-earth-100">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-sm">Expert Guidance</span>
            <h2 className="heading-lg text-earth-900 mt-4">Your Facilitators</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-40 h-40 mx-auto bg-earth-200 rounded-full flex items-center justify-center mb-6">
                  <span className="font-display text-3xl text-earth-400">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="heading-sm text-earth-900">{member.name}</h3>
                <p className="text-earth-500 font-medium mt-1">{member.role}</p>
                <p className="body-md mt-4 text-earth-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-earth-800 text-white">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-sm text-earth-400">Success Stories</span>
            <h2 className="heading-lg text-white mt-4">Retreat Testimonials</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-earth-700/50 p-8 lg:p-10">
                <Quote className="text-earth-500 mb-6" size={32} />
                <p className="text-lg leading-relaxed text-earth-100">
                  "{testimonial.quote}"
                </p>
                <p className="mt-6 text-earth-400 font-medium">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label-sm">Post-Retreat Support</span>
              <h2 className="heading-lg text-earth-900 mt-4">
                6 Weeks of Integration
              </h2>
              <p className="body-lg mt-6">
                The retreat is just the beginning. Your investment includes a 28-day
                live guided integration program to help you apply your insights and
                maintain momentum. This is where lasting transformation happens.
              </p>
            </div>

            <div className="bg-earth-100 p-8 lg:p-12">
              <h3 className="heading-sm text-earth-900">Integration Program Includes:</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-sage-600 flex-shrink-0 mt-1" size={18} />
                  <span className="text-earth-700">Weekly live group calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-sage-600 flex-shrink-0 mt-1" size={18} />
                  <span className="text-earth-700">Private community access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-sage-600 flex-shrink-0 mt-1" size={18} />
                  <span className="text-earth-700">Guided breathwork recordings</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-sage-600 flex-shrink-0 mt-1" size={18} />
                  <span className="text-earth-700">Personal integration coaching</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-earth-100">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <span className="label-sm">Questions</span>
            <h2 className="heading-lg text-earth-900 mt-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-earth-200 bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="heading-sm text-earth-900 pr-4">{faq.question}</span>
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

      <section className="section-padding bg-sage-700 text-white">
        <div className="container-narrow mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-sage-200 mb-6">
            <Users size={24} />
            <span className="text-lg font-medium">
              Limited to 20 participants per retreat
            </span>
          </div>
          <h2 className="heading-lg text-white">Ready to Transform?</h2>
          <p className="body-lg text-sage-200 mt-4 max-w-xl mx-auto">
            Book a free discovery call with Gene to see if the retreat is right for you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-sage-900 hover:bg-sage-50"
            >
              Schedule Your Call
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
          <p className="mt-6 text-sage-300">
            Or email{' '}
            <a
              href="mailto:gene@gkfitness.com.au"
              className="underline hover:text-white"
            >
              gene@gkfitness.com.au
            </a>{' '}
            with questions
          </p>
        </div>
      </section>

      <div className="fixed bottom-6 left-6 right-6 z-50 lg:hidden">
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full justify-center bg-earth-800 text-white"
        >
          Book a Call
          <Phone className="ml-2" size={18} />
        </a>
      </div>
    </>
  );
}
