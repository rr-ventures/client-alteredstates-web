import { useState, useEffect } from "react";
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
  MapPin,
  Users,
  Check,
  Quote,
  ArrowDown,
  Phone,
} from "lucide-react";
import ceremonyImage from "@/assets/ceremony-3.jpg";
import groupImage from "@/assets/retreat-group.jpg";
import ceremony8 from "@/assets/ceremony-8.jpg";

const painPoints = [
  "You feel disconnected from yourself",
  "You're carrying stress, tension, or unresolved emotions",
  "You've tried meditation or therapy but want something deeper",
  "You're seeking clarity, purpose, or a fresh start",
  "You're curious about expanded states of consciousness but want a safe path",
];

const includedLeft = [
  "Private room accommodation",
  "All meals (dietary requirements catered)",
  "Daily breathwork journeys",
  "Firewalk ceremony",
  "Ice bath experience",
  "Tribal drumming session (Kaya Boom)",
];

const includedRight = [
  "Bodywork/fascia release sessions",
  "Music of the Plants sound journey",
  "Daily Lion's Mane mushrooms",
  "Pre-retreat preparation program",
  "28-day live guided integration program",
  "42 guided breathwork recordings",
];

const testimonials = [
  {
    quote:
      "In just three nights, I experienced profound healing, renewal, and a deeper connection to the mystical than I ever thought possible.",
    author: "Vi",
  },
  {
    quote:
      "Attending the Altered States retreat has been nothing short of life-changing. I came in with curiosity, and I left with a new sense of calm, clarity, and empowerment that continues to ripple through my daily life.",
    author: "Lynda",
  },
  {
    quote:
      "Attending the Altered States Immersion Retreat was the most profound experience I have ever invested in myself.",
    author: "Travis",
  },
  {
    quote:
      "While I have nothing but amazing things to say about my retreat experience, the growth and expansion really takes hold in the integration program following the retreat.",
    author: "Grant",
  },
  {
    quote:
      "Facilitation and orchestration of the retreat was so skilful. It was such a profound experience and the group cohesion created through creating a safe space was next level.",
    author: "Kaz",
  },
];

const faqs = [
  {
    question: "Who is this retreat for?",
    answer:
      "Anyone seeking deep personal transformation, whether you're new to breathwork or experienced. We welcome seekers ready to invest in themselves.",
  },
  {
    question: "Is this safe?",
    answer:
      "Yes. All practices are facilitated by experienced professionals. Breathwork is drug-free and you remain in control. We conduct health screenings prior.",
  },
  {
    question: "What if I can't do the firewalk or ice bath?",
    answer:
      "All activities are optional. You'll never be pressured. Many participants surprise themselves.",
  },
  {
    question: "What's the accommodation like?",
    answer:
      "Private self-contained cabins set in nature. Comfortable, clean, designed for rest.",
  },
  {
    question: "Can I pay in installments?",
    answer: "Yes. Contact us to discuss payment plan options.",
  },
  {
    question: "What if I need to cancel?",
    answer:
      "Contact us to discuss our cancellation policy. We're humans too.",
  },
];

