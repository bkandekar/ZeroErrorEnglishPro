import React from 'react';
import { AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react';

interface CorrectedSentenceCardProps {
  id?: string;
  examTag?: string;
  incorrectSentence: string;
  correctSentence: React.ReactNode;
  rule: string;
  trapLabel?: string;
  className?: string;
}

export const CorrectedSentenceCard: React.FC<CorrectedSentenceCardProps> = ({
  id,
  examTag = 'SSC CGL & IBPS PO Trap',
  incorrectSentence,
  correctSentence,
  rule,
  trapLabel = 'The Examiner Trap',
  className = '',
}) => {
  return (
    <div
      id={id}
      className={`rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/40 shadow-sm overflow-hidden transition-all duration-200 ${className}`}
    >
      {/* Header bar */}
      <div className="px-5 py-2.5 bg-zinc-50 dark:bg-[#0F1B33]/80 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 font-medium text-zinc-600 dark:text-zinc-300">
          <ShieldAlert className="w-3.5 h-3.5 text-[#F5A623]" />
          <span>{examTag}</span>
        </div>
        <span className="text-[11px] font-semibold text-[#F5A623] uppercase tracking-wider font-mono">
          Zero-Error Protocol
        </span>
      </div>

      {/* Main sentences */}
      <div className="p-5 sm:p-6 space-y-4">
        {/* Incorrect sentence */}
        <div className="flex items-start gap-3">
          <div className="mt-0.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#c0392b]/10 text-[#c0392b]">
            <AlertCircle className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <span className="inline-block text-[11px] font-bold text-[#c0392b] uppercase tracking-wider mb-0.5">
              Incorrect (Exam Trap)
            </span>
            <p className="text-zinc-600 dark:text-zinc-400 line-through text-sm sm:text-base leading-relaxed">
              {incorrectSentence}
            </p>
          </div>
        </div>

        {/* Correct sentence */}
        <div className="flex items-start gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
          <div className="mt-0.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#27ae60]/15 text-[#27ae60]">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <span className="inline-block text-[11px] font-bold text-[#27ae60] uppercase tracking-wider mb-0.5">
              Correct (Zero Error)
            </span>
            <p className="text-[#0F1B33] dark:text-white font-semibold text-sm sm:text-base leading-relaxed">
              {correctSentence}
            </p>
          </div>
        </div>
      </div>

      {/* Rule explanation footer */}
      <div className="px-5 py-3.5 bg-zinc-50/80 dark:bg-[#0F1B33]/60 border-t border-zinc-200 dark:border-zinc-800 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
        <span className="font-bold text-[#F5A623] mr-1.5">{trapLabel}:</span>
        <span className="leading-normal">{rule}</span>
      </div>
    </div>
  );
};
