/**
 * ZeroErrorEnglishPro — Core Application Engine
 * Pure Vanilla JavaScript: Architecture, Reactive View Routing & Content Models
 */

// --- 1. DATA REPOSITORY: 14 BOOKS ---
const BOOKS = [
  {
    id: 1,
    vol: "Vol #01",
    slug: "spot-the-error-subject-verb-agreement",
    title: "Spot the Error! The Ultimate Guide to Subject-Verb Agreement for Exam Success",
    topic: "Subject-Verb Agreement",
    benefit: "Master every hidden trap examiners set around subjects, collective nouns, and tricky conjunctions with 200+ exam-calibrated questions.",
    idealFor: "SSC CGL (Tier 1 & 2), Banking PO/Clerk & Railway Aspirants",
    amazonUrl: "PLACEHOLDER-AMAZON-URL",
    difficulty: "Intermediate",
    transformation: "Turn the single highest-yield, trap-ridden error-spotting section in competitive English into your highest-scoring guaranteed accuracy zone.",
    syllabus: [
      "Unit 1: Intervening Phrases & Prepositional Traps",
      "Unit 2: Compound Subjects & Quasi-Conjunctions (as well as, along with)",
      "Unit 3: Indefinite Pronouns & Relative Pronoun Antecedents",
      "Unit 4: Fractions, Percentages & Quantification Expressions",
      "Unit 5: Collective Nouns: Unity vs. Division of Members",
      "Unit 6: Inverted Sentences & Expletive There / It"
    ],
    sampleQuestion: {
      sentence: "The quality of the freshly harvested organic apples exported to several European countries (A) / are exceptionally high (B) / according to the international inspection committee. (C) / No error (D)",
      errorPart: "B",
      correction: "Replace 'are' with 'is'.",
      explanation: "The plural nouns 'apples' and 'countries' immediately precede the verb slot, tempting students into an auditory proximity mistake. The actual subject is the singular abstract noun 'quality'."
    }
  },
  {
    id: 2,
    vol: "Vol #02",
    slug: "the-tense-in-english-grammar",
    title: "The Tense In English Grammar: A Practical Grammar Guide",
    topic: "Tenses & Time Markers",
    benefit: "End the confusion between Present Perfect and Past Simple forever with time-marker formulas and examiner elimination techniques.",
    idealFor: "SSC CGL, IBPS, RRB NTPC & State PSCs",
    amazonUrl: "PLACEHOLDER-AMAZON-URL",
    difficulty: "Beginner to Intermediate",
    transformation: "Stop guessing between Present Perfect and Past Simple and master the time-marker formulas that guarantee zero negative marks in tense questions.",
    syllabus: [
      "Unit 1: Present Simple vs. Continuous (Stative vs. Dynamic Verbs)",
      "Unit 2: Present Perfect vs. Past Simple (The Ultimate Examination Battlefield)",
      "Unit 3: Past Perfect vs. Past Simple (The Two-Event Sequence)",
      "Unit 4: Future Time References & Conditional Time Clauses",
      "Unit 5: Subjunctive Mood & Wish Clauses (It is high time...)",
      "Unit 6: 300 Solved Exam MCQs with Step-by-Step Reasonings"
    ],
    sampleQuestion: {
      sentence: "The chief engineer has submitted the final project feasibility report (A) / to the municipal commissioner (B) / two weeks ago. (C) / No error (D)",
      errorPart: "A",
      correction: "Replace 'has submitted' with 'submitted'.",
      explanation: "The adverbial time phrase 'two weeks ago' specifies a closed, finished historical moment. Present Perfect cannot be paired with past-specific time markers in competitive exam English."
    }
  },
  {
    id: 3,
    vol: "Vol #03",
    slug: "mastering-direct-and-indirect-speech",
    title: "Mastering Direct & Indirect Speech: Ultimate Guide to Confident Reporting",
    topic: "Direct & Indirect Speech",
    benefit: "Step-by-step conversion algorithms for reporting verbs, backshifting tenses, interrogatives, and tricky imperative sentences.",
    idealFor: "SSC CGL Tier 2, Tier 1 & State PSCs",
    amazonUrl: "PLACEHOLDER-AMAZON-URL",
    difficulty: "Intermediate to Advanced",
    transformation: "Master the step-by-step reporting algorithms that convert up to 27 high-stakes marks in SSC CGL Tier 2 into guaranteed zero-error points.",
    syllabus: [
      "Unit 1: Foundations of Reporting Verbs (said to -> told, inquired)",
      "Unit 2: Pronoun Shifts via the 123/SON Formula",
      "Unit 3: Assertive Sentences & Conjunction 'that'",
      "Unit 4: Interrogative Sentences (Direct Questions into Statements)",
      "Unit 5: Imperatives, Exclamatory & Optative Transformations",
      "Unit 6: 250+ Solved SSC Tier-2 Questions with Elimination Shortcuts"
    ],
    sampleQuestion: {
      sentence: "The teacher said to the students, 'The earth revolves around the sun.'",
      errorPart: "N/A (Conversion)",
      correction: "The teacher told the students that the earth revolves around the sun.",
      explanation: "Students frequently backshift 'revolves' into 'revolved'. Because this is a permanent cosmic and scientific fact, the present tense is strictly preserved."
    }
  },
  {
    id: 4,
    vol: "Vol #04",
    slug: "the-ultimate-guide-to-active-and-passive-voice",
    title: "The Ultimate Guide to Active & Passive Voice for Competitive Exams",
    topic: "Active & Passive Voice",
    benefit: "Formula-driven voice changes for complex sentences, quasi-passive verbs, and prepositional phrasal verbs without subject loss.",
    idealFor: "SSC CGL/CHSL & Banking Mains",
    amazonUrl: "PLACEHOLDER-AMAZON-URL",
    difficulty: "Intermediate to Advanced",
    transformation: "Transform 20+ voice conversion questions in SSC CGL Tier 2 from time-draining hurdles into rapid 5-second automatic scores.",
    syllabus: [
      "Unit 1: The Universal Formula (Voice changes DO NOT change tense)",
      "Unit 2: Continuous & Perfect Passive Structures",
      "Unit 3: Quasi-Passive Verbs (Sensory verbs like taste, smell)",
      "Unit 4: Prepositional Verbs & Phrasal Retention (laughed at)",
      "Unit 5: Imperative Voice Patterns (Let + Object + be + V3)",
      "Unit 6: Infinitive Passives (to + V1 -> to be + V3)"
    ],
    sampleQuestion: {
      sentence: "Active: Quinine tastes bitter. -> Passive Conversion?",
      errorPart: "N/A (Conversion)",
      correction: "Passive: Quinine is bitter when it is tasted.",
      explanation: "Sensory verbs take the quasi-passive blueprint: Subject + be + adjective + when it is/was + V3."
    }
  },
  {
    id: 5,
    vol: "Vol #05",
    slug: "spot-the-error-prepositions",
    title: "Spot the Error! The Ultimate Guide to Prepositions for Exam Success",
    topic: "Prepositions & Fixed Phrasals",
    benefit: "Crack the highest-failure rate questions with 400+ fixed preposition collocations, confusing pairs, and phrasal verb rules.",
    idealFor: "Banking PO/Clerk, SSC CGL & UPSC CDS",
    amazonUrl: "PLACEHOLDER-AMAZON-URL",
    difficulty: "Advanced",
    transformation: "Eliminate guesswork across 400+ fixed preposition collocations that trap unprepared aspirants in fill-in-the-blank and cloze tests.",
    syllabus: [
      "Unit 1: Confusing Pairs (Between vs. Among, Beside vs. Besides)",
      "Unit 2: Fixed Prepositions Following Verbs (prohibit from, abstain from)",
      "Unit 3: Fixed Prepositions Following Adjectives (senior to, eligible for)",
      "Unit 4: Superfluous Preposition Traps (order, describe, discuss)",
      "Unit 5: High-Frequency Phrasal Verbs (call off, look into, bring up)",
      "Unit 6: Cloze Test Integration Drills"
    ],
    sampleQuestion: {
      sentence: "The committee discussed about the economic impact (A) / of new tariff regulations (B) / at great length. (C) / No error (D)",
      errorPart: "A",
      correction: "Omit 'about' after 'discussed'.",
      explanation: "Verbs like 'discuss', 'describe', 'order', and 'reach' are transitive and take direct objects without intervening prepositions."
    }
  },
  {
    id: 6,
    vol: "Vol #06",
    slug: "spot-the-error-articles",
    title: "Spot the Error! The Ultimate Guide to Articles for Exam Success",
    topic: "Articles & Determiners",
    benefit: "Master the 28 omission rules of 'The', abstract nouns, geographical names, and euphonic vowel sound exceptions (a European, an MBA).",
    idealFor: "All Competitive Exams (SSC, Banking, NDA, State PSCs)",
    amazonUrl: "PLACEHOLDER-AMAZON-URL",
    difficulty: "Beginner to Intermediate",
    transformation: "Never drop an unforced mark on article omissions, sound-based determiners, and superlative adjectives again.",
    syllabus: [
      "Unit 1: Phonetic Sound Principles (an honest officer, a university)",
      "Unit 2: Definite Article 'The' with Geographical Entities",
      "Unit 3: The 28 Zero Article (Omission) Rules",
      "Unit 4: Parallel Structures with 'The... The...' Comparatives",
      "Unit 5: Abstract & Material Nouns under General vs. Specific Use",
      "Unit 6: 200 Exam Drill Questions with Trap Explanations"
    ],
    sampleQuestion: {
      sentence: "He was appointed as an ambassador (A) / because he holds a degree (B) / from an European university. (C) / No error (D)",
      errorPart: "C",
      correction: "Change 'an European' to 'a European'.",
      explanation: "'European' begins with the consonant glide /j/ sound (yu-ro-pe-an), requiring 'a' rather than 'an'."
    }
  },
  {
    id: 7,
    vol: "Vol #07",
    slug: "spot-the-error-conjunctions",
    title: "Spot the Error! The Ultimate Guide to Conjunctions for Exam Success",
    topic: "Conjunctions & Connectors",
    benefit: "Unravel correlative conjunction pairs, inverted negative beginnings (Scarcely... when, No sooner... than), and redundant connectors.",
    idealFor: "SSC CGL Tier 1 & 2, IBPS PO & SBI Clerk",
    amazonUrl: "PLACEHOLDER-AMAZON-URL",
    difficulty: "Intermediate to Advanced",
    transformation: "Lock down all 18 correlative connector pairings and inverted clause rules to conquer sentence improvement questions.",
    syllabus: [
      "Unit 1: Correlative Pairs (Hardly... when, No sooner... than)",
      "Unit 2: Subordinating Conjunctions of Time and Condition",
      "Unit 3: Lest + Should / Bare Subjunctive Rules",
      "Unit 4: Redundancy Traps (Although... yet, Unless... not)",
      "Unit 5: Inversion After Negative Conjunctions",
      "Unit 6: 250 Solved Exam Traps"
    ],
    sampleQuestion: {
      sentence: "No sooner had the bell rung (A) / then the eager students rushed out (B) / of the examination hall. (C) / No error (D)",
      errorPart: "B",
      correction: "Replace 'then' with 'than'.",
      explanation: "'No sooner' is a comparative connector that strictly pairs with 'than', never 'then' or 'when'."
    }
  },
  {
    id: 8,
    vol: "Vol #08",
    slug: "spot-the-error-conditionals-and-inversion",
    title: "Spot the Error! The Ultimate Guide to Conditionals & Inversion for Exam Success",
    topic: "Conditionals & Inversion",
    benefit: "Zero, First, Second & Third conditionals mastered alongside negative adverbial inversions (Seldom, Barely, Not only).",
    idealFor: "SSC CGL Tier 2, Bank PO & CDS Aspirants",
    amazonUrl: "PLACEHOLDER-AMAZON-URL",
    difficulty: "Advanced",
    transformation: "Turn the two most sophisticated syntactic concepts into systematic, mechanical points under examination speed.",
    syllabus: [
      "Unit 1: Zero & First Conditional Formulas",
      "Unit 2: Second Conditional (Hypothetical Present/Future)",
      "Unit 3: Third Conditional (Unfulfilled Past Regret)",
      "Unit 4: Mixed Conditionals & Inverted Conditionals (Had I known...)",
      "Unit 5: Complete & Partial Negative Inversion",
      "Unit 6: 200 Advanced Exam Drills"
    ],
    sampleQuestion: {
      sentence: "If the meteorological department had warned the coastal villages, (A) / thousands of families (B) / would be saved from the storm. (C) / No error (D)",
      errorPart: "C",
      correction: "Change 'would be saved' to 'would have been saved'.",
      explanation: "Third conditional formula mandates: If + past perfect (had warned) -> would have + past participle (would have been saved)."
    }
  },
  {
    id: 9,
    vol: "Vol #09",
    slug: "spot-the-error-modifiers-adjectives-adverbs",
    title: "Spot the Error! The Ultimate Guide to Modifiers, Adjectives & Adverbs",
    topic: "Modifiers & Comparison",
    benefit: "Fix dangling participles, misplaced modifiers, degrees of comparison traps, and adjective vs adverb confusion.",
    idealFor: "Banking PO & SSC CGL Aspirants",
    amazonUrl: "PLACEHOLDER-AMAZON-URL",
    difficulty: "Intermediate",
    transformation: "Detect subtle dangling participles and modifier misplacements that standard reading speed overlooks.",
    syllabus: [
      "Unit 1: Dangling & Misplaced Participial Clauses",
      "Unit 2: Adjective Order & Predicative vs. Attributive Use",
      "Unit 3: Degree of Comparison Traps (Senior, Junior, Preferable)",
      "Unit 4: Flat Adverbs & Adverbs of Frequency Placement",
      "Unit 5: Hyphenated Compound Adjectives (a ten-rupee note)",
      "Unit 6: 220 Exam Practice Drills"
    ],
    sampleQuestion: {
      sentence: "Walking along the quiet river bank, (A) / a sudden flash of lightning (B) / struck the ancient banyan tree. (C) / No error (D)",
      errorPart: "A",
      correction: "Dangling participle error. Rewrite as: 'While I was walking along the quiet river bank...'",
      explanation: "The opening participial phrase 'Walking along...' lacks a grammatical subject, erroneously implying the flash of lightning was walking."
    }
  },
  {
    id: 10,
    vol: "Vol #10",
    slug: "spot-the-error-pronouns",
    title: "Spot the Error! The Ultimate Guide to Pronouns for Exam Success",
    topic: "Pronouns & Case Traps",
    benefit: "Master relative pronouns (who vs whom, that vs which), pronoun order (231/123 rule), reflexives, and case alignments.",
    idealFor: "All Competitive Exams",
    amazonUrl: "PLACEHOLDER-AMAZON-URL",
    difficulty: "Intermediate",
    transformation: "Solve subjective vs objective case conflicts and antecedent ambiguity with 100% diagnostic confidence.",
    syllabus: [
      "Unit 1: Personal Pronouns & The 231 / 123 Etiquette Order",
      "Unit 2: Subjective vs. Objective Case (Between you and me)",
      "Unit 3: Relative Pronoun Pivots (Who, Whom, Which, That)",
      "Unit 4: Distributive & Indefinite Pronoun Agreement",
      "Unit 5: Reflexive Pronouns & Verbs that Reject Reflexives",
      "Unit 6: 200 Solved Exam MCQs"
    ],
    sampleQuestion: {
      sentence: "Between you and I, (A) / the board of directors has decided (B) / to terminate the merger discussions. (C) / No error (D)",
      errorPart: "A",
      correction: "Replace 'I' with 'me'.",
      explanation: "'Between' is a preposition; objects of prepositions must always take the objective case ('Between you and me')."
    }
  },
  {
    id: 11,
    vol: "Vol #11",
    slug: "spot-the-error-question-tags-negation",
    title: "Spot the Error! The Ultimate Guide to Question Tags & Negation for Exam Success",
    topic: "Question Tags & Negation",
    benefit: "Form flawless tags for imperative sentences, semi-negative adverbs (hardly, seldom), indefinite pronouns, and complex auxiliaries.",
    idealFor: "SSC CGL, CHSL, MTS & Defence Exams",
    amazonUrl: "PLACEHOLDER-AMAZON-URL",
    difficulty: "Beginner to Intermediate",
    transformation: "Secure 100% accuracy in question tag queries with rule-based auxiliary and polarity extraction formulas.",
    syllabus: [
      "Unit 1: Polarity Rules (Positive statement -> Negative tag)",
      "Unit 2: Semi-Negative Words (Seldom, Barely, Few, Little)",
      "Unit 3: Indefinite Pronoun Pronoun Shifts (Everybody -> they)",
      "Unit 4: Imperative Sentence Tags (Let's -> shall we)",
      "Unit 5: Double Negation Elimination Rules",
      "Unit 6: 180 Exam Drill Questions"
    ],
    sampleQuestion: {
      sentence: "He seldom visits his native village nowadays, (A) / doesn't he? (B) / No error (C)",
      errorPart: "B",
      correction: "Replace 'doesn't he?' with 'does he?'.",
      explanation: "'Seldom' is a semi-negative adverb that makes the statement negative; negative statements require positive question tags."
    }
  },
  {
    id: 12,
    vol: "Vol #12",
    slug: "spot-the-error-parallelism-comparisons",
    title: "Spot the Error! The Ultimate Guide to Parallelism & Comparisons for Exam Success",
    topic: "Parallelism & Comparison",
    benefit: "Identify faulty balance across paired conjunctions, comparison of unlikes (illogical comparisons), and series symmetry.",
    idealFor: "Banking PO & SSC CGL Tier 2",
    amazonUrl: "PLACEHOLDER-AMAZON-URL",
    difficulty: "Advanced",
    transformation: "Spot and rectify flawed structural parallels and illogical comparisons that escape conversational ears.",
    syllabus: [
      "Unit 1: Parallelism in Series (Gerunds with Gerunds, Infinitives with Infinitives)",
      "Unit 2: Parallelism with Correlative Conjunctions",
      "Unit 3: Illogical Comparisons (that of / those of)",
      "Unit 4: Double Comparatives & Superlatives",
      "Unit 5: 'Any other' in Comparative Sentences",
      "Unit 6: 200 Solved Exam Traps"
    ],
    sampleQuestion: {
      sentence: "The climate of Bengaluru is much more pleasant (A) / than Delhi (B) / during the summer season. (C) / No error (D)",
      errorPart: "B",
      correction: "Change 'than Delhi' to 'than that of Delhi'.",
      explanation: "Illogical comparison. The sentence compares the 'climate of Bengaluru' to the city of Delhi instead of Delhi's climate."
    }
  },
  {
    id: 13,
    vol: "Vol #13",
    slug: "spot-the-error-phrasal-verbs-idiomatic-errors",
    title: "Spot the Error! The Ultimate Guide to Phrasal Verbs & Idiomatic Errors",
    topic: "Phrasal Verbs & Idioms",
    benefit: "Decode examiner traps with particle substitutions, literal vs figurative meaning shifts, and high-yield competitive idioms.",
    idealFor: "Banking PO/Clerk & SSC CGL Tier 2",
    amazonUrl: "PLACEHOLDER-AMAZON-URL",
    difficulty: "Advanced",
    transformation: "Master the 350 most frequently tested phrasal verbs and stop losing marks in cloze tests and phrase replacements.",
    syllabus: [
      "Unit 1: High-Yield Verbs: Look, Bring, Call, Put, Turn, Break",
      "Unit 2: Particle Shift Traps (Call for vs. Call off vs. Call on)",
      "Unit 3: Invariable Idiomatic Expressions",
      "Unit 4: Redundant Prepositions in Idiomatic Phrasing",
      "Unit 5: Cloze Test Application Workouts",
      "Unit 6: 250 Exam Question Walkthroughs"
    ],
    sampleQuestion: {
      sentence: "Due to heavy torrential rainfall, (A) / the administration was forced to (B) / call out the annual marathon. (C) / No error (D)",
      errorPart: "C",
      correction: "Replace 'call out' with 'call off'.",
      explanation: "'Call off' means to cancel an event; 'call out' means to summon someone for emergency assistance."
    }
  },
  {
    id: 14,
    vol: "Vol #14",
    slug: "spot-the-error-1000-master-questions",
    title: "Spot the Error! 1000 Master Error-Spotting Questions for SSC & Banking Exams",
    topic: "Comprehensive Exam Drills",
    benefit: "The ultimate examination simulator: 1000 mixed, authentic Tier-2 level questions covering all 13 core topics with line-by-line reasons.",
    idealFor: "Final Phase Aspirants (SSC CGL Tier 2, Bank PO)",
    amazonUrl: "PLACEHOLDER-AMAZON-URL",
    difficulty: "Comprehensive (All Levels)",
    transformation: "Build rapid 12-second pattern recognition and complete the error-spotting section with guaranteed speed and zero negative marks.",
    syllabus: [
      "Unit 1: Diagnostic Speed Calibration Sets 1-10",
      "Unit 2: SSC CGL Tier-2 Simulation Drills (500 Questions)",
      "Unit 3: IBPS PO & SBI PO Mains Advanced Traps (300 Questions)",
      "Unit 4: High-Yield Mixed Category Drills (200 Questions)",
      "Unit 5: 12-Second Elimination Shortcut Index",
      "Unit 6: Complete Answer Key with Line-by-Line Pedagogy"
    ],
    sampleQuestion: {
      sentence: "Not only the defense attorneys but also the lead prosecutor (A) / were surprised by the witness's sudden revelation (B) / during cross-examination. (C) / No error (D)",
      errorPart: "B",
      correction: "Replace 'were surprised' with 'was surprised'.",
      explanation: "In 'not only... but also', proximity dictates agreement. The adjacent subject is singular ('the lead prosecutor')."
    }
  }
];

