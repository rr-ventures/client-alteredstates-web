import { motion } from "framer-motion";
import { Sparkles, Wind, Heart } from "lucide-react";

const steps = [
  {
    icon: Sparkles,
    step: "01",
    title: "Arrive & Ground",
    description:
      "We create a safe container. No experience necessary. Just an open mind.",
  },
  {
    icon: Wind,
    step: "02",
    title: "Breathe & Release",
    description:
      "Guided breathing activates your nervous system, allowing stored emotions and tension to move.",
  },
  {
    icon: Heart,
    step: "03",
    title: "Integrate & Transform",
    description:
      "Post-journey sharing and ongoing support help you apply insights to your daily life.",
  },
];

export function HowItWorksSection() {
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
            What to Expect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple, supportive process designed for transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 font-display text-4xl font-bold text-accent/30">
                  {step.step}
                </span>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
