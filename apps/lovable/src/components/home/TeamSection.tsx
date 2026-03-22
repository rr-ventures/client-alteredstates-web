import { motion } from "framer-motion";

const team = [
  {
    name: "Gene Kelly",
    role: "Lead Facilitator",
    bio: "Rebirthing breathwork facilitator with a background in health, fitness and wellness. Certified Holistic Health Coach, death doula, and firewalk facilitator. Uses neuroscience to help others heal, awaken, and unlock their potential.",
    placeholder: true,
  },
  {
    name: "Joshua Tree",
    role: "Sound Journey Specialist",
    bio: "Extraordinary multi-instrumentalist weaving instruments of breath, skin and wood. Performed at major festival stages nationally and abroad. Currently completing Masters in Mental Health (Art Therapy).",
    placeholder: true,
  },
  {
    name: "Clara Marri",
    role: "Bodywork Specialist",
    bio: "Holistic practitioner blending bodywork, breathwork, energy work and somatic practices. Her work bridges science and ancient, earth-rooted traditions.",
    placeholder: true,
  },
];

export function TeamSection() {
  return (
    <section className="section-py bg-background">
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="decorative-line mb-6" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Your Guides
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced practitioners dedicated to your transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              {/* Photo placeholder */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden bg-secondary">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <span className="text-4xl font-display font-semibold text-primary/30">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-medium mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
