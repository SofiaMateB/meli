"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkData = checkData;
const mockRequest_service_js_1 = require("../services/mockRequest.service.js");
async function checkData(req, res) {
    const { referrer, token } = req.query;
    if (!referrer || !token) {
        return res.status(400).json({ error: "Missing referrer or token" });
    }
    try {
        // Simula llamadas a microservicios internos
        const user = await (0, mockRequest_service_js_1.mockRequest)("meli-users/1");
        const countries = await (0, mockRequest_service_js_1.mockRequest)("meli-countries");
        res.json({
            referrer,
            token,
            user,
            countries
        });
    }
    catch (err) {
        console.error("❌ Mock request error:", err.message);
        res.status(500).json({ error: "Failed to fetch mock data" });
    }
}
