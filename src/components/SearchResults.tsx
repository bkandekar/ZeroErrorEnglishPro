import React, { useState, useMemo } from 'react';
import { Post, Book } from '../types';
import { Search, BookOpen, ExternalLink, ArrowRight, Filter, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from './SEOHead';

interface SearchResultsProps {
  posts: Post[];
  books: Book[];
  initialQuery?: string;
  onSelectPost: (post: Post) => void;
  onSelectBook: (book: Book) => void;
  onNavigate: (view: 'home' | 'blog' | 'books' | 'practice' | 'quizzes' | 'weakness-finder' | 'resources' | 'about' | 'contact' | 'search') => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  posts,
  books,
  initialQuery = '',
  onSelectPost,
  onSelectBook,
  onNavigate,
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<'all' | 'posts' | 'books'>('all');

  const matchingPosts = useMemo(() => {
    if (!query.trim()) return posts;
    const q = query.toLowerCase();
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [posts, query]);

  const matchingBooks = useMemo(() => {
    if (!query.trim()) return books;
    const q = query.toLowerCase();
    return books.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.topic.toLowerCase().includes(q) ||
        b.shortBenefit.toLowerCase().includes(q) ||
        b.idealFor.toLowerCase().includes(q)
    );
  }, [books, query]);

  const totalResults = matchingPosts.length + matchingBooks.length;

  return (
    <div className="py-12 bg-zinc-50 dark:bg-[#0B132B] min-h-screen">
      <SEOHead
        title={query ? `Search: "${query}" — ZeroErrorEnglish` : 'Search Articles &amp; Books — ZeroErrorEnglish'}
        description="Search through competitive grammar tutorials, solved error spotting rules, and the complete 14-volume eBook collection."
        canonicalUrl="https://zeroerrorenglishpro.com/search"
        ogType="website"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-zinc-900 dark:hover:text-white">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="font-semibold text-zinc-900 dark:text-white">Search Site</span>
        </nav>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F1B33] dark:text-white mb-4">
            Search Articles, Rules &amp; Books
          </h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type any grammar concept, exam name, or rule (e.g. 'Since vs For', 'Subject-Verb', 'Voice')..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/60 text-zinc-900 dark:text-white text-base focus:outline-hidden focus:ring-2 focus:ring-[#2563EB] shadow-xs"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-zinc-400 hover:text-zinc-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Results tabs */}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              All Results ({totalResults})
            </button>
            <button
              onClick={() => setActiveTab('posts')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'posts'
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Articles ({matchingPosts.length})
            </button>
            <button
              onClick={() => setActiveTab('books')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'books'
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
              }`}
            >
              Books ({matchingBooks.length})
            </button>
          </div>
        </div>

        {/* Results Content */}
        {totalResults === 0 ? (
          <div className="text-center py-16 max-w-md mx-auto p-8 rounded-3xl bg-white dark:bg-[#16264A]/30 border border-zinc-200 dark:border-zinc-800">
            <Search className="w-12 h-12 text-zinc-400 mx-auto mb-3" />
            <h3 className="font-heading font-bold text-lg text-[#0F1B33] dark:text-white mb-1">
              No results found
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              We couldn&apos;t find anything matching &quot;{query}&quot;. Try terms like &quot;Agreement&quot;, &quot;Tenses&quot;, &quot;Prepositions&quot;, or &quot;SSC&quot;.
            </p>
          </div>
        ) : (
          <div className="space-y-12 mb-16">
            {/* Matching Books Section */}
            {(activeTab === 'all' || activeTab === 'books') && matchingBooks.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold font-heading text-[#0F1B33] dark:text-white">
                    Matching Books ({matchingBooks.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {matchingBooks.map((book) => (
                    <div
                      key={book.id}
                      className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/40 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#0F1B33] text-white font-mono">
                            Vol #{String(book.id).padStart(2, '0')}
                          </span>
                          <span className="text-xs font-semibold text-[#2563EB] dark:text-[#5B8DF6]">
                            {book.topic}
                          </span>
                        </div>
                        <h3
                          onClick={() => onSelectBook(book)}
                          className="font-heading font-bold text-base text-[#0F1B33] dark:text-white cursor-pointer hover:text-[#2563EB] mb-2"
                        >
                          {book.title}
                        </h3>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4">
                          {book.shortBenefit}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-800">
                        <button
                          onClick={() => onSelectBook(book)}
                          className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                        <a
                          href={book.amazonUrl || 'PLACEHOLDER-AMAZON-URL'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-[#F5A623] text-[#0F1B33] font-bold text-[11px] flex items-center gap-1"
                        >
                          <span>Amazon KDP</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Matching Posts Section */}
            {(activeTab === 'all' || activeTab === 'posts') && matchingPosts.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold font-heading text-[#0F1B33] dark:text-white">
                    Matching Articles ({matchingPosts.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {matchingPosts.map((post) => (
                    <div
                      key={post.slug}
                      className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/40 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-[#2563EB] dark:text-[#5B8DF6] bg-[#2563EB]/10 px-2.5 py-0.5 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-zinc-500">
                            {post.readingTime}
                          </span>
                        </div>
                        <h3
                          onClick={() => onSelectPost(post)}
                          className="font-heading font-bold text-base text-[#0F1B33] dark:text-white cursor-pointer hover:text-[#2563EB] mb-2 line-clamp-2"
                        >
                          {post.title}
                        </h3>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4">
                          {post.description}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
                        <button
                          onClick={() => onSelectPost(post)}
                          className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1"
                        >
                          <span>Read Article</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
