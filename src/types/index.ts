export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  focusPoints: string[];
}

export interface ModalityItem {
  id: string;
  title: string;
  abbreviation?: string;
  tagline: string;
  description: string;
}

export interface FocusArea {
  id: string;
  label: string;
  description: string;
}

export interface OfficeFeature {
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
