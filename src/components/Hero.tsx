import React from 'react';
import { CorrectedSentenceCard } from './CorrectedSentenceCard';
import { Award, BookCheck, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onReadBlog: () => void;
  onExploreBooks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReadBlog, onExploreBooks }) => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden pt-12 pb-16 md:pt-18 md:pb-24 border-b border-zinc-200 dark:border-zinc-800/80 bg-radial-[at_top_right] from-zinc-100 via-[#FAFAFA] to-[#FAFAFA] dark:from-[#16264A]/40 dark:via-[#0F1B33] dark:to-[#0F1B33]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Educator Credential Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#2563EB]/10 text-[#2563EB] dark:bg-[#2563EB]/20 dark:text-[#5B8DF6] border border-[#2563EB]/20">
              <ShieldCheck className="w-4 h-4 text-[#2563EB] dark:text-[#5B8DF6]" />
              <span>22 Years Teaching &bull; 15+ Years Competitive Coaching</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#0F1B33] dark:text-white tracking-tight leading-[1.18]">
              English grammar taught through the mistakes examiners bank on.
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
              Most candidates do not fail competitive exams because they never read grammar rules. They lose marks because competitive exam question setters specifically engineer sentences around deceptive word orders, misleading prepositional baggage, and native-language translation habits. We dissect every high-yield error trap so you recognize the trick in ten seconds flat.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-cta-read-blog"
                onClick={onReadBlog}
                className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#2563EB] hover:bg-[#1d4ed8] active:scale-[0.99] transition-all shadow-sm text-center"
              >
                Read the Blog
              </button>
              <button
                id="hero-cta-explore-books"
                onClick={onExploreBooks}
                className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#0F1B33] dark:text-white bg-white dark:bg-[#16264A] hover:bg-zinc-100 dark:hover:bg-[#16264A]/80 border border-zinc-200 dark:border-zinc-700 transition-all text-center"
              >
                Explore the 14 Books
              </button>
            </div>

            {/* Trust signals */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <BookCheck className="w-4 h-4 text-[#27ae60]" />
                <span>Zero Ads or Promotional Noise</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#F5A623]" />
                <span>14 Dedicated Topic eBooks on Amazon KDP</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Corrected Exam Sentence Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Subtle ambient accent background glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#2563EB]/10 via-[#F5A623]/10 to-transparent blur-lg opacity-60 pointer-events-none" />

              <CorrectedSentenceCard
                id="hero-signature-card"
                examTag="SSC CGL Tier-2 & IBPS PO Mains Trap"
                incorrectSentence="Neither of the senior committee delegates have submitted their verified financial disclosure."
                correctSentence={
                  <>
                    Neither of the senior committee delegates{' '}
                    <span className="text-[#27ae60] underline underline-offset-4 decoration-2 font-bold">
                      has
                    </span>{' '}
                    submitted{' '}
                    <span className="text-[#27ae60] underline underline-offset-4 decoration-2 font-bold">
                      his or her
                    </span>{' '}
                    verified financial disclosure.
                  </>
                }
                rule="The distributive pronoun 'Neither of' takes a singular verb ('has') and a singular possessive pronoun ('his or her'), regardless of the intervening plural noun 'delegates'."
                trapLabel="The 10-Second Eye Test"
                className="relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