// --- 2. DATA REPOSITORY: ARTICLES ---
const ARTICLES = [
  {
    slug: "subject-verb-agreement-exam-rules",
    title: "Subject-Verb Agreement: The 7 Traps SSC & Banking Examiners Bank On",
    category: "Subject-Verb Agreement",
    readingTime: "9 min read",
    difficulty: "Intermediate",
    bookId: 1,
    description: "Discover how examiners disguise plural intervening phrases, invert clauses, and manipulate proximity to cost you 2.5 marks.",
    formula: "Subject 1 + [as well as / along with + Noun 2] + Verb (agrees strictly with Subject 1)",
    body: `
      <h3>The Reality of Competitive Grammar</h3>
      <p>Every aspirant knows that a singular subject takes a singular verb. Yet year after year, in exams like SSC CGL and IBPS PO, Subject-Verb Agreement questions account for over 25% of all negative marks in the English section. Why? Because examiners never test simple sentences—they construct sentences with long prepositional intervening clauses and misleading pivots.</p>
      
      <h3>Trap 1: The Intervening Prepositional Blindfold</h3>
      <p>Words introduced by <em>with, along with, as well as, accompanied by, in addition to</em> are parenthetical prepositions, not coordinating conjunctions. They do not turn a singular subject into a plural compound.</p>
      <div class="explanation-panel">
        <strong>Incorrect:</strong> The captain, along with all the squad members, were awarded medals.<br>
        <strong>Correct:</strong> The captain, along with all the squad members, <strong>was</strong> awarded medals.
      </div>

      <h3>Trap 2: Indefinite Pronoun Singularity</h3>
      <p>The words <em>each, every, neither, either, one of</em> are grammatically singular distributives. Even when followed by an 'of + plural noun' phrase, the verb remains singular.</p>
      <div class="explanation-panel">
        <strong>Formula:</strong> Each of / One of + Plural Noun + Singular Verb<br>
        <strong>Example:</strong> Each of the ten shortlisted finalists <strong>has</strong> demonstrated exceptional proficiency.
      </div>
    `
  },
  {
    slug: "present-perfect-vs-past-simple-exam-traps",
    title: "Present Perfect vs. Past Simple: The Time-Marker Trap That Costs You 2.5 Marks",
    category: "Tenses",
    readingTime: "8 min read",
    difficulty: "Intermediate",
    bookId: 2,
    description: "Stop translating directly from your native language. Learn why words like 'yesterday', 'ago', and 'in 2020' strictly forbid the Present Perfect tense.",
    formula: "Definite Past Time Marker (yesterday, ago, in 2021) -> Past Simple strictly (V2)",
    body: `
      <h3>The Dead Clock vs. The Live Bridge</h3>
      <p>Think of English tenses not just as chronological markers, but as mental perspectives. Past Simple (V2) represents a finished, closed historical moment where the clock is dead. Present Perfect (has/have + V3) is a live bridge connecting an event's significance directly to the present moment.</p>
      
      <h3>The Iron Rule of Definite Past Time</h3>
      <p>Whenever an adverbial phrase pinpoints a finished past time (<em>yesterday, last month, two days ago, in 1947</em>), the Present Perfect is strictly forbidden in formal examination English.</p>
      <div class="explanation-panel">
        <strong>Incorrect:</strong> The honorable governor has approved the bill yesterday evening.<br>
        <strong>Correct:</strong> The honorable governor <strong>approved</strong> the bill yesterday evening.
      </div>
    `
  },
  {
    slug: "direct-indirect-speech-backshifting-secrets",
    title: "Direct & Indirect Speech: 5 Backshifting Traps in SSC CGL Tier 2",
    category: "Narration",
    readingTime: "10 min read",
    difficulty: "Advanced",
    bookId: 3,
    description: "Universal truths, interrogative word orders, and reporting verbs explained with 8-second multiple-choice elimination techniques.",
    formula: "Universal Truth / Scientific Fact -> ZERO backshift regardless of past reporting verb",
    body: `
      <h3>The Universal Truth Exception</h3>
      <p>When reporting permanent scientific principles, cosmic truths, or established geographical realities, the tense in indirect speech does not backshift, even if the reporting verb is in the past tense.</p>
      <div class="explanation-panel">
        <strong>Direct:</strong> The professor said, "Water freezes at zero degrees Celsius."<br>
        <strong>Indirect:</strong> The professor said that water <strong>freezes</strong> at zero degrees Celsius.
      </div>
    `
  },
  {
    slug: "active-passive-quasi-verbs",
    title: "Active & Passive Voice: How to Handle Quasi-Passive & Sensory Verbs",
    category: "Voice",
    readingTime: "7 min read",
    difficulty: "Intermediate",
    bookId: 4,
    description: "Never lose marks on verbs like 'taste', 'smell', and 'feel'. Master the exact mathematical formula for quasi-passive conversions.",
    formula: "Subject + be + adjective + when it is/was + V3",
    body: `
      <h3>Understanding Middle and Quasi-Passive Verbs</h3>
      <p>Certain active verbs have passive meanings without having an obvious direct object. For instance: <em>'The rose smells sweet'</em> or <em>'Quinine tastes bitter'</em>.</p>
      <div class="explanation-panel">
        <strong>Exam Blueprint:</strong><br>
        Quinine tastes bitter -> Quinine <strong>is bitter when it is tasted</strong>.
      </div>
    `
  },
  {
    slug: "fixed-prepositions-after-verbs-mastery",
    title: "Fixed Prepositions: 25 High-Frequency Verbs That Reject Intuition",
    category: "Prepositions",
    readingTime: "9 min read",
    difficulty: "Advanced",
    bookId: 5,
    description: "Learn why verbs like 'prohibit', 'abstain', and 'comply' demand specific particles, plus 10 superfluous preposition traps.",
    formula: "Prohibit / Abstain / Refrain -> strictly takes 'FROM' + Gerund",
    body: `
      <h3>The Superfluous Preposition Trap</h3>
      <p>Many transitive verbs take direct objects and become ungrammatical when candidates insert conversational prepositions like 'about', 'for', or 'into'.</p>
      <div class="explanation-panel">
        <strong>Incorrect:</strong> The committee discussed about the economic plan.<br>
        <strong>Correct:</strong> The committee <strong>discussed the economic plan</strong>.
      </div>
    `
  },
  {
    slug: "conditionals-third-vs-mixed-exam-rules",
    title: "Third Conditionals vs Mixed Conditionals: Eliminating Guesswork",
    category: "Conditionals",
    readingTime: "8 min read",
    difficulty: "Advanced",
    bookId: 8,
    description: "Understand unfulfilled past regrets vs. ongoing present consequences with foolproof clause balance formulas.",
    formula: "If + had + V3 (Past Regret) -> would have + V3 (Past Outcome)",
    body: `
      <h3>The Classic Third Conditional Formula</h3>
      <p>When discussing hypothetical situations in the past that did not occur, both the condition clause and the result clause must remain in the past modal domain.</p>
      <div class="explanation-panel">
        <strong>Structure:</strong> If + had + V3, Subject + would have + V3.<br>
        <strong>Example:</strong> If he had prepared thoroughly, he <strong>would have cleared</strong> the exam.
      </div>
    `
  },
    {
    slug: "noun-clause-vs-adjective-clause-vs-adverb-clause-easy-guide",
    title: "Noun Clause vs Adjective Clause vs Adverb Clause: The Easy Identification Guide",
    category: "Clauses",
    readingTime: "9 min read",
    difficulty: "Intermediate",
    bookId: 9,
    description: "Stop losing marks on clause identification. Learn the exact Question Test that separates Noun, Adjective and Adverb clauses in seconds — built for SSC CGL and Bank exams.",
    formula: "Noun Clause -> answers What/Who (subject or object) | Adjective Clause -> answers Which one/What kind (describes a noun) | Adverb Clause -> answers When/Where/Why/How/Condition",
    body: `
      <h3>The Core Rule: Three Jobs, Three Clauses</h3>
      <p>The same connector word — that, which, who, when — can introduce any of the three clause types. The connector alone never tells you the answer; you must check what job the clause is doing in the sentence.</p>

      <h3>Trap 1: Assuming Every "Who" Clause Is Adjective</h3>
      <p>A "who" clause can be the subject of the whole sentence, which makes it a Noun clause, not an Adjective clause.</p>
      <div class="explanation-panel">
        <strong>Incorrect analysis:</strong> "Who broke the vase" → Adjective clause.<br>
        <strong>Correct:</strong> "Who broke the vase is still unknown" → <strong>Noun clause</strong> (it is the subject of "is").
      </div>

      <h3>Trap 2: Missing the Noun Clause as an Object</h3>
      <p>Aspirants often check only whether a clause is the subject. But a noun clause can just as easily be the object of a verb.</p>
      <div class="explanation-panel">
        <strong>Example:</strong> I believe <strong>that he is honest</strong>. → Noun clause, object of "believe".
      </div>

      <h3>Trap 3: Adverb Clauses That Move to the Front</h3>
      <p>An adverb clause keeps its function even when it moves to the start of the sentence — students trained on only one word order get confused.</p>
      <div class="explanation-panel">
        <strong>Same clause, two positions:</strong><br>
        The match was postponed <strong>because it rained</strong>.<br>
        <strong>Because it rained</strong>, the match was postponed.
      </div>
    `
  },
  {
    slug: "phrase-vs-clause-difference-exam-guide",
    title: "Phrase vs Clause: What's the Difference and Why It Matters in Exams",
    category: "Clauses",
    readingTime: "7 min read",
    difficulty: "Beginner",
    bookId: 7,
    description: "Phrases and clauses look similar but examiners test them very differently. Learn the one-second Subject+Verb Test that tells them apart every time.",
    formula: "Phrase -> No subject + finite verb pair | Clause -> Has a subject + finite verb (main or subordinate)",
    body: `
      <h3>The Core Rule: One Missing Ingredient</h3>
      <p>The entire difference comes down to one thing: a subject paired with a finite (tensed) verb. A clause has one; a phrase never does.</p>

      <h3>Trap 1: Participle Phrases Mistaken for Clauses</h3>
      <p>"-ing" and "-ed" forms used without "is/was/has" never carry tense on their own, so a group built only around one of these is always a phrase, not a clause.</p>
      <div class="explanation-panel">
        <strong>Incorrect analysis:</strong> "Walking on the beach" → treated as a clause.<br>
        <strong>Correct:</strong> "Walking on the beach, she felt calm" → <strong>Participle phrase</strong> (no subject + finite verb of its own).
      </div>

      <h3>Trap 2: "Because" vs "Because Of"</h3>
      <p>One takes a full clause, the other takes only a noun phrase — mixing them is a common Sentence Improvement trap.</p>
      <div class="explanation-panel">
        <strong>Incorrect:</strong> He was late because of he missed the bus.<br>
        <strong>Correct:</strong> He was late <strong>because</strong> he missed the bus (clause). / He was late <strong>because of</strong> the traffic (phrase).
      </div>

      <h3>Trap 3: The Dangling Participle Phrase</h3>
      <p>Since a phrase has no subject of its own, it must logically connect to the real subject of the main clause.</p>
      <div class="explanation-panel">
        <strong>Incorrect:</strong> Having completed the project, the manager praised him.<br>
        <strong>Correct:</strong> Having completed the project, <strong>he was praised by the manager</strong>.
      </div>
    `
  }

];

