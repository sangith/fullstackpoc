import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { Journal } from "../models/journal";

const client = new DynamoDBClient({
  region: process.env.AWS_REGION || "us-east-1",
  endpoint: process.env.DYNAMODB_ENDPOINT || undefined,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "fake",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "fake"
  }
});
const docClient = DynamoDBDocumentClient.from(client);

export class DynamoDBService {
  private readonly tableName = process.env.JOURNALS_TABLE || "Journals";

  async getAllJournals(): Promise<Journal[]> {
    try {
      console.log(`Fetching all journals from table: ${this.tableName}`);
      const command = new ScanCommand({
        TableName: this.tableName,
      });

      const response = await docClient.send(command);
      console.log(`Found ${response.Items?.length || 0} journals`);
      return response.Items as Journal[] || [];
    } catch (error: any) {
      console.error("Error in getAllJournals:", error);
      throw new Error(`Failed to fetch journals: ${error.message || 'Unknown error'}`);
    }
  }

  async getJournalById(id: string): Promise<Journal | null> {
    try {
      console.log(`Fetching journal with id: ${id} from table: ${this.tableName}`);
      const command = new GetCommand({
        TableName: this.tableName,
        Key: { id },
      });

      const response = await docClient.send(command);
      console.log(`Journal found: ${!!response.Item}`);
      return response.Item as Journal || null;
    } catch (error: any) {
      console.error("Error in getJournalById:", error);
      throw new Error(`Failed to fetch journal: ${error.message || 'Unknown error'}`);
    }
  }
} 