import React, { useState } from 'react';
import { Book, EXAM_OPTIONS, GRAMMAR_TOPICS, GrammarTopic, LEVEL_OPTIONS } from '../types';
import { Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface BookRecommendationWidgetProps {
  books: Book[];
  onViewBook: (book: Book) => void;
}

export const BookRecommendationWidget: React.FC<BookRecommendationWidgetProps> = ({
  books,
  onViewBook,
}) => {
  const [selectedExam, setSelectedExam] = useState<string>(EXAM_OPTIONS[0].id);
  const [selectedLevel, setSelectedLevel] = useState<string>(LEVEL_OPTIONS[1].id);
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic>(GRAMMAR_TOPICS[0]);
  const [recommendedBook, setRecommendedBook] = useState<Book | null>(null);
  const [recommendationRationale, setRecommendationRationale] = useState<string>('');

  const handleDiagnose = () => {
    // Topic-to-Book mapping based on the 14 authored books
    let matchedBook: Book | undefined;

    switch (selectedTopic) {
      case 'Subject-Verb Agreement':
        matchedBook = books.find((b) => b.id === 1);
        break;
      case 'Tenses':
        matchedBook = books.find((b) => b.id === 2);
        break;
      case 'Direct & Indirect Speech':
        matchedBook = books.find((b) => b.id === 3);
        break;
      case 'Active & Passive Voice':
        matchedBook = books.find((b) => b.id === 4);
        break;
      case 'Prepositions':
        matchedBook = books.find((b) => b.id === 5);
        break;
      case 'Non-Finite Verbs':
        matchedBook = books.find((b) => b.id === 6);
        break;
      case 'Modal Auxiliaries':
        matchedBook = books.find((b) => b.id === 7);
        break;
      case 'Clauses & Phrases':
        matchedBook = books.find((b) => b.id === 8);
        break;
      case 'Question Tags':
        matchedBook = books.find((b) => b.id === 9);
        break;
      case 'Articles':
        matchedBook = books.find((b) => b.id === 10);
        break;
      case 'Punctuation':
        matchedBook = books.find((b) => b.id === 11);
        break;
      case 'Grammar Shortcuts':
        matchedBook = books.find((b) => b.id === 12);
        break;
      case 'Error Spotting':
        // For advanced level in error spotting, Book 13; otherwise Book 14
        matchedBook = selectedLevel === 'advanced' ? books.find((b) => b.id === 13) : books.find((b) => b.id === 14);
        break;
      default:
        matchedBook = books[0];
    }

    if (!matchedBook && books.length > 0) {
      matchedBook = books[0];
    }

    // Build educator's tailored rationale
    const examName = EXAM_OPTIONS.find((e) => e.id === selectedExam)?.name || 'Competitive Exams';
    const levelName = LEVEL_OPTIONS.find((l) => l.id === selectedLevel)?.name.split(' ')[0] || 'Intermediate';

    let rationale = '';
    if (selectedTopic === 'Subject-Verb Agreement') {
      rationale = `For ${examName} aspirants at ${levelName} level, this guide pinpoints all 36 granular agreement traps—including compound subject impostors and inverted modifiers that cost 2.5 marks.`;
    } else if (selectedTopic === 'Tenses') {
      rationale = `Calibrated specifically to eliminate L1 language interference, providing definitive time-marker matrices and conditional inversion formulas tested in ${examName}.`;
    } else if (selectedTopic === 'Direct & Indirect Speech') {
      rationale = `Essential for ${examName} candidates who struggle with backshifting nuances, universal truth exceptions, and interrogative conversion speed.`;
    } else if (selectedTopic === 'Active & Passive Voice') {
      rationale = `Deconstructs tricky impersonal passive constructs and double-object sentences that frequently trip up candidates in ${examName}.`;
    } else if (selectedTopic === 'Prepositions') {
      rationale = `Prepositions demand fixed collocations rather than random guesswork; this guide categorizes high-frequency exam pairs with worked papers.`;
    } else {
      rationale = `Tailored for ${examName} candidates at ${levelName} stage to replace confusion with rapid, foolproof pattern recognition.`;
    }

    setRecommendedBook(matchedBook || null);
    setRecommendationRationale(rationale);
  };

  return (
    <section
      id="book-recommendation-section"
      className="py-16 sm:py-20 bg-zinc-100/60 dark:bg-[#16264A]/30 border-y border-zinc-200 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F5A623] uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4" />
            <span>Interactive Grammar Diagnostic</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F1B33] dark:text-white tracking-tight">
            Find Your Exact Targeted Grammar Guide
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-2">
            Don’t waste 40 hours reading general school textbooks. Select your target exam and your persistent grammar weakness to get the single book tailored to your score gap.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-[#0F1B33] rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-xs">
          {/* 3 Dropdowns/Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 1. Exam Target */}
            <div>
              <label
                htmlFor="exam-selector"
                className="block text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 mb-2"
              >
                1. Target Exam
              </label>
              <select
                id="exam-selector"
                value={selectedExam}
                onChange={(e) => {
                  setSelectedExam(e.target.value);
                  setRecommendedBook(null);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-[#16264A] text-sm text-[#0F1B33] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              >
                {EXAM_OPTIONS.map((exam) => (
                  <option key={exam.id} value={exam.id}>
                    {exam.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Preparation Level */}
            <div>
              <label
                htmlFor="level-selector"
                className="block text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 mb-2"
              >
                2. Preparation Stage
              </label>
              <select
                id="level-selector"
                value={selectedLevel}
                onChange={(e) => {
                  setSelectedLevel(e.target.value);
                  setRecommendedBook(null);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-[#16264A] text-sm text-[#0F1B33] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              >
                {LEVEL_OPTIONS.map((lvl) => (
                  <option key={lvl.id} value={lvl.id}>
                    {lvl.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Weak Topic */}
            <div>
              <label
                htmlFor="topic-selector"
                className="block text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 mb-2"
              >
                3. Your Weakest Topic
              </label>
              <select
                id="topic-selector"
                value={selectedTopic}
                onChange={(e) => {
                  setSelectedTopic(e.target.value as GrammarTopic);
                  setRecommendedBook(null);
                }}
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-[#16264A] text-sm text-[#0F1B33] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              >
                {GRAMMAR_TOPICS.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80 flex justify-center">
            <button
              id="btn-diagnose-recommendation"
              onClick={handleDiagnose}
              className="px-6 py-3 rounded-xl font-bold text-sm sm:text-base text-white bg-[#2563EB] hover:bg-[#1d4ed8] active:scale-[0.99] transition-all shadow-xs flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#F5A623]" />
              <span>Find My Recommended Book</span>
            </button>
          </div>

          {/* Revealed Recommended Book Card */}
          {recommendedBook && (
            <div
              id="recommendation-result-card"
              className="mt-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-zinc-50 to-white dark:from-[#16264A]/60 dark:to-[#0F1B33] border-2 border-[#2563EB]/40 shadow-sm animate-in fade-in"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Book Cover Visual (Navy-to-Blue gradient block or cover representation) */}
                <div className="w-full md:w-44 shrink-0 aspect-[3/4] rounded-xl bg-gradient-to-br from-[#0F1B33] via-[#16264A] to-[#2563EB] p-4 flex flex-col justify-between text-white shadow-md border border-[#F5A623]/30">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono font-bold text-[#F5A623] uppercase tracking-wider">
                      Book #{recommendedBook.id}
                    </span>
                    <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded font-bold">
                      ZeroError
                    </span>
                  </div>
                  <div className="space-y-1 my-auto">
                    <h4 className="text-xs sm:text-sm font-bold font-heading line-clamp-4 leading-snug">
                      {recommendedBook.title}
                    </h4>
                  </div>
                  <div className="text-[9px] text-zinc-300 border-t border-white/20 pt-1.5 flex justify-between">
                    <span>Amazon KDP</span>
                    <span>22-Yr Auth</span>
                  </div>
                </div>

                {/* Content & Rationale */}
                <div className="flex-1 space-y-3.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md bg-[#27ae60]/10 text-[#27ae60]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Best Pedagogical Match</span>
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">
                      Topic: {recommendedBook.topic}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl font-extrabold text-[#0F1B33] dark:text-white leading-snug">
                    {recommendedBook.title}
                  </h3>

                  <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    <strong className="text-[#2563EB] dark:text-[#5B8DF6] font-semibold block mb-0.5">
                      Why this book fits your diagnostic:
                    </strong>
                    {recommendationRationale}
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">Ideal For:</span>{' '}
                    {recommendedBook.idealFor}
                  </p>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      id={`rec-btn-view-${recommendedBook.id}`}
                      onClick={() => onViewBook(recommendedBook)}
                      className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#0F1B33] dark:text-white bg-white dark:bg-[#16264A] hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-all"
                    >
                      View Book Contents
                    </button>
                    <a
                      id={`rec-btn-amazon-${recommendedBook.id}`}
                      href={recommendedBook.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#0F1B33] bg-[#F5A623] hover:bg-[#F5A623]/90 transition-all shadow-xs flex items-center gap-1.5"
                    >
                      <span>Buy on Amazon (KDP)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