// --- 3. DATA REPOSITORY: 10 PRACTICE DRILLS ---
const PRACTICE_DRILLS = [
  {
    id: 1,
    topic: "Subject-Verb Agreement",
    bookId: 1,
    sentence: "The delegation of senior foreign diplomats and trade ambassadors (A) / have arrived in the capital (B) / for bilateral economic talks. (C) / No error (D)",
    correctOption: "B",
    correction: "Replace 'have arrived' with 'has arrived'.",
    explanation: "The true subject of the clause is the singular noun 'delegation'. The long phrase 'of senior foreign diplomats and trade ambassadors' is merely a prepositional modifier.",
    rule: "Prepositional Blindfold Rule: verbs agree with the head noun before the preposition."
  },
  {
    id: 2,
    topic: "Tenses",
    bookId: 2,
    sentence: "The state vigilance department has unraveled (A) / the multi-crore infrastructure scam (B) / three months ago. (C) / No error (D)",
    correctOption: "A",
    correction: "Replace 'has unraveled' with 'unraveled'.",
    explanation: "'Three months ago' specifies a closed, finished moment in past time. Definite past time markers cannot be used with the Present Perfect.",
    rule: "Closed-Door Past Rule: Words like 'ago', 'yesterday', 'in 2019' mandate simple past (V2)."
  },
  {
    id: 3,
    topic: "Prepositions",
    bookId: 5,
    sentence: "The investigative journalist was prohibited to publish (A) / the confidential audit papers (B) / by the interim judicial injunction. (C) / No error (D)",
    correctOption: "A",
    correction: "Replace 'prohibited to publish' with 'prohibited from publishing'.",
    explanation: "Verbs expressing restraint (prohibit, abstain, refrain, debar, prevent) strictly take the preposition 'from' followed by a gerund (V1 + ing).",
    rule: "Restraint Verb Collocation: Prohibit + from + Gerund."
  },
  {
    id: 4,
    topic: "Direct & Indirect Speech",
    bookId: 3,
    sentence: "The astronomy professor explained to the freshmen (A) / that the earth revolved around the sun (B) / in an elliptical orbit. (C) / No error (D)",
    correctOption: "B",
    correction: "Replace 'revolved' with 'revolves'.",
    explanation: "Universal truths, cosmic laws, and permanent scientific facts do not undergo tense backshifting in indirect speech.",
    rule: "Universal Truth Preservation in Indirect Reporting."
  },
  {
    id: 5,
    topic: "Active & Passive Voice",
    bookId: 4,
    sentence: "The rescue boat was caught in turbulent rapids (A) / but the emergency crew (B) / was disappeared without trace. (C) / No error (D)",
    correctOption: "C",
    correction: "Change 'was disappeared' to 'disappeared'.",
    explanation: "'Disappear' is an intransitive verb. Intransitive verbs do not take direct objects and cannot be transformed into the passive voice.",
    rule: "Intransitive Verbs Cannot Form Passives."
  },
  {
    id: 6,
    topic: "Conditionals",
    bookId: 8,
    sentence: "If the municipal corporation took prompt action last winter, (A) / the epidemic outbreak (B) / could have been prevented. (C) / No error (D)",
    correctOption: "A",
    correction: "Change 'took' to 'had taken'.",
    explanation: "The result clause uses third conditional syntax ('could have been prevented'). Therefore, the conditional clause must take Past Perfect ('had taken').",
    rule: "Third Conditional Harmony: If + had + V3 -> would/could have + V3."
  },
  {
    id: 7,
    topic: "Articles",
    bookId: 6,
    sentence: "He is an unique candidate (A) / who possesses both administrative acumen (B) / and technical proficiency. (C) / No error (D)",
    correctOption: "A",
    correction: "Change 'an unique' to 'a unique'.",
    explanation: "The choice between 'a' and 'an' is determined by the phonetic opening sound, not the vowel letter. 'Unique' begins with the consonant sound /juː/.",
    rule: "Phonetic Sound Principle for Indefinite Articles."
  },
  {
    id: 8,
    topic: "Conjunctions",
    bookId: 7,
    sentence: "Hardly had the chairman entered the conference room (A) / then all the delegates stood up (B) / to applaud the annual performance. (C) / No error (D)",
    correctOption: "B",
    correction: "Replace 'then' with 'when'.",
    explanation: "'Hardly' and 'Scarcely' pair correlatively with 'when' or 'before', never with 'then' or 'than'.",
    rule: "Correlative Pair: Hardly / Scarcely ... when."
  },
  {
    id: 9,
    topic: "Modifiers & Comparison",
    bookId: 9,
    sentence: "The infrastructure in Shanghai is far more developed (A) / than any city (B) / in South Asia. (C) / No error (D)",
    correctOption: "B",
    correction: "Change 'than any city' to 'than that of any city'.",
    explanation: "Illogical comparison. The infrastructure of Shanghai is being compared to South Asian cities themselves rather than their infrastructure.",
    rule: "Parallel Illogical Comparison: Use 'that of' for singular non-count nouns."
  },
  {
    id: 10,
    topic: "Pronouns",
    bookId: 10,
    sentence: "Between you and I, (A) / the CEO has already decided (B) / to relocate corporate headquarters to Pune. (C) / No error (D)",
    correctOption: "A",
    correction: "Replace 'I' with 'me'.",
    explanation: "Prepositions ('between') require objective case pronouns ('between you and me').",
    rule: "Prepositional Objective Case Rule."
  }
];

