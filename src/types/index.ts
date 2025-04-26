export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  recommended?: boolean;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
}

export interface FAQ {
  question: string;
  answer: string;
}