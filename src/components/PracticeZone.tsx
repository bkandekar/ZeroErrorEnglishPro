import React, { useState } from 'react';
import { practiceQuestions } from '../data/practiceQuestions';
import { PracticeQuestion } from '../types';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, Target, HelpCircle, Sparkles, ChevronRight, Lock } from 'lucide-react';
import { SEOHead } from './SEOHead';

interface PracticeZoneProps {
  onNavigate: (view: 'home' | 'blog' | 'books' | 'practice' | 'quizzes' | 'weakness-finder' | 'resources' | 'about' | 'contact' | 'search') => void;
  onSelectBookBySlug?: (slug: string) => void;
}

const PRACTICE_TYPES = [
  {
    id: 'error-spotting',
    title: 'Spot the Error Drills',
    desc: 'Audit sentences broken into sections (A, B, C, D) to find the grammatical flaw.',
    status: 'active',
    count: '10 Exam Questions',
  },
  {
    id: 'sentence-improvement',
    title: 'Sentence Improvement',
    desc: 'Select the optimal phrasal substitution to eliminate redundancy and syntactic errors.',
    status: 'soon',
    count: 'Coming Soon',
  },
  {
    id: 'fill-in-blanks',
    title: 'Fill in the Blanks & Cloze',
    desc: 'Choose the exact preposition, auxiliary, or connector for tricky contextual sentences.',
    status: 'soon',
    count: 'Coming Soon',
  },
  {
    id: 'voice-conversion',
    title: 'Active / Passive Voice',
    desc: 'Convert complex assertions, imperatives, and quasi-passives across tenses.',
    status: 'soon',
    count: 'Coming Soon',
  },
  {
    id: 'narration-drills',
    title: 'Direct / Indirect Speech',
    desc: 'Master tense backshifting, pronoun cases, and universal fact exceptions.',
    status: 'soon',
    count: 'Coming Soon',
  },
  {
    id: 'question-tags',
    title: 'Question Tag Mastery',
    desc: 'Semi-negative adverbs, imperatives, and plural pronoun tag drills.',
    status: 'soon',
    count: 'Coming Soon',
  },
  {
    id: 'preposition-drills',
    title: 'Fixed Prepositions Drills',
    desc: 'Practice 200+ high-frequency verb-preposition pairings tested in SSC CGL.',
    status: 'soon',
    count: 'Coming Soon',
  },
  {
    id: 'articles-drills',
    title: 'Articles (A, An, The)',
    desc: 'Zero-article exclusions, proper noun rules, and euphonic vowel sound drills.',
    status: 'soon',
    count: 'Coming Soon',
  },
  {
    id: 'modal-verbs',
    title: 'Modal Auxiliary Drills',
    desc: 'Epistemic certainty, deduction with modal perfects, and obligation nuances.',
    status: 'soon',
    count: 'Coming Soon',
  },
  {
    id: 'clause-synthesis',
    title: 'Clause & Conjunction Drills',
    desc: 'Correlative pairings, relative pronouns, and negative inversion drills.',
    status: 'soon',
    count: 'Coming Soon',
  },
];

