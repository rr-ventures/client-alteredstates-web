import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const upcomingEvents = [
  {
    date: "Fri 20 Feb",
    city: "Newcastle",
    time: "6pm – 9:30pm",
    venue: "The Place Charlestown",
    link: "#",
  },
  {
    date: "Sat 21 Feb",
    city: "Newcastle (Full Day)",
    time: "9:30am – 6pm",
    venue: "The Place Charlestown",
    link: "#",
  },
  {
    date: "Sun 22 Feb",
    city: "Central Coast",
    time: "4pm – 7:30pm",
    venue: "The Erina Room",
    link: "#",
  },
];

export function UpcomingEventsSection() {
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
            Upcoming Experiences
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-soft card-hover"
            >
              <div className="flex items-center gap-2 text-accent font-semibold mb-3">
                <Calendar size={18} />
                {event.date}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {event.city}
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {event.venue}
                </div>
              </div>
              <Button asChild variant="cta" size="sm" className="w-full">
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild variant="ctaOutline" size="lg">
            <Link to="/events">
              View All Events
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
