import React, { useState } from 'react';
import { quizCategories, subjectVerbQuizQuestions } from '../data/quizQuestions';
import { QuizQuestion, Book } from '../types';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, ChevronRight, HelpCircle, Sparkles, BookOpen, ExternalLink, Lock } from 'lucide-react';
import { SEOHead } from './SEOHead';

interface QuizEngineProps {
  books: Book[];
  onNavigate: (view: 'home' | 'blog' | 'books' | 'practice' | 'quizzes' | 'weakness-finder' | 'resources' | 'about' | 'contact' | 'search') => void;
  onSelectBookBySlug?: (slug: string) => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({
  books,
  onNavigate,
  onSelectBookBySlug,
}) => {
  const [activeQuizId, setActiveQuizId] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSelectedIndices, setUserSelectedIndices] = useState<Record<number, number>>({});
  const [quizFinished, setQuizFinished] = useState(false);

  // Subject-Verb Agreement is the fully working quiz
  const questions: QuizQuestion[] = subjectVerbQuizQuestions;
  const currentQ = questions[currentQuestionIndex];
  const selectedOptionIndex = userSelectedIndices[currentQ?.id];
  const isAnswered = selectedOptionIndex !== undefined;
  const isCorrect = isAnswered && selectedOptionIndex === currentQ.correctIndex;

  const totalQuestions = questions.length;
  const correctAnswersCount = Object.entries(userSelectedIndices).filter(
    ([qId, ansIndex]) => {
      const q = questions.find((item) => item.id === Number(qId));
      return q && q.correctIndex === ansIndex;
    }
  ).length;

