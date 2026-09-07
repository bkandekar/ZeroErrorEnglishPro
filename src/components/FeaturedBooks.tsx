import React, { useState } from 'react';
import { Book } from '../types';
import { BookMarked, ShoppingCart, Eye, Sparkles } from 'lucide-react';

interface FeaturedBooksProps {
  books: Book[];
  onViewBook: (book: Book) => void;
}

export const FeaturedBooks: React.FC<FeaturedBooksProps> = ({ books, onViewBook }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  // Derive unique topics for filter bar
  const filterCategories = [
    'All',
    'Subject-Verb Agreement',
    'Tenses',
    'Voice & Speech',
    'Prepositions & Verbs',
    'Modals & Clauses',
    'Grammar Shortcuts & Master',
  ];

  const matchesFilter = (book: Book, filter: string) => {
    if (filter === 'All') return true;
    if (filter === 'Subject-Verb Agreement') return book.topic.includes('Subject-Verb Agreement');
    if (filter === 'Tenses') return book.topic.includes('Tenses');
    if (filter === 'Voice & Speech')
      return book.topic.includes('Speech') || book.topic.includes('Voice');
    if (filter === 'Prepositions & Verbs')
      return book.topic.includes('Preposition') || book.topic.includes('Non-Finite');
    if (filter === 'Modals & Clauses')
      return book.topic.includes('Modal') || book.topic.includes('Clause') || book.topic.includes('Question Tag');
    if (filter === 'Grammar Shortcuts & Master')
      return book.topic.includes('Shortcut') || book.topic.includes('Traps') || book.topic.includes('Master') || book.topic.includes('Articles') || book.topic.includes('Punctuation');
    return true;
  };

  const filteredBooks = books.filter((b) => matchesFilter(b, selectedFilter));

  return (
    <section id="featured-books-section" className="py-16 sm:py-20 bg-white dark:bg-[#0F1B33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F5A623] uppercase tracking-wider mb-2">
            <BookMarked className="w-4 h-4" />
            <span>The Complete 14-Volume Amazon KDP Curriculum</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1B33] dark:text-white tracking-tight">
            Targeted Grammar Guides for Competitive Aspirants
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-2">
            Each book targets a single, high-stakes examination vulnerability with comprehensive question banks, examiner trap warnings, and time-saving shortcuts.
          </p>
        </div>

        {/* Filter Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === cat
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 14 Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredBooks.map((book) => {
            const hasCoverImageFile = Boolean(book.coverImage && book.coverImage.trim().length > 0);

            return (
              <div
                key={book.id}
                id={`book-card-${book.id}`}
                className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#16264A]/30 p-5 flex flex-col justify-between hover:border-[#2563EB]/40 dark:hover:border-[#5B8DF6]/40 hover:bg-white dark:hover:bg-[#16264A]/50 transition-all duration-200 shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Styled Book Cover Header */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 shadow-sm">
                    {hasCoverImageFile ? (
                      /* Styled representation for books with cover filename */
                      <div className="w-full h-full bg-gradient-to-br from-[#0F1B33] via-[#16264A] to-[#1E3A8A] p-4 flex flex-col justify-between text-white border border-[#F5A623]/30">
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-mono font-bold text-[#F5A623] px-2 py-0.5 rounded bg-black/40 border border-[#F5A623]/30">
                            VOL {book.id.toString().padStart(2, '0')}
                          </span>
                          <span className="text-[10px] font-bold text-zinc-300 bg-white/10 px-2 py-0.5 rounded">
                            Verified KDP Edition
                          </span>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-[#5B8DF6] uppercase tracking-wider mb-1">
                            {book.topic}
                          </div>
                          <h4 className="font-heading text-sm font-bold line-clamp-2 text-white leading-tight">
                            {book.title}
                          </h4>
                        </div>
                        <div className="flex items-center justify-between text-[9px] text-zinc-300 pt-2 border-t border-white/15">
                          <span>By 22-Yr Educator</span>
                          <span className="text-[#F5A623]">Zero-Error Series</span>
                        </div>
                      </div>
                    ) : (
                      /* Styled placeholder cover (Navy-to-Blue gradient block with title text on it) */
                      <div className="w-full h-full bg-gradient-to-br from-[#0F1B33] via-[#16264A] to-[#2563EB] p-4 flex flex-col justify-between text-white border border-[#2563EB]/40">
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-mono font-bold text-[#F5A623] px-2 py-0.5 rounded bg-[#0F1B33]/80 border border-[#F5A623]/40">
                            VOLUME #{book.id}
                          </span>
                          <span className="text-[9px] font-semibold bg-white/15 px-2 py-0.5 rounded text-zinc-200">
                            Amazon KDP
                          </span>
                        </div>
                        <div className="my-auto py-1">
                          <p className="text-[10px] text-[#5B8DF6] font-semibold uppercase tracking-wider mb-0.5">
                            {book.topic}
                          </p>
                          <h4 className="font-heading text-sm font-bold text-white line-clamp-3 leading-snug">
                            {book.title}
                          </h4>
                        </div>
                        <div className="flex justify-between items-center text-[9px] text-zinc-300 border-t border-white/20 pt-1.5">
                          <span>Official Syllabus Guide</span>
                          <span className="font-mono text-[#F5A623]">22+ Yrs Teaching</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Topic Pill */}
                  <div className="mb-2">
                    <span className="text-[11px] font-bold text-[#2563EB] dark:text-[#5B8DF6] bg-[#2563EB]/10 dark:bg-[#2563EB]/20 px-2 py-0.5 rounded">
                      {book.topic}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-base font-bold text-[#0F1B33] dark:text-white leading-snug mb-2 group-hover:text-[#2563EB] dark:group-hover:text-[#5B8DF6] transition-colors line-clamp-2">
                    {book.title}
                  </h3>

                  {/* Short Benefit */}
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mb-3 line-clamp-3">
                    {book.shortBenefit}
                  </p>
                </div>

                {/* Card Bottom: Ideal for tag & Dual buttons */}
                <div className="pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    <span className="font-bold text-zinc-700 dark:text-zinc-300">Ideal For:</span>{' '}
                    <span>{book.idealFor}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      id={`btn-view-book-${book.id}`}
                      onClick={() => onViewBook(book)}
                      className="px-3 py-2 rounded-xl text-xs font-bold text-[#0F1B33] dark:text-white bg-white dark:bg-[#16264A] hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5 text-zinc-500" />
                      <span>View Book</span>
                    </button>
                    <a
                      id={`btn-amazon-book-${book.id}`}
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl text-xs font-bold text-[#0F1B33] bg-[#F5A623] hover:bg-[#F5A623]/90 flex items-center justify-center gap-1.5 transition-all shadow-xs"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Amazon KDP</span>
                    </a>
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
