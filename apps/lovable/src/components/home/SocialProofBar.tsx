import { motion } from "framer-motion";
import { Star, Users, MapPin, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Transformations" },
  { icon: Heart, value: "100%", label: "Recommend (Facebook)" },
  { icon: Star, value: "284", label: "Five-Star Reviews" },
  { icon: MapPin, value: "5", label: "Cities Across Australia" },
];

export function SocialProofBar() {
  return (
    <section className="stats-bar py-8 md:py-10">
      <div className="container-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center text-primary-foreground"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 opacity-80" />
              <div className="font-display text-2xl md:text-3xl font-semibold">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
