import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function LeadCaptureSection() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName.trim() || !email.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Welcome to the community! Check your inbox.");
    setFirstName("");
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="section-py bg-background">
      <div className="container-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 text-center text-primary-foreground"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Stay Connected
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Get notified about upcoming events, early bird offers, and breathwork insights.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                maxLength={50}
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                maxLength={100}
              />
            </div>
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join the Community"}
            </Button>
          </form>

          <p className="text-sm text-primary-foreground/50 mt-6">
            We respect your inbox. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
