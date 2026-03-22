import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Over the 4 days, I gained more insight, clarity and direction than I had in the last 5 years.",
    author: "Travis",
  },
  {
    quote:
      "To say it was life changing would not be an exaggeration. Gene, Joshua and the wonderful team created a nourishing, safe, fun, enlightening and transformational atmosphere.",
    author: "Kathy",
  },
  {
    quote:
      "It was not my first breathwork experience, but it was absolutely the best!!! Gene's command FOCUS!!! was so to the point! Live music was truly sensational!!!",
    author: "Facebook Review",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-py section-cream">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="decorative-line mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            What Past Participants Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="testimonial-card relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />
              <blockquote className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>
              <cite className="not-italic font-semibold text-primary">
                — {testimonial.author}
              </cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
