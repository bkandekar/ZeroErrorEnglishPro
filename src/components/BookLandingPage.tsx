import React, { useState } from 'react';
import { Book } from '../types';
import { BookOpen, ExternalLink, ChevronRight, CheckCircle2, Star, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';
import { SEOHead } from './SEOHead';

interface BookLandingPageProps {
  book: Book;
  onNavigate: (view: 'home' | 'blog' | 'books' | 'practice' | 'quizzes' | 'weakness-finder' | 'resources' | 'about' | 'contact' | 'search') => void;
  onSelectBookBySlug?: (slug: string) => void;
}

export const BookLandingPage: React.FC<BookLandingPageProps> = ({
  book,
  onNavigate,
}) => {
  const [showSampleModal, setShowSampleModal] = useState(false);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: book.title,
    author: {
      '@type': 'Person',
      name: 'ZeroErrorEnglish Expert Educator',
      jobTitle: 'English Grammar Educator & Exam Coach',
    },
    about: book.topic,
    description: book.shortBenefit,
    url: `https://zeroerrorenglishpro.com/books/${book.slug}`,
    inLanguage: 'en-US',
  };

  return (
    <div className="py-8 bg-zinc-50 dark:bg-[#0B132B] min-h-screen">
      <SEOHead
        title={`${book.title} — English Grammar Guide`}
        description={book.shortBenefit || `Master ${book.topic} with ZeroErrorEnglish. 22 years of teaching expertise distilled into exam-focused rules.`}
        canonicalUrl={`https://zeroerrorenglishpro.com/books/${book.slug}`}
        ogType="book"
        jsonLd={jsonLd}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6 overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <button
            onClick={() => onNavigate('books')}
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            All 14 Books
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="font-medium text-zinc-800 dark:text-zinc-200 truncate max-w-[200px] sm:max-w-xs">
            Volume #{String(book.id).padStart(2, '0')}
          </span>
        </nav>

        {/* Hero Header Card */}
        <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/50 shadow-md mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Book Cover Graphic Card */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-[240px] aspect-3/4 rounded-2xl p-6 bg-linear-to-br from-[#0F1B33] via-[#16264A] to-[#2563EB] text-white shadow-xl relative overflow-hidden flex flex-col justify-between border-2 border-amber-400/30">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5A623]/10 rounded-full blur-2xl pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-amber-400 tracking-wider uppercase mb-2">
                    <span>Volume #{String(book.id).padStart(2, '0')}</span>
                    <span className="text-zinc-300 font-normal">KDP Edition</span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 mb-2">
                    {book.topic}
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg leading-snug line-clamp-4">
                    {book.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="text-[10px] text-zinc-300 uppercase tracking-wider">Author</div>
                  <div className="text-xs font-bold text-white">22-Yr English Educator</div>
                  <div className="text-[10px] text-amber-300 font-medium mt-0.5">15+ Yrs Competitive Coach</div>
                </div>
              </div>
            </div>

            {/* Right: Book Details & Actions */}
            <div className="md:col-span-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-[#5B8DF6]">
                  {book.topic}
                </span>
                {book.difficulty && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {book.difficulty}
                  </span>
                )}
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  <span>Amazon Verified</span>
                </span>
              </div>

              <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F1B33] dark:text-white tracking-tight mb-3">
                {book.title}
              </h1>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                {book.shortBenefit}
              </p>

              {book.idealFor && (
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 mb-6 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>
                    <strong>Ideal Target Exam:</strong> {book.idealFor}
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 items-center">
                <a
                  href={book.amazonUrl || 'PLACEHOLDER-AMAZON-URL'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#0F1B33] font-bold text-sm shadow-md transition-all inline-flex items-center gap-2 hover:scale-[1.02]"
                >
                  <span>Buy on Amazon KDP</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setShowSampleModal(true)}
                  className="px-5 py-3 rounded-xl bg-white dark:bg-[#16264A] border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-semibold transition-all inline-flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-[#2563EB]" />
                  <span>View Sample Questions</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Book Overview HTML Content from /content/books/<slug>.html */}
        {book.overviewHtml ? (
          <div
            className="prose dark:prose-invert max-w-none bg-white dark:bg-[#16264A]/30 p-6 sm:p-10 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs mb-16"
            dangerouslySetInnerHTML={{ __html: book.overviewHtml }}
          />
        ) : (
          <div className="p-8 rounded-2xl bg-white dark:bg-[#16264A]/40 border border-zinc-200 dark:border-zinc-800 mb-16 text-center">
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">
              Full interactive syllabus for Volume #{String(book.id).padStart(2, '0')} available on Amazon KDP.
            </p>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="p-8 rounded-3xl bg-linear-to-r from-[#0F1B33] to-[#1E3A8A] text-white text-center mb-16 relative overflow-hidden">
          <div className="max-w-xl mx-auto relative z-10">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2 block">
              ZeroError English Series
            </span>
            <h2 className="text-2xl font-bold font-heading mb-3">
              Ready to eliminate errors in {book.topic}?
            </h2>
            <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
              Get the complete Kindle Edition or Paperback on Amazon KDP today and master the rules examiners bank on you missing.
            </p>
            <a
              href={book.amazonUrl || 'PLACEHOLDER-AMAZON-URL'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#0F1B33] font-bold text-sm shadow-lg transition-all"
            >
              <span>Get Your Copy on Amazon</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Sample Question Modal */}
      {showSampleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white dark:bg-[#16264A] rounded-2xl border border-zinc-200 dark:border-zinc-800 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800 mb-4">
              <div>
                <span className="text-xs font-bold text-[#2563EB] dark:text-[#5B8DF6] uppercase">
                  Volume #{String(book.id).padStart(2, '0')} Sample Preview
                </span>
                <h3 className="font-heading font-bold text-lg text-[#0F1B33] dark:text-white">
                  Sample Practice &amp; Solution
                </h3>
              </div>
              <button
                onClick={() => setShowSampleModal(false)}
                className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white flex items-center justify-center text-sm font-bold"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700">
                <p className="font-semibold text-zinc-900 dark:text-white mb-2">
                  Sample Question from Chapter 2:
                </p>
                <p className="italic text-zinc-700 dark:text-zinc-300">
                  &quot;Neither of the two candidates (A) / who appeared for the senior specialist post (B) / were qualified according to the commission standards. (C) / No error (D)&quot;
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#27ae60]/10 border border-[#27ae60]/30 text-xs sm:text-sm">
                <p className="font-bold text-[#27ae60] mb-1">
                  Examiner Breakdown:
                </p>
                <p>
                  <strong>Error in Part (C):</strong> Replace <em>were qualified</em> with <strong>was qualified</strong>.
                </p>
                <p className="mt-1 text-zinc-600 dark:text-zinc-300">
                  <strong>The Rule:</strong> When <em>Neither</em> is used as a distributive pronoun, it takes a strictly singular verb, despite the intervening relative clause mentioning plural candidates.
                </p>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                This volume contains over 200 similar exam-grade questions with step-by-step diagnostic answers.
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <button
                onClick={() => setShowSampleModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Close
              </button>
              <a
                href={book.amazonUrl || 'PLACEHOLDER-AMAZON-URL'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#0F1B33] font-bold text-xs shadow-xs"
              >
                Buy Full Book on Amazon
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
