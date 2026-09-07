import React from 'react';
import { Post } from '../types';
import { Clock, BookOpen, ChevronRight, Sparkles } from 'lucide-react';

interface FeaturedArticlesProps {
  posts: Post[];
  onSelectPost: (post: Post) => void;
  onExploreAll?: () => void;
}

export const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({
  posts,
  onSelectPost,
}) => {
  return (
    <section id="featured-articles-section" className="py-16 sm:py-20 bg-white dark:bg-[#0F1B33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-zinc-200 dark:border-zinc-800 gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] dark:text-[#5B8DF6] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tested on Live Exam Papers</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F1B33] dark:text-white tracking-tight">
              Featured Error-Spotting Breakdowns
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Deep, rigorous analyses of single grammar concepts—dissecting deceptive distractors, worked exam sentences, and the exact rules question writers test.
            </p>
          </div>
          <div className="text-xs text-zinc-500 font-medium">
            Showing {posts.length} published post{posts.length === 1 ? '' : 's'}
          </div>
        </div>

        {/* Dynamic Grid of Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => {
            const difficultyColor =
              post.difficulty === 'Advanced'
                ? 'bg-[#c0392b]/10 text-[#c0392b] border-[#c0392b]/20'
                : post.difficulty === 'Intermediate'
                ? 'bg-[#F5A623]/15 text-[#B45309] dark:text-[#F5A623] border-[#F5A623]/30'
                : 'bg-[#27ae60]/10 text-[#27ae60] border-[#27ae60]/20';

            return (
              <article
                key={post.slug}
                id={`article-card-${post.slug}`}
                onClick={() => onSelectPost(post)}
                className="group cursor-pointer rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-[#16264A]/30 p-6 sm:p-7 flex flex-col justify-between hover:border-[#2563EB]/50 dark:hover:border-[#5B8DF6]/50 hover:bg-white dark:hover:bg-[#16264A]/60 transition-all duration-200 shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Metadata Row: Category & Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-block text-xs font-bold text-[#2563EB] dark:text-[#5B8DF6] bg-[#2563EB]/10 dark:bg-[#2563EB]/20 px-2.5 py-1 rounded-md">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${difficultyColor}`}
                      >
                        {post.difficulty}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readingTime}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0F1B33] dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#5B8DF6] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3 leading-relaxed mb-6">
                    {post.description}
                  </p>
                </div>

                {/* Card Footer: Tags & Read Article link */}
                <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-[#2563EB] dark:text-[#5B8DF6] group-hover:underline">
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Informative Note for Aspirants */}
        <div className="mt-8 p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-3">
          <BookOpen className="w-4 h-4 text-[#2563EB] shrink-0" />
          <span>
            Every blog post is complete with worked SSC and Banking questions, interactive step-by-step answer accordions, and a direct link to the matching deep-dive eBook.
          </span>
        </div>
      </div>
    </section>
  );
};
