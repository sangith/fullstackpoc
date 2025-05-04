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

// Remove the old /journal-meta-data route
// router.get('/journal-meta-data', (req, res) => {
//   res.json(articleTypes);
// });

// Add /journal-meta-data/:id route
router.get('/journal-meta-data/:id', (req, res) => {
  // In the future, you can filter articleTypes by req.params.id
  res.json(articleTypes);
});

export default router; 