export const PracticeZone: React.FC<PracticeZoneProps> = ({
  onNavigate,
}) => {
  const [activeMode, setActiveMode] = useState<'index' | 'error-spotting'>('index');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQ = practiceQuestions[currentIndex];
  const selectedPart = userAnswers[currentQ.id];
  const isAnswered = Boolean(selectedPart);
  const isCorrect = selectedPart === currentQ.correctPart;

  const totalQuestions = practiceQuestions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(([qId, ans]) => {
    const q = practiceQuestions.find((item) => item.id === Number(qId));
    return q && q.correctPart === ans;
  }).length;

  const handleSelectPart = (letter: string) => {
    if (isAnswered) return; // Locked once chosen
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: letter }));
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowExplanation(Boolean(userAnswers[practiceQuestions[currentIndex + 1]?.id]));
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowExplanation(Boolean(userAnswers[practiceQuestions[currentIndex - 1]?.id]));
    }
  };

  const handleRestart = () => {
    setUserAnswers({});
    setCurrentIndex(0);
    setShowExplanation(false);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: 'ZeroError English Practice Zone — Spot the Error Drills',
    description: 'Interactive exam-level error spotting practice with instant rule explanations and difficulty ratings.',
    url: 'https://zeroerrorenglishpro.com/practice',
  };

  return (
    <div className="py-12 bg-zinc-50 dark:bg-[#0B132B] min-h-screen">
      <SEOHead
        title="Grammar Practice Zone — Spot the Error Drills &amp; MCQs"
        description="Test your English grammar with 10 interactive exam-grade error spotting questions. Instant rule explanations, examiner traps, and real SSC/Banking questions."
        canonicalUrl="https://zeroerrorenglishpro.com/practice"
        ogType="website"
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-zinc-900 dark:hover:text-white">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <button
            onClick={() => setActiveMode('index')}
            className={activeMode === 'index' ? 'font-semibold text-zinc-900 dark:text-white' : 'hover:text-zinc-900 dark:hover:text-white'}
          >
            Practice Zone
          </button>
          {activeMode === 'error-spotting' && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-semibold text-zinc-900 dark:text-white">Spot the Error Drill</span>
            </>
          )}
        </nav>

        {activeMode === 'index' ? (
          /* ================= INDEX VIEW ================= */
          <div>
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-[#5B8DF6] text-xs font-semibold mb-3">
                <Target className="w-3.5 h-3.5" />
                <span>Interactive Exam Drills</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1B33] dark:text-white tracking-tight mb-4 font-heading">
                English Grammar Practice Zone
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Test your mastery with high-frequency questions crafted to simulate actual SSC CGL, IBPS PO, and Railway exam conditions.
              </p>
            </div>

            {/* Practice Category Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {PRACTICE_TYPES.map((type) => {
                const isActive = type.status === 'active';

                return (
                  <div
                    key={type.id}
                    className={`rounded-2xl border p-6 flex flex-col justify-between transition-all ${
                      isActive
                        ? 'border-[#2563EB]/40 bg-white dark:bg-[#16264A]/50 shadow-md hover:shadow-xl'
                        : 'border-zinc-200 dark:border-zinc-800/80 bg-white/60 dark:bg-[#16264A]/20 opacity-80'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                            isActive
                              ? 'bg-[#2563EB]/10 text-[#2563EB] dark:text-[#5B8DF6]'
                              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
                          }`}
                        >
                          {type.count}
                        </span>
                        {!isActive && (
                          <span className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                            <Lock className="w-3 h-3" />
                            <span>Soon</span>
                          </span>
                        )}
                      </div>

                      <h3 className="font-heading font-bold text-lg text-[#0F1B33] dark:text-white mb-2">
                        {type.title}
                      </h3>

                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                        {type.desc}
                      </p>
                    </div>

                    <div>
                      {isActive ? (
                        <button
                          onClick={() => setActiveMode('error-spotting')}
                          className="w-full py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2"
                        >
                          <span>Start Spotting Practice</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          disabled
                          className="w-full py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 text-zinc-400 dark:text-zinc-500 font-semibold text-xs cursor-not-allowed"
                        >
                          Unlocks in Next Update
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* ================= INTERACTIVE ERROR SPOTTING MODULE ================= */
          <div className="max-w-4xl mx-auto">
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-[#16264A]/60 border border-zinc-200 dark:border-zinc-800 mb-6 shadow-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveMode('index')}
                  className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  &larr; Back to Practice
                </button>
                <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700" />
                <span className="text-xs font-bold text-[#0F1B33] dark:text-white">
                  Question {currentIndex + 1} of {totalQuestions}
                </span>
              </div>

              {/* Score summary */}
              <div className="flex items-center gap-4 text-xs font-semibold">
                <span className="text-[#27ae60] flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Correct: {correctCount}</span>
                </span>
                <span className="text-zinc-500 dark:text-zinc-400">
                  Attempted: {answeredCount} / {totalQuestions}
                </span>
                <button
                  onClick={handleRestart}
                  title="Reset practice"
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Question Progress Bar */}
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2 rounded-full mb-8 overflow-hidden">
              <div
                className="bg-[#2563EB] h-full transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            {/* Main Interactive Card */}
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/50 p-6 sm:p-8 shadow-lg mb-6">
              {/* Question Meta Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-[#5B8DF6]">
                  {currentQ.examSource}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                  Difficulty: {currentQ.difficulty}
                </span>
              </div>

              {/* Instructions */}
              <h2 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3">
                Spot the Error in the Sentence Below:
              </h2>

              {/* Full Sentence Display */}
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/80 mb-6">
                <p className="text-base sm:text-lg font-medium text-zinc-900 dark:text-white leading-relaxed">
                  &ldquo;{currentQ.sentence}&rdquo;
                </p>
              </div>

              {/* Clickable Parts Options */}
              <div className="space-y-3 mb-6">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold mb-2">
                  Click the segment containing the error:
                </p>
                {currentQ.parts.map((part) => {
                  const isSelected = selectedPart === part.letter;
                  const isThisCorrect = part.letter === currentQ.correctPart;

                  let buttonStyles =
                    'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/80 hover:border-[#2563EB] dark:hover:border-[#5B8DF6]';

                  if (isAnswered) {
                    if (isThisCorrect) {
                      buttonStyles = 'border-[#27ae60] bg-[#27ae60]/10 text-zinc-900 dark:text-white ring-2 ring-[#27ae60]/40';
                    } else if (isSelected && !isThisCorrect) {
                      buttonStyles = 'border-[#c0392b] bg-[#c0392b]/10 text-zinc-900 dark:text-white ring-2 ring-[#c0392b]/40';
                    } else {
                      buttonStyles = 'opacity-60 border-zinc-200 dark:border-zinc-800';
                    }
                  }

                  return (
                    <button
                      key={part.letter}
                      disabled={isAnswered}
                      onClick={() => handleSelectPart(part.letter)}
                      className={`w-full p-4 rounded-xl border text-left flex items-center justify-between gap-4 transition-all ${buttonStyles}`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                            isSelected
                              ? isCorrect
                                ? 'bg-[#27ae60] text-white'
                                : 'bg-[#c0392b] text-white'
                              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                          }`}
                        >
                          ({part.letter})
                        </span>
                        <span className="text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-200">
                          {part.text}
                        </span>
                      </div>

                      {isAnswered && isThisCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-[#27ae60] shrink-0" />
                      )}
                      {isAnswered && isSelected && !isThisCorrect && (
                        <XCircle className="w-5 h-5 text-[#c0392b] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Solution & Explanation Drawer */}
              {isAnswered && (
                <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 space-y-4 animate-in fade-in">
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#27ae60]">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Spot-On! You identified Part ({currentQ.correctPart}) as the error.</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#c0392b]">
                        <XCircle className="w-5 h-5" />
                        <span>Incorrect. The error lies in Part ({currentQ.correctPart}).</span>
                      </span>
                    )}
                  </div>

                  {/* Corrected Sentence Box */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-[#16264A] border border-zinc-200 dark:border-zinc-700">
                    <span className="text-[11px] font-bold text-[#2563EB] dark:text-[#5B8DF6] uppercase block mb-1">
                      Corrected Sentence:
                    </span>
                    <p className="text-sm font-medium text-zinc-900 dark:text-white">
                      {currentQ.correctedSentence}
                    </p>
                  </div>

                  {/* Explanation & Rule */}
                  <div>
                    <span className="text-[11px] font-bold text-zinc-500 uppercase block mb-1">
                      Grammar Rule &amp; Breakdown:
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-2">
                      {currentQ.explanation}
                    </p>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#2563EB]/10 text-[#2563EB] dark:text-[#5B8DF6] text-xs font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{currentQ.governingRule}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  &larr; Previous
                </button>

                <div className="flex gap-1.5">
                  {practiceQuestions.map((q, idx) => {
                    const ans = userAnswers[q.id];
                    let dotColor = 'bg-zinc-200 dark:bg-zinc-800';
                    if (ans) {
                      dotColor = ans === q.correctPart ? 'bg-[#27ae60]' : 'bg-[#c0392b]';
                    } else if (idx === currentIndex) {
                      dotColor = 'bg-[#2563EB] ring-2 ring-[#2563EB]/40';
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          setCurrentIndex(idx);
                          setShowExplanation(Boolean(userAnswers[q.id]));
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${dotColor}`}
                        title={`Go to Question ${idx + 1}`}
                      />
                    );
                  })}
                </div>

                <button
                  onClick={handleNext}
                  disabled={currentIndex === totalQuestions - 1}
                  className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-xs transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next &rarr;
                </button>
              </div>
            </div>

            {/* Results Completion Card if all answered */}
            {answeredCount === totalQuestions && (
              <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-r from-[#0F1B33] to-[#1E3A8A] text-white text-center shadow-xl animate-in zoom-in-95">
                <Award className="w-12 h-12 text-[#F5A623] mx-auto mb-3" />
                <h3 className="font-heading text-2xl font-bold mb-2">
                  Drill Completed! Your Score: {correctCount} / {totalQuestions}
                </h3>
                <p className="text-sm text-zinc-300 mb-6 max-w-md mx-auto">
                  {correctCount >= 8
                    ? 'Excellent command of competitive error-spotting structures! You are ready for high-speed mock tests.'
                    : 'Good effort! Review the rules you missed in our Volume #01 (Subject-Verb) and Volume #12 (100 Shortcuts).'}
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={handleRestart}
                    className="px-6 py-2.5 rounded-xl bg-white text-[#0F1B33] font-bold text-xs shadow-sm hover:bg-zinc-100"
                  >
                    Retake Drill
                  </button>
                  <button
                    onClick={() => onNavigate('books')}
                    className="px-6 py-2.5 rounded-xl bg-[#F5A623] text-[#0F1B33] font-bold text-xs shadow-sm hover:bg-[#F5A623]/90"
                  >
                    Explore Matching Books
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
