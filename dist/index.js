"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const i18n_js_1 = require("./middleware/i18n.js");
const errorHandler_js_1 = require("./middleware/errorHandler.js");
const app_routes_js_1 = __importDefault(require("./routes/app.routes.js"));
const user_mocks_js_1 = __importDefault(require("./routes/mocks/user.mocks.js"));
const countries_mocks_js_1 = __importDefault(require("./routes/mocks/countries.mocks.js"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(i18n_js_1.detectLanguage);
// Mock APIs internas
app.use("/meli-users", user_mocks_js_1.default);
app.use("/meli-countries", countries_mocks_js_1.default);
// Rutas principales (la app real)
app.use("/", app_routes_js_1.default);
// Middleware de error global
app.use(errorHandler_js_1.errorHandler);
// Servir frontend compilado (React build)
/* app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});  */
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
