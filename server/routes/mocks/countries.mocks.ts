import { Router } from "express";
import { readJson } from "../../services/readJson.js";

const router = Router();

router.get("/", (req, res) => {
  const countries = readJson("countries.json");
  res.json(countries);
});

export default router;