  const scorePercentage = Math.round((correctAnswersCount / totalQuestions) * 100);

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setUserSelectedIndices((prev) => ({
      ...prev,
      [currentQ.id]: index,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setUserSelectedIndices({});
    setCurrentQuestionIndex(0);
    setQuizFinished(false);
  };

  // Determine recommended book based on score
  const recommendedBookSlug =
    scorePercentage < 70
      ? 'spot-the-error-subject-verb-agreement'
      : '100-english-grammar-shortcuts';
  const recommendedBook = books.find((b) => b.slug === recommendedBookSlug) || books[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: 'Subject-Verb Agreement Mastery Quiz — ZeroErrorEnglish',
    description: '10-question diagnostic quiz testing core subject-verb agreement rules with instant solutions and book recommendations.',
    url: 'https://zeroerrorenglishpro.com/quizzes',
  };

  return (
    <div className="py-12 bg-zinc-50 dark:bg-[#0B132B] min-h-screen">
      <SEOHead
        title="English Grammar Quizzes — Subject-Verb Agreement Test"
        description="Take timed English grammar quizzes. Solve 10 high-frequency Subject-Verb Agreement exam questions with instant solutions, rule citations, and score diagnostics."
        canonicalUrl="https://zeroerrorenglishpro.com/quizzes"
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
            onClick={() => {
              setActiveQuizId(null);
              setQuizFinished(false);
            }}
            className={!activeQuizId ? 'font-semibold text-zinc-900 dark:text-white' : 'hover:text-zinc-900 dark:hover:text-white'}
          >
            Quiz Engine
          </button>
          {activeQuizId && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
              <span className="font-semibold text-zinc-900 dark:text-white">Subject-Verb Agreement</span>
            </>
          )}
        </nav>

        {!activeQuizId ? (
          /* ================= QUIZ TOPICS LIST VIEW ================= */
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27ae60]/10 dark:bg-[#27ae60]/20 text-[#27ae60] text-xs font-semibold mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>Test Your Accuracy</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1B33] dark:text-white tracking-tight mb-4 font-heading">
                Grammar Topic Quizzes
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Test your conceptual clarity across 13 core English grammar domains. Each quiz features exam-tested traps and instant rule citations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {quizCategories.map((cat) => (
                <div
                  key={cat.id}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all ${
                    cat.active
                      ? 'border-[#2563EB]/40 bg-white dark:bg-[#16264A]/50 shadow-md hover:shadow-xl'
                      : 'border-zinc-200 dark:border-zinc-800/80 bg-white/60 dark:bg-[#16264A]/20 opacity-80'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          cat.active
                            ? 'bg-[#2563EB]/10 text-[#2563EB] dark:text-[#5B8DF6]'
                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
                        }`}
                      >
                        {cat.questionCount} Questions
                      </span>
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                        {cat.difficulty}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-[#0F1B33] dark:text-white mb-2">
                      {cat.name}
                    </h3>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                      {cat.description}
                    </p>
                  </div>

                  <div>
                    {cat.active ? (
                      <button
                        onClick={() => {
                          setActiveQuizId(cat.id);
                          handleRestartQuiz();
                        }}
                        className="w-full py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2"
                      >
                        <span>Start Quiz</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        disabled
                        className="w-full py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 text-zinc-400 dark:text-zinc-500 font-semibold text-xs cursor-not-allowed flex items-center justify-center gap-1.5"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        <span>Unlocks in Next Update</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : quizFinished ? (
          /* ================= QUIZ FINISHED RESULTS SCREEN ================= */
          <div className="max-w-2xl mx-auto py-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#16264A]/60 border border-zinc-200 dark:border-zinc-800 shadow-xl text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-[#5B8DF6] flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F1B33] dark:text-white mb-2">
                Quiz Complete!
              </h2>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                You completed the <strong>Subject-Verb Agreement</strong> diagnostic.
              </p>

              {/* Big Score Card */}
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80 mb-6 max-w-sm mx-auto">
                <div className="text-4xl font-black font-heading text-[#2563EB] dark:text-[#5B8DF6] mb-1">
                  {scorePercentage}%
                </div>
                <div className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                  {correctAnswersCount} out of {totalQuestions} Correct
                </div>
              </div>

              {/* Personalized Feedback */}
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-8 max-w-lg mx-auto">
                {scorePercentage >= 80
                  ? 'Impressive score! Your grasp of distributive pronouns, collective nouns, and correlative pairs is robust. For speed optimization, review shortcut heuristics.'
                  : scorePercentage >= 50
                  ? 'Good foundation, but tricky examiner distractors (intervening phrases, units of measurement) caused errors. A focused review of core rules will boost your accuracy.'
                  : 'You are losing valuable marks to classic examiner traps. We strongly recommend studying the complete Subject-Verb Agreement handbook below.'}
              </p>

              {/* Dynamic Book Recommendation */}
              {recommendedBook && (
                <div className="p-5 rounded-2xl bg-[#F5A623]/10 border border-[#F5A623]/30 text-left mb-8 flex flex-col sm:flex-row gap-4 items-center">
                  <div className="w-12 h-16 rounded-lg bg-[#0F1B33] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    Vol #{String(recommendedBook.id).padStart(2, '0')}
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F5A623] block">
                      Recommended Next Step
                    </span>
                    <h4 className="font-heading font-bold text-sm text-[#0F1B33] dark:text-white mb-1">
                      {recommendedBook.title}
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {recommendedBook.shortBenefit}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
                    <a
                      href={recommendedBook.amazonUrl || 'PLACEHOLDER-AMAZON-URL'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#F5A623] text-[#0F1B33] font-bold text-xs shadow-xs text-center inline-flex items-center justify-center gap-1"
                    >
                      <span>Buy on Amazon</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    {onSelectBookBySlug && (
                      <button
                        onClick={() => onSelectBookBySlug(recommendedBook.slug)}
                        className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#16264A] text-xs font-semibold text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700"
                      >
                        View Book Page
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={handleRestartQuiz}
                  className="px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  Retake Quiz
                </button>
                <button
                  onClick={() => setActiveQuizId(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs font-semibold hover:bg-[#1D4ED8]"
                >
                  Choose Another Topic
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ================= LIVE QUIZ QUESTION SCREEN ================= */
          <div className="max-w-3xl mx-auto">
            {/* Top Info Bar */}
            <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-[#16264A]/60 border border-zinc-200 dark:border-zinc-800 mb-6 shadow-xs">
              <button
                onClick={() => setActiveQuizId(null)}
                className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
              >
                &larr; Exit Quiz
              </button>
              <div className="text-xs font-bold text-[#0F1B33] dark:text-white">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </div>
              <div className="text-xs font-semibold text-[#27ae60]">
                Score: {correctAnswersCount} / {totalQuestions}
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2 rounded-full mb-8 overflow-hidden">
              <div
                className="bg-[#2563EB] h-full transition-all duration-300 rounded-full"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            {/* Question Card */}
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/50 p-6 sm:p-8 shadow-lg mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-[#5B8DF6]">
                  {currentQ.topic}
                </span>
                <span className="text-xs font-medium text-zinc-500">
                  Difficulty: {currentQ.difficulty}
                </span>
              </div>

              <h2 className="font-heading text-lg sm:text-xl font-bold text-[#0F1B33] dark:text-white mb-6 leading-snug">
                {currentQ.question}
              </h2>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedOptionIndex === idx;
                  const isThisCorrect = idx === currentQ.correctIndex;

                  let optionStyles =
                    'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/80 hover:border-[#2563EB] dark:hover:border-[#5B8DF6]';

                  if (isAnswered) {
                    if (isThisCorrect) {
                      optionStyles = 'border-[#27ae60] bg-[#27ae60]/10 text-zinc-900 dark:text-white ring-2 ring-[#27ae60]/40';
                    } else if (isSelected && !isThisCorrect) {
                      optionStyles = 'border-[#c0392b] bg-[#c0392b]/10 text-zinc-900 dark:text-white ring-2 ring-[#c0392b]/40';
                    } else {
                      optionStyles = 'opacity-60 border-zinc-200 dark:border-zinc-800';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-4 rounded-xl border text-left flex items-center justify-between gap-4 transition-all ${optionStyles}`}
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
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-200">
                          {option}
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

              {/* Explanation & Rule Citation Drawer */}
              {isAnswered && (
                <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 space-y-3 animate-in fade-in mb-6">
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <span className="text-sm font-bold text-[#27ae60] flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                      </span>
                    ) : (
                      <span className="text-sm font-bold text-[#c0392b] flex items-center gap-1.5">
                        <XCircle className="w-4 h-4" /> Incorrect Choice
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#2563EB]/10 text-[#2563EB] dark:text-[#5B8DF6] text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{currentQ.rule}</span>
                  </div>
                </div>
              )}

              {/* Next / Submit Button */}
              {isAnswered && (
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2"
                  >
                    <span>{currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
