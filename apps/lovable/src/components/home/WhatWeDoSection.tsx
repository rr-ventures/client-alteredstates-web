import { motion } from "framer-motion";
import ceremonyImage from "@/assets/ceremony-7.jpg";

export function WhatWeDoSection() {
  return (
    <section className="section-py bg-background">
      <div className="container-lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="decorative-line mb-6 ml-0" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              A Safe, Supportive Space for Inner Exploration
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Altered States Experience uses neuroscience-backed breathwork techniques to guide you into expanded states of consciousness. Our facilitated journeys combine ancient breathing practices with live music to help you release emotional blocks, access deeper clarity, and reconnect with your authentic self — all without substances.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every session is carefully designed to be both transformational and safe. Our facilitators are trained in trauma-aware practices and we prioritize creating containers where participants feel held and supported.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-large">
              <img
                src={ceremonyImage}
                alt="Gene facilitating a breathwork ceremony with participants"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
