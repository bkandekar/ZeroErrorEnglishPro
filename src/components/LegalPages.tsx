import React from 'react';
import { ShieldCheck, FileText, ChevronRight } from 'lucide-react';
import { SEOHead } from './SEOHead';

interface LegalPagesProps {
  pageType: 'privacy' | 'terms';
  onNavigate: (view: 'home' | 'blog' | 'books' | 'practice' | 'quizzes' | 'weakness-finder' | 'resources' | 'about' | 'contact' | 'search') => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ pageType, onNavigate }) => {
  const isPrivacy = pageType === 'privacy';

  return (
    <div className="py-12 bg-zinc-50 dark:bg-[#0B132B] min-h-screen">
      <SEOHead
        title={isPrivacy ? 'Privacy Policy — ZeroErrorEnglish' : 'Terms of Service — ZeroErrorEnglish'}
        description={
          isPrivacy
            ? 'Read our Privacy Policy detailing student data protection, analytics, and Amazon Affiliate disclosure.'
            : 'Read the Terms of Service for using the ZeroErrorEnglish educational platform.'
        }
        canonicalUrl={isPrivacy ? 'https://zeroerrorenglishpro.com/privacy' : 'https://zeroerrorenglishpro.com/terms'}
        ogType="website"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-zinc-900 dark:hover:text-white">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="font-semibold text-zinc-900 dark:text-white">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
          </span>
        </nav>

        {/* Content Card */}
        <div className="p-8 sm:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/50 shadow-sm text-zinc-800 dark:text-zinc-200 leading-relaxed">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-zinc-100 dark:border-zinc-800">
            {isPrivacy ? (
              <ShieldCheck className="w-8 h-8 text-[#2563EB]" />
            ) : (
              <FileText className="w-8 h-8 text-[#2563EB]" />
            )}
            <div>
              <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F1B33] dark:text-white">
                {isPrivacy ? 'Privacy Policy & Disclosures' : 'Terms of Service'}
              </h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Last Updated: March 2026 • ZeroErrorEnglish Educational Platform
              </p>
            </div>
          </div>

          {isPrivacy ? (
            /* Privacy Policy */
            <div className="space-y-6 text-sm">
              <section>
                <h2 className="text-base font-bold text-[#0F1B33] dark:text-white mb-2">
                  1. Information We Collect
                </h2>
                <p>
                  ZeroErrorEnglish is committed to safeguarding the privacy of students and competitive aspirants. We collect minimal personal information. When you submit a contact query, join our newsletter, or take diagnostic drills, we only collect the email or name provided voluntarily.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0F1B33] dark:text-white mb-2">
                  2. Amazon Associate &amp; Affiliate Disclosure
                </h2>
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs sm:text-sm">
                  <p className="font-semibold mb-1">Mandatory Amazon Disclosure Statement:</p>
                  <p>
                    ZeroErrorEnglish is a participant in the Amazon Services LLC Associates Program and Amazon EU Associates Programme, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com, Amazon.in, and affiliated international Amazon sites.
                  </p>
                  <p className="mt-2">
                    When you click on our links to purchase books on Amazon KDP, we may receive a small commission at no additional cost to you. This directly supports the maintenance of our free tutorials and practice drills.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0F1B33] dark:text-white mb-2">
                  3. Cookies and Analytics
                </h2>
                <p>
                  We may utilize privacy-friendly, anonymized traffic analytics to measure which grammar articles and error-spotting drills assist students most effectively. We do not sell, rent, or lease student information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0F1B33] dark:text-white mb-2">
                  4. Contacting Us
                </h2>
                <p>
                  If you have any questions regarding this Privacy Policy or student data security, please reach out via our contact page.
                </p>
              </section>
            </div>
          ) : (
            /* Terms of Service */
            <div className="space-y-6 text-sm">
              <section>
                <h2 className="text-base font-bold text-[#0F1B33] dark:text-white mb-2">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing ZeroErrorEnglish, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our website or download resources.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0F1B33] dark:text-white mb-2">
                  2. Intellectual Property Rights
                </h2>
                <p>
                  All educational content, error spotting questions, rules breakdowns, book descriptions, and pedagogical methods are the copyrighted intellectual property of the author and ZeroErrorEnglish. You may download free PDF sheets for personal, non-commercial self-study only. Commercial redistribution, scraping, or mass reproduction without written authorization is strictly prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0F1B33] dark:text-white mb-2">
                  3. Educational Disclaimer
                </h2>
                <p>
                  Our grammar materials, diagnostic engines, and eBooks are prepared with rigorous attention to competitive exam standards. However, exam commissions (such as SSC, IBPS, RRB, UPSC) periodically update syllabi and question distributions. While our content is engineered to maximize accuracy, test outcomes depend on individual student preparation.
                </p>
              </section>

              <section>
                <h2 className="text-base font-bold text-[#0F1B33] dark:text-white mb-2">
                  4. Purchases on Amazon KDP
                </h2>
                <p>
                  All purchases of the 14 ZeroErrorEnglish eBooks and paperbacks are fulfilled directly by Amazon. Orders, deliveries, returns, and digital rights management are subject to Amazon&apos;s conditions of use.
                </p>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
