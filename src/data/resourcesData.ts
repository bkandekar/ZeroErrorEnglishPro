import { DownloadResource } from '../types';

export const freeResourcesList: (DownloadResource & { fileSize: string; topics: string[]; popular: boolean })[] = [
  {
    id: 'res-cheat-sheet',
    title: 'English Grammar Rules Cheat Sheet',
    pages: '4 Pages',
    description: 'A high-density 4-page quick reference summary condensing all fundamental grammar rules for SSC CGL, Banking, and State PSCs into high-yield tables.',
    format: 'PDF Reference Document',
    tag: 'Highest Yield',
    fileSize: '1.8 MB',
    topics: ['Subject-Verb Agreement', 'Tenses', 'Prepositions', 'Voice', 'Modals', 'Articles'],
    popular: true
  },
  {
    id: 'res-shortcuts',
    title: '100 English Grammar Shortcuts (Starter Edition)',
    pages: '6 Pages',
    description: 'The top 25 rapid-elimination heuristics extracted from Volume #12. Designed to cut sentence audit time down to under 15 seconds per question.',
    format: 'PDF Pocket Guide',
    tag: 'Exam Sprint',
    fileSize: '2.1 MB',
    topics: ['Inversion Triggers', 'Correlative Pairs', 'Redundancies', 'Latin Comparatives'],
    popular: true
  },
  {
    id: 'res-sva-matrix',
    title: 'Subject-Verb Agreement 36-Rule Matrix',
    pages: '3 Pages',
    description: 'A diagnostic cheat-sheet breaking down the exact 36 subject-verb agreement traps examiners repeatedly test, with side-by-side right vs wrong sentence pairings.',
    format: 'PDF Summary Chart',
    tag: 'Core Rules',
    fileSize: '1.2 MB',
    topics: ['Prepositional Distractors', 'Compound Units', 'Collective Noun Divisions'],
    popular: false
  },
  {
    id: 'res-tense-timeline',
    title: 'Tense Timeline & Sequence Chart',
    pages: '2 Pages',
    description: 'Visual chronologies mapping simple, continuous, perfect, and perfect continuous verb aspects across past, present, and future timeframes.',
    format: 'PDF Visual Map',
    tag: 'Quick Visual',
    fileSize: '980 KB',
    topics: ['Since vs. For', 'Past Perfect Sequences', 'Conditional Time Harmony'],
    popular: false
  }
];
