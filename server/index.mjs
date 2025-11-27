import express from "express";
import cors from "cors";
import { initDb } from "./database.mjs";

const app = express();
app.use(cors());
app.use(express.json());

initDb();

app.listen(5000, () => console.log("Server attivo su http://localhost:5000"));
