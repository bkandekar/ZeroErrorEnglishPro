import React from 'react';
import { Target, Lightbulb, BookCheck, ShieldAlert } from 'lucide-react';

export const WhyThisSite: React.FC = () => {
  const benefits = [
    {
      title: 'Learn by real exam patterns, not generic rules',
      description:
        'General school grammar books teach formulas in isolation. Here, every lesson starts with the deceptive sentence constructions actually picked by SSC, IBPS, and State PSC question setters over the last decade.',
      icon: Target,
      highlight: 'Pattern Recognition',
    },
    {
      title: 'Every rule has a memorable exam-trap explanation',
      description:
        'Instead of memorizing dry definitions, you discover exactly how examiners disguise errors through intervening modifiers, inverted clauses, and misleading correlative pairs.',
      icon: Lightbulb,
      highlight: 'Examiner Psychology',
    },
    {
      title: 'Practical exam-focused eBooks for deeper practice',
      description:
        'When you find an area of recurring negative marks, you don’t need another 700-page reference manual. You get a focused 100–150 page targeted drill with 200+ solved exam questions.',
      icon: BookCheck,
      highlight: 'Targeted Volumes',
    },
    {
      title: 'No ads, no clutter, no PDF dumps',
      description:
        'Most grammar websites ranking online are unreadable tag-archives buried under five layers of ads and outdated scanned printouts. ZeroError is built as a fast, distraction-free reading experience for serious aspirants.',
      icon: ShieldAlert,
      highlight: 'Clean EdTech Standard',
    },
  ];

  return (
    <section
      id="why-this-site-section"
      className="py-16 sm:py-20 bg-zinc-50/70 dark:bg-[#16264A]/20 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F1B33] dark:text-white tracking-tight">
            Designed for Aspirants Who Cannot Afford Negative Marks
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-2">
            Built from 22 years in the classroom and 15+ years training students to crack Tier-1 and Tier-2 competitive examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                id={`benefit-card-${idx}`}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0F1B33] p-6 sm:p-7 shadow-xs hover:border-[#2563EB]/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-[#5B8DF6] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-[#F5A623] uppercase tracking-wider">
                      {benefit.highlight}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[#0F1B33] dark:text-white leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
