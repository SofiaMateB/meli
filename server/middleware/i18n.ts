import { Request, Response, NextFunction } from "express";

export function detectLanguage(req: Request, res: Response, next: NextFunction) {
  const host = req.hostname;
  const queryLang = req.query.lang as string;

  if (queryLang) {
    req.headers["accept-language"] = queryLang;
  } 
  else if (host.includes("mercadolibre.com.br")) {
    req.headers["accept-language"] = "pt";
  } else if (host.includes("mercadolibre.com.ar")) {
    req.headers["accept-language"] = "es";
  } else {
    req.headers["accept-language"] = "en";
  }
    console.log("🛰️ URL:", req.originalUrl);
  console.log("language detected:", req.headers["accept-language"]);
  next();
}
