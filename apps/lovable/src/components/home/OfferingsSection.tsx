import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import workshopImage from "@/assets/ceremony-4.jpg";
import retreatImage from "@/assets/retreat-group.jpg";

const offerings = [
  {
    title: "City Workshops",
    description:
      "Join us for evening breathwork experiences across Sydney, Newcastle, Central Coast, Gold Coast, and Melbourne. 3-4 hour guided journeys with live music.",
    price: "From $50",
    image: workshopImage,
    link: "/events",
    cta: "See Events",
  },
  {
    title: "4-Day Immersion Retreat",
    description:
      "Our flagship experience. 4 days, 3 nights at a private 5-acre sanctuary. Daily breathwork, firewalk, ice baths, live music, and 28-day integration support.",
    price: "From $1,997",
    image: retreatImage,
    link: "/immersion-retreat",
    cta: "Learn More",
  },
];

export function OfferingsSection() {
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Choose Your Journey
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-semibold text-foreground">
                    {offering.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  {offering.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {offering.description}
                </p>
                <Button asChild variant="cta" className="w-full sm:w-auto">
                  <Link to={offering.link}>
                    {offering.cta}
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
