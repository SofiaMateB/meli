import express from "express";
import cors from "cors";
import { detectLanguage } from "./middleware/i18n.js";
import { errorHandler } from "./middleware/errorHandler.js";
import appRoutes from "./routes/app.routes.js";
import usersMock from "./routes/mocks/user.mocks.js";
import countriesMock from "./routes/mocks/countries.mocks.js";
import path from "path";
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(detectLanguage);

// Mock APIs internas
app.use("/meli-users", usersMock);
app.use("/meli-countries", countriesMock);

// Rutas principales (la app real)
app.use("/", appRoutes);

// Middleware de error global
app.use(errorHandler);


// Servir frontend compilado (React build)
/* app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});  */
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
