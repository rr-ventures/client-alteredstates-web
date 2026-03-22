import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Heart, Brain, Users, Shield } from "lucide-react";
import ceremonyImage from "@/assets/ceremony-5.jpg";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Every experience is held in a container of care and attention",
  },
  {
    icon: Brain,
    title: "Science-Backed",
    description: "Ancient wisdom meets modern neuroscience",
  },
  {
    icon: Heart,
    title: "Integration Matters",
    description: "Real transformation happens after the session",
  },
  {
    icon: Users,
    title: "Community",
    description: "We're all on this journey together",
  },
];

const team = [
  {
    name: "Gene Kelly",
    role: "Lead Facilitator",
    bio: "Rebirthing breathwork facilitator with a background in health, fitness and wellness. Certified Holistic Health Coach, death doula, and firewalk facilitator. Uses neuroscience to help others heal, awaken, and unlock their potential. Gene's journey with breathwork began after experiencing his own profound transformations, leading him to dedicate his life to creating accessible, safe pathways for others to access these powerful states.",
    placeholder: true,
  },
  {
    name: "Joshua Tree",
    role: "Sound Journey Specialist",
    bio: "Extraordinary multi-instrumentalist weaving instruments of breath, skin and wood. Joshua has performed at major festival stages nationally and abroad, bringing a unique fusion of world music traditions. Currently completing his Masters in Mental Health (Art Therapy), he brings both artistic mastery and therapeutic understanding to every session.",
    placeholder: true,
  },
  {
    name: "Clara Marri",
    role: "Bodywork Specialist",
    bio: "Holistic practitioner blending bodywork, breathwork, energy work and somatic practices. Clara's work bridges science and ancient, earth-rooted traditions. Her gentle yet powerful approach helps participants release stored tension and access deeper layers of healing through the body.",
    placeholder: true,
  },
];

export default function AboutPage() {
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
            <div className="decorative-line mb-6" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Our Mission
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We bring reverence to altered states of consciousness as a tool
              for profound personal healing and transformation. Through
              neuroscience-backed breathwork and sacred ceremony, we create
              safe, supportive spaces for inner exploration and evolution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-py bg-background">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Altered States Experience was born from Gene Kelly's personal
                  journey with breathwork and expanded consciousness. After
                  experiencing his own profound transformations, Gene dedicated
                  himself to creating accessible, safe pathways for others to
                  access these powerful states — without substances.
                </p>
                <p>
                  What began as small gatherings has grown into a community of
                  500+ participants across Australia, with workshops in Sydney,
                  Newcastle, Central Coast, Gold Coast, and Melbourne, plus
                  immersive retreats at our Port Stephens sanctuary.
                </p>
                <p>
                  Our approach combines the latest research on the nervous
                  system with time-tested practices from ancient traditions.
                  Every session is carefully designed to be both
                  transformational and safe.
                </p>
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
                alt="Community gathering during ceremony"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-py section-cream">
        <div className="container-md text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="decorative-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Approach
            </h2>
            <p className="text-2xl font-display text-accent italic mb-8">
              "Neuroscience Meets Ceremony"
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We combine the latest research on the nervous system with
              time-tested practices from ancient traditions. Every session is
              carefully designed to be both transformational and safe. Our
              facilitators are trained in trauma-aware practices and we
              prioritize creating containers where participants feel held and
              supported.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="section-py bg-background">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="decorative-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              The Team
            </h2>
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
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-secondary">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-5xl font-display font-semibold text-primary/30">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
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

      {/* Values */}
      <section className="section-py section-sage">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Our Values
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
