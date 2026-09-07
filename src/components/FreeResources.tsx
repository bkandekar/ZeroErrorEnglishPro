import React, { useState } from 'react';
import { freeResourcesList } from '../data/resourcesData';
import { DownloadResource } from '../types';
import { Download, FileText, CheckCircle2, Sparkles, BookOpen, ExternalLink, ChevronRight, FileCheck } from 'lucide-react';
import { SEOHead } from './SEOHead';

interface FreeResourcesProps {
  onNavigate: (view: 'home' | 'blog' | 'books' | 'practice' | 'quizzes' | 'weakness-finder' | 'resources' | 'about' | 'contact' | 'search') => void;
}

export const FreeResources: React.FC<FreeResourcesProps> = ({
  onNavigate,
}) => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);
  const [previewResource, setPreviewResource] = useState<(typeof freeResourcesList)[0] | null>(null);

  const handleDownload = (resource: (typeof freeResourcesList)[0]) => {
    setDownloadingId(resource.id);
    setTimeout(() => {
      setDownloadingId(null);
      if (!downloadedIds.includes(resource.id)) {
        setDownloadedIds((prev) => [...prev, resource.id]);
      }
      setPreviewResource(resource);
    }, 600);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DigitalDocument',
    name: 'Free English Grammar PDF Resources — ZeroErrorEnglish',
    description: 'Download high-yield English grammar cheat sheets, 36-rule Subject-Verb Agreement matrices, and quick-revision timelines for SSC & Banking exams.',
    url: 'https://zeroerrorenglishpro.com/resources',
  };

  return (
    <div className="py-12 bg-zinc-50 dark:bg-[#0B132B] min-h-screen">
      <SEOHead
        title="Free English Grammar PDFs &amp; Revision Cheat Sheets"
        description="Download free English grammar PDF cheat sheets, rule matrices, and tense timelines. High-yield revision documents crafted for SSC CGL and Bank PO aspirants."
        canonicalUrl="https://zeroerrorenglishpro.com/resources"
        ogType="website"
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-zinc-900 dark:hover:text-white">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="font-semibold text-zinc-900 dark:text-white">Free Resources</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27ae60]/10 dark:bg-[#27ae60]/20 text-[#27ae60] text-xs font-semibold mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>High-Yield Revision PDFs</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1B33] dark:text-white tracking-tight mb-4 font-heading">
            Free English Grammar Quick Reference Sheets
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Condensed, high-density study materials designed for rapid 15-minute exam day revision. No clutter, pure competitive exam value.
          </p>
        </div>

        {/* Resources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {freeResourcesList.map((res) => {
            const isDownloaded = downloadedIds.includes(res.id);
            const isDownloading = downloadingId === res.id;

            return (
              <div
                key={res.id}
                className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/50 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#2563EB]/10 text-[#2563EB] dark:text-[#5B8DF6]">
                      {res.pages} • {res.format}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400">
                      {res.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#0F1B33] dark:text-white mb-2">
                    {res.title}
                  </h3>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {res.description}
                  </p>

                  {/* Topics Covered */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                      Key Content Inside:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {res.topics.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-medium">
                    File size: {res.fileSize}
                  </span>

                  <button
                    onClick={() => handleDownload(res)}
                    disabled={isDownloading}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center gap-2 ${
                      isDownloaded
                        ? 'bg-[#27ae60] text-white'
                        : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                    }`}
                  >
                    {isDownloading ? (
                      <span>Preparing Download...</span>
                    ) : isDownloaded ? (
                      <>
                        <FileCheck className="w-4 h-4" />
                        <span>Ready / View PDF</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download Free PDF</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Upgrade Banner to 14 Books */}
        <div className="p-8 sm:p-10 rounded-3xl bg-linear-to-r from-[#0F1B33] to-[#1E3A8A] text-white text-center mb-16 max-w-5xl mx-auto shadow-xl">
          <div className="max-w-2xl mx-auto">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2 block">
              Upgrade to Full Editions
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-3">
              Need Comprehensive 200+ Question Volumes?
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              Our free cheat sheets give you high-level rules, but competitive exams hinge on mastering subtle exceptions. The complete 14-volume ZeroError series on Amazon KDP covers 2,800+ solved exam questions.
            </p>
            <button
              onClick={() => onNavigate('books')}
              className="px-8 py-3.5 rounded-xl bg-[#F5A623] hover:bg-[#F5A623]/90 text-[#0F1B33] font-bold text-sm shadow-lg transition-all inline-flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore All 14 Books on Amazon KDP</span>
            </button>
          </div>
        </div>
      </div>

      {/* PDF Ready Preview Modal */}
      {previewResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white dark:bg-[#16264A] rounded-2xl border border-zinc-200 dark:border-zinc-800 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800 mb-4">
              <div className="flex items-center gap-2 text-[#27ae60]">
                <FileCheck className="w-5 h-5" />
                <h3 className="font-heading font-bold text-base text-[#0F1B33] dark:text-white">
                  PDF Prepared Successfully!
                </h3>
              </div>
              <button
                onClick={() => setPreviewResource(null)}
                className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white flex items-center justify-center text-xs font-bold"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4 text-sm text-zinc-700 dark:text-zinc-300 mb-6">
              <p className="font-semibold text-zinc-900 dark:text-white">
                {previewResource.title}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Format: {previewResource.format} • Size: {previewResource.fileSize}
              </p>
              <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 text-xs leading-relaxed space-y-2">
                <p className="font-medium text-zinc-900 dark:text-white">
                  Sample Excerpt from Rule Sheet:
                </p>
                <p className="italic text-zinc-600 dark:text-zinc-300">
                  &quot;Rule #1: When compound subjects express a singular conceptual unity (e.g. Bread and butter, Slow and steady), the verb must always be SINGULAR.&quot;
                </p>
                <p className="italic text-zinc-600 dark:text-zinc-300">
                  &quot;Rule #2: Intervening prepositional connectors like 'along with', 'as well as', 'in addition to' do not compound the subject; the verb must agree solely with the first subject.&quot;
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <button
                onClick={() => setPreviewResource(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  alert(`Starting download for ${previewResource.title}...`);
                  setPreviewResource(null);
                }}
                className="px-5 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-xs"
              >
                Save PDF File
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
