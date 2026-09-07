import React, { useState } from 'react';
import { weaknessQuestions } from '../data/weaknessQuestions';
import { Book } from '../types';
import { Activity, CheckCircle2, XCircle, ArrowRight, RotateCcw, Sparkles, BookOpen, ExternalLink, ChevronRight, AlertTriangle } from 'lucide-react';
import { SEOHead } from './SEOHead';

interface WeaknessFinderProps {
  books: Book[];
  onNavigate: (view: 'home' | 'blog' | 'books' | 'practice' | 'quizzes' | 'weakness-finder' | 'resources' | 'about' | 'contact' | 'search') => void;
  onSelectBookBySlug?: (slug: string) => void;
}

export const WeaknessFinder: React.FC<WeaknessFinderProps> = ({
  books,
  onNavigate,
  onSelectBookBySlug,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const totalQuestions = weaknessQuestions.length;
  const currentQ = weaknessQuestions[currentStep];
  const selectedOption = userAnswers[currentQ?.id];

  const handleSelectOption = (index: number) => {
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: index }));
  };

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Diagnostic Calculation
  const missedQuestions = weaknessQuestions.filter((q) => {
    const userAns = userAnswers[q.id];
    return userAns !== undefined && userAns !== q.correctIndex;
  });

  const correctCount = totalQuestions - missedQuestions.length;
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  // Group missed by topic
  const missedTopics = missedQuestions.map((q) => ({
    topic: q.topic,
    bookSlug: q.matchingBookSlug,
    bookTitle: q.matchingBookTitle,
    rule: q.rule,
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: 'Grammar Weakness Finder & Diagnostic Tool — ZeroErrorEnglish',
    description: 'Pinpoint your exact grammar weaknesses across 10 competitive exam domains with targeted eBook recommendations.',
    url: 'https://zeroerrorenglishpro.com/weakness-finder',
  };

  return (
    <div className="py-12 bg-zinc-50 dark:bg-[#0B132B] min-h-screen">
      <SEOHead
        title="Grammar Weakness Finder — 10-Question Diagnostic Tool"
        description="Diagnose your grammar weak spots in 5 minutes. Find out why you lose marks on Subject-Verb, Prepositions, Voice, or Clauses, with tailored book recommendations."
        canonicalUrl="https://zeroerrorenglishpro.com/weakness-finder"
        ogType="website"
        jsonLd={jsonLd}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-zinc-900 dark:hover:text-white">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="font-semibold text-zinc-900 dark:text-white">Grammar Weakness Finder</span>
        </nav>

        {!isCompleted ? (
          <div>
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-[#5B8DF6] text-xs font-semibold mb-3">
                <Activity className="w-3.5 h-3.5" />
                <span>5-Minute Diagnostic Engine</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F1B33] dark:text-white tracking-tight mb-3 font-heading">
                Grammar Weakness Finder
              </h1>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Answer 10 diagnostic questions covering the 10 most heavily tested grammar domains. We will analyze your error patterns and pinpoint your exact weak spots.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-semibold text-zinc-500 mb-2">
                <span>Question {currentStep + 1} of {totalQuestions}</span>
                <span>Topic: {currentQ.topic}</span>
              </div>
              <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#2563EB] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/50 shadow-md mb-8">
              <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold mb-4">
                Domain: {currentQ.topic}
              </div>

              <h2 className="font-heading text-lg sm:text-xl font-bold text-[#0F1B33] dark:text-white mb-6 leading-snug">
                {currentQ.question}
              </h2>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-4 rounded-xl border text-left flex items-center justify-between gap-3 transition-all ${
                        isSelected
                          ? 'border-[#2563EB] bg-[#2563EB]/10 text-zinc-900 dark:text-white ring-2 ring-[#2563EB]/40'
                          : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/80 hover:border-zinc-300 dark:hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                            isSelected
                              ? 'bg-[#2563EB] text-white'
                              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-200">
                          {opt}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  &larr; Previous
                </button>

                <button
                  onClick={handleNext}
                  disabled={selectedOption === undefined}
                  className="px-6 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-xs transition-all disabled:opacity-30 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  <span>{currentStep < totalQuestions - 1 ? 'Next Question' : 'Generate Diagnostic'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ================= DIAGNOSTIC REPORT RESULTS VIEW ================= */
          <div className="py-4">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#16264A]/60 border border-zinc-200 dark:border-zinc-800 shadow-xl mb-8">
              <div className="text-center max-w-xl mx-auto mb-8">
                <div className="w-16 h-16 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-[#5B8DF6] flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F1B33] dark:text-white mb-2">
                  Your Personal Grammar Diagnostic Profile
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Diagnostic evaluation completed across 10 core competitive examination domains.
                </p>
              </div>

              {/* Score Meter */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 text-center">
                  <div className="text-3xl font-black font-heading text-[#2563EB] dark:text-[#5B8DF6]">
                    {scorePercent}%
                  </div>
                  <div className="text-xs text-zinc-500 font-semibold mt-1">Diagnostic Accuracy</div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 text-center">
                  <div className="text-3xl font-black font-heading text-[#27ae60]">
                    {correctCount} / 10
                  </div>
                  <div className="text-xs text-zinc-500 font-semibold mt-1">Domains Mastered</div>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 text-center">
                  <div className="text-3xl font-black font-heading text-[#c0392b]">
                    {missedTopics.length}
                  </div>
                  <div className="text-xs text-zinc-500 font-semibold mt-1">High-Risk Vulnerabilities</div>
                </div>
              </div>

              {/* Identified Weaknesses Breakdown */}
              {missedTopics.length > 0 ? (
                <div className="space-y-4 mb-10">
                  <h3 className="text-base font-bold text-[#0F1B33] dark:text-white flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    <span>Your Top Identified Weak Spots:</span>
                  </h3>

                  <div className="space-y-3">
                    {missedTopics.map((item, idx) => {
                      const matchingBook = books.find((b) => b.slug === item.bookSlug);
                      return (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
                        >
                          <div className="space-y-1 max-w-lg">
                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400">
                              Vulnerability #{idx + 1}: {item.topic}
                            </span>
                            <p className="text-xs text-zinc-600 dark:text-zinc-300">
                              {item.rule}
                            </p>
                          </div>

                          {matchingBook && (
                            <div className="shrink-0 flex items-center gap-2 w-full sm:w-auto justify-end">
                              <a
                                href={matchingBook.amazonUrl || 'PLACEHOLDER-AMAZON-URL'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3.5 py-1.5 rounded-xl bg-[#F5A623] text-[#0F1B33] font-bold text-xs shadow-xs inline-flex items-center gap-1 hover:bg-[#F5A623]/90"
                              >
                                <span>Get Volume #{String(matchingBook.id).padStart(2, '0')}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                              {onSelectBookBySlug && (
                                <button
                                  onClick={() => onSelectBookBySlug(matchingBook.slug)}
                                  className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#16264A] text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700"
                                >
                                  Details
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-[#27ae60]/10 border border-[#27ae60]/30 text-center mb-8">
                  <CheckCircle2 className="w-10 h-10 text-[#27ae60] mx-auto mb-2" />
                  <h4 className="font-heading font-bold text-lg text-zinc-900 dark:text-white mb-1">
                    Flawless Score! Zero Grammatical Weaknesses Found
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
                    You answered all 10 diagnostic questions accurately. Your conceptual foundation is exceptionally sound. For rapid final exam revision, check out Volume #12: 100 English Grammar Shortcuts.
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 inline-flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Diagnostic</span>
                </button>
                <button
                  onClick={() => onNavigate('practice')}
                  className="px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs font-semibold hover:bg-[#1D4ED8]"
                >
                  Go to Practice Zone
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
