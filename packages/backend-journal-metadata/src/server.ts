import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import journalsRouter from "./routes/journals";
import articleTypesRouter from "./routes/articleTypes";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/journals", journalsRouter);
app.use(articleTypesRouter);

app.listen(port, () => {
  console.log(`Journal Metadata API server running on port ${port}`);
}); 