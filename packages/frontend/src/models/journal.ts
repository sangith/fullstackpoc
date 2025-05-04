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