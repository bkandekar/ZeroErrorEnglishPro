export interface Post {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | string;
  readingTime: string;
  publishDate: string;
  description: string;
  relatedBookId: number | null;
  bodyHtml: string;
}

export interface Book {
  id: number;
  slug: string;
  title: string;
  topic: string;
  shortBenefit: string;
  idealFor: string;
  amazonUrl: string;
  coverImage?: string;
  transformationStatement?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  overviewHtml?: string;
}

export type AppView =
  | 'home'
  | 'blog'
  | 'post'
  | 'books'
  | 'book-detail'
  | 'practice'
  | 'practice-error-spotting'
  | 'quizzes'
  | 'quiz-sva'
  | 'weakness-finder'
  | 'resources'
  | 'about'
  | 'contact'
  | 'search'
  | 'privacy'
  | 'terms';

export interface PracticeQuestion {
  id: number;
  sentence: string;
  parts: {
    letter: string;
    text: string;
    isError: boolean;
  }[];
  correctPart: string;
  correctedSentence: string;
  explanation: string;
  governingRule: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  examSource: string;
}

export interface QuizQuestion {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  rule: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface WeaknessQuestion {
  id: number;
  topic: GrammarTopic;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  rule: string;
}

export interface DownloadResource {
  id: string;
  title: string;
  pages: string;
  description: string;
  format: string;
  tag: string;
}

export type GrammarTopic =
  | 'Subject-Verb Agreement'
  | 'Tenses'
  | 'Direct & Indirect Speech'
  | 'Active & Passive Voice'
  | 'Prepositions'
  | 'Non-Finite Verbs'
  | 'Modal Auxiliaries'
  | 'Clauses & Phrases'
  | 'Question Tags'
  | 'Articles'
  | 'Punctuation'
  | 'Grammar Shortcuts'
  | 'Error Spotting';

export const GRAMMAR_TOPICS: GrammarTopic[] = [
  'Subject-Verb Agreement',
  'Tenses',
  'Direct & Indirect Speech',
  'Active & Passive Voice',
  'Prepositions',
  'Non-Finite Verbs',
  'Modal Auxiliaries',
  'Clauses & Phrases',
  'Question Tags',
  'Articles',
  'Punctuation',
  'Grammar Shortcuts',
  'Error Spotting',
];

export const EXAM_OPTIONS = [
  { id: 'ssc-cgl', name: 'SSC CGL / CHSL' },
  { id: 'ibps-banking', name: 'IBPS / SBI Banking' },
  { id: 'rrb', name: 'RRB NTPC / Railways' },
  { id: 'cbse-12', name: 'CBSE Class 12' },
];

export const LEVEL_OPTIONS = [
  { id: 'beginner', name: 'Beginner (Building Foundations)' },
  { id: 'intermediate', name: 'Intermediate (Frequent Negative Marks)' },
  { id: 'advanced', name: 'Advanced (Targeting 100% Accuracy)' },
];
