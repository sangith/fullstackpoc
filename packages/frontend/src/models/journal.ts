export interface Journal {
  id: string;
  name: string;
  description: string;
  impactFactor: number;
  issn: string;
  publisher: string;
  categories: string[];
  submissionGuidelines: string;
  createdAt: string;
  updatedAt: string;
}

export interface ArticleType {
  id: string;
  name: string;
  description: string;
  wordLimit: number;
  abstractRequired: boolean;
  keywordsRequired: boolean;
  guidelines: string;
  coverLetterRequired: boolean;
} 