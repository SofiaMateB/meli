"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectLanguage = detectLanguage;
function detectLanguage(req, res, next) {
    const host = req.hostname;
    const queryLang = req.query.lang;
    if (queryLang) {
        req.headers["accept-language"] = queryLang;
    }
    else if (host.includes("mercadolibre.com.br")) {
        req.headers["accept-language"] = "pt";
    }
    else if (host.includes("mercadolibre.com.ar")) {
        req.headers["accept-language"] = "es";
    }
    else {
        req.headers["accept-language"] = "en";
    }
    console.log("🛰️ URL:", req.originalUrl);
    console.log("language detected:", req.headers["accept-language"]);
    next();
}
