import React, { useState, useEffect } from 'react';
import { BookOpen, Moon, Sun, Menu, X, Search, GraduationCap, Target, Award, Activity, FileText } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  onNavigate: (view: 'home' | 'blog' | 'books' | 'practice' | 'quizzes' | 'weakness-finder' | 'resources' | 'about' | 'contact' | 'search') => void;
  onOpenBooks: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  onNavigate,
  onOpenBooks,
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check initial preference or system setting
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
  };

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-40 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-[#0F1B33]/95 backdrop-blur-md transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          id="nav-brand-logo"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-hidden"
        >
          <div className="w-9 h-9 rounded-lg bg-[#0F1B33] dark:bg-[#2563EB] flex items-center justify-center text-white shadow-xs group-hover:bg-[#2563EB] dark:group-hover:bg-[#5B8DF6] transition-colors">
            <GraduationCap className="w-5 h-5 text-[#F5A623]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-[#0F1B33] dark:text-white">
                ZeroError<span className="text-[#2563EB] dark:text-[#5B8DF6]">English</span>
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#F5A623]/20 text-[#F5A623] border border-[#F5A623]/30 uppercase tracking-wider">
                Pro
              </span>
            </div>
            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 -mt-0.5 hidden sm:block">
              By 22-Yr Competitive Grammar Educator
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
          <button
            id="nav-link-home"
            onClick={() => onNavigate('home')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeView === 'home'
                ? 'text-[#2563EB] dark:text-[#5B8DF6] bg-zinc-100 dark:bg-zinc-800/60'
                : 'text-zinc-600 dark:text-zinc-300 hover:text-[#0F1B33] dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
            }`}
          >
            Home
          </button>
          <button
            id="nav-link-blog"
            onClick={() => onNavigate('blog')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeView === 'blog' || activeView === 'post'
                ? 'text-[#2563EB] dark:text-[#5B8DF6] bg-zinc-100 dark:bg-zinc-800/60'
                : 'text-zinc-600 dark:text-zinc-300 hover:text-[#0F1B33] dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
            }`}
          >
            Articles
          </button>
          <button
            id="nav-link-books"
            onClick={() => onNavigate('books')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeView === 'books' || activeView === 'book-detail'
                ? 'text-[#2563EB] dark:text-[#5B8DF6] bg-zinc-100 dark:bg-zinc-800/60'
                : 'text-zinc-600 dark:text-zinc-300 hover:text-[#0F1B33] dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
            }`}
          >
            14 Books
          </button>
          <button
            id="nav-link-practice"
            onClick={() => onNavigate('practice')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
              activeView === 'practice'
                ? 'text-[#2563EB] dark:text-[#5B8DF6] bg-zinc-100 dark:bg-zinc-800/60'
                : 'text-zinc-600 dark:text-zinc-300 hover:text-[#0F1B33] dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>Practice</span>
          </button>
          <button
            id="nav-link-quizzes"
            onClick={() => onNavigate('quizzes')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
              activeView === 'quizzes'
                ? 'text-[#2563EB] dark:text-[#5B8DF6] bg-zinc-100 dark:bg-zinc-800/60'
                : 'text-zinc-600 dark:text-zinc-300 hover:text-[#0F1B33] dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Quizzes</span>
          </button>
          <button
            id="nav-link-weakness"
            onClick={() => onNavigate('weakness-finder')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
              activeView === 'weakness-finder'
                ? 'text-[#2563EB] dark:text-[#5B8DF6] bg-zinc-100 dark:bg-zinc-800/60'
                : 'text-zinc-600 dark:text-zinc-300 hover:text-[#0F1B33] dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-amber-500" />
            <span>Weakness Finder</span>
          </button>
          <button
            id="nav-link-resources"
            onClick={() => onNavigate('resources')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
              activeView === 'resources'
                ? 'text-[#2563EB] dark:text-[#5B8DF6] bg-zinc-100 dark:bg-zinc-800/60'
                : 'text-zinc-600 dark:text-zinc-300 hover:text-[#0F1B33] dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-[#27ae60]" />
            <span>Free PDFs</span>
          </button>
        </nav>

        {/* Right Action Icons & Primary CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search button */}
          <button
            id="nav-search-button"
            onClick={() => onNavigate('search')}
            title="Search grammar topics & books"
            aria-label="Search grammar topics & books"
            className={`p-2 rounded-lg transition-colors ${
              activeView === 'search'
                ? 'text-[#2563EB] bg-zinc-100 dark:bg-zinc-800'
                : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Dark / Light Toggle */}
          <button
            id="nav-theme-toggle"
            onClick={toggleTheme}
            title={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            className="p-2 rounded-lg text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-[#F5A623]" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Primary CTA button */}
          <button
            id="nav-cta-books"
            onClick={onOpenBooks}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#2563EB] hover:bg-[#1d4ed8] text-white transition-all shadow-xs"
          >
            <BookOpen className="w-4 h-4" />
            <span>All 14 Books</span>
          </button>

          {/* Mobile hamburger menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 lg:hidden rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0F1B33] px-4 pt-3 pb-5 space-y-1.5 shadow-lg animate-in slide-in-from-top-2"
        >
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Home
          </button>
          <button
            onClick={() => {
              onNavigate('blog');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Blog Articles
          </button>
          <button
            onClick={() => {
              onNavigate('books');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            The 14 Books Collection
          </button>
          <button
            onClick={() => {
              onNavigate('practice');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2"
          >
            <Target className="w-4 h-4 text-[#2563EB]" />
            <span>Practice Zone (Spot the Error)</span>
          </button>
          <button
            onClick={() => {
              onNavigate('quizzes');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2"
          >
            <Award className="w-4 h-4 text-[#27ae60]" />
            <span>Grammar Quizzes</span>
          </button>
          <button
            onClick={() => {
              onNavigate('weakness-finder');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2"
          >
            <Activity className="w-4 h-4 text-amber-500" />
            <span>Weakness Finder (Diagnostic)</span>
          </button>
          <button
            onClick={() => {
              onNavigate('resources');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-[#27ae60]" />
            <span>Free PDF Cheat Sheets</span>
          </button>
          <button
            onClick={() => {
              onNavigate('about');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            About the Author
          </button>
          <button
            onClick={() => {
              onNavigate('contact');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Contact &amp; FAQ
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                onOpenBooks();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#2563EB] text-white"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore 14 Books on Amazon</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