// --- 4. DATA REPOSITORY: TIMED SVA QUIZ ---
const QUIZ_QUESTIONS = [
  {
    q: "Neither the manager nor his assistant executives _____ able to justify the financial discrepancy.",
    options: ["was", "were", "is", "has been"],
    answer: 1,
    explanation: "In 'neither... nor', the verb agrees with the closer subject ('his assistant executives' = plural)."
  },
  {
    q: "The number of candidates appearing for the competitive examination _____ exponentially over the last five years.",
    options: ["have increased", "has increased", "are increasing", "were increased"],
    answer: 1,
    explanation: "'The number of' takes a singular verb; whereas 'A number of' takes a plural verb."
  },
  {
    q: "Rohan, accompanied by his three cousins and two pets, _____ arriving on the midnight express train.",
    options: ["are", "is", "were", "have been"],
    answer: 1,
    explanation: "'Accompanied by' is a prepositional phrase. The subject is 'Rohan' (singular)."
  },
  {
    q: "Every man, woman, and child in the remote mountain valley _____ vaccinated against the seasonal virus.",
    options: ["was", "were", "have been", "are"],
    answer: 0,
    explanation: "Nouns connected by 'and' preceded by 'every' or 'each' take a singular verb."
  },
  {
    q: "More than one candidate _____ submitted duplicate admission credentials.",
    options: ["have", "has", "are", "were"],
    answer: 1,
    explanation: "'More than one + singular noun' strictly takes a singular verb."
  },
  {
    q: "The jury _____ unanimous in delivering their verdict on the corporate espionage trial.",
    options: ["were", "was", "are", "have been"],
    answer: 1,
    explanation: "When a collective noun acts in complete unity, it takes a singular verb ('was')."
  },
  {
    q: "The jury _____ divided in their opinions regarding the validity of the circumstantial evidence.",
    options: ["was", "were", "is", "has been"],
    answer: 1,
    explanation: "When members of a collective noun act in discord or division, it takes a plural verb ('were')."
  },
  {
    q: "Ten miles across the desert dunes _____ an exhausting trek for unaccustomed travelers.",
    options: ["are", "is", "were", "seem"],
    answer: 1,
    explanation: "Quantities of distance, time, and money viewed as a single whole take a singular verb."
  },
  {
    q: "He is one of those rare visionary leaders who _____ never compromised on ethical integrity.",
    options: ["has", "have", "is", "was"],
    answer: 1,
    explanation: "In 'one of those + plural noun + who', the relative pronoun refers to the plural antecedent ('leaders')."
  },
  {
    q: "She is the ONLY one of the candidates who _____ secured full marks in the analytical section.",
    options: ["have", "has", "are", "were"],
    answer: 1,
    explanation: "When modified by 'the only one of', the relative clause points exclusively to the singular person ('has')."
  }
];

// --- 5. DATA REPOSITORY: 10-TOPIC WEAKNESS FINDER ---
const WEAKNESS_QUESTIONS = [
  {
    topic: "Subject-Verb Agreement",
    bookId: 1,
    vol: "Vol #01",
    q: "The quality of these newly imported silk sarees (is / are) outstanding.",
    correct: "is",
    alt: "are",
    trap: "Auditory proximity to plural 'sarees' vs true singular subject 'quality'."
  },
  {
    topic: "Tenses & Time Markers",
    bookId: 2,
    vol: "Vol #02",
    q: "The chief minister (has signed / signed) the infrastructure MoU yesterday morning.",
    correct: "signed",
    alt: "has signed",
    trap: "Using Present Perfect with finished past time marker 'yesterday'."
  },
  {
    topic: "Direct & Indirect Speech",
    bookId: 3,
    vol: "Vol #03",
    q: "He told the students that water (boiled / boils) at 100 degrees Celsius.",
    correct: "boils",
    alt: "boiled",
    trap: "Erroneously backshifting a permanent scientific fact."
  },
  {
    topic: "Active & Passive Voice",
    bookId: 4,
    vol: "Vol #04",
    q: "The fire department (arrived / was arrived) within ten minutes of the call.",
    correct: "arrived",
    alt: "was arrived",
    trap: "Attempting to create passive form for intransitive verb 'arrive'."
  },
  {
    topic: "Prepositions",
    bookId: 5,
    vol: "Vol #05",
    q: "The tribunal (discussed / discussed about) the labor dispute for three hours.",
    correct: "discussed",
    alt: "discussed about",
    trap: "Inserting superfluous preposition 'about' after transitive verb 'discuss'."
  },
  {
    topic: "Articles & Determiners",
    bookId: 6,
    vol: "Vol #06",
    q: "She aspires to join (a / an) European university for higher education.",
    correct: "a",
    alt: "an",
    trap: "Choosing 'an' because of vowel letter 'E' instead of consonant sound /j/."
  },
  {
    topic: "Conjunctions",
    bookId: 7,
    vol: "Vol #07",
    q: "No sooner did the train arrive (than / then) the platform erupted in chaos.",
    correct: "than",
    alt: "then",
    trap: "Confusing comparative connector 'than' with sequential 'then'."
  },
  {
    topic: "Conditionals & Inversion",
    bookId: 8,
    vol: "Vol #08",
    q: "If I (had known / knew) your flight schedule, I would have received you at the airport.",
    correct: "had known",
    alt: "knew",
    trap: "Using Second Conditional (V2) instead of Third Conditional (had + V3)."
  },
  {
    topic: "Modifiers & Comparisons",
    bookId: 9,
    vol: "Vol #09",
    q: "The roads in Indore are cleaner than (those of / ) Bhopal.",
    correct: "those of",
    alt: "just",
    trap: "Making an illogical comparison between roads and a city itself."
  },
  {
    topic: "Pronouns & Case",
    bookId: 10,
    vol: "Vol #10",
    q: "The disagreement was strictly between the chairperson and (me / I).",
    correct: "me",
    alt: "I",
    trap: "Using subjective pronoun 'I' after preposition 'between'."
  }
];

// --- 6. DATA REPOSITORY: FREE CHEAT SHEETS ---
const FREE_RESOURCES = [
  {
    id: 1,
    title: "50 Golden Rules of Competitive English Grammar",
    fileSize: "2.4 MB PDF",
    pages: "18 Pages",
    desc: "The distilled master cheat sheet containing the 50 highest-frequency rules tested across SSC CGL, CHSL, and Banking PO papers from 2014 to 2025.",
    content: `
      <h4>Golden Rules Highlights:</h4>
      <ul>
        <li><strong>Rule 1:</strong> Prepositional phrases never change the number of the head subject.</li>
        <li><strong>Rule 2:</strong> 'No sooner' strictly pairs with 'than'; 'Hardly/Scarcely' pairs with 'when'.</li>
        <li><strong>Rule 3:</strong> 'It is high time' followed by a subject demands the Simple Past tense (V2).</li>
        <li><strong>Rule 4:</strong> Adjectives like senior, junior, superior, inferior take 'to', not 'than'.</li>
        <li><strong>Rule 5:</strong> Collective nouns take singular verbs when acting in unity, and plural verbs when members disagree.</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "100 Speed Shortcuts: Spot the Error in 12 Seconds",
    fileSize: "3.1 MB PDF",
    pages: "24 Pages",
    desc: "A pedagogical elimination matrix developed over 22 years of classroom instruction. Learn how to eliminate 3 wrong options before reading the full sentence.",
    content: `
      <h4>12-Second Strike Points:</h4>
      <ul>
        <li><strong>Check 1: Subject-Verb Alignment:</strong> Blindfold prepositional intervening clauses.</li>
        <li><strong>Check 2: Time-Marker Audit:</strong> Look for 'ago', 'yesterday', 'since', 'already' to verify tense.</li>
        <li><strong>Check 3: Correlative Pair Verification:</strong> Check neither...nor, not only...but also symmetry.</li>
        <li><strong>Check 4: Pronoun Case Check:</strong> Verify prepositions are followed by objective case.</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Subject-Verb Agreement: The Complete 36-Rule Matrix",
    fileSize: "1.8 MB PDF",
    pages: "12 Pages",
    desc: "Companion matrix to Volume #01. Includes every rule variation from fractions and inverted sentences to expletive pronouns and correlatives.",
    content: `
      <h4>36-Rule Matrix Summary:</h4>
      <p>Organized into 6 core sections: Compound Subjects, Intervening Clauses, Distributives, Plural Forms with Singular Meanings, Expressions of Quantity, and Inverted Syntax.</p>
    `
  },
  {
    id: 4,
    title: "Tense Master Timeline: Time-Markers & Sequences",
    fileSize: "2.0 MB PDF",
    pages: "14 Pages",
    desc: "Visual flowchart separating Present Perfect from Past Simple and mapping subordinate clause sequences in reported speech.",
    content: `
      <h4>Timeline Blueprint:</h4>
      <p>Features the definitive Dead Clock vs. Live Bridge diagnostic flowchart, conditional sequence trees, and past-before-past relative milestone diagrams.</p>
    `
  }
];

// --- 7. APPLICATION STATE & ROUTING CONTROLLER ---
const APP_STATE = {
  currentView: "home",
  theme: localStorage.getItem("ze_theme") || "light",
  activeBookSlug: null,
  activePostSlug: null,
  searchQuery: "",
  searchCategory: "all",
  practiceAnswers: {}, // { questionId: selectedOption }
  quiz: {
    started: false,
    completed: false,
    currentIndex: 0,
    answers: {},
    timerSeconds: 600,
    intervalId: null
  },
  weakness: {
    answers: {}, // { index: boolean }
    completed: false
  }
};

