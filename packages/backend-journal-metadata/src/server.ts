import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import journalsRouter from "./routes/journals";
import articleTypesRouter from "./routes/articleTypes";

export const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/journals", journalsRouter);
app.use(articleTypesRouter);

// Only start the server if it's not already running (e.g., in tests)
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Journal Metadata API server running on port ${port}`);
  });
} 