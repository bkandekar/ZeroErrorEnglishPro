import React, { useState, useMemo } from 'react';
import { Post, Book } from '../types';
import { BookOpen, Clock, Calendar, Search, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { SEOHead } from './SEOHead';

interface BlogIndexProps {
  posts: Post[];
  books: Book[];
  onSelectPost: (post: Post) => void;
  onNavigate: (view: 'home' | 'blog' | 'books' | 'practice' | 'quizzes' | 'weakness-finder' | 'resources' | 'about' | 'contact' | 'search') => void;
}

const FILTER_TAGS = [
  'All',
  'Error Spotting',
  'SSC CGL',
  'Banking',
  'Intermediate',
  'Advanced',
  'Tenses',
  'Subject-Verb Agreement',
];

export const BlogIndex: React.FC<BlogIndexProps> = ({
  posts,
  books,
  onSelectPost,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Search matching
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Filter pill matching
      const matchesFilter =
        selectedFilter === 'All' ||
        post.difficulty.toLowerCase() === selectedFilter.toLowerCase() ||
        post.category.toLowerCase().includes(selectedFilter.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(selectedFilter.toLowerCase()));

      return matchesSearch && matchesFilter;
    });
  }, [posts, searchQuery, selectedFilter]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'ZeroErrorEnglish Blog',
    description: 'Master competitive English grammar with in-depth tutorials, examiner traps, and solved error spotting drills.',
    url: 'https://zeroerrorenglishpro.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'ZeroErrorEnglishPro',
    },
  };

  return (
    <div className="py-12 bg-zinc-50 dark:bg-[#0B132B] min-h-screen">
      <SEOHead
        title="English Grammar Blog &amp; Error Spotting Tutorials"
        description="Explore in-depth English grammar tutorials written by an educator with 22 years of experience. Solved rules, examiner traps, and real competitive exam breakdowns."
        canonicalUrl="https://zeroerrorenglishpro.com/blog"
        ogType="website"
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-[#5B8DF6] text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Master English Grammar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1B33] dark:text-white tracking-tight mb-4 font-heading">
            English Grammar Articles &amp; Exam Breakdowns
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Field-tested grammar tutorials written by an educator with 22 years in the classroom and 15+ years coaching competitive aspirants.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-10 max-w-4xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              id="blog-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by rule, exam, or keyword (e.g. 'Subject-Verb', 'Tenses', 'Since vs For')..."
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

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            <Filter className="w-4 h-4 text-zinc-400 shrink-0 ml-1" />
            {FILTER_TAGS.map((tag) => {
              const active = selectedFilter === tag;
              return (
                <button
                  key={tag}
                  id={`filter-pill-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedFilter(tag)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    active
                      ? 'bg-[#2563EB] text-white shadow-xs'
                      : 'bg-white dark:bg-[#16264A]/60 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredPosts.map((post) => {
              const relatedBook = books.find((b) => b.id === post.relatedBookId);

              return (
                <article
                  key={post.slug}
                  id={`blog-card-${post.slug}`}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/40 hover:border-[#2563EB]/40 dark:hover:border-[#2563EB]/40 transition-all hover:shadow-lg flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#2563EB]/10 text-[#2563EB] dark:text-[#5B8DF6]">
                        {post.category}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                        {post.difficulty}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      onClick={() => onSelectPost(post)}
                      className="font-heading text-lg font-bold text-[#0F1B33] dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#5B8DF6] transition-colors line-clamp-2 cursor-pointer mb-3"
                    >
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4 leading-relaxed">
                      {post.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-50 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400 border border-zinc-100 dark:border-zinc-800"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Related eBook Pill */}
                    {relatedBook && (
                      <div className="p-2.5 rounded-xl bg-[#F5A623]/10 dark:bg-[#F5A623]/15 border border-[#F5A623]/25 flex items-center gap-2 mb-4">
                        <Sparkles className="w-3.5 h-3.5 text-[#F5A623] shrink-0" />
                        <span className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 truncate">
                          Paired with Volume #{String(relatedBook.id).padStart(2, '0')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 bg-zinc-50/70 dark:bg-[#16264A]/60 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishDate}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectPost(post)}
                      className="inline-flex items-center gap-1 font-semibold text-[#2563EB] dark:text-[#5B8DF6] group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/20 max-w-xl mx-auto mb-16">
            <BookOpen className="w-12 h-12 text-zinc-300 dark:text-zinc-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0F1B33] dark:text-white mb-1">
              No matching articles found
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
              We couldn't find any articles matching &quot;{searchQuery}&quot;. Try searching for general topics like &quot;Tenses&quot; or &quot;Subject-Verb&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('All');
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
