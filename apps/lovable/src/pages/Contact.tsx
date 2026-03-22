import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please fill in required fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
    setIsSubmitting(false);
  };

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
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Questions about our workshops, retreats, or just want to connect?
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-py bg-background">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                <a
                  href="mailto:gene@gkfitness.com.au"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground group-hover:text-accent transition-colors">
                      gene@gkfitness.com.au
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Base</p>
                    <p className="text-muted-foreground">Port Stephens, NSW</p>
                    <p className="text-sm text-muted-foreground/70 mt-1">
                      Events across Sydney, Newcastle, Central Coast, Gold
                      Coast & Melbourne
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-10">
                <p className="font-medium text-foreground mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/alteredstatesexperience"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://facebook.com/alteredstatesexperience"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>

              {/* Calendly Section */}
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Book a Call
                </h3>
                <p className="text-muted-foreground mb-4">
                  Want to chat about the retreat? Book a free discovery call
                  with Gene.
                </p>
                <Button asChild variant="cta">
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Call
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name <span className="text-accent">*</span>
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      maxLength={100}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email <span className="text-accent">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      maxLength={150}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone (optional)
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="0400 000 000"
                      maxLength={20}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      What are you interested in?
                    </label>
                    <Select
                      value={formData.interest}
                      onValueChange={(value) =>
                        setFormData({ ...formData, interest: value })
                      }
                    >
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="workshop">Workshop</SelectItem>
                        <SelectItem value="retreat">Retreat</SelectItem>
                        <SelectItem value="general">General Enquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us what's on your mind..."
                      rows={5}
                      maxLength={1000}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
