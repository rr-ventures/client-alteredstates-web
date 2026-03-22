import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Calendar,
  Clock,
  MapPin,
  Music,
  Heart,
  Users,
  Leaf,
  Coffee,
  Check,
} from "lucide-react";
import ceremonyImage from "@/assets/ceremony-2.jpg";

const events = [
  {
    date: "Fri 20 Feb 2026",
    city: "Newcastle",
    time: "6pm – 9:30pm",
    venue: "The Place Charlestown",
    price: "$65",
    link: "#",
  },
  {
    date: "Sat 21 Feb 2026",
    city: "Newcastle (Full Day)",
    time: "9:30am – 6pm",
    venue: "The Place Charlestown",
    price: "$150",
    link: "#",
  },
  {
    date: "Sun 22 Feb 2026",
    city: "Central Coast",
    time: "4pm – 7:30pm",
    venue: "The Erina Room",
    price: "$65",
    link: "#",
  },
  {
    date: "Fri 28 Feb 2026",
    city: "Sydney",
    time: "6:30pm – 10pm",
    venue: "Surry Hills Community Centre",
    price: "$75",
    link: "#",
  },
  {
    date: "Sat 8 Mar 2026",
    city: "Gold Coast",
    time: "2pm – 5:30pm",
    venue: "Burleigh Heads Venue",
    price: "$65",
    link: "#",
  },
  {
    date: "Sun 9 Mar 2026",
    city: "Melbourne",
    time: "3pm – 6:30pm",
    venue: "Fitzroy Town Hall",
    price: "$75",
    link: "#",
  },
];

const included = [
  { icon: Music, text: "Live music soundscape by Joshua Tree" },
  { icon: Heart, text: "Guided breathwork journey" },
  { icon: Leaf, text: "Optional Lion's Mane mushroom" },
  { icon: Users, text: "Integration sharing circle" },
  { icon: Coffee, text: "Light refreshments" },
];

const benefits = [
  "Release stress and emotional blocks",
  "Gain clarity and insight",
  "Experience non-ordinary states safely",
  "Connect with a supportive community",
];

const faqs = [
  {
    question: "Is breathwork safe?",
    answer:
      "Yes. Our sessions are facilitated by experienced practitioners in a supportive environment. We screen for contraindications and provide modifications as needed.",
  },
  {
    question: "What should I bring?",
    answer:
      "Comfortable clothes, a yoga mat if you have one, water, and an open mind. Everything else is provided.",
  },
  {
    question: "Is this like taking psychedelics?",
    answer:
      "Our breathwork creates similar states of expanded consciousness through breathing techniques alone. It's 100% legal, drug-free, and you remain in control throughout.",
  },
  {
    question: "How is this different from meditation?",
    answer:
      "While meditation typically calms the mind, breathwork actively activates your nervous system to release stored emotions and access deeper states of awareness.",
  },
  {
    question: "What types of breathwork do you use?",
    answer:
      "Our primary modality is rebirthing breathwork, combined with elements of holotropic and somatic practices. Our approach is informed by neuroscience and trauma-aware principles.",
  },
];

export default function EventsPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-cream">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Upcoming Breathwork Experiences
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Join us across Australia for transformational breathwork journeys
              with live music.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-py-sm bg-background">
        <div className="container-lg">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft card-hover border border-border/50"
              >
                <div className="flex items-center gap-2 text-accent font-semibold mb-3">
                  <Calendar size={18} />
                  {event.date}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {event.city}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {event.venue}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-display text-2xl font-semibold text-foreground">
                    {event.price}
                  </span>
                  <Button asChild variant="cta" size="sm">
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book on Humanitix
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-py section-cream">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="decorative-line mb-6 ml-0" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
                What's Included
              </h2>
              <div className="space-y-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-large"
            >
              <img
                src={ceremonyImage}
                alt="Breathwork ceremony with live music"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Is This For Me */}
      <section className="section-py bg-background">
        <div className="container-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="decorative-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Is This For Me?
            </h2>
            <p className="text-lg text-muted-foreground">
              Yes if you want to:
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-secondary p-4 rounded-lg"
              >
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-foreground italic">
            No experience necessary. Beginners welcome.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py section-cream">
        <div className="container-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="decorative-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Common Questions
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-lg text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-py bg-primary text-primary-foreground">
        <div className="container-md text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Ready to Experience It?
            </h2>
            <Button asChild variant="hero" size="xl">
              <a
                href="https://www.humanitix.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Events on Humanitix
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
