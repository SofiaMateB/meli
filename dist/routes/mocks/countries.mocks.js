"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const readJson_js_1 = require("../../services/readJson.js");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    const countries = (0, readJson_js_1.readJson)("countries.json");
    res.json(countries);
});
exports.default = router;
