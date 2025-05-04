const { DynamoDBClient, CreateTableCommand } = require('@aws-sdk/client-dynamodb');

const client = new DynamoDBClient({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000',
  credentials: {
    accessKeyId: 'fake',
    secretAccessKey: 'fake'
  }
});

async function createTable() {
  try {
    await client.send(new CreateTableCommand({
      TableName: 'Journals',
      KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
      ProvisionedThroughput: { ReadCapacityUnits: 1, WriteCapacityUnits: 1 }
    }));
    console.log('Table created!');
  } catch (err) {
    if (err.name === 'ResourceInUseException') {
      console.log('Table already exists.');
    } else {
      console.error(err);
    }
  }
}

createTable(); 