import { http, HttpResponse } from 'msw';

const mockJournals = [
  {
    id: '1',
    name: 'Nature',
    description: 'A prestigious multidisciplinary scientific journal',
    impactFactor: 49.962,
    issn: '0028-0836',
    publisher: 'Nature Publishing Group',
    categories: ['Science', 'Biology', 'Physics'],
    submissionGuidelines: 'https://www.nature.com/nature/for-authors',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Science',
    description: 'The peer-reviewed academic journal of the American Association for the Advancement of Science',
    impactFactor: 47.728,
    issn: '0036-8075',
    publisher: 'American Association for the Advancement of Science',
    categories: ['Science', 'Technology', 'Engineering'],
    submissionGuidelines: 'https://www.science.org/content/page/science-information-authors',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

export const handlers = [
  http.get('http://localhost:3001/api/journals', () => {
    return HttpResponse.json({ data: mockJournals });
  })
]; 