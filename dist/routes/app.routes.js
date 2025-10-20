"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app_controller_js_1 = require("../controllers/app.controller.js");
const router = (0, express_1.Router)();
// Ruta principal simulando el proceso de verificación
router.get("/check-data", app_controller_js_1.checkData);
exports.default = router;
