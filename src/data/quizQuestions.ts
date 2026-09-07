import { QuizQuestion } from '../types';

export const subjectVerbQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    topic: 'Subject-Verb Agreement',
    question: 'Select the sentence with the correct verb agreement:',
    options: [
      'The quality of these handmade silk sarees are world-renowned.',
      'The quality of these handmade silk sarees is world-renowned.',
      'The quality of these handmade silk sarees were world-renowned.',
      'The quality of these handmade silk sarees have been world-renowned.'
    ],
    correctIndex: 1,
    explanation: 'The head noun and true subject is the singular noun "quality", NOT the plural object of preposition "sarees". A prepositional phrase ("of these handmade silk sarees") does not alter the number of the subject. Therefore, "is" is correct.',
    rule: 'Rule #1: The Subject-Prepositional Distractor Rule (Book #01, Ch. 2)',
    difficulty: 'Intermediate'
  },
  {
    id: 2,
    topic: 'Subject-Verb Agreement',
    question: 'Bread and butter ______ his only sustenance during his years of preparation.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctIndex: 1,
    explanation: 'When two singular nouns are joined by "and" but together express a single combined unit, dish, or conceptual identity (bread and butter, slow and steady, time and tide), they take a singular verb.',
    rule: 'Rule #4: Compound Subjects Expressing Single Unity (Book #01, Ch. 4)',
    difficulty: 'Beginner'
  },
  {
    id: 3,
    topic: 'Subject-Verb Agreement',
    question: 'Choose the correct option: "Neither the captain nor the sailors ______ able to rescue the capsized vessel."',
    options: [
      'was',
      'is',
      'were',
      'has been'
    ],
    correctIndex: 2,
    explanation: 'When subjects are connected by "Neither... nor" or "Either... or", the verb agrees with the proximate (closer) subject. Here, "sailors" is plural and adjacent to the verb, requiring the plural verb "were".',
    rule: 'Rule #7: Proximity Rule with Correlatives (Book #01, Ch. 6)',
    difficulty: 'Intermediate'
  },
  {
    id: 4,
    topic: 'Subject-Verb Agreement',
    question: 'Ten kilometers ______ a long distance to travel on foot every morning.',
    options: [
      'are',
      'is',
      'were',
      'have been'
    ],
    correctIndex: 1,
    explanation: 'Nouns denoting specific quantities, periods of time, sums of money, or measurements of distance take a singular verb when considered as a unified collective whole.',
    rule: 'Rule #12: Units of Distance, Money, and Time as Quantities (Book #01, Ch. 8)',
    difficulty: 'Beginner'
  },
  {
    id: 5,
    topic: 'Subject-Verb Agreement',
    question: 'Dr. Sharma, as well as his surgical assistants, ______ present in the operating theater.',
    options: [
      'were',
      'was',
      'are',
      'have been'
    ],
    correctIndex: 1,
    explanation: 'Parenthetical connectors like "as well as", "along with", "together with", and "in addition to" do not make the subject compound. The verb must agree solely with the first subject ("Dr. Sharma", singular).',
    rule: 'Rule #2: The Quasi-Coordinator Interrupter Trap (Book #01, Ch. 3)',
    difficulty: 'Intermediate'
  },
  {
    id: 6,
    topic: 'Subject-Verb Agreement',
    question: 'A large number of applicants ______ disqualified due to incomplete documentation.',
    options: [
      'was',
      'were',
      'has been',
      'is'
    ],
    correctIndex: 1,
    explanation: '"A number of + plural noun" takes a PLURAL verb (it denotes "many"), whereas "The number of + plural noun" takes a SINGULAR verb (it denotes the specific numerical figure).',
    rule: 'Rule #9: The "A Number of" vs. "The Number of" Duality (Book #01, Ch. 7)',
    difficulty: 'Intermediate'
  },
  {
    id: 7,
    topic: 'Subject-Verb Agreement',
    question: 'He is one of those dedicated athletes who ______ training even in sub-zero temperatures.',
    options: [
      'continues',
      'continue',
      'is continuing',
      'has continued'
    ],
    correctIndex: 1,
    explanation: 'In the formula "one of those + plural noun/pronoun + who", the relative pronoun "who" refers to the plural antecedent ("athletes"). The verb inside the relative clause must therefore be plural ("continue"). Note: If preceded by "the only one of...", it would be singular.',
    rule: 'Rule #5: Relative Pronoun with Plural Antecedent (Book #01, Ch. 5)',
    difficulty: 'Advanced'
  },
  {
    id: 8,
    topic: 'Subject-Verb Agreement',
    question: 'The jury ______ divided in their opinions regarding the verdict.',
    options: [
      'was',
      'were',
      'is',
      'has been'
    ],
    correctIndex: 1,
    explanation: 'When a collective noun (jury, committee, council) acts with divided opinions or individual members act separately, it takes a plural verb and plural possessive pronouns ("in their opinions").',
    rule: 'Rule #3: Collective Noun Split Consensus (Book #01, Ch. 4)',
    difficulty: 'Intermediate'
  },
  {
    id: 9,
    topic: 'Subject-Verb Agreement',
    question: 'More than one student ______ failed to submit the assigned dissertation on time.',
    options: [
      'have',
      'has',
      'are',
      'were'
    ],
    correctIndex: 1,
    explanation: 'The phrase "More than one + singular noun" is syntactically treated as singular and requires a singular verb ("has failed"). Conversely, "More students than one" takes a plural verb ("have failed").',
    rule: 'Rule #18: The "More than one" Syntactic Trap (Book #01, Ch. 11)',
    difficulty: 'Advanced'
  },
  {
    id: 10,
    topic: 'Subject-Verb Agreement',
    question: 'Physics, as well as mathematics, ______ rigorous analytical problem-solving.',
    options: [
      'demand',
      'demands',
      'are demanding',
      'have demanded'
    ],
    correctIndex: 1,
    explanation: 'Subjects that end in "-s" but represent a single academic subject or science (Physics, Mathematics, Economics, Linguistics) are singular in nature and take a singular verb ("demands").',
    rule: 'Rule #15: Nouns Plural in Form but Singular in Meaning (Book #01, Ch. 9)',
    difficulty: 'Beginner'
  }
];

