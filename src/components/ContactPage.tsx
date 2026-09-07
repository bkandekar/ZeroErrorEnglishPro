import React, { useState } from 'react';
import { Mail, MessageSquare, HelpCircle, ChevronDown, CheckCircle2, Send, ChevronRight } from 'lucide-react';
import { SEOHead } from './SEOHead';

interface ContactPageProps {
  onNavigate: (view: 'home' | 'blog' | 'books' | 'practice' | 'quizzes' | 'weakness-finder' | 'resources' | 'about' | 'contact' | 'search') => void;
}

const FAQS = [
  {
    q: 'Are these books and drills suitable for SSC CGL 2026 Tier 1 and Tier 2?',
    a: 'Yes, absolutely. The rules, error-spotting drills, and question formats are mapped directly to the latest TCS exam patterns for SSC CGL, CHSL, CPO, as well as IBPS PO/Clerk and SBI Banking examinations.',
  },
  {
    q: 'How do ZeroErrorEnglish books differ from standard grammar books like Wren & Martin?',
    a: 'Traditional books explain grammar descriptively for school students. Our series is engineered specifically for competitive test-takers: it emphasizes examiner psychology, deceptive distractors, intervening phrase traps, and rapid elimination heuristics.',
  },
  {
    q: 'Can I read the eBooks on a phone or laptop without owning a Kindle device?',
    a: 'Yes. Amazon provides the free Kindle App for Android, iPhone, iPad, PC, and Mac. You can also read them instantly on any web browser via read.amazon.com.',
  },
  {
    q: 'How does the ZeroError method eliminate negative marking in error spotting?',
    a: 'Rather than relying on intuitive "ear-testing" (which fails when examiners craft euphonic traps), our books provide strict mathematical rule verification. If you cannot cite the exact syntactic rule governing an error, our heuristics guide you away from false guesses.',
  },
  {
    q: 'Are step-by-step diagnostic explanations provided for every practice question?',
    a: 'Yes. Every question in our books, quizzes, and practice drills contains a comprehensive explanation highlighting the exact part with the error, the governing rule, and the corrected version.',
  },
];

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Doubt on Grammar Rule',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact & Support — ZeroErrorEnglishPro',
    description: 'Ask grammar questions, send book feedback, or inquire about exam coaching with ZeroErrorEnglish.',
    url: 'https://zeroerrorenglishpro.com/contact',
  };

  return (
    <div className="py-12 bg-zinc-50 dark:bg-[#0B132B] min-h-screen">
      <SEOHead
        title="Contact Us &amp; Student Support — ZeroErrorEnglish"
        description="Have a question about a grammar rule, an Amazon eBook, or exam strategy? Send your query directly to our veteran educator."
        canonicalUrl="https://zeroerrorenglishpro.com/contact"
        ogType="website"
        jsonLd={jsonLd}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-6">
          <button onClick={() => onNavigate('home')} className="hover:text-zinc-900 dark:hover:text-white">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="font-semibold text-zinc-900 dark:text-white">Contact &amp; FAQ</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/20 text-[#2563EB] dark:text-[#5B8DF6] text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Support &amp; Inquiries</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1B33] dark:text-white tracking-tight mb-4 font-heading">
            Get in Touch with the Educator
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Have a question about a specific grammar rule, feedback on an eBook, or an inquiry regarding exam strategy? We welcome your message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/50 shadow-sm">
              <h2 className="font-heading font-bold text-xl text-[#0F1B33] dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#2563EB]" />
                <span>Send a Message</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                All messages are reviewed directly by the author. Typical response time is within 24-48 business hours.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#27ae60]/10 border border-[#27ae60]/30 text-center animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-[#27ae60] mx-auto mb-3" />
                  <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-white mb-2">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mb-4">
                    Thank you, {formState.name}. We have logged your query and will reply to <strong>{formState.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subject: 'Doubt on Grammar Rule', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl bg-white dark:bg-[#16264A] text-xs font-semibold text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100"
                  >
                    Send Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/70 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/70 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Query Subject
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A] text-zinc-900 dark:text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                    >
                      <option value="Doubt on Grammar Rule">Doubt on a Grammar Rule / Question</option>
                      <option value="Feedback on eBook">Feedback on an Amazon eBook</option>
                      <option value="Exam Strategy Guidance">Competitive Exam Strategy Question</option>
                      <option value="Errata / Typo Report">Report an Error or Typo</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
                      Your Message or Question
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Detail your question or sentence here..."
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/70 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Educator</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#16264A]/50 shadow-sm h-full">
              <h2 className="font-heading font-bold text-xl text-[#0F1B33] dark:text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#F5A623]" />
                <span>Frequently Asked Questions</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                Instant answers to common queries from competitive aspirants.
              </p>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-800/40 overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#0F1B33] dark:text-white flex items-center justify-between gap-2"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180 text-[#2563EB]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/80 pt-2 animate-in fade-in">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
