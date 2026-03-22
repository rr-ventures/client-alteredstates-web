import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Over the 4 days, I gained more insight, clarity and direction than I had in the last 5 years.',
    author: 'Travis',
  },
  {
    quote:
      'To say it was life changing would not be an exaggeration. Gene, Joshua and the wonderful team created a nourishing, safe, fun, enlightening and transformational atmosphere.',
    author: 'Kathy',
  },
  {
    quote:
      "It was not my first breathwork experience, but it was absolutely the best!!! Gene's command FOCUS!!! was so to the point! Live music was truly sensational!!!",
    author: 'Facebook Review',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-earth-800 text-white">
      <div className="container-wide mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-sm text-earth-400">Testimonials</span>
          <h2 className="heading-lg text-white mt-4">
            What Past Participants Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-earth-700/50 p-8 lg:p-10"
            >
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
  );
}