export const quizCategories = [
  {
    id: 'subject-verb-agreement',
    name: 'Subject-Verb Agreement',
    description: '10 exam questions testing the 12 core agreement traps that examiners use to eliminate candidates.',
    questionCount: 10,
    difficulty: 'Intermediate',
    recommendedBookSlug: 'spot-the-error-subject-verb-agreement',
    active: true
  },
  {
    id: 'tenses-timelines',
    name: 'Tenses & Time Markers',
    description: 'Master since vs. for, past perfect sequences, and conditional time clauses.',
    questionCount: 10,
    difficulty: 'Intermediate',
    recommendedBookSlug: 'the-tense-in-english-grammar',
    active: false
  },
  {
    id: 'prepositions-mastery',
    name: 'Prepositions & Fixed Usages',
    description: 'Fixed prepositions, verbs without prepositions, and subtle spatial prepositions.',
    questionCount: 10,
    difficulty: 'Advanced',
    recommendedBookSlug: 'preposition-in-english-grammar',
    active: false
  },
  {
    id: 'active-passive-voice',
    name: 'Active & Passive Voice',
    description: 'Imperative passives, quasi-passives, and modal passive conversions.',
    questionCount: 10,
    difficulty: 'Intermediate',
    recommendedBookSlug: 'the-ultimate-guide-to-active-and-passive-voice',
    active: false
  },
  {
    id: 'direct-indirect-speech',
    name: 'Direct & Indirect Speech',
    description: 'Universal truths, exclamatory sentence reporting, and tense backshifting.',
    questionCount: 10,
    difficulty: 'Advanced',
    recommendedBookSlug: 'mastering-direct-and-indirect-speech',
    active: false
  },
  {
    id: 'articles-zero-errors',
    name: 'Articles (A, An, The)',
    description: 'Omission of articles, primary vs. secondary purpose, and phonetic sounds.',
    questionCount: 10,
    difficulty: 'Beginner',
    recommendedBookSlug: 'articles-for-ssc-cgl-2026-zero-errors',
    active: false
  },
  {
    id: 'question-tags',
    name: 'Question Tags',
    description: 'Semi-negative adverbs, indefinite pronouns, and imperative tag nuances.',
    questionCount: 10,
    difficulty: 'Beginner',
    recommendedBookSlug: 'question-tags-zero-errors',
    active: false
  },
  {
    id: 'non-finite-verbs',
    name: 'Gerunds, Infinitives & Participles',
    description: 'Split infinitives, dangling participles, and possessive noun before gerund.',
    questionCount: 10,
    difficulty: 'Advanced',
    recommendedBookSlug: 'gerunds-vs-infinitives-vs-participles',
    active: false
  },
  {
    id: 'modals-and-conditionals',
    name: 'Modal Auxiliaries',
    description: 'Certainty hierarchy, past modal deduction, and semi-modals.',
    questionCount: 10,
    difficulty: 'Intermediate',
    recommendedBookSlug: 'unlocking-english-modals',
    active: false
  },
  {
    id: 'clauses-and-phrases',
    name: 'Clauses & Sentence Synthesis',
    description: 'Relative pronouns (who vs. whom), noun clauses, and adverbial conjunctions.',
    questionCount: 10,
    difficulty: 'Advanced',
    recommendedBookSlug: 'clauses-and-phrases-demystified',
    active: false
  },
  {
    id: 'punctuation-drills',
    name: 'Advanced Punctuation',
    description: 'Comma splices, semicolons, and apostrophe traps.',
    questionCount: 10,
    difficulty: 'Intermediate',
    recommendedBookSlug: 'advanced-punctuation-mastery',
    active: false
  },
  {
    id: 'grammar-shortcuts-speed',
    name: '100 Rapid Shortcuts Sprint',
    description: 'High-speed 12-second elimination formulas for SSC and Banking aspirants.',
    questionCount: 10,
    difficulty: 'All Levels',
    recommendedBookSlug: '100-english-grammar-shortcuts',
    active: false
  },
  {
    id: 'error-spotting-mixed',
    name: 'Grand Comprehensive Mock',
    description: 'Mixed test questions from all 14 topics mimicking actual Tier 1 & 2 exams.',
    questionCount: 20,
    difficulty: 'Advanced',
    recommendedBookSlug: '100-english-grammar-shortcuts',
    active: false
  }
];
