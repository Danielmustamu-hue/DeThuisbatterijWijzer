
export interface CalculationInput {
  consumption: number;
  panels: number;
}

export interface CalculationResult {
  idealSize: number;
  paybackTime: number;
  annualSavings: number;
  aiAdvice: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Premium' | 'Modulair' | 'Budget';
  description: string;
  imageUrl: string;
  partnerUrl: string;
  partnerName: string;
}

export interface TargetGroupInfo {
  group: string;
  capacity: string;
  payback: string;
  benefit: string;
  tax: string;
  contractAdvice: string;
}

export interface BrandComparison {
  name: string;
  type: string;
  warranty: string;
  score: string;
  bestFor: string;
}

export interface TechnicalSpec {
  label: string;
  tesla: string;
  alpha: string;
  victron: string;
  sessy: string;
  huawei: string;
}

export interface AdviceStep {
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  imageUrl?: string;
  readingTime: string;
}

export interface FAQ {
  q: string;
  a: string;
  blogSlug?: string;
}

export type AppTab = 'home' | 'kennisbank' | 'legal';

export interface LegalContent {
  id: string;
  title: string;
  content: string;
}
