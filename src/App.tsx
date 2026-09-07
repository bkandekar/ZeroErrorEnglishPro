import React, { useState } from 'react';
import postsIndexData from './generated/posts-index.json';
import booksIndexData from './generated/books-index.json';
import { Post, Book } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedArticles } from './components/FeaturedArticles';
import { BookRecommendationWidget } from './components/BookRecommendationWidget';
import { FeaturedBooks } from './components/FeaturedBooks';
import { WhyThisSite } from './components/WhyThisSite';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { PostReader } from './components/PostReader';
import { BookDetailModal } from './components/BookDetailModal';

// Phase 2 Views
import { BlogIndex } from './components/BlogIndex';
import { BooksLibrary } from './components/BooksLibrary';
import { BookLandingPage } from './components/BookLandingPage';
import { PracticeZone } from './components/PracticeZone';
import { QuizEngine } from './components/QuizEngine';
import { WeaknessFinder } from './components/WeaknessFinder';
import { FreeResources } from './components/FreeResources';
import { AboutAuthor } from './components/AboutAuthor';
import { ContactPage } from './components/ContactPage';
import { SearchResults } from './components/SearchResults';
import { LegalPages } from './components/LegalPages';
import { SEOHead } from './components/SEOHead';

export type NavigationTarget =
  | 'home'
  | 'blog'
  | 'books'
  | 'book-detail'
  | 'post'
  | 'practice'
  | 'quizzes'
  | 'weakness-finder'
  | 'resources'
  | 'about'
  | 'contact'
  | 'search'
  | 'privacy'
  | 'terms';

