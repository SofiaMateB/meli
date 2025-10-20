import { Request, Response } from "express";
import { mockRequest } from "../services/mockRequest.service.js";

export async function checkData(req: Request, res: Response) {
  const { referrer, token } = req.query;

  if (!referrer || !token) {
    return res.status(400).json({ error: "Missing referrer or token" });
  }

  try {
    // Simula llamadas a microservicios internos
    const user = await mockRequest("meli-users/1");
    const countries = await mockRequest("meli-countries");

    res.json({
      referrer,
      token,
      user,
      countries
    });
  } catch (err: any) {
    console.error("❌ Mock request error:", err.message);
    res.status(500).json({ error: "Failed to fetch mock data" });
  }
}
