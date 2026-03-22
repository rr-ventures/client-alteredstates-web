import { useState } from 'react';
import { Mail, MapPin, Instagram, Facebook, ArrowRight, Check } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-earth-100">
        <div className="container-wide mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="label-sm">Contact</span>
            <h1 className="heading-xl text-earth-900 mt-4">Get in Touch</h1>
            <p className="body-lg mt-6">
              Have questions about our workshops or retreats? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-lg text-earth-900">Contact Information</h2>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-earth-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-earth-900">Email</h3>
                    <a
                      href="mailto:gene@gkfitness.com.au"
                      className="text-earth-600 hover:text-earth-900 transition-colors"
                    >
                      gene@gkfitness.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-earth-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-earth-900">Location</h3>
                    <p className="text-earth-600">
                      Port Stephens, NSW (Retreats)
                    </p>
                    <p className="text-earth-500 text-sm mt-1">
                      Events across Sydney, Newcastle, Central Coast, Gold Coast, Melbourne
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-medium text-earth-900 mb-4">Follow Us</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com/alteredstatesexperience"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-earth-600 hover:text-earth-900 transition-colors"
                  >
                    <Instagram size={20} />
                    <span>@alteredstatesexperience</span>
                  </a>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <a
                    href="https://facebook.com/alteredstatesexperience"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-earth-600 hover:text-earth-900 transition-colors"
                  >
                    <Facebook size={20} />
                    <span>Altered States Experience</span>
                  </a>
                </div>
              </div>

              <div className="mt-10 p-8 bg-earth-100">
                <h3 className="heading-sm text-earth-900">
                  Interested in the Retreat?
                </h3>
                <p className="body-md mt-4">
                  Book a free discovery call with Gene to learn more about the
                  Immersion Retreat and see if it's right for you.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary mt-6 inline-flex"
                >
                  Schedule a Call
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </div>
            </div>

            <div>
              <div className="bg-white border border-earth-200 p-8 lg:p-10">
                <h2 className="heading-md text-earth-900">Send a Message</h2>

                {isSubmitted ? (
                  <div className="mt-8 p-8 bg-sage-50 text-center">
                    <Check className="mx-auto text-sage-600 mb-4" size={48} />
                    <h3 className="heading-sm text-earth-900">Message Sent!</h3>
                    <p className="body-md mt-2">
                      Thank you for reaching out. We'll get back to you within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-earth-700 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-earth-200 bg-warm-50 focus:outline-none focus:border-earth-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-earth-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-earth-200 bg-warm-50 focus:outline-none focus:border-earth-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-earth-700 mb-2"
                      >
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-earth-200 bg-warm-50 focus:outline-none focus:border-earth-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-medium text-earth-700 mb-2"
                      >
                        What are you interested in? *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-earth-200 bg-warm-50 focus:outline-none focus:border-earth-400 transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="workshop">Workshop / Event</option>
                        <option value="retreat">Immersion Retreat</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-earth-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-earth-200 bg-warm-50 focus:outline-none focus:border-earth-400 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn-primary w-full disabled:opacity-50"
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                      <ArrowRight className="ml-2" size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
