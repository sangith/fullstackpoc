const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb');

const client = new DynamoDBClient({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000',
  credentials: {
    accessKeyId: 'fake',
    secretAccessKey: 'fake'
  }
});

const sampleJournals = [
  {
    id: { S: '1' },
    name: { S: 'Trends in Cancer' },
    description: { S: 'A leading journal in cancer research.' },
    impactFactor: { N: '15.2' },
    issn: { S: '1234-5678' },
    publisher: { S: 'Elsevier' },
    categories: { SS: ['Cancer', 'Oncology'] },
    submissionGuidelines: { S: 'https://www.cell.com/trends/cancer/for-authors' },
    createdAt: { S: new Date().toISOString() },
    updatedAt: { S: new Date().toISOString() }
  }
];

async function insertSampleData() {
  for (const journal of sampleJournals) {
    try {
      await client.send(new PutItemCommand({
        TableName: 'Journals',
        Item: journal
      }));
      console.log(`Inserted journal: ${journal.name.S}`);
    } catch (err) {
      console.error('Error inserting journal:', err);
    }
  }
}

insertSampleData(); 