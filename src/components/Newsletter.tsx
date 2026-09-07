import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="newsletter-section"
      className="py-16 sm:py-20 bg-gradient-to-b from-white to-zinc-100/70 dark:from-[#0F1B33] dark:to-[#16264A]/50 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#2563EB]/10 text-[#2563EB] dark:bg-[#2563EB]/20 dark:text-[#5B8DF6] mb-4">
          <Mail className="w-6 h-6" />
        </div>

        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F1B33] dark:text-white tracking-tight">
          Get better at English grammar every week
        </h2>

        <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-xl mx-auto leading-relaxed">
          One worked error-spotting question, one examiner trick exposed, and one practical shortcut sent directly to your inbox every Sunday morning.
        </p>

        {submitted ? (
          <div
            id="newsletter-success-state"
            className="mt-8 p-6 rounded-2xl bg-[#27ae60]/10 border border-[#27ae60]/30 text-[#27ae60] max-w-md mx-auto flex items-center justify-center gap-3 animate-in fade-in"
          >
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <p className="text-sm font-semibold text-[#0F1B33] dark:text-white">
              You are subscribed! Look out for your first Sunday error-breakdown.
            </p>
          </div>
        ) : (
          <form
            id="newsletter-form"
            onSubmit={handleSubmit}
            className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          >
            <input
              id="newsletter-email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-[#16264A] text-sm text-[#0F1B33] dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />
            <button
              id="newsletter-submit-btn"
              type="submit"
              className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#2563EB] hover:bg-[#1d4ed8] active:scale-[0.99] transition-all shadow-xs shrink-0"
            >
              Join Free
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-zinc-600 dark:text-zinc-400">
          No spam, no third-party sharing. Unsubscribe in one click whenever you want.
        </p>
      </div>
    </section>
  );
};
