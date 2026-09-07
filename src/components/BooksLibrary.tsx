import React, { useState, useMemo } from 'react';
import { Book } from '../types';
import { BookOpen, ExternalLink, Search, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';
import { SEOHead } from './SEOHead';

interface BooksLibraryProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
  onNavigate: (view: 'home' | 'blog' | 'books' | 'practice' | 'quizzes' | 'weakness-finder' | 'resources' | 'about' | 'contact' | 'search') => void;
}

const TOPIC_FILTERS = [
  'All Topics',
  'Subject-Verb Agreement',
  'Tenses',
  'Direct & Indirect Speech',
  'Active & Passive Voice',
  'Prepositions',
  'Non-Finite Verbs',
  'Modal Auxiliaries',
  'Clauses & Phrases',
  'Question Tags',
  'Articles',
  'Punctuation',
  'Grammar Shortcuts',
];

const DIFFICULTY_FILTERS = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

export const BooksLibrary: React.FC<BooksLibraryProps> = ({
  books,
  onSelectBook,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All Topics');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.shortBenefit.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.idealFor.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTopic =
        selectedTopic === 'All Topics' ||
        book.topic.toLowerCase().includes(selectedTopic.toLowerCase());

      const matchesDifficulty =
        selectedDifficulty === 'All Levels' ||
        (book.difficulty && book.difficulty.toLowerCase().includes(selectedDifficulty.toLowerCase()));

      return matchesSearch && matchesTopic && matchesDifficulty;
    });
  }, [books, searchQuery, selectedTopic, selectedDifficulty]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '14 English Grammar Books by ZeroErrorEnglish',
    description: 'Comprehensive 14-volume English grammar book series for SSC CGL, Banking PO, Railways and competitive exams.',
    numberOfItems: books.length,
    itemListElement: books.map((book, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: book.title,
      url: `https://zeroerrorenglishpro.com/books/${book.slug}`,
    })),
  };

  return (
    <div className="py-12 bg-zinc-50 dark:bg-[#0B132B] min-h-screen">
      <SEOHead
        title="14 English Grammar eBooks Collection — Amazon KDP Editions"
        description="Explore the complete 14-volume ZeroError English Grammar series on Amazon KDP. Subject-Verb Agreement, Tenses, Prepositions, Active/Passive Voice, and 100 Shortcuts."
        canonicalUrl="https://zeroerrorenglishpro.com/books"
        ogType="website"
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5A623]/10 dark:bg-[#F5A623]/20 text-[#F5A623] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete 14-Volume Series on Amazon KDP</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1B33] dark:text-white tracking-tight mb-4 font-heading">
            14 Expert Guides to Master English Grammar
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Written by an English Grammar educator with 22 years in classroom teaching and 15+ years competitive coaching. Engineered to eliminate negative marks and master examiner psychology.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-10 max-w-5xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              id="books-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books by topic, exam, or keyword (e.g. 'Articles', 'Voice', 'SSC CGL', 'Bank PO')..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/60 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] transition-all text-sm sm:text-base shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Topic Filter Scroll */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin flex-1">
              <Filter className="w-4 h-4 text-zinc-400 shrink-0 ml-1" />
              {TOPIC_FILTERS.map((topic) => {
                const active = selectedTopic === topic;
                return (
                  <button
                    key={topic}
                    id={`topic-filter-${topic.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      active
                        ? 'bg-[#2563EB] text-white shadow-xs'
                        : 'bg-white dark:bg-[#16264A]/60 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-1.5 shrink-0">
              {DIFFICULTY_FILTERS.map((diff) => {
                const active = selectedDifficulty === diff;
                return (
                  <button
                    key={diff}
                    id={`diff-filter-${diff.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                      active
                        ? 'bg-[#0F1B33] dark:bg-white text-white dark:text-[#0F1B33]'
                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {diff}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                id={`book-library-card-${book.id}`}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/40 hover:border-[#2563EB]/40 dark:hover:border-[#2563EB]/40 transition-all hover:shadow-lg flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6">
                  {/* Card Top Pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#0F1B33] dark:bg-white/10 text-white font-mono">
                      Volume #{String(book.id).padStart(2, '0')}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-[#2563EB]/10 text-[#2563EB] dark:text-[#5B8DF6]">
                      {book.topic}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    onClick={() => onSelectBook(book)}
                    className="font-heading text-lg font-bold text-[#0F1B33] dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#5B8DF6] transition-colors cursor-pointer mb-2 line-clamp-2"
                  >
                    {book.title}
                  </h2>

                  {/* Short Benefit */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 leading-relaxed">
                    {book.shortBenefit}
                  </p>

                  {/* Ideal For */}
                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800/80 text-xs text-zinc-700 dark:text-zinc-300 mb-4 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#27ae60] shrink-0 mt-0.5" />
                    <span>
                      <strong>Ideal for:</strong> {book.idealFor}
                    </span>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-6 py-4 bg-zinc-50/70 dark:bg-[#16264A]/60 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectBook(book)}
                    className="text-xs font-semibold text-[#2563EB] dark:text-[#5B8DF6] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={book.amazonUrl || 'PLACEHOLDER-AMAZON-URL'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#0F1B33] font-bold text-xs shadow-xs transition-all inline-flex items-center gap-1.5"
                  >
                    <span>Amazon KDP</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/20 max-w-xl mx-auto mb-16">
            <BookOpen className="w-12 h-12 text-zinc-300 dark:text-zinc-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0F1B33] dark:text-white mb-1">
              No matching books found
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              Try changing the search keyword or selecting &quot;All Topics&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTopic('All Topics');
                setSelectedDifficulty('All Levels');
              }}
              className="px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
