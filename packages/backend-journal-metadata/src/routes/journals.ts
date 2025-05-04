import { Router } from "express";
import { DynamoDBService } from "../services/dynamodb.service";

const router = Router();
const dynamoDBService = new DynamoDBService();

router.get("/", async (req, res) => {
  try {
    const journals = await dynamoDBService.getAllJournals();
    res.json({ data: journals });
  } catch (error) {
    console.error("Error fetching journals:", error);
    res.status(500).json({ error: "Failed to fetch journals" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const journal = await dynamoDBService.getJournalById(req.params.id);
    if (!journal) {
      return res.status(404).json({ error: "Journal not found" });
    }
    res.json({ data: journal });
  } catch (error) {
    console.error("Error fetching journal:", error);
    res.status(500).json({ error: "Failed to fetch journal" });
  }
});

export default router; 