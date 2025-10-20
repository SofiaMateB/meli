import { BrowserRouter, Routes, Route } from "react-router-dom";
import PurchasePage from "./pages/PurchasePage";
import ValidationPage from "./pages/ValidationPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import FinallyPage from "./pages/FinallyPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PurchasePage />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/validate" element={<ValidationPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/finally" element={<FinallyPage />} />

      </Routes>
      
    </BrowserRouter>
  );
}