export default function RetreatPage() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={ceremonyImage}
            alt="Immersion retreat breathwork ceremony"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 container-lg py-16">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              Golden Ticket Offer — Save $500
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-accent-foreground mb-4"
            >
              Altered States Immersion Retreat
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-accent-foreground/90 mb-6"
            >
              4 Days of Deep Transformation at a Private Sanctuary
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 text-accent-foreground/80 mb-8"
            >
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                February 27 – March 2, 2026
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                Port Stephens, NSW
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 inline-block mb-8"
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-muted-foreground line-through text-xl">
                  $2,499
                </span>
                <span className="font-display text-4xl font-semibold text-foreground">
                  $1,997
                </span>
                <span className="text-muted-foreground">AUD</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="cta" size="lg">
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone size={18} className="mr-2" />
                    Book a Discovery Call
                  </a>
                </Button>
                <Button
                  variant="ctaOutline"
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById("problem")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Keep Reading
                  <ArrowDown size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Identification */}
      <section id="problem" className="section-py bg-background">
        <div className="container-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="decorative-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              If Any of This Resonates...
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4"
              >
                <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-foreground">{point}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg text-muted-foreground italic"
          >
            "You are not alone. And there is a powerful way through."
          </motion.p>
        </div>
      </section>

      {/* The Experience */}
      <section className="section-py section-cream">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="decorative-line mb-6 ml-0" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                The Experience
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Embark on a rite of passage. Over 4 days and 3 nights, you'll
                journey through daily breathwork, firewalk ceremony, ice baths,
                live music, bodywork sessions, and tribal drumming — all in a
                private 5-acre sanctuary surrounded by Melaleuca forest.
              </p>
              <blockquote className="border-l-4 border-accent pl-6 italic text-foreground">
                "Experience non-ordinary states of consciousness as a powerful
                and accelerated method of healing and personal transformation —
                without substances."
              </blockquote>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-large"
            >
              <img
                src={groupImage}
                alt="Retreat group dining together"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-py bg-background">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="decorative-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Everything Included
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              {includedLeft.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-4">
              {includedRight.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Venue */}
      <section className="section-py section-cream">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="decorative-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              The Sanctuary
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The Oasis at One Mile Beach — 5 acres of Melaleuca forest and
              sub-tropical gardens. Spacious self-contained cabins arranged
              around a central billabong. Trickling water features, ceremony
              spaces, and complete privacy.
            </p>
          </motion.div>

          <div className="rounded-2xl overflow-hidden shadow-large">
            <img
              src={ceremony8}
              alt="The sanctuary venue with ceremony setup"
              className="w-full h-auto object-cover aspect-[21/9]"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-py bg-background">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="decorative-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Transformations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="testimonial-card relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />
                <blockquote className="text-foreground leading-relaxed mb-4 relative z-10">
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

      {/* Integration */}
      <section className="section-py section-sage">
        <div className="container-md text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              6 Weeks of Support
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              The retreat is just the beginning. Your investment includes a
              pre-retreat preparation program plus a 28-day live guided
              integration program — that's 6 weeks of total support. This is
              where lasting transformation happens.
            </p>
            <blockquote className="border-t border-b border-primary-foreground/20 py-6 italic text-primary-foreground/90 max-w-xl mx-auto">
              "The ongoing support over the 28 day integration programme was and
              remains invaluable, ensuring that the journey we began over the
              immersion weekend can continue."
              <cite className="block mt-3 not-italic font-semibold">
                — Kathy
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Practical Details */}
      <section className="section-py bg-background">
        <div className="container-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="decorative-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Practical Details
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { label: "Dates", value: "February 27 – March 2, 2026" },
              { label: "Location", value: "The Oasis, Port Stephens NSW" },
              { label: "Accommodation", value: "Private self-contained cabin" },
              { label: "Meals", value: "All meals included" },
              { label: "From Sydney", value: "2.5 hours drive" },
              { label: "From Newcastle", value: "1 hour drive" },
            ].map((detail, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b border-border"
              >
                <span className="text-muted-foreground">{detail.label}</span>
                <span className="font-medium text-foreground text-right">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>
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

      {/* Scarcity */}
      <section className="py-12 bg-background">
        <div className="container-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-2xl p-8 text-center"
          >
            <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              Limited to 20 Participants
            </h3>
            <p className="text-muted-foreground">
              We intentionally keep groups small to ensure personalized
              attention and intimate group dynamics. Spots fill quickly.
            </p>
          </motion.div>
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
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Ready to Transform?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Book a free discovery call with Gene to see if the retreat is
              right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone size={18} className="mr-2" />
                  Schedule Your Call
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/60">
              Or email{" "}
              <a
                href="mailto:gene@gkfitness.com.au"
                className="underline hover:text-primary-foreground"
              >
                gene@gkfitness.com.au
              </a>{" "}
              with questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      {showStickyCTA && (
        <div className="sticky-cta">
          <Button asChild variant="cta" className="w-full">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Discovery Call
            </a>
          </Button>
        </div>
      )}
    </Layout>
  );
}
