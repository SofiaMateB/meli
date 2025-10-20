import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useI18n } from "../hooks/useI18n";

export default function FinallyPage() {
  const { t } = useI18n();

  return (
 <>
      <Navbar />
      <div className="container container-card text-center">
        <h4 className="mb-3 text-success">{t.success}</h4>
        <p>Gracias por tu compra. Recibirás un correo con los detalles del pedido.</p>
      </div>
      <Footer/>
    </>
    )
    }