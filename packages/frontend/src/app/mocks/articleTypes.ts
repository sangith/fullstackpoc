import { ArticleType } from "../../models/journal";

export const mockArticleTypes: ArticleType[] = [
  {
    id: "1",
    name: "Research Article",
    description: "Original research articles presenting significant findings in cancer research.",
    wordLimit: 5000,
    abstractRequired: true,
    keywordsRequired: true,
    guidelines: "https://www.cell.com/trends/cancer/authors",
  },
  {
    id: "2",
    name: "Editorial",
    description: "Short expert commentary.",
    wordLimit: 2000,
    abstractRequired: false,
    keywordsRequired: true,
    guidelines: "https://www.cell.com/trends/cancer/authors",
  },
]; 