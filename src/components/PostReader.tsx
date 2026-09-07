import React, { useEffect, useState } from 'react';
import { Post, Book } from '../types';
import { ArrowLeft, Clock, Calendar, Bookmark, Share2, Check, BookOpen } from 'lucide-react';
import { SEOHead } from './SEOHead';

interface PostReaderProps {
  post: Post;
  relatedBook?: Book;
  onBack: () => void;
  onViewBook?: (book: Book) => void;
}

export const PostReader: React.FC<PostReaderProps> = ({
  post,
  relatedBook,
  onBack,
  onViewBook,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: 'ZeroErrorEnglish Expert Educator',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ZeroErrorEnglishPro',
    },
    datePublished: post.publishDate,
    mainEntityOfPage: `https://zeroerrorenglishpro.com/blog/${post.slug}`,
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const difficultyColor =
    post.difficulty === 'Advanced'
      ? 'bg-[#c0392b]/10 text-[#c0392b] border-[#c0392b]/20'
      : post.difficulty === 'Intermediate'
      ? 'bg-[#F5A623]/15 text-[#B45309] dark:text-[#F5A623] border-[#F5A623]/30'
      : 'bg-[#27ae60]/10 text-[#27ae60] border-[#27ae60]/20';

  return (
    <div id="post-reader-view" className="min-h-screen bg-white dark:bg-[#0F1B33]">
      <SEOHead
        title={`${post.title} — ZeroErrorEnglish`}
        description={post.description}
        canonicalUrl={`https://zeroerrorenglishpro.com/blog/${post.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />

      {/* Sticky Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-zinc-200 dark:bg-zinc-800 z-30">
        <div
          className="h-full bg-[#2563EB] dark:bg-[#5B8DF6] transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Article Header & Navigation */}
      <div className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-[#16264A]/30 pt-8 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button & Actions */}
          <div className="flex items-center justify-between mb-8">
            <button
              id="post-reader-back-btn"
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-300 hover:text-[#2563EB] dark:hover:text-[#5B8DF6] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Articles</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#27ae60]" />
                    <span>Link Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Post</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-xs font-bold text-[#2563EB] dark:text-[#5B8DF6] bg-[#2563EB]/10 dark:bg-[#2563EB]/20 px-2.5 py-1 rounded-md">
              {post.category}
            </span>
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${difficultyColor}`}>
              {post.difficulty}
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
            <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishDate}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F1B33] dark:text-white tracking-tight leading-[1.25]">
            {post.title}
          </h1>

          {/* Description */}
          {post.description && (
            <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {post.description}
            </p>
          )}

          {/* Author attribution */}
          <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-[10px]">
                ZE
              </span>
              <span>By Senior Competitive English Faculty (22 Yrs Exp)</span>
            </div>
            {relatedBook && (
              <button
                onClick={() => onViewBook && onViewBook(relatedBook)}
                className="hidden sm:inline-flex items-center gap-1 text-[#2563EB] dark:text-[#5B8DF6] font-semibold hover:underline"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Related eBook: Volume #{relatedBook.id}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Article Body Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          id="post-article-body"
          className="prose-container"
          dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
        />

        {/* Post Footer & Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-sm font-semibold text-[#0F1B33] dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Articles List</span>
          </button>

          {relatedBook && (
            <button
              onClick={() => onViewBook && onViewBook(relatedBook)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1d4ed8] transition-colors"
            >
              <Bookmark className="w-4 h-4 text-[#F5A623]" />
              <span>Explore Volume #{relatedBook.id} on {relatedBook.topic}</span>
            </button>
          )}
        </div>
      </main>
    </div>
  );
};
