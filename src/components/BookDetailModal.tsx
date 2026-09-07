import React, { useEffect } from 'react';
import { Book } from '../types';
import { X, ShoppingCart, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({ book, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (book) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [book, onClose]);

  if (!book) return null;

  const hasCoverImage = Boolean(book.coverImage && book.coverImage.trim().length > 0);

  return (
    <div
      id="book-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#0F1B33] rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-[#16264A]/40">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#F5A623] px-2 py-0.5 rounded bg-[#F5A623]/10 border border-[#F5A623]/20">
              Volume #{book.id}
            </span>
            <span className="text-xs font-bold text-[#2563EB] dark:text-[#5B8DF6]">
              {book.topic}
            </span>
          </div>
          <button
            id="btn-close-book-modal"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Book Cover Visual */}
            <div className="w-full sm:w-44 shrink-0 aspect-[3/4] rounded-xl overflow-hidden shadow-md bg-gradient-to-br from-[#0F1B33] via-[#16264A] to-[#2563EB] p-4 flex flex-col justify-between text-white border border-[#2563EB]/40">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-[#F5A623] font-bold">
                  VOL {book.id.toString().padStart(2, '0')}
                </span>
                <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded">
                  Amazon KDP
                </span>
              </div>
              <div className="my-auto py-2">
                <p className="text-[10px] text-[#5B8DF6] font-bold uppercase mb-1">
                  {book.topic}
                </p>
                <h4 className="font-heading text-xs sm:text-sm font-bold line-clamp-4 leading-tight">
                  {book.title}
                </h4>
              </div>
              <div className="text-[9px] text-zinc-300 border-t border-white/15 pt-1.5 flex justify-between">
                <span>22-Yr Faculty</span>
                <span>ZeroError</span>
              </div>
            </div>

            {/* Book Metadata & Title */}
            <div className="flex-1 space-y-3">
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#0F1B33] dark:text-white leading-snug">
                {book.title}
              </h3>

              <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <span className="font-bold text-[#2563EB] dark:text-[#5B8DF6] block mb-0.5">
                  Core Examination Value:
                </span>
                {book.shortBenefit}
              </div>

              <div className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
                <p>
                  <strong className="text-zinc-800 dark:text-zinc-200">Target Candidates:</strong>{' '}
                  {book.idealFor}
                </p>
                <p>
                  <strong className="text-zinc-800 dark:text-zinc-200">Format:</strong> Kindle Edition &amp; Paperback via Amazon KDP
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Overview Section */}
          {book.overviewHtml && (
            <div className="border-t border-zinc-200 dark:border-zinc-800 pt-5 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 font-heading">
                Book Scope &amp; Pedagogical Architecture
              </h4>
              <div
                className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-3"
                dangerouslySetInnerHTML={{ __html: book.overviewHtml }}
              />
            </div>
          )}

          {/* Highlights checklist */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 font-heading">
              What Is Inside Every ZeroError Guide:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#27ae60] shrink-0" />
                <span>200+ Solved Exam Questions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#27ae60] shrink-0" />
                <span>Examiner Elimination Matrices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#27ae60] shrink-0" />
                <span>10-Second Speed Shortcuts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#27ae60] shrink-0" />
                <span>Calibrated for Recent Pattern Trends</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Direct Amazon Button */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#16264A]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <ShieldCheck className="w-4 h-4 text-[#27ae60]" />
            <span>Official Amazon Verified Listing</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex-1 sm:flex-none"
            >
              Close
            </button>
            <a
              id="modal-btn-buy-amazon"
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#0F1B33] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs flex-1 sm:flex-none"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Buy on Amazon KDP</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
