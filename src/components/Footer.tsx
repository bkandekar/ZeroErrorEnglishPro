import React from 'react';
import { GRAMMAR_TOPICS, Book } from '../types';
import { GraduationCap, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  books: Book[];
  onSelectTopic?: (topic: string) => void;
  onSelectBook?: (book: Book) => void;
  onNavigate: (view: 'home' | 'blog' | 'books' | 'practice' | 'quizzes' | 'weakness-finder' | 'resources' | 'about' | 'contact' | 'search' | 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  books,
  onSelectTopic,
  onSelectBook,
  onNavigate,
}) => {
  return (
    <footer
      id="main-footer"
      className="bg-[#0F1B33] text-zinc-300 border-t border-zinc-800 pt-16 pb-12 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Col 1 & 2: Author Bio & Authority */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white">
                <GraduationCap className="w-4 h-4 text-[#F5A623]" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                ZeroError<span className="text-[#5B8DF6]">English</span>
                <span className="ml-1 text-[10px] text-[#F5A623] border border-[#F5A623]/30 px-1 py-0.5 rounded font-mono">
                  PRO
                </span>
              </span>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed max-w-md">
              Authored by an English Grammar educator with <strong>22 years of classroom teaching</strong> and <strong>15+ years of competitive-exam coaching</strong> for SSC CGL, IBPS PO, RRB NTPC, and State PSC examinations. Author of 14 targeted Amazon KDP English grammar reference books.
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-[#27ae60]" />
              <span>Evidence-based pedagogical method: Real exam traps first.</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-zinc-400">
              <button
                onClick={() => onNavigate('about')}
                className="hover:text-white transition-colors underline"
              >
                About the Author
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="hover:text-white transition-colors underline"
              >
                Contact &amp; Student FAQ
              </button>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Platform Features
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors text-left"
                >
                  Blog Articles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('books')}
                  className="hover:text-white transition-colors text-left"
                >
                  The 14 Books Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('practice')}
                  className="hover:text-white transition-colors text-left text-[#5B8DF6] font-medium"
                >
                  Spot the Error Drills
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quizzes')}
                  className="hover:text-white transition-colors text-left"
                >
                  Grammar Topic Quizzes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('weakness-finder')}
                  className="hover:text-white transition-colors text-left text-[#F5A623] font-medium"
                >
                  Weakness Finder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="hover:text-white transition-colors text-left text-[#27ae60] font-medium"
                >
                  Free PDF Cheat Sheets
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: 13 Grammar Topics */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              13 Grammar Topics
            </h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              {GRAMMAR_TOPICS.slice(0, 8).map((topic) => (
                <li key={topic}>
                  <button
                    onClick={() => {
                      if (onSelectTopic) onSelectTopic(topic);
                    }}
                    className="hover:text-[#5B8DF6] transition-colors text-left truncate max-w-full"
                  >
                    {topic}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('books')}
                  className="text-zinc-500 italic hover:text-white transition-colors"
                >
                  + All 14 volumes &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: 14 Books Quick Directory */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              14 Amazon KDP Books
            </h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              {books.slice(0, 7).map((book) => (
                <li key={book.id}>
                  <button
                    onClick={() => {
                      if (onSelectBook) onSelectBook(book);
                    }}
                    className="hover:text-[#F5A623] transition-colors text-left truncate max-w-[200px] block"
                    title={book.title}
                  >
                    Vol {book.id}: {book.topic}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('books')}
                  className="text-[#5B8DF6] hover:underline transition-colors block text-left pt-1"
                >
                  View all 14 published volumes &rarr;
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar: Legal & Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            <p>
              &copy; {new Date().getFullYear()} ZeroErrorEnglishPro. All rights reserved. Created for competitive exam excellence.
            </p>
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => onNavigate('privacy')}
                className="hover:text-white underline transition-colors"
              >
                Privacy Policy &amp; Amazon Disclosure
              </button>
              <span>•</span>
              <button
                onClick={() => onNavigate('terms')}
                className="hover:text-white underline transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
          <p className="text-center md:text-right text-[11px] text-zinc-400 max-w-md">
            Amazon, Kindle, and Amazon KDP are trademarks of Amazon.com, Inc. or its affiliates. ZeroErrorEnglish is an educational portal directing students to official verified KDP editions.
          </p>
        </div>
      </div>
    </footer>
  );
};
