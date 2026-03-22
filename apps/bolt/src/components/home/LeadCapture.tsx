import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function LeadCapture() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <section className="section-padding bg-earth-900 text-white">
      <div className="container-narrow mx-auto text-center">
        <span className="label-sm text-earth-400">Newsletter</span>
        <h2 className="heading-lg text-white mt-4">Stay Connected</h2>
        <p className="body-lg text-earth-300 mt-4 max-w-xl mx-auto">
          Get notified about upcoming events, early bird offers, and breathwork insights.
        </p>

        {isSubmitted ? (
          <div className="mt-10 p-8 bg-sage-700/30 inline-flex items-center gap-3">
            <Check className="text-sage-400" size={24} />
            <span className="text-lg text-sage-300">
              You're in! Check your inbox for a welcome message.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="flex-1 px-6 py-4 bg-earth-800 border border-earth-700 text-white placeholder-earth-500 focus:outline-none focus:border-earth-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 bg-earth-800 border border-earth-700 text-white placeholder-earth-500 focus:outline-none focus:border-earth-500 transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 w-full sm:w-auto btn-primary bg-white text-earth-900 hover:bg-earth-100 disabled:opacity-50"
            >
              {isLoading ? 'Joining...' : 'Join the Community'}
              <ArrowRight className="ml-2" size={18} />
            </button>
          </form>
        )}

        <p className="mt-6 text-sm text-earth-500">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
