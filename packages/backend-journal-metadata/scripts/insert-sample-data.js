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
    name: { S: 'Journal 1' },
    description: { S: 'Description 1' }
  },
  {
    id: { S: '2' },
    name: { S: 'Journal 2' },
    description: { S: 'Description 2' }
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