// --- DOM REFERENCES ---
const appRoot = document.getElementById("app-root");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const themeIconContainer = document.getElementById("theme-icon-container");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileDrawer = document.getElementById("mobile-drawer");
const bookDetailModal = document.getElementById("book-detail-modal");
const closeBookModalBtn = document.getElementById("close-book-modal-btn");
const bookModalContent = document.getElementById("book-modal-content");
const resourceModal = document.getElementById("resource-modal");
const closeResourceModalBtn = document.getElementById("close-resource-modal-btn");
const resourceModalContent = document.getElementById("resource-modal-content");
const toastContainer = document.getElementById("toast-container");

// --- THEME MANAGEMENT ---
function initTheme() {
  if (APP_STATE.theme === "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
    themeIconContainer.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.setAttribute("data-theme", "light");
    themeIconContainer.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

function toggleTheme() {
  APP_STATE.theme = APP_STATE.theme === "dark" ? "light" : "dark";
  localStorage.setItem("ze_theme", APP_STATE.theme);
  initTheme();
  showToast(`Switched to ${APP_STATE.theme} mode`);
}

// --- TOAST NOTIFICATIONS ---
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast-notice";
  toast.innerHTML = `<span>✓</span><span>${message}</span>`;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3200);
}

// --- MODAL UTILITIES ---
function openBookModal(bookSlug) {
  const book = BOOKS.find(b => b.slug === bookSlug);
  if (!book) return;

  bookModalContent.innerHTML = `
    <div style="margin-bottom: 16px;">
      <span class="badge badge-vol" style="margin-right: 8px;">${book.vol}</span>
      <span class="badge badge-primary">${book.topic}</span>
    </div>
    <h2 style="font-size: 24px; margin-bottom: 12px; color: var(--text-primary);">${book.title}</h2>
    <div style="padding: 12px 16px; border-radius: var(--radius-md); background-color: var(--color-primary-subtle); border: 1px solid var(--color-primary-border); margin-bottom: 20px; font-size: 13px; font-weight: 600; color: var(--color-primary);">
      🎯 Transformation Guarantee: ${book.transformation}
    </div>
    <p style="color: var(--text-secondary); line-height: 1.65; margin-bottom: 20px; font-size: 14px;">
      ${book.benefit}
    </p>
    <div style="background-color: var(--bg-secondary); border-radius: var(--radius-lg); padding: 18px; margin-bottom: 24px;">
      <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 10px;">Syllabus Covered in this Volume</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 13px; color: var(--text-secondary);">
        ${book.syllabus.map(s => `<li>✓ ${s}</li>`).join("")}
      </ul>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-color); padding-top: 20px;">
      <a href="${book.amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-lg" style="flex: 1 1 200px;">
        <span>Buy on Amazon KDP</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
      <a href="#book/${book.slug}" onclick="closeModals()" class="btn btn-secondary btn-lg" style="flex: 1 1 180px;">
        <span>Full Landing Page &rarr;</span>
      </a>
    </div>
  `;
  bookDetailModal.classList.add("open");
}

function openResourceModal(resourceId) {
  const res = FREE_RESOURCES.find(r => r.id === resourceId);
  if (!res) return;

  resourceModalContent.innerHTML = `
    <span class="badge badge-accent" style="margin-bottom: 12px;">Instant Free Download</span>
    <h2 style="font-size: 22px; margin-bottom: 8px;">${res.title}</h2>
    <div style="display: flex; gap: 12px; font-size: 12px; color: var(--text-muted); margin-bottom: 18px;">
      <span>📁 ${res.fileSize}</span>
      <span>📄 ${res.pages}</span>
      <span>🎯 High-Yield Competitive Notes</span>
    </div>
    <p style="color: var(--text-secondary); margin-bottom: 20px; font-size: 14px;">${res.desc}</p>
    <div style="background-color: var(--bg-secondary); border-radius: var(--radius-lg); padding: 18px; margin-bottom: 24px; font-size: 13px; color: var(--text-primary); line-height: 1.65;">
      ${res.content}
    </div>
    <div style="text-align: center;">
      <button onclick="downloadResourceSimulated('${res.title}')" class="btn btn-primary btn-lg" style="width: 100%;">
        <span>Download Complete Study PDF</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
      </button>
    </div>
  `;
  resourceModal.classList.add("open");
}

window.downloadResourceSimulated = function(title) {
  closeModals();
  showToast(`Downloading: ${title}`);
};

function closeModals() {
  bookDetailModal.classList.remove("open");
  resourceModal.classList.remove("open");
}

// --- 8. VIEW RENDERING ENGINE ---