export default function App() {
  const posts = postsIndexData as unknown as Post[];
  const books = booksIndexData as unknown as Book[];

  const [currentView, setCurrentView] = useState<NavigationTarget>('home');
  const [activePost, setActivePost] = useState<Post | null>(null);
  const [activeBook, setActiveBook] = useState<Book | null>(null);
  const [modalBook, setModalBook] = useState<Book | null>(null);

  const handleNavigate = (view: NavigationTarget) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (post: Post) => {
    setActivePost(post);
    setCurrentView('post');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setCurrentView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewBook = (book: Book) => {
    setActiveBook(book);
    setCurrentView('book-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBookBySlug = (slug: string) => {
    const found = books.find((b) => b.slug === slug);
    if (found) {
      handleViewBook(found);
    }
  };

  const handleCloseBookModal = () => {
    setModalBook(null);
  };

  const scrollToBooks = () => {
    setCurrentView('books');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBlog = () => {
    setCurrentView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeRelatedBook = activePost?.relatedBookId
    ? books.find((b) => b.id === activePost.relatedBookId)
    : undefined;

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0F1B33] text-[#18181B] dark:text-[#F4F4F5] flex flex-col font-sans transition-colors duration-200">
      {/* Default Global SEO Tag */}
      {currentView === 'home' && (
        <SEOHead
          title="ZeroErrorEnglish — English Grammar Platform &amp; 14 Amazon KDP Books"
          description="Master competitive English grammar for SSC CGL, Banking, and State PSCs with 22-year educator guidance. In-depth blog posts, diagnostic weakness finder, and 14 Amazon KDP books."
          canonicalUrl="https://zeroerrorenglishpro.com"
          ogType="website"
        />
      )}

      {/* Top sticky Navbar */}
      <Navbar
        activeView={currentView}
        onNavigate={handleNavigate}
        onOpenBooks={scrollToBooks}
      />

      {/* Dynamic View Switcher */}
      <main className="flex-1">
        {currentView === 'post' && activePost ? (
          <PostReader
            post={activePost}
            relatedBook={activeRelatedBook}
            onBack={handleBackToBlog}
            onViewBook={handleViewBook}
          />
        ) : currentView === 'book-detail' && activeBook ? (
          <BookLandingPage
            book={activeBook}
            onNavigate={handleNavigate}
            onSelectBookBySlug={handleSelectBookBySlug}
          />
        ) : currentView === 'blog' ? (
          <BlogIndex
            posts={posts}
            books={books}
            onSelectPost={handleSelectPost}
            onNavigate={handleNavigate}
          />
        ) : currentView === 'books' ? (
          <BooksLibrary
            books={books}
            onSelectBook={handleViewBook}
            onNavigate={handleNavigate}
          />
        ) : currentView === 'practice' ? (
          <PracticeZone
            onNavigate={handleNavigate}
            onSelectBookBySlug={handleSelectBookBySlug}
          />
        ) : currentView === 'quizzes' ? (
          <QuizEngine
            books={books}
            onNavigate={handleNavigate}
            onSelectBookBySlug={handleSelectBookBySlug}
          />
        ) : currentView === 'weakness-finder' ? (
          <WeaknessFinder
            books={books}
            onNavigate={handleNavigate}
            onSelectBookBySlug={handleSelectBookBySlug}
          />
        ) : currentView === 'resources' ? (
          <FreeResources onNavigate={handleNavigate} />
        ) : currentView === 'about' ? (
          <AboutAuthor onNavigate={handleNavigate} />
        ) : currentView === 'contact' ? (
          <ContactPage onNavigate={handleNavigate} />
        ) : currentView === 'search' ? (
          <SearchResults
            posts={posts}
            books={books}
            onSelectPost={handleSelectPost}
            onSelectBook={handleViewBook}
            onNavigate={handleNavigate}
          />
        ) : currentView === 'privacy' ? (
          <LegalPages pageType="privacy" onNavigate={handleNavigate} />
        ) : currentView === 'terms' ? (
          <LegalPages pageType="terms" onNavigate={handleNavigate} />
        ) : (
          /* ================= HOME VIEW ================= */
          <div>
            {/* Section 1: Hero */}
            <Hero onReadBlog={scrollToBlog} onExploreBooks={scrollToBooks} />

            {/* Quick Feature Jump Banner */}
            <div className="bg-[#0F1B33]/5 dark:bg-[#16264A]/30 border-y border-zinc-200 dark:border-zinc-800 py-4">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
                <span className="text-zinc-500 dark:text-zinc-400">Jump To:</span>
                <button
                  onClick={() => handleNavigate('practice')}
                  className="px-3 py-1 rounded-full bg-white dark:bg-[#16264A] border border-zinc-200 dark:border-zinc-700 text-[#2563EB] dark:text-[#5B8DF6] hover:shadow-xs transition-all"
                >
                  🎯 Spot the Error Drills
                </button>
                <button
                  onClick={() => handleNavigate('weakness-finder')}
                  className="px-3 py-1 rounded-full bg-white dark:bg-[#16264A] border border-zinc-200 dark:border-zinc-700 text-amber-600 dark:text-amber-400 hover:shadow-xs transition-all"
                >
                  ⚡ Grammar Weakness Finder
                </button>
                <button
                  onClick={() => handleNavigate('quizzes')}
                  className="px-3 py-1 rounded-full bg-white dark:bg-[#16264A] border border-zinc-200 dark:border-zinc-700 text-[#27ae60] hover:shadow-xs transition-all"
                >
                  📝 Subject-Verb Agreement Quiz
                </button>
                <button
                  onClick={() => handleNavigate('resources')}
                  className="px-3 py-1 rounded-full bg-white dark:bg-[#16264A] border border-zinc-200 dark:border-zinc-700 text-purple-600 dark:text-purple-400 hover:shadow-xs transition-all"
                >
                  📄 Free PDF Revision Sheets
                </button>
              </div>
            </div>

            {/* Section 2: Featured Articles */}
            <FeaturedArticles posts={posts} onSelectPost={handleSelectPost} />

            {/* Section 3: Diagnostic Book Recommendation Widget */}
            <BookRecommendationWidget books={books} onViewBook={handleViewBook} />

            {/* Section 4: 14 Books Showcase */}
            <FeaturedBooks books={books} onViewBook={handleViewBook} />

            {/* Section 5: Why This Site */}
            <WhyThisSite />

            {/* Section 6: Newsletter */}
            <Newsletter />
          </div>
        )}
      </main>

      {/* Global Academic Footer */}
      <Footer
        books={books}
        onSelectTopic={(topic) => {
          handleNavigate('books');
        }}
        onSelectBook={(book) => {
          handleViewBook(book);
        }}
        onNavigate={handleNavigate}
      />

      {/* Book Detail Modal */}
      <BookDetailModal book={modalBook} onClose={handleCloseBookModal} />
    </div>
  );
}
