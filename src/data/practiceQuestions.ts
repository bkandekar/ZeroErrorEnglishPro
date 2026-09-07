import { PracticeQuestion } from '../types';

export const practiceQuestions: PracticeQuestion[] = [
  {
    id: 1,
    sentence: 'Neither the principal nor the administrative officers was present at the annual convocation ceremony.',
    parts: [
      { letter: 'A', text: 'Neither the principal', isError: false },
      { letter: 'B', text: 'nor the administrative officers', isError: false },
      { letter: 'C', text: 'was present at the', isError: true },
      { letter: 'D', text: 'annual convocation ceremony.', isError: false },
      { letter: 'E', text: 'No Error', isError: false }
    ],
    correctPart: 'C',
    correctedSentence: 'Neither the principal nor the administrative officers were present at the annual convocation ceremony.',
    explanation: 'When two subjects are joined by "neither... nor", the verb must agree in person and number with the subject closest to it (the proximate subject). Here, "the administrative officers" is plural, so the singular auxiliary "was" must be replaced with the plural "were".',
    governingRule: 'Proximity Rule with Correlative Conjunctions',
    difficulty: 'Intermediate',
    examSource: 'SSC CGL Tier 1'
  },
  {
    id: 2,
    sentence: 'No sooner had the invigilator distributed the question papers when the fire alarm began to ring loudly.',
    parts: [
      { letter: 'A', text: 'No sooner had the invigilator', isError: false },
      { letter: 'B', text: 'distributed the question papers', isError: false },
      { letter: 'C', text: 'when the fire alarm', isError: true },
      { letter: 'D', text: 'began to ring loudly.', isError: false },
      { letter: 'E', text: 'No Error', isError: false }
    ],
    correctPart: 'C',
    correctedSentence: 'No sooner had the invigilator distributed the question papers than the fire alarm began to ring loudly.',
    explanation: '"No sooner" is a comparative structure and must be paired correlatively with "than", not "when". "Hardly" and "scarcely" are paired with "when". Replace "when" with "than".',
    governingRule: 'Correlative Conjunction Pairing: No sooner... than',
    difficulty: 'Intermediate',
    examSource: 'IBPS PO Prelims'
  },
  {
    id: 3,
    sentence: 'The candidate is one of the rare scholars who has thoroughly decoded the ancient Harappan inscriptions.',
    parts: [
      { letter: 'A', text: 'The candidate is', isError: false },
      { letter: 'B', text: 'one of the rare scholars', isError: false },
      { letter: 'C', text: 'who has thoroughly decoded', isError: true },
      { letter: 'D', text: 'the ancient Harappan inscriptions.', isError: false },
      { letter: 'E', text: 'No Error', isError: false }
    ],
    correctPart: 'C',
    correctedSentence: 'The candidate is one of the rare scholars who have thoroughly decoded the ancient Harappan inscriptions.',
    explanation: 'In the construction "one of the + plural noun + relative pronoun (who/which/that)", the relative pronoun refers to the plural antecedent ("scholars"). Consequently, the relative clause takes a plural verb ("have thoroughly decoded"), not singular "has".',
    governingRule: 'Relative Pronoun Agreement with Plural Antecedent',
    difficulty: 'Advanced',
    examSource: 'SSC CGL Tier 2 / Mains'
  },
  {
    id: 4,
    sentence: 'Despite of working continuously for over fourteen hours, the chief architect refused to postpone the inspection.',
    parts: [
      { letter: 'A', text: 'Despite of working', isError: true },
      { letter: 'B', text: 'continuously for over fourteen hours,', isError: false },
      { letter: 'C', text: 'the chief architect refused', isError: false },
      { letter: 'D', text: 'to postpone the inspection.', isError: false },
      { letter: 'E', text: 'No Error', isError: false }
    ],
    correctPart: 'A',
    correctedSentence: 'Despite working continuously for over fourteen hours, the chief architect refused to postpone the inspection.',
    explanation: '"Despite" is a preposition that is NEVER followed by "of". The phrase "in spite of" takes "of", but "despite" takes a direct object or gerund phrase without "of".',
    governingRule: 'Superfluous Preposition: Despite vs In Spite Of',
    difficulty: 'Beginner',
    examSource: 'SSC CHSL 10+2'
  },
  {
    id: 5,
    sentence: 'If the senior committee had warned him earlier, he would avoid taking such a catastrophic financial risk.',
    parts: [
      { letter: 'A', text: 'If the senior committee', isError: false },
      { letter: 'B', text: 'had warned him earlier,', isError: false },
      { letter: 'C', text: 'he would avoid taking', isError: true },
      { letter: 'D', text: 'such a catastrophic financial risk.', isError: false },
      { letter: 'E', text: 'No Error', isError: false }
    ],
    correctPart: 'C',
    correctedSentence: 'If the senior committee had warned him earlier, he would have avoided taking such a catastrophic financial risk.',
    explanation: 'This is a Third Conditional sentence expressing an unreal condition in the past. The "if"-clause has past perfect ("had warned"), so the main result clause must take "would have + past participle" ("would have avoided"), not "would avoid".',
    governingRule: 'Third Conditional Harmony: If + Past Perfect ... would have + V3',
    difficulty: 'Intermediate',
    examSource: 'SBI PO Prelims'
  },
  {
    id: 6,
    sentence: 'The minister with all his private secretaries and security advisors are arriving at the auditorium today.',
    parts: [
      { letter: 'A', text: 'The minister with all', isError: false },
      { letter: 'B', text: 'his private secretaries and security advisors', isError: false },
      { letter: 'C', text: 'are arriving at the', isError: true },
      { letter: 'D', text: 'auditorium today.', isError: false },
      { letter: 'E', text: 'No Error', isError: false }
    ],
    correctPart: 'C',
    correctedSentence: 'The minister with all his private secretaries and security advisors is arriving at the auditorium today.',
    explanation: 'When two nouns are connected by parenthetical prepositions such as "with", "along with", "together with", "as well as", or "in addition to", the verb agrees strictly with the first subject ("The minister", singular). Therefore, replace "are arriving" with "is arriving".',
    governingRule: 'Intervening Prepositional Phrases & True Subject Agreement',
    difficulty: 'Beginner',
    examSource: 'RRB NTPC Graduate Level'
  },
  {
    id: 7,
    sentence: 'The committee members discussed about the legal repercussions for nearly three hours before reaching consensus.',
    parts: [
      { letter: 'A', text: 'The committee members', isError: false },
      { letter: 'B', text: 'discussed about the legal repercussions', isError: true },
      { letter: 'C', text: 'for nearly three hours', isError: false },
      { letter: 'D', text: 'before reaching consensus.', isError: false },
      { letter: 'E', text: 'No Error', isError: false }
    ],
    correctPart: 'B',
    correctedSentence: 'The committee members discussed the legal repercussions for nearly three hours before reaching consensus.',
    explanation: 'The transitive verb "discuss" means "to talk about", so using "about" immediately after "discussed" is a superfluous prepositional error. Write "discussed the legal repercussions". Other verbs with this trap include describe, order, enter, consider.',
    governingRule: 'Superfluous Prepositions with Transitive Verbs',
    difficulty: 'Intermediate',
    examSource: 'SSC CPO Sub-Inspector'
  },
  {
    id: 8,
    sentence: 'He requested the audience to kindly wait patiently until the chief guest will arrive on stage.',
    parts: [
      { letter: 'A', text: 'He requested the audience', isError: false },
      { letter: 'B', text: 'to kindly wait patiently', isError: false },
      { letter: 'C', text: 'until the chief guest', isError: false },
      { letter: 'D', text: 'will arrive on stage.', isError: true },
      { letter: 'E', text: 'No Error', isError: false }
    ],
    correctPart: 'D',
    correctedSentence: 'He requested the audience to kindly wait patiently until the chief guest arrives on stage.',
    explanation: 'Subordinate clauses of time introduced by "until", "unless", "as soon as", "when", or "before" take the Simple Present tense, NEVER future auxiliaries ("will" or "shall"), even when referring to future events. Replace "will arrive" with "arrives".',
    governingRule: 'Prohibition of Future Tense in Subordinate Time Clauses',
    difficulty: 'Intermediate',
    examSource: 'SSC CGL Tier 1'
  },
  {
    id: 9,
    sentence: 'Hardly had he stepped into the train compartment when someone had stolen his leather briefcase from the rack.',
    parts: [
      { letter: 'A', text: 'Hardly had he stepped', isError: false },
      { letter: 'B', text: 'into the train compartment', isError: false },
      { letter: 'C', text: 'when someone had stolen his leather briefcase', isError: true },
      { letter: 'D', text: 'from the rack.', isError: false },
      { letter: 'E', text: 'No Error', isError: false }
    ],
    correctPart: 'C',
    correctedSentence: 'Hardly had he stepped into the train compartment when someone stole his leather briefcase from the rack.',
    explanation: 'In sentences with "Hardly had + Subject + V3 ... when + clause", the subordinate clause introduced by "when" MUST be in the Simple Past tense ("stole"), NOT the Past Perfect ("had stolen"), because the earlier action has already taken the past perfect auxiliary.',
    governingRule: 'Tense Balance with Inverted Negative Adverbs (Hardly... when)',
    difficulty: 'Advanced',
    examSource: 'SSC CGL Tier 2'
  },
  {
    id: 10,
    sentence: 'Each of the graduating students were given a certificate of merit and a silver commemorative coin.',
    parts: [
      { letter: 'A', text: 'Each of the', isError: false },
      { letter: 'B', text: 'graduating students', isError: false },
      { letter: 'C', text: 'were given a certificate', isError: true },
      { letter: 'D', text: 'of merit and a silver commemorative coin.', isError: false },
      { letter: 'E', text: 'No Error', isError: false }
    ],
    correctPart: 'C',
    correctedSentence: 'Each of the graduating students was given a certificate of merit and a silver commemorative coin.',
    explanation: '"Each", "Either", and "Neither" when used as distributive pronouns followed by "of the + plural noun" take a strictly SINGULAR verb. The true subject is "Each", not the plural object of preposition "students". Replace "were given" with "was given".',
    governingRule: 'Distributive Pronouns (Each of / Either of / Neither of)',
    difficulty: 'Beginner',
    examSource: 'IBPS Clerk Mains'
  }
];
