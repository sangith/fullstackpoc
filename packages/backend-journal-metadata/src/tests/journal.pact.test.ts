import { Pact } from "@pact-foundation/pact";
import { DynamoDBService } from "../services/dynamodb.service";
import path from "path";

const provider = new Pact({
  consumer: "frontend",
  provider: "journal-metadata-api",
  port: 3001,
  log: path.resolve(process.cwd(), "logs", "pact.log"),
  dir: path.resolve(process.cwd(), "pacts"),
  logLevel: "info",
});

describe("Journal Metadata API", () => {
  beforeAll(() => provider.setup());
  afterEach(() => provider.verify());
  afterAll(() => provider.finalize());

  describe("GET /api/journals", () => {
    it("returns a list of journals", async () => {
      await provider.addInteraction({
        state: "journals exist",
        uponReceiving: "a request for all journals",
        withRequest: {
          method: "GET",
          path: "/api/journals",
          headers: {
            Accept: "application/json",
          },
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: [
            {
              id: "1",
              name: "Nature",
              description: "International weekly journal of science",
              impactFactor: 42.778,
              issn: "0028-0836",
              publisher: "Nature Publishing Group",
              categories: ["Science", "Research"],
              submissionGuidelines: "https://www.nature.com/nature/for-authors",
              createdAt: "2024-01-01T00:00:00Z",
              updatedAt: "2024-01-01T00:00:00Z",
            },
          ],
        },
      });

      const dynamoDBService = new DynamoDBService();
      const journals = await dynamoDBService.getAllJournals();
      expect(journals).toHaveLength(1);
      expect(journals[0].name).toBe("Nature");
    });
  });

  describe("GET /api/journals/:id", () => {
    it("returns a specific journal", async () => {
      await provider.addInteraction({
        state: "journal with id 1 exists",
        uponReceiving: "a request for a specific journal",
        withRequest: {
          method: "GET",
          path: "/api/journals/1",
          headers: {
            Accept: "application/json",
          },
        },
        willRespondWith: {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            id: "1",
            name: "Nature",
            description: "International weekly journal of science",
            impactFactor: 42.778,
            issn: "0028-0836",
            publisher: "Nature Publishing Group",
            categories: ["Science", "Research"],
            submissionGuidelines: "https://www.nature.com/nature/for-authors",
            createdAt: "2024-01-01T00:00:00Z",
            updatedAt: "2024-01-01T00:00:00Z",
          },
        },
      });

      const dynamoDBService = new DynamoDBService();
      const journal = await dynamoDBService.getJournalById("1");
      expect(journal).not.toBeNull();
      expect(journal?.name).toBe("Nature");
    });
  });
}); 