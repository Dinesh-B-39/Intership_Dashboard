import { ServiceItem, ModalityItem, FocusArea, OfficeFeature, FAQItem } from '@/src/types';

export const therapistInfo = {
  name: 'Dr. Maya Reynolds, PsyD',
  title: 'Licensed Clinical Psychologist',
  fictionalNote: 'Fictional Therapist for Grow My Therapy Assignment',
  location: 'Santa Monica, California',
  address: '123th Street 45 W, Santa Monica, CA 90401',
  serviceFormats: {
    inPerson: 'In-person therapy at our Santa Monica office',
    telehealth: 'Secure telehealth sessions for clients located across California',
  },
  headshot: '/images/maya-reynolds.png',
  officeImages: [
    {
      src: '/images/office1.jpeg',
      alt: 'Quiet, private therapy office in Santa Monica with comfortable seating and natural light',
      caption: 'Quiet, Private Consultation Space',
      details: 'Comfortable, uncluttered seating designed to promote grounding and ease from the moment you arrive.',
    },
    {
      src: '/images/office2.jpeg',
      alt: 'Sunlit Santa Monica therapy office with natural light and reflective atmosphere',
      caption: 'Natural Light & Restorative Setting',
      details: 'An airy, calm environment with abundant natural light, curated reading library, and peaceful privacy.',
    },
  ],
};

export const primaryServices: ServiceItem[] = [
  {
    id: 'anxiety-panic',
    title: 'Anxiety & Panic',
    subtitle: 'Understanding emotional and physiological responses',
    description:
      'Support for adults who appear functional on the outside while internally feeling exhausted, stuck in overthinking, or quietly bracing for something to go wrong. We address constant worry, physical tension, and sleep difficulties.',
    focusPoints: [
      'Constant worry & internal bracing',
      'Physical tension & difficulty sleeping',
      'Understanding the emotional & physiological sides of anxiety',
      'Practical tools for nervous system regulation',
    ],
  },
  {
    id: 'trauma-complex-trauma',
    title: 'Trauma & Complex Trauma',
    subtitle: 'Safety, stabilization & careful pacing',
    description:
      'Carefully paced therapy for single-incident trauma as well as complex, longstanding patterns stemming from childhood, relationships, or chronic stress. An emphasis on safety, stabilization, and feeling regulated in daily life.',
    focusPoints: [
      'Single-incident trauma & complex relational patterns',
      'Childhood experiences & chronic stress impacts',
      'Paced carefully with safety and stabilization first',
      'Deep emotional regulation beyond the session room',
    ],
  },
  {
    id: 'burnout-perfectionism',
    title: 'Burnout, Perfectionism & High Internal Pressure',
    subtitle: 'A space to slow down and develop sustainable ways of living',
    description:
      'Dedicated support for entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress, high internal pressure, and perfectionistic expectations.',
    focusPoints: [
      'Professional burnout & relentless internal expectations',
      'Support for entrepreneurs, creatives & high-achievers',
      'Reconnecting with yourself after prolonged stress',
      'Cultivating sustainable ways of living and working',
    ],
  },
];

export const whoIHelpCards = [
  {
    id: 'high-achievers',
    title: 'High-Achieving Adults, Entrepreneurs & Creatives',
    badge: 'Burnout & Overwhelm',
    description:
      'You are thoughtful, self-aware, and accomplished, but internally you feel exhausted, disconnected, and burdened by high internal pressure and perfectionism.',
    highlight: 'A dedicated space to slow down, reconnect, and build sustainable ways of living and working.',
  },
  {
    id: 'anxiety-panic-clients',
    title: 'Individuals Experiencing Anxiety & Panic',
    badge: 'Anxiety & Somatic Tension',
    description:
      'You navigate daily life feeling functional on the outside, yet quietly battle persistent worry, chronic body tension, sleep disturbances, or a constant sense of bracing.',
    highlight: 'Learn to understand both the emotional and physiological roots of your stress.',
  },
  {
    id: 'trauma-recovery',
    title: 'Adults Navigating Trauma & Past Experiences',
    badge: 'Trauma & Longstanding Patterns',
    description:
      'Earlier life experiences, single-incident events, or complex relationship patterns continue to impact your relationships, confidence, or sense of safety.',
    highlight: 'Paced carefully with an emphasis on safety, stabilization, and lasting daily regulation.',
  },
];

export const clinicalModalities: ModalityItem[] = [
  {
    id: 'cbt',
    title: 'Cognitive-Behavioral Therapy',
    abbreviation: 'CBT',
    tagline: 'Evidence-based cognitive and behavioral tools',
    description:
      'Identifies the connections between thought patterns, bodily responses, and behaviors. Helps clarify overthinking cycles and provides practical tools for everyday challenges.',
  },
  {
    id: 'emdr',
    title: 'Eye Movement Desensitization & Reprocessing',
    abbreviation: 'EMDR',
    tagline: 'Targeted trauma & memory processing',
    description:
      'A structured, evidence-based method that helps process painful memories and traumatic experiences so they no longer trigger acute distress or hyperarousal in the present.',
  },
  {
    id: 'mindfulness',
    title: 'Mindfulness-Based Practices',
    tagline: 'Cultivating present-moment awareness',
    description:
      'Grounding exercises and attentional practices that help quiet constant overthinking, build emotional tolerance, and restore present-moment clarity.',
  },
  {
    id: 'body-oriented',
    title: 'Body-Oriented Techniques',
    tagline: 'Physiological regulation & tension release',
    description:
      'Addresses how anxiety, stress, and trauma are held in the body. Assists clients in recognizing bodily cues, releasing physical tension, and settling the nervous system.',
  },
];

export const focusAreas: FocusArea[] = [
  { id: '1', label: 'Anxiety & Panic', description: 'Understanding physical and emotional triggers' },
  { id: '2', label: 'Single-Incident & Complex Trauma', description: 'Carefully paced processing and stabilization' },
  { id: '3', label: 'Professional Burnout', description: 'Overcoming chronic workplace and creative exhaustion' },
  { id: '4', label: 'Perfectionism & High Internal Pressure', description: 'Softening relentless internal self-demands' },
  { id: '5', label: 'Overthinking & Stuck Patterns', description: 'Breaking out of persistent mental loops' },
  { id: '6', label: 'Chronic Stress & Nervous System Tension', description: 'Somatic grounding and physical relief' },
  { id: '7', label: 'Sleep Difficulties & Constant Bracing', description: 'Helping your mind and body feel safe to rest' },
  { id: '8', label: 'Life Transitions & Self-Connection', description: 'Developing insight and self-trust over time' },
];

export const officeFeatures: OfficeFeature[] = [
  {
    title: 'Quiet & Private Space',
    description: 'Designed as a calm and grounding sanctuary away from the noise and demands of daily life.',
  },
  {
    title: 'Abundant Natural Light',
    description: 'Large windows providing soft, daylight illumination to enhance comfort, ease, and reflection.',
  },
  {
    title: 'Comfortable, Uncluttered Environment',
    description: 'Thoughtfully arranged with supportive seating to help clients feel at ease from the moment they arrive.',
  },
  {
    title: 'Santa Monica & California Telehealth',
    description: 'Offering both in-person sessions at our Santa Monica office and secure telehealth across California.',
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 'who-does-dr-reynolds-work-with',
    question: 'Who does Dr. Maya Reynolds work with?',
    answer:
      'Dr. Maya Reynolds works with adults, including thoughtful, high-achieving individuals, entrepreneurs, creatives, and professionals navigating challenges such as anxiety, panic, trauma, burnout, perfectionism, and high internal pressure.',
  },
  {
    id: 'what-concerns-can-we-work-on',
    question: 'What concerns can we work on in therapy?',
    answer:
      'Areas of focus include anxiety and panic, trauma, burnout, perfectionism, overthinking, stress, sleep difficulties, and the experience of feeling unsettled or under constant internal pressure.',
  },
  {
    id: 'what-therapeutic-approaches',
    question: 'What therapeutic approaches does Dr. Maya Reynolds use?',
    answer:
      'Dr. Maya Reynolds draws from Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. Her approach combines practical tools with deeper psychological work.',
  },
  {
    id: 'do-you-offer-in-person-therapy',
    question: 'Do you offer in-person therapy?',
    answer:
      "Yes. In-person therapy is offered at Dr. Maya Reynolds' office in Santa Monica, California.",
  },
  {
    id: 'do-you-offer-telehealth-sessions',
    question: 'Do you offer telehealth sessions?',
    answer:
      'Secure telehealth sessions are available for clients in California.',
  },
];
