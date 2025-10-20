import { Router } from "express";
import { checkData } from "../controllers/app.controller.js";

const router = Router();

// Ruta principal simulando el proceso de verificación
router.get("/check-data", checkData);

export default router;
