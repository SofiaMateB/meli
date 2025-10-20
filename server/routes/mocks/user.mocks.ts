import { Router } from "express";
import { readJson } from "../../services/readJson.js";

const router = Router();

router.get("/:id", (req, res) => {
  const users = readJson("users.json");
  const user = users.find((u: any) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

router.get("/", (req, res) => {
  const users = readJson("users.json");
  res.json(users);
});

export default router;
