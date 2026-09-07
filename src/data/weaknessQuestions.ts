import { WeaknessQuestion } from '../types';

export const weaknessQuestions: (WeaknessQuestion & { matchingBookSlug: string; matchingBookTitle: string })[] = [
  {
    id: 1,
    topic: 'Subject-Verb Agreement',
    question: 'The captain, along with all the crew members, ______ awarded medals of gallantry.',
    options: ['were', 'was', 'have been', 'are'],
    correctIndex: 1,
    matchingBookSlug: 'spot-the-error-subject-verb-agreement',
    matchingBookTitle: 'Spot the Error: Subject-Verb Agreement',
    rule: 'Rule #2: Intervening prepositional connectors like "along with" do not create a plural subject.',
    explanation: 'Prepositional connectors like "along with" do not create a plural subject. The verb agrees with "The captain" (singular).'
  },
  {
    id: 2,
    topic: 'Tenses',
    question: 'By this time next year, the civil engineers ______ the suspension bridge project.',
    options: ['will complete', 'will have completed', 'completed', 'had completed'],
    correctIndex: 1,
    matchingBookSlug: 'the-tense-in-english-grammar',
    matchingBookTitle: 'The Tense in English Grammar: A Practical Guide',
    rule: 'Rule #8: Future Perfect is required by specific future target deadlines ("By next...")',
    explanation: 'The time marker "By this time next [time]" indicates an action that will be finished prior to a specific future point, requiring the Future Perfect tense ("will have completed").'
  },
  {
    id: 3,
    topic: 'Direct & Indirect Speech',
    question: 'The teacher said to the students, "The earth revolves around the sun." In indirect speech, this becomes:',
    options: [
      'The teacher told the students that the earth revolved around the sun.',
      'The teacher told the students that the earth revolves around the sun.',
      'The teacher said the students that the earth has revolved around the sun.',
      'The teacher asked the students if the earth revolves around the sun.'
    ],
    correctIndex: 1,
    matchingBookSlug: 'mastering-direct-and-indirect-speech',
    matchingBookTitle: 'Mastering Direct and Indirect Speech',
    rule: 'Rule #3: Universal scientific truths undergo zero tense backshifting in reported speech.',
    explanation: 'When reported speech contains a universal truth, scientific law, or mathematical fact, the tense of the verb is NEVER backshifted to past tense.'
  },
  {
    id: 4,
    topic: 'Active & Passive Voice',
    question: 'Convert to passive: "Close the main entrance gates immediately."',
    options: [
      'The main entrance gates should be closed by you.',
      'Let the main entrance gates be closed immediately.',
      'You are requested to close the gates.',
      'The gates must be closed.'
    ],
    correctIndex: 1,
    matchingBookSlug: 'the-ultimate-guide-to-active-and-passive-voice',
    matchingBookTitle: 'The Ultimate Guide to Active and Passive Voice',
    rule: 'Rule #6: Imperative orders take "Let + Object + be + V3" in the passive voice.',
    explanation: 'Imperative sentences expressing an order or command take the passive structure: "Let + Subject/Object + be + Past Participle (V3)".'
  },
  {
    id: 5,
    topic: 'Prepositions',
    question: 'The young scholar was accused ______ stealing confidential manuscripts from the archives.',
    options: ['with', 'for', 'of', 'to'],
    correctIndex: 2,
    matchingBookSlug: 'preposition-in-english-grammar',
    matchingBookTitle: 'Preposition in English Grammar: A Comprehensive Guide',
    rule: 'Rule #14: The verb "accuse" takes the fixed preposition "of" ("accused of").',
    explanation: 'The verb "accuse" takes the fixed preposition "of" (accused of a crime). Note: "Charged" takes "with".'
  },
  {
    id: 6,
    topic: 'Non-Finite Verbs',
    question: 'I strongly object to ______ smoking in this conference auditorium.',
    options: ['him', 'his', 'he', 'himself'],
    correctIndex: 1,
    matchingBookSlug: 'gerunds-vs-infinitives-vs-participles',
    matchingBookTitle: 'Gerunds vs Infinitives vs Participles: Clear Rules & Practice',
    rule: 'Rule #5: A noun or pronoun modifying a gerund must be in the possessive case.',
    explanation: 'A noun or pronoun modifying a gerund ("smoking") must be in the POSSESSIVE case ("his"), not the objective case ("him").'
  },
  {
    id: 7,
    topic: 'Modal Auxiliaries',
    question: 'Work hard lest you ______ fail to achieve your career objectives.',
    options: ['should', 'would', 'might', 'will'],
    correctIndex: 0,
    matchingBookSlug: 'unlocking-english-modals',
    matchingBookTitle: 'Unlocking English Modals: Problem-Solving Strategies',
    rule: 'Rule #11: The conjunction "lest" strictly demands "should" without negative adverbs.',
    explanation: 'The conjunction "lest" strictly demands the modal auxiliary "should" (or a subjunctive base verb) and never admits a negative adverb.'
  },
  {
    id: 8,
    topic: 'Clauses & Phrases',
    question: 'The applicant ______ the interview panel recommended for the fellowship has accepted the offer.',
    options: ['who', 'whom', 'which', 'whose'],
    correctIndex: 1,
    matchingBookSlug: 'clauses-and-phrases-demystified',
    matchingBookTitle: 'Clauses & Phrases Demystified',
    rule: 'Rule #9: Relative pronouns serving as grammatical objects take "whom".',
    explanation: 'The pronoun functions as the grammatical direct object of the transitive verb "recommended" (the panel recommended him/her), which requires the objective form "whom".'
  },
  {
    id: 9,
    topic: 'Question Tags',
    question: 'Barking dogs seldom bite, ______?',
    options: ['do they?', "don't they?", 'is it?', 'are they?'],
    correctIndex: 0,
    matchingBookSlug: 'question-tags-zero-errors',
    matchingBookTitle: 'Question Tags: Zero Errors',
    rule: 'Rule #4: Inherent negative adverbs ("seldom", "hardly") demand positive question tags.',
    explanation: 'Because "seldom" has a negative sense, the statement is grammatically negative. Therefore, the tag must be POSITIVE ("do they?").'
  },
  {
    id: 10,
    topic: 'Articles',
    question: 'The patient was discharged after spending two weeks in ______ hospital.',
    options: ['a', 'an', 'the', 'no article needed'],
    correctIndex: 3,
    matchingBookSlug: 'articles-for-ssc-cgl-2026-zero-errors',
    matchingBookTitle: 'Articles For SSC CGL 2026 – Zero Errors',
    rule: 'Rule #7: Institutions visited for their primary function take zero article.',
    explanation: 'When institutions like hospital, school, church, or prison are visited for their primary purpose (receiving medical treatment), no article is used.'
  }
];
