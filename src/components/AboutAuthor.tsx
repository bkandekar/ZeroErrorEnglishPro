import React from 'react';
import { Award, GraduationCap, BookOpen, Target, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from './SEOHead';

interface AboutAuthorProps {
  onNavigate: (view: 'home' | 'blog' | 'books' | 'practice' | 'quizzes' | 'weakness-finder' | 'resources' | 'about' | 'contact' | 'search') => void;
}

export const AboutAuthor: React.FC<AboutAuthorProps> = ({ onNavigate }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About the Author — ZeroErrorEnglishPro',
    description: 'Learn about the English Grammar educator behind ZeroErrorEnglishPro with 22 years of classroom experience and 15+ years competitive-exam coaching.',
    url: 'https://zeroerrorenglishpro.com/about',
  };

  return (
    <div className="py-12 bg-zinc-50 dark:bg-[#0B132B] min-h-screen">
      <SEOHead
        title="About the Author — 22 Years Teaching &amp; Exam Coaching Experience"
        description="Meet the educator behind ZeroErrorEnglish. 22 years of classroom teaching and 15+ years of competitive exam coaching for SSC CGL, Banking, and State PSCs."
        canonicalUrl="https://zeroerrorenglishpro.com/about"
        ogType="profile"
        jsonLd={jsonLd}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-zinc-900 dark:hover:text-white">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="font-semibold text-zinc-900 dark:text-white">About the Author</span>
        </nav>

        {/* Hero Card */}
        <div className="p-8 sm:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/50 shadow-md mb-10">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-linear-to-br from-[#0F1B33] to-[#2563EB] text-white flex items-center justify-center font-heading font-black text-3xl shadow-xl shrink-0 border-2 border-amber-400/40">
              ZE
            </div>

            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-[#5B8DF6] text-xs font-semibold mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Educator Profile &amp; Teaching Philosophy</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F1B33] dark:text-white tracking-tight mb-2">
                English Grammar Educator &amp; Exam Strategist
              </h1>
              <p className="text-sm font-medium text-[#2563EB] dark:text-[#5B8DF6]">
                22 Years Classroom Teaching • 15+ Years Competitive Exam Coaching
              </p>
            </div>
          </div>

          {/* Core Credentials Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-100 dark:border-zinc-800">
            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 text-center">
              <div className="text-xl font-bold text-[#0F1B33] dark:text-white font-heading">22+ Yrs</div>
              <div className="text-[11px] text-zinc-500 font-medium">Classroom Teaching</div>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 text-center">
              <div className="text-xl font-bold text-[#0F1B33] dark:text-white font-heading">15+ Yrs</div>
              <div className="text-[11px] text-zinc-500 font-medium">Exam Coaching</div>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 text-center">
              <div className="text-xl font-bold text-[#0F1B33] dark:text-white font-heading">14 Books</div>
              <div className="text-[11px] text-zinc-500 font-medium">Published on KDP</div>
            </div>
            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 text-center">
              <div className="text-xl font-bold text-[#0F1B33] dark:text-white font-heading">25,000+</div>
              <div className="text-[11px] text-zinc-500 font-medium">Aspirants Mentored</div>
            </div>
          </div>
        </div>

        {/* Narrative Biography Sections */}
        <div className="space-y-8 bg-white dark:bg-[#16264A]/40 p-8 sm:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs mb-10 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold font-heading text-[#0F1B33] dark:text-white mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#F5A623]" />
              <span>Why Traditional Grammar Rules Fail in Competitive Exams</span>
            </h2>
            <p className="text-sm sm:text-base mb-4">
              Over two decades of preparing students for SSC CGL, Bank PO, and State PCS examinations revealed a recurring tragedy: hardworking aspirants who memorized hundreds of standard rules from traditional textbooks still lost crucial marks in Tier 1 and Tier 2 papers.
            </p>
            <p className="text-sm sm:text-base">
              The reason is simple: <strong>Standard textbooks teach grammar for descriptive writing. Competitive exams test grammar under severe cognitive stress with deliberate psychological distractors.</strong> An exam paper does not merely ask if you know the rule; it embeds that rule inside long intervening clauses, deceptive parenthetical phrases, and euphonic traps designed to fool your ear.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold font-heading text-[#0F1B33] dark:text-white mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#2563EB]" />
              <span>The Philosophy of ZeroErrorEnglish</span>
            </h2>
            <p className="text-sm sm:text-base mb-4">
              ZeroErrorEnglish was born out of a mission to transform how English grammar is decoded. Instead of vague guidelines or rote memorization, every chapter, blog article, and handbook is engineered around three pillars:
            </p>
            <div className="space-y-3 pl-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#27ae60] shrink-0 mt-1" />
                <p className="text-sm">
                  <strong>Zero Negative Marking:</strong> Replacing guesswork with 100% mathematical precision. If you don't know the exact rule governing an option, our elimination heuristics guide you away from traps.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#27ae60] shrink-0 mt-1" />
                <p className="text-sm">
                  <strong>Examiner Distractor Mapping:</strong> Revealing exactly how examiners disguise errors by placing prepositional phrases between singular subjects and plural verbs, or by using inverted adverbs.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#27ae60] shrink-0 mt-1" />
                <p className="text-sm">
                  <strong>12-Second Heuristics:</strong> Fast recognition patterns that allow serious aspirants to spot and verify errors in under 15 seconds, saving valuable time for Reading Comprehension and Cloze Tests.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold font-heading text-[#0F1B33] dark:text-white mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#27ae60]" />
              <span>The 14-Book Amazon KDP Series</span>
            </h2>
            <p className="text-sm sm:text-base mb-4">
              The 14 volumes published on Amazon KDP represent the complete distillation of 22 years of pedagogical experience. Each volume isolates a single high-impact grammar territory — from Subject-Verb Agreement and Tenses to Non-Finite Verbs and Punctuation.
            </p>
            <p className="text-sm sm:text-base">
              Whether you are an SSC aspirant targeting the top ranks, a bank PO candidate aiming for cutoffs with safety margins, or a high-school student striving for 100% board accuracy, these books are your definitive diagnostic companions.
            </p>
          </section>
        </div>

        {/* CTA Footer Card */}
        <div className="p-8 rounded-3xl bg-linear-to-r from-[#0F1B33] to-[#1E3A8A] text-white text-center shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">
            Start Your Error-Free Grammar Journey
          </h3>
          <p className="text-sm text-zinc-300 max-w-md mx-auto mb-6">
            Begin with our free 5-minute diagnostic weakness test or explore the complete 14-book series on Amazon KDP.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => onNavigate('weakness-finder')}
              className="px-6 py-2.5 rounded-xl bg-white text-[#0F1B33] font-bold text-xs shadow-sm hover:bg-zinc-100"
            >
              Take Weakness Finder
            </button>
            <button
              onClick={() => onNavigate('books')}
              className="px-6 py-2.5 rounded-xl bg-[#F5A623] text-[#0F1B33] font-bold text-xs shadow-sm hover:bg-[#F5A623]/90"
            >
              Explore 14 Books
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
