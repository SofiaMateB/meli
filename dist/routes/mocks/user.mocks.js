"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const readJson_js_1 = require("../../services/readJson.js");
const router = (0, express_1.Router)();
router.get("/:id", (req, res) => {
    const users = (0, readJson_js_1.readJson)("users.json");
    const user = users.find((u) => u.id === Number(req.params.id));
    if (!user)
        return res.status(404).json({ error: "User not found" });
    res.json(user);
});
router.get("/", (req, res) => {
    const users = (0, readJson_js_1.readJson)("users.json");
    res.json(users);
});
exports.default = router;
