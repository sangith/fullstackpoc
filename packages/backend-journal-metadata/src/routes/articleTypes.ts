import { Router } from "express";

const router = Router();

const articleTypes = [
  {
    id: '1',
    name: 'Research Article',
    description: 'Original research articles presenting significant findings in cancer research.',
    wordLimit: 5000,
    abstractRequired: true,
    keywordsRequired: true,
    guidelines: 'https://www.cell.com/trends/cancer/authors'
  },
  {
    id: '2',
    name: 'Editorial',
    description: 'Short expert commentary.',
    wordLimit: 2000,
    abstractRequired: false,
    keywordsRequired: true,
    guidelines: 'https://www.cell.com/trends/cancer/authors'
  }
];

router.get('/journal-meta-data', (req, res) => {
  res.json(articleTypes);
});

export default router; 