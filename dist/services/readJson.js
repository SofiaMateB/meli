"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJson = readJson;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function readJson(fileName) {
    const filePath = path_1.default.join(process.cwd(), "server", "data", fileName);
    const data = fs_1.default.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}