// View 1: HOME
function renderHome() {
  appRoot.innerHTML = `
    <!-- Hero Section -->
    <section class="hero-section" id="home-hero">
      <div class="container">
        <div class="hero-badge-wrap">
          <span class="badge badge-accent">22-Year Pedagogy &bull; 14 Amazon KDP Books</span>
        </div>
        <h1 class="hero-title">
          Master Competitive English Grammar Taught Through the Exact Mistakes Examiners Bank On
        </h1>
        <p class="hero-desc">
          Stop losing marks to deceptive intervening phrases, inverted clauses, and auditory proximity traps. Written by a veteran educator with 22 years of classroom experience and 15+ years coaching SSC CGL, Banking PO/Clerk, and CDS aspirants.
        </p>
        <div class="hero-cta-group">
          <a href="#books" class="btn btn-accent btn-lg" id="hero-btn-books">
            <span>Explore All 14 Books</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
          <a href="#practice" class="btn btn-secondary btn-lg" id="hero-btn-practice">
            <span>Try Error-Spotting Practice</span>
          </a>
          <a href="#weakness-finder" class="btn btn-primary btn-lg" id="hero-btn-weakness">
            <span>Diagnostic Weakness Finder</span>
          </a>
        </div>

        <!-- Metric Grid -->
        <div class="stats-grid">
          <div class="stat-box">
            <div class="stat-number">22+</div>
            <div class="stat-label">Years Classroom Pedagogy</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">14</div>
            <div class="stat-label">Amazon KDP Master Books</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">13</div>
            <div class="stat-label">Core Grammar Domains</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">100%</div>
            <div class="stat-label">Exam-Calibrated Reasoning</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Articles Section -->
    <section class="section" id="home-articles">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">High-Yield Tutorials</span>
          <h2 class="section-title">Essential Grammar Traps Decoded</h2>
          <p class="section-desc">Each post breaks down the exact psychological traps examiners set and provides formulas to solve them under 15 seconds.</p>
        </div>

        <div class="cards-grid-3">
          ${ARTICLES.slice(0, 3).map(art => `
            <div class="card" id="card-art-${art.slug}">
              <div>
                <div class="article-meta">
                  <span class="badge badge-primary">${art.category}</span>
                  <span style="font-size: 11px; color: var(--text-muted); font-weight: 600;">${art.readingTime}</span>
                </div>
                <h3 class="article-title" onclick="navigateTo('post/${art.slug}')">${art.title}</h3>
                <p class="article-desc">${art.description}</p>
              </div>
              <div class="article-footer">
                <span class="badge badge-vol">Book #${art.bookId} Companion</span>
                <a href="#post/${art.slug}" class="btn btn-sm btn-secondary">Read Post &rarr;</a>
              </div>
            </div>
          `).join("")}
        </div>
        <div style="text-align: center; margin-top: 36px;">
          <a href="#blog" class="btn btn-secondary btn-lg">Browse All Free Grammar Articles &rarr;</a>
        </div>
      </div>
    </section>

    <!-- 14 Books Showcase Section -->
    <section class="section" style="background-color: var(--bg-secondary);" id="home-books">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Complete KDP Series</span>
          <h2 class="section-title">The 14-Volume Exam Grammar Library</h2>
          <p class="section-desc">From Subject-Verb Agreement to Phrasal Verbs and 1000 Master Questions, each volume is engineered to eliminate negative marks.</p>
        </div>

        <div class="cards-grid-3">
          ${BOOKS.slice(0, 6).map(b => `
            <div class="card" id="card-book-${b.id}">
              <div>
                <div class="book-header-line">
                  <span class="badge badge-vol">${b.vol}</span>
                  <span class="badge badge-primary">${b.difficulty}</span>
                </div>
                <h3 class="book-title" onclick="openBookModal('${b.slug}')">${b.title}</h3>
                <p class="book-benefit">${b.benefit}</p>
                <div class="book-specs">
                  <strong>Ideal For:</strong> ${b.idealFor}
                </div>
              </div>
              <div class="book-actions">
                <button onclick="openBookModal('${b.slug}')" class="btn btn-sm btn-secondary">Preview Details</button>
                <a href="${b.amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-accent">Amazon KDP</a>
              </div>
            </div>
          `).join("")}
        </div>

        <div style="text-align: center; margin-top: 36px;">
          <a href="#books" class="btn btn-primary btn-lg">View All 14 Published Volumes &rarr;</a>
        </div>
      </div>
    </section>

    <!-- Why This Platform Section -->
    <section class="section" id="home-why">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Author Pedagogy</span>
          <h2 class="section-title">Why Descriptive School Grammars Fail in Competitive Exams</h2>
          <p class="section-desc">School textbooks teach you how to write descriptive sentences. Competitive exams test multiple-choice elimination under heavy clock pressure.</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 900px; margin: 0 auto;">
          <div style="background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 24px; display: flex; gap: 16px;">
            <div style="font-size: 28px;">❌</div>
            <div>
              <h4 style="font-size: 16px; margin-bottom: 6px;">Traditional School Books (Wren &amp; Martin Style)</h4>
              <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.6;">Focus on 5-word simplified examples ("The boy runs"). In real exams, you face 25-word multi-clause sentences where the head noun is separated by 14 words of intervening prepositional traps.</p>
            </div>
          </div>

          <div style="background-color: var(--bg-card); border: 2px solid var(--color-primary); border-radius: var(--radius-xl); padding: 24px; display: flex; gap: 16px; box-shadow: var(--shadow-sm);">
            <div style="font-size: 28px;">✅</div>
            <div>
              <h4 style="font-size: 16px; margin-bottom: 6px; color: var(--color-primary);">The ZeroError Elimination Methodology</h4>
              <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.6;">Formulas, blindfold techniques, and time-marker matrices designed to eliminate 3 options in under 12 seconds with absolute mathematical certainty.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// View 2: BLOG INDEX
function renderBlog() {
  appRoot.innerHTML = `
    <div class="container section">
      <div class="section-header">
        <span class="section-tag">Grammar Hub</span>
        <h1 class="section-title">Competitive English Grammar Articles</h1>
        <p class="section-desc">In-depth worked guides on high-yield traps, time-marker formulas, and examiner elimination heuristics.</p>
      </div>

      <div class="cards-grid-3">
        ${ARTICLES.map(art => `
          <div class="card">
            <div>
              <div class="article-meta">
                <span class="badge badge-primary">${art.category}</span>
                <span style="font-size: 11px; color: var(--text-muted); font-weight: 600;">${art.readingTime}</span>
              </div>
              <h3 class="article-title" onclick="navigateTo('post/${art.slug}')">${art.title}</h3>
              <p class="article-desc">${art.description}</p>
            </div>
            <div class="article-footer">
              <span class="badge badge-vol">Book #${art.bookId} Companion</span>
              <a href="#post/${art.slug}" class="btn btn-sm btn-secondary">Read Article &rarr;</a>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// View 3: ARTICLE READER
function renderPost(slug) {
  const article = ARTICLES.find(a => a.slug === slug);
  if (!article) {
    appRoot.innerHTML = `<div class="container section"><h2>Article not found</h2><a href="#blog" class="btn btn-primary">Back to Articles</a></div>`;
    return;
  }

  const companionBook = BOOKS.find(b => b.id === article.bookId);

  appRoot.innerHTML = `
    <article class="container section" style="max-width: 860px;">
      <div style="margin-bottom: 24px;">
        <a href="#blog" style="font-size: 13px; color: var(--color-primary); font-weight: 700;">&larr; Back to all articles</a>
      </div>

      <div style="margin-bottom: 20px;">
        <span class="badge badge-primary" style="margin-right: 8px;">${article.category}</span>
        <span class="badge badge-accent">${article.readingTime}</span>
      </div>

      <h1 style="font-size: clamp(28px, 4vw, 42px); margin-bottom: 20px;">${article.title}</h1>
      <p style="font-size: 16px; color: var(--text-secondary); margin-bottom: 28px; line-height: 1.65;">
        ${article.description}
      </p>

      <!-- Key Formula Card -->
      <div style="padding: 16px 20px; border-radius: var(--radius-lg); background-color: var(--color-primary-subtle); border: 1px solid var(--color-primary-border); margin-bottom: 36px;">
        <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--color-primary); margin-bottom: 4px;">Core Governing Rule Formula:</div>
        <div style="font-family: monospace; font-size: 14px; font-weight: 700; color: var(--color-primary);">${article.formula}</div>
      </div>

      <!-- Article Body -->
      <div style="font-size: 15px; line-height: 1.75; color: var(--text-primary); margin-bottom: 48px;">
        ${article.body}
      </div>

      <!-- Companion eBook Recommendation Banner -->
      ${companionBook ? `
        <div style="padding: 28px; border-radius: var(--radius-xl); background: linear-gradient(135deg, #0F1B33, #16264A); color: #FFFFFF; border: 2px solid var(--color-accent); box-shadow: var(--shadow-lg);">
          <span class="badge badge-accent" style="margin-bottom: 12px;">Recommended Companion eBook</span>
          <h3 style="font-size: 20px; color: #FFFFFF; margin-bottom: 8px;">${companionBook.title}</h3>
          <p style="font-size: 13px; color: #CBD5E1; margin-bottom: 16px; line-height: 1.6;">${companionBook.transformation}</p>
          <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
            <a href="${companionBook.amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-accent">Buy on Amazon KDP</a>
            <a href="#book/${companionBook.slug}" class="btn btn-secondary" style="background: rgba(255,255,255,0.1); color: #FFFFFF; border-color: rgba(255,255,255,0.2);">Explore Book Overview</a>
          </div>
        </div>
      ` : ""}
    </article>
  `;
}

// View 4: ALL 14 BOOKS DIRECTORY
function renderBooks() {
  appRoot.innerHTML = `
    <div class="container section">
      <div class="section-header">
        <span class="section-tag">Complete KDP Series</span>
        <h1 class="section-title">The 14-Volume Competitive English Grammar Series</h1>
        <p class="section-desc">Each book is calibrated to eliminate negative marks in specific competitive exams (SSC CGL, CHSL, IBPS PO, SBI Clerk, CDS, and State PSCs).</p>
      </div>

      <div class="cards-grid-3">
        ${BOOKS.map(b => `
          <div class="card" id="book-card-${b.id}">
            <div>
              <div class="book-header-line">
                <span class="badge badge-vol">${b.vol}</span>
                <span class="badge badge-primary">${b.difficulty}</span>
              </div>
              <h3 class="book-title" onclick="openBookModal('${b.slug}')">${b.title}</h3>
              <p class="book-benefit">${b.benefit}</p>
              <div class="book-specs">
                <strong>Target:</strong> ${b.idealFor}
              </div>
            </div>
            <div class="book-actions">
              <button onclick="openBookModal('${b.slug}')" class="btn btn-sm btn-secondary">Quick Preview</button>
              <a href="${b.amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-accent">Amazon KDP</a>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// View 5: BOOK LANDING PAGE
function renderBookDetail(slug) {
  const book = BOOKS.find(b => b.slug === slug);
  if (!book) {
    appRoot.innerHTML = `<div class="container section"><h2>Book not found</h2><a href="#books" class="btn btn-primary">Back to Books</a></div>`;
    return;
  }

  appRoot.innerHTML = `
    <div class="container section" style="max-width: 960px;">
      <div style="margin-bottom: 24px;">
        <a href="#books" style="font-size: 13px; color: var(--color-primary); font-weight: 700;">&larr; Back to 14 Books Library</a>
      </div>

      <div style="margin-bottom: 14px;">
        <span class="badge badge-vol" style="margin-right: 8px;">${book.vol}</span>
        <span class="badge badge-primary">${book.topic}</span>
      </div>

      <h1 style="font-size: clamp(28px, 4vw, 40px); margin-bottom: 16px;">${book.title}</h1>
      
      <!-- Transformation Guarantee Box -->
      <div style="padding: 16px 20px; border-radius: var(--radius-lg); background-color: var(--color-primary-subtle); border: 1px solid var(--color-primary-border); margin-bottom: 30px;">
        <strong style="color: var(--color-primary);">Transformation Guarantee:</strong> ${book.transformation}
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 40px;">
        <a href="${book.amazonUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-accent btn-lg">
          <span>Buy on Amazon KDP (Kindle &amp; Paperback)</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>

      <!-- Syllabus & Units -->
      <div style="background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 28px; margin-bottom: 36px; box-shadow: var(--shadow-sm);">
        <h3 style="font-size: 18px; margin-bottom: 16px;">Units &amp; Chapters in this Volume</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px;">
          ${book.syllabus.map(s => `
            <div style="padding: 12px 14px; border-radius: var(--radius-md); background-color: var(--bg-secondary); font-size: 13px; font-weight: 600;">
              ✓ ${s}
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Sample Exam Question with Reason -->
      <div style="background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 28px; margin-bottom: 36px; box-shadow: var(--shadow-sm);">
        <span class="badge badge-accent" style="margin-bottom: 10px;">Sample Exam Question &amp; Trap Breakdown</span>
        <div class="sentence-display" style="margin-top: 12px;">${book.sampleQuestion.sentence}</div>
        <div class="explanation-panel">
          <strong>Correct Answer:</strong> Part (${book.sampleQuestion.errorPart})<br>
          <strong>Correction:</strong> ${book.sampleQuestion.correction}<br>
          <strong>Examiner Trap Explained:</strong> ${book.sampleQuestion.explanation}
        </div>
      </div>
    </div>
  `;
}

// View 6: PRACTICE ZONE (ERROR SPOTTING)
function renderPractice() {
  appRoot.innerHTML = `
    <div class="container section" style="max-width: 900px;">
      <div class="section-header">
        <span class="section-tag">Interactive Exam Simulator</span>
        <h1 class="section-title">Error Spotting Practice Zone</h1>
        <p class="section-desc">Solve authentic TCS and Banking exam sentences with instant visual feedback, governing rule references, and matched textbook volumes.</p>
      </div>

      <div id="drills-container">
        ${PRACTICE_DRILLS.map((d, index) => {
          const answered = APP_STATE.practiceAnswers[d.id];
          return `
            <div class="drill-card" id="drill-card-${d.id}">
              <div class="drill-meta">
                <span class="badge badge-primary">Drill #${index + 1}: ${d.topic}</span>
                <span class="badge badge-vol">Book #${d.bookId}</span>
              </div>
              <div class="sentence-display">${d.sentence}</div>
              
              <div class="options-group">
                ${["A", "B", "C", "D"].map(opt => {
                  let optClass = "";
                  if (answered) {
                    if (opt === d.correctOption) {
                      optClass = "selected-correct";
                    } else if (answered === opt && opt !== d.correctOption) {
                      optClass = "selected-wrong";
                    }
                  }
                  return `
                    <button 
                      class="option-btn ${optClass}" 
                      onclick="selectPracticeOption(${d.id}, '${opt}')"
                      ${answered ? "disabled" : ""}
                    >
                      Part (${opt})
                    </button>
                  `;
                }).join("")}
              </div>

              ${answered ? `
                <div class="explanation-panel">
                  <div style="font-weight: 700; color: ${answered === d.correctOption ? "var(--color-success)" : "var(--color-danger)"}; margin-bottom: 6px;">
                    ${answered === d.correctOption ? "✓ Correct Choice!" : `✗ Error: Correct Part is (${d.correctOption})`}
                  </div>
                  <div><strong>Correction:</strong> ${d.correction}</div>
                  <div style="margin-top: 4px;"><strong>Analysis:</strong> ${d.explanation}</div>
                  <div style="margin-top: 8px; font-size: 11px; font-weight: 700; color: var(--color-primary);">Governing Rule: ${d.rule}</div>
                </div>
              ` : ""}
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

window.selectPracticeOption = function(drillId, option) {
  APP_STATE.practiceAnswers[drillId] = option;
  renderPractice();
  showToast(`Question #${drillId} recorded`);
};

// View 7: TIMED QUIZ ENGINE
function renderQuiz() {
  const qState = APP_STATE.quiz;

  if (!qState.started) {
    appRoot.innerHTML = `
      <div class="container section" style="max-width: 760px; text-align: center;">
        <div class="section-header">
          <span class="section-tag">Timed Examination Simulator</span>
          <h1 class="section-title">Subject-Verb Agreement 10-Question Mastery Quiz</h1>
          <p class="section-desc">10 exam-calibrated questions under a 10-minute countdown timer. Test your reflex speed before facing Tier-1 or Tier-2 papers.</p>
        </div>

        <div style="background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 36px; box-shadow: var(--shadow-sm); margin-bottom: 30px;">
          <h3 style="font-size: 18px; margin-bottom: 14px;">Quiz Guidelines</h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: var(--text-secondary); text-align: left; margin-bottom: 28px;">
            <li>⏱️ <strong>Time Allowed:</strong> 10 Minutes (60 seconds per question)</li>
            <li>📊 <strong>Marking Scheme:</strong> +2.0 for Correct, -0.5 for Wrong</li>
            <li>📚 <strong>Companion Volume:</strong> Book #01 (Subject-Verb Agreement)</li>
          </ul>
          <button onclick="startQuiz()" class="btn btn-primary btn-lg" style="width: 100%;">
            <span>Start Timed Quiz Now</span>
          </button>
        </div>
      </div>
    `;
    return;
  }

  if (qState.completed) {
    // Calculate Score
    let correctCount = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
      if (qState.answers[idx] === q.answer) correctCount++;
    });
    const score = correctCount * 2 - (QUIZ_QUESTIONS.length - correctCount) * 0.5;

    appRoot.innerHTML = `
      <div class="container section" style="max-width: 800px;">
        <div class="section-header">
          <span class="section-tag">Quiz Result Card</span>
          <h1 class="section-title">Your Examination Score Analysis</h1>
        </div>

        <div class="diagnostic-result-card">
          <div class="score-overview">
            <div class="score-badge-huge">
              ${correctCount}/${QUIZ_QUESTIONS.length}
              <span>Correct</span>
            </div>
            <div>
              <h3 style="font-size: 22px; margin-bottom: 4px;">Scaled Marks: ${score.toFixed(1)} / 20.0</h3>
              <p style="color: var(--text-secondary); font-size: 14px;">
                ${correctCount >= 8 ? "Excellent Command! You are in the top 5% exam bracket." : "Moderate Vulnerability: You need systematic rule reinforcement in Book #01."}
              </p>
            </div>
          </div>

          <h4 style="font-size: 16px; margin-bottom: 16px;">Question-by-Question Review</h4>
          <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 30px;">
            ${QUIZ_QUESTIONS.map((q, idx) => {
              const userAns = qState.answers[idx];
              const isCorrect = userAns === q.answer;
              return `
                <div style="padding: 16px; border-radius: var(--radius-md); background-color: var(--bg-secondary); border-left: 4px solid ${isCorrect ? "var(--color-success)" : "var(--color-danger)"};">
                  <div style="font-weight: 700; margin-bottom: 4px;">Q${idx + 1}: ${q.q}</div>
                  <div style="font-size: 13px; color: ${isCorrect ? "var(--color-success)" : "var(--color-danger)"};">
                    ${isCorrect ? "✓ Correct" : `✗ Wrong (You chose: ${q.options[userAns] || "None"}, Correct: ${q.options[q.answer]})`}
                  </div>
                  <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">Reason: ${q.explanation}</div>
                </div>
              `;
            }).join("")}
          </div>

          <div style="text-align: center;">
            <button onclick="resetQuiz()" class="btn btn-secondary btn-lg" style="margin-right: 12px;">Retake Quiz</button>
            <a href="#book/spot-the-error-subject-verb-agreement" class="btn btn-accent btn-lg">Strengthen in Book #01</a>
          </div>
        </div>
      </div>
    `;
    return;
  }

  // Active Quiz View
  const currentQ = QUIZ_QUESTIONS[qState.currentIndex];
  const minutes = Math.floor(qState.timerSeconds / 60);
  const seconds = qState.timerSeconds % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const progressPercent = ((qState.currentIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  appRoot.innerHTML = `
    <div class="container section" style="max-width: 800px;">
      <!-- Timer Bar -->
      <div class="quiz-header-bar">
        <div>
          <span style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Question ${qState.currentIndex + 1} of ${QUIZ_QUESTIONS.length}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px; font-weight: 800; font-family: monospace; font-size: 16px; color: ${qState.timerSeconds < 120 ? "var(--color-danger)" : "var(--color-primary)"};">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span>${timeFormatted}</span>
        </div>
      </div>

      <div class="progress-track">
        <div class="progress-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <div class="card" style="margin-top: 24px; padding: 32px;">
        <h3 style="font-size: 18px; margin-bottom: 24px; line-height: 1.6;">${currentQ.q}</h3>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px;">
          ${currentQ.options.map((opt, optIdx) => {
            const isSelected = qState.answers[qState.currentIndex] === optIdx;
            return `
              <button 
                class="option-btn" 
                style="text-align: left; padding: 16px 20px; font-size: 14px; ${isSelected ? "border-color: var(--color-primary); background-color: var(--color-primary-subtle); color: var(--color-primary);" : ""}"
                onclick="recordQuizAnswer(${optIdx})"
              >
                <strong>(${String.fromCharCode(65 + optIdx)})</strong> ${opt}
              </button>
            `;
          }).join("")}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <button 
            onclick="prevQuizQuestion()" 
            class="btn btn-secondary"
            ${qState.currentIndex === 0 ? "disabled style='opacity: 0.5; cursor: not-allowed;'" : ""}
          >
            &larr; Previous
          </button>

          ${qState.currentIndex === QUIZ_QUESTIONS.length - 1 ? `
            <button onclick="submitQuiz()" class="btn btn-accent btn-lg">Submit Final Quiz</button>
          ` : `
            <button onclick="nextQuizQuestion()" class="btn btn-primary">Next Question &rarr;</button>
          `}
        </div>
      </div>
    </div>
  `;
}

window.startQuiz = function() {
  APP_STATE.quiz.started = true;
  APP_STATE.quiz.completed = false;
  APP_STATE.quiz.currentIndex = 0;
  APP_STATE.quiz.answers = {};
  APP_STATE.quiz.timerSeconds = 600;

  if (APP_STATE.quiz.intervalId) clearInterval(APP_STATE.quiz.intervalId);
  APP_STATE.quiz.intervalId = setInterval(() => {
    if (APP_STATE.quiz.timerSeconds > 0) {
      APP_STATE.quiz.timerSeconds--;
      // Update timer element directly if present
      const timerEl = document.querySelector(".quiz-header-bar span");
      if (timerEl) {
        const mins = Math.floor(APP_STATE.quiz.timerSeconds / 60);
        const secs = APP_STATE.quiz.timerSeconds % 60;
        timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      }
    } else {
      clearInterval(APP_STATE.quiz.intervalId);
      submitQuiz();
    }
  }, 1000);

  renderQuiz();
};

window.recordQuizAnswer = function(optIdx) {
  APP_STATE.quiz.answers[APP_STATE.quiz.currentIndex] = optIdx;
  renderQuiz();
};

window.nextQuizQuestion = function() {
  if (APP_STATE.quiz.currentIndex < QUIZ_QUESTIONS.length - 1) {
    APP_STATE.quiz.currentIndex++;
    renderQuiz();
  }
};

window.prevQuizQuestion = function() {
  if (APP_STATE.quiz.currentIndex > 0) {
    APP_STATE.quiz.currentIndex--;
    renderQuiz();
  }
};

window.submitQuiz = function() {
  if (APP_STATE.quiz.intervalId) clearInterval(APP_STATE.quiz.intervalId);
  APP_STATE.quiz.completed = true;
  renderQuiz();
};

window.resetQuiz = function() {
  APP_STATE.quiz.started = false;
  APP_STATE.quiz.completed = false;
  renderQuiz();
};

// View 8: WEAKNESS FINDER
function renderWeaknessFinder() {
  const wState = APP_STATE.weakness;

  if (wState.completed) {
    // Generate diagnostic summary
    let weakTopics = [];
    let strongTopics = [];

    WEAKNESS_QUESTIONS.forEach((q, idx) => {
      const isCorrect = wState.answers[idx];
      if (isCorrect) {
        strongTopics.push(q);
      } else {
        weakTopics.push(q);
      }
    });

    const scorePct = Math.round((strongTopics.length / WEAKNESS_QUESTIONS.length) * 100);

    appRoot.innerHTML = `
      <div class="container section" style="max-width: 860px;">
        <div class="section-header">
          <span class="section-tag">Diagnostic Assessment</span>
          <h1 class="section-title">Your 10-Topic Weakness Profile</h1>
        </div>

        <div class="diagnostic-result-card">
          <div class="score-overview">
            <div class="score-badge-huge">
              ${scorePct}%
              <span>Mastery</span>
            </div>
            <div>
              <h3 style="font-size: 22px; margin-bottom: 4px;">Diagnostic Diagnosis</h3>
              <p style="color: var(--text-secondary); font-size: 14px;">
                You solved ${strongTopics.length} out of 10 diagnostic traps correctly. Below is the precise map of which eBook volume addresses each detected vulnerability.
              </p>
            </div>
          </div>

          <!-- Vulnerable Areas -->
          <h4 style="font-size: 16px; margin-bottom: 12px; color: var(--color-danger);">Identified Vulnerabilities (${weakTopics.length})</h4>
          <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px;">
            ${weakTopics.length === 0 ? `
              <div style="padding: 16px; border-radius: var(--radius-md); background: var(--color-success-subtle); color: var(--color-success);">
                🎉 Zero significant vulnerabilities detected! Your foundational instincts are aligned with Tier-2 standards.
              </div>
            ` : weakTopics.map(w => `
              <div class="topic-breakdown-row" style="border-left: 4px solid var(--color-danger);">
                <div>
                  <strong>${w.topic}</strong>
                  <div style="font-size: 11px; color: var(--text-muted);">${w.trap}</div>
                </div>
                <a href="#book/${BOOKS.find(b => b.id === w.bookId)?.slug}" class="btn btn-sm btn-accent">
                  Fix in ${w.vol} &rarr;
                </a>
              </div>
            `).join("")}
          </div>

          <!-- Strong Areas -->
          <h4 style="font-size: 16px; margin-bottom: 12px; color: var(--color-success);">Mastered Areas (${strongTopics.length})</h4>
          <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 32px;">
            ${strongTopics.map(s => `
              <div class="topic-breakdown-row" style="border-left: 4px solid var(--color-success);">
                <div><strong>${s.topic}</strong></div>
                <span class="badge badge-success">Mastered</span>
              </div>
            `).join("")}
          </div>

          <div style="text-align: center;">
            <button onclick="resetWeaknessFinder()" class="btn btn-secondary btn-lg">Retake Diagnostic</button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  // Active Questions View
  appRoot.innerHTML = `
    <div class="container section" style="max-width: 860px;">
      <div class="section-header">
        <span class="section-tag">Diagnostic Speed Test</span>
        <h1 class="section-title">10-Topic Grammar Weakness Finder</h1>
        <p class="section-desc">One question per core grammatical domain. Spot your blind spots before examiners exploit them on exam day.</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px;">
        ${WEAKNESS_QUESTIONS.map((q, idx) => {
          const userChoice = wState.answers[idx];
          return `
            <div class="card" style="padding: 24px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                <span class="badge badge-primary">Topic ${idx + 1}: ${q.topic}</span>
                <span class="badge badge-vol">${q.vol}</span>
              </div>
              <p style="font-size: 15px; font-weight: 600; margin-bottom: 16px;">${q.q}</p>
              
              <div style="display: flex; gap: 12px;">
                <button 
                  class="btn btn-secondary" 
                  style="flex: 1; ${userChoice === true ? "border-color: var(--color-primary); background: var(--color-primary-subtle); color: var(--color-primary);" : ""}"
                  onclick="selectWeaknessChoice(${idx}, true)"
                >
                  Option 1: "${q.correct}"
                </button>
                <button 
                  class="btn btn-secondary" 
                  style="flex: 1; ${userChoice === false ? "border-color: var(--color-primary); background: var(--color-primary-subtle); color: var(--color-primary);" : ""}"
                  onclick="selectWeaknessChoice(${idx}, false)"
                >
                  Option 2: "${q.alt}"
                </button>
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <div style="text-align: center; margin-top: 36px;">
        <button onclick="submitWeaknessFinder()" class="btn btn-primary btn-lg" style="min-width: 240px;">
          Calculate My Weakness Profile
        </button>
      </div>
    </div>
  `;
}

window.selectWeaknessChoice = function(index, isCorrect) {
  APP_STATE.weakness.answers[index] = isCorrect;
  renderWeaknessFinder();
};

window.submitWeaknessFinder = function() {
  const answeredCount = Object.keys(APP_STATE.weakness.answers).length;
  if (answeredCount < WEAKNESS_QUESTIONS.length) {
    showToast(`Please answer all 10 questions (${answeredCount}/10 answered)`);
    return;
  }
  APP_STATE.weakness.completed = true;
  renderWeaknessFinder();
};

window.resetWeaknessFinder = function() {
  APP_STATE.weakness.answers = {};
  APP_STATE.weakness.completed = false;
  renderWeaknessFinder();
};

// View 9: FREE RESOURCES
function renderResources() {
  appRoot.innerHTML = `
    <div class="container section">
      <div class="section-header">
        <span class="section-tag">High-Yield Revisions</span>
        <h1 class="section-title">Free Downloadable Cheat Sheets &amp; Matrices</h1>
        <p class="section-desc">Developed for rapid last-minute revision before Tier-1 and Tier-2 examination shifts.</p>
      </div>

      <div class="cards-grid-3">
        ${FREE_RESOURCES.map(res => `
          <div class="card">
            <div>
              <span class="badge badge-accent" style="margin-bottom: 12px;">Instant Download</span>
              <h3 style="font-size: 18px; margin-bottom: 8px;">${res.title}</h3>
              <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 16px; line-height: 1.6;">${res.desc}</p>
              <div style="font-size: 11px; color: var(--text-muted); font-weight: 600; margin-bottom: 20px;">
                📁 ${res.fileSize} &bull; 📄 ${res.pages}
              </div>
            </div>
            <div>
              <button onclick="openResourceModal(${res.id})" class="btn btn-primary" style="width: 100%;">
                Preview &amp; Download PDF
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

// View 10: ABOUT AUTHOR
function renderAbout() {
  appRoot.innerHTML = `
    <div class="container section" style="max-width: 860px;">
      <div class="section-header">
        <span class="section-tag">Faculty Profile</span>
        <h1 class="section-title">About the Author &amp; Pedagogy</h1>
      </div>

      <div style="background-color: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 36px; box-shadow: var(--shadow-sm); line-height: 1.75; font-size: 15px; color: var(--text-primary); margin-bottom: 36px;">
        <h3 style="font-size: 20px; margin-bottom: 12px;">22 Years of Classroom Experience, 15+ Years Coaching</h3>
        <p style="margin-bottom: 16px; color: var(--text-secondary);">
          I have taught English grammar across state board, CBSE, and competitive coaching environments for over two decades. In competitive exams like SSC CGL, CHSL, IBPS PO, and CDS, English is not tested as literature or spoken flair—it is tested as a precise cognitive filter.
        </p>
        <p style="margin-bottom: 16px; color: var(--text-secondary);">
          Question setters have a bank of psychological traps: inserting a plural intervening noun right before a singular verb, placing completed past markers next to present auxiliaries, or inverting clause orders so the auditory ear makes an unforced error.
        </p>
        <h3 style="font-size: 20px; margin-top: 28px; margin-bottom: 12px;">The 14-Volume Amazon KDP Publishing Project</h3>
        <p style="color: var(--text-secondary);">
          This platform and the companion 14-volume book series were created to eliminate reliance on ad-cluttered, pirated PDF compilations. Every volume contains the entire structural universe of its grammar domain, providing exam candidates with deterministic rules that guarantee zero negative marks.
        </p>
      </div>
    </div>
  `;
}

// View 11: CONTACT & FAQ
function renderContact() {
  appRoot.innerHTML = `
    <div class="container section" style="max-width: 860px;">
      <div class="section-header">
        <span class="section-tag">Student Support</span>
        <h1 class="section-title">Inquiries, Feedback &amp; Exam FAQs</h1>
        <p class="section-desc">Have a doubt about a grammar rule or an Amazon eBook edition? Reach out directly to the author.</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr; gap: 36px; margin-bottom: 48px;">
        <!-- Contact Form -->
        <div class="card" style="padding: 32px;">
          <h3 style="font-size: 18px; margin-bottom: 20px;">Send a Grammar Inquiry</h3>
          <form id="inquiry-form" onsubmit="handleInquirySubmit(event)">
            <div class="form-group">
              <label class="form-label" for="contact-name">Your Full Name</label>
              <input class="form-input" id="contact-name" required placeholder="e.g. Rahul Sharma" />
            </div>
            <div class="form-group">
              <label class="form-label" for="contact-email">Email Address</label>
              <input class="form-input" id="contact-email" type="email" required placeholder="name@example.com" />
            </div>
            <div class="form-group">
              <label class="form-label" for="contact-topic">Target Examination</label>
              <select class="form-select" id="contact-topic">
                <option>SSC CGL (Tier 1 &amp; Tier 2)</option>
                <option>IBPS PO / SBI PO</option>
                <option>SSC CHSL / MTS</option>
                <option>UPSC CDS / NDA</option>
                <option>State Public Service Commission</option>
                <option>General Academic English</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="contact-msg">Your Doubt or Question</label>
              <textarea class="form-textarea" id="contact-msg" rows="4" required placeholder="State the sentence or question causing confusion..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
              Submit Question to Educator
            </button>
          </form>
        </div>

        <!-- FAQs -->
        <div>
          <h3 style="font-size: 20px; margin-bottom: 20px;">Frequently Asked Questions</h3>
          
          <div class="accordion-item" onclick="this.classList.toggle('open')">
            <button class="accordion-header">
              <span>Are these eBooks readable on smartphones and computers?</span>
              <span>&darr;</span>
            </button>
            <div class="accordion-body">
              Yes! All 14 volumes are available via Amazon Kindle (which has free reader apps for Android, iPhone, Windows, and Mac) as well as print-on-demand paperback through Amazon KDP.
            </div>
          </div>

          <div class="accordion-item" onclick="this.classList.toggle('open')">
            <button class="accordion-header">
              <span>Which volume should I start with if my score is stagnant?</span>
              <span>&darr;</span>
            </button>
            <div class="accordion-body">
              Take the 10-Topic Weakness Finder first. If you want the single highest-yield section, start with Volume #01 (Subject-Verb Agreement) which accounts for 25% of error questions in SSC CGL.
            </div>
          </div>

          <div class="accordion-item" onclick="this.classList.toggle('open')">
            <button class="accordion-header">
              <span>Are previous years' exam questions (PYQs) included?</span>
              <span>&darr;</span>
            </button>
            <div class="accordion-body">
              Yes, all 14 volumes contain calibrated questions taken from actual SSC CGL, CHSL, and Banking examination trends over the past 15 years.
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

window.handleInquirySubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById("contact-name").value;
  showToast(`Thank you, ${name}! Your grammar question has been submitted.`);
  document.getElementById("inquiry-form").reset();
};

// View 12: GLOBAL SEARCH
function renderSearch() {
  const query = APP_STATE.searchQuery.toLowerCase().trim();
  
  const matchedPosts = ARTICLES.filter(a => 
    !query || 
    a.title.toLowerCase().includes(query) || 
    a.category.toLowerCase().includes(query) || 
    a.description.toLowerCase().includes(query)
  );

  const matchedBooks = BOOKS.filter(b => 
    !query || 
    b.title.toLowerCase().includes(query) || 
    b.topic.toLowerCase().includes(query) || 
    b.benefit.toLowerCase().includes(query)
  );

  const matchedRules = PRACTICE_DRILLS.filter(d => 
    !query || 
    d.sentence.toLowerCase().includes(query) || 
    d.topic.toLowerCase().includes(query) || 
    d.rule.toLowerCase().includes(query)
  );

  appRoot.innerHTML = `
    <div class="container section" style="max-width: 900px;">
      <div class="section-header">
        <span class="section-tag">Global Index</span>
        <h1 class="section-title">Search Articles, Books &amp; Exam Traps</h1>
      </div>

      <!-- Search Input Filter -->
      <div class="filter-bar">
        <div class="search-input-wrap">
          <span class="search-icon">🔍</span>
          <input 
            type="search" 
            class="search-input" 
            placeholder="Search e.g. Subject-Verb Agreement, Tenses, Prepositions..." 
            value="${APP_STATE.searchQuery}"
            oninput="handleSearchInput(this.value)"
            autofocus
          />
        </div>
      </div>

      <!-- Results Count -->
      <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 24px;">
        Found ${matchedPosts.length} articles, ${matchedBooks.length} books, and ${matchedRules.length} practice drills.
      </div>

      <!-- Results Display -->
      <div style="display: flex; flex-direction: column; gap: 28px;">
        <!-- Articles -->
        <div>
          <h3 style="font-size: 16px; margin-bottom: 12px; color: var(--color-primary);">Matching Articles</h3>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${matchedPosts.length === 0 ? `<p style="font-size: 13px; color: var(--text-muted);">No matching articles.</p>` : matchedPosts.map(p => `
              <div style="padding: 14px 18px; border-radius: var(--radius-md); background-color: var(--bg-card); border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-weight: 700; font-size: 14px;">${p.title}</div>
                  <div style="font-size: 12px; color: var(--text-muted);">${p.category} &bull; ${p.readingTime}</div>
                </div>
                <a href="#post/${p.slug}" class="btn btn-sm btn-secondary">Read &rarr;</a>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Books -->
        <div>
          <h3 style="font-size: 16px; margin-bottom: 12px; color: var(--color-primary);">Matching Volumes</h3>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${matchedBooks.length === 0 ? `<p style="font-size: 13px; color: var(--text-muted);">No matching books.</p>` : matchedBooks.map(b => `
              <div style="padding: 14px 18px; border-radius: var(--radius-md); background-color: var(--bg-card); border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-weight: 700; font-size: 14px;">${b.vol}: ${b.title}</div>
                  <div style="font-size: 12px; color: var(--text-muted);">${b.topic}</div>
                </div>
                <button onclick="openBookModal('${b.slug}')" class="btn btn-sm btn-accent">Preview</button>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

window.handleSearchInput = function(val) {
  APP_STATE.searchQuery = val;
  renderSearch();
};

// View 13 & 14: LEGAL PAGES
function renderLegal(type) {
  if (type === "privacy") {
    appRoot.innerHTML = `
      <div class="container section" style="max-width: 800px; line-height: 1.7; font-size: 14px; color: var(--text-secondary);">
        <h1 class="section-title" style="margin-bottom: 24px; color: var(--text-primary);">Privacy Policy</h1>
        <p>Last updated: August 2026. ZeroErrorEnglishPro respects the privacy of all student aspirants.</p>
        <h3 style="margin-top: 20px; color: var(--text-primary);">Information Collection</h3>
        <p>We do not collect or sell your personal information. Any data entered into interactive diagnostic tests (Quizzes, Practice Zone, Weakness Finder) is executed entirely client-side in your local browser storage.</p>
        <h3 style="margin-top: 20px; color: var(--text-primary);">Amazon Affiliate &amp; KDP Disclosure</h3>
        <p>ZeroErrorEnglishPro participates in the Amazon Services LLC Associates Program. As an author and Amazon Associate, we earn from qualifying book purchases made through our KDP links.</p>
      </div>
    `;
  } else {
    appRoot.innerHTML = `
      <div class="container section" style="max-width: 800px; line-height: 1.7; font-size: 14px; color: var(--text-secondary);">
        <h1 class="section-title" style="margin-bottom: 24px; color: var(--text-primary);">Terms of Service</h1>
        <p>Last updated: August 2026.</p>
        <h3 style="margin-top: 20px; color: var(--text-primary);">Educational Purpose</h3>
        <p>All content, practice drills, and diagnostic questions provided on this platform are designed purely for educational preparation for competitive examinations.</p>
        <h3 style="margin-top: 20px; color: var(--text-primary);">Copyright Notice</h3>
        <p>All original grammatical frameworks, 12-second elimination algorithms, and eBook contents are protected under intellectual property laws &copy; 2026 ZeroErrorEnglishPro.</p>
      </div>
    `;
  }
}

// --- 9. HASH ROUTER CONTROLLER ---
function navigateTo(hash) {
  window.location.hash = hash;
}

function handleHashChange() {
  const hash = window.location.hash.replace(/^#/, "") || "home";

  // Update nav active states
  const baseRoute = hash.split("/")[0];
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("data-nav") === baseRoute) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Close mobile drawer
  mobileDrawer.classList.remove("open");
  window.scrollTo(0, 0);

  // Route Dispatcher
  if (hash === "home") {
    renderHome();
  } else if (hash === "blog") {
    renderBlog();
  } else if (hash.startsWith("post/")) {
    const slug = hash.replace("post/", "");
    renderPost(slug);
  } else if (hash === "books") {
    renderBooks();
  } else if (hash.startsWith("book/")) {
    const slug = hash.replace("book/", "");
    renderBookDetail(slug);
  } else if (hash === "practice") {
    renderPractice();
  } else if (hash === "quizzes") {
    renderQuiz();
  } else if (hash === "weakness-finder") {
    renderWeaknessFinder();
  } else if (hash === "resources") {
    renderResources();
  } else if (hash === "about") {
    renderAbout();
  } else if (hash === "contact") {
    renderContact();
  } else if (hash === "search") {
    renderSearch();
  } else if (hash === "privacy") {
    renderLegal("privacy");
  } else if (hash === "terms") {
    renderLegal("terms");
  } else {
    renderHome();
  }
}

// --- 10. GLOBAL EVENT INITIALIZERS ---
function initApp() {
  initTheme();

  // Event Listeners
  themeToggleBtn.addEventListener("click", toggleTheme);
  mobileMenuToggle.addEventListener("click", () => {
    mobileDrawer.classList.toggle("open");
  });

  closeBookModalBtn.addEventListener("click", closeModals);
  closeResourceModalBtn.addEventListener("click", closeModals);
  bookDetailModal.addEventListener("click", (e) => {
    if (e.target === bookDetailModal) closeModals();
  });
  resourceModal.addEventListener("click", (e) => {
    if (e.target === resourceModal) closeModals();
  });

  window.addEventListener("hashchange", handleHashChange);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModals();
  });

  // Initial Route Run
  handleHashChange();
}

// Expose globals for HTML inline triggers
window.openBookModal = openBookModal;
window.openResourceModal = openResourceModal;
window.closeModals = closeModals;
window.navigateTo = navigateTo;

// Boot
initApp();
