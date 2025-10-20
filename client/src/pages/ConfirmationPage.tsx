import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Summary from "../components/ResumAccount";
import { useI18n } from "../hooks/useI18n";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getUserData } from "../api/users";


export default function ConfirmationPage() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [user, setUser] = useState<any>(null)
  const handleContinue = () => {
    navigate(`/finally`);
  };
   useEffect(() => {
    async function fetchUser() {
      try {
      const savedUser = localStorage.getItem("userData");
      let user;

      if (savedUser) {
        user = JSON.parse(savedUser); // Usa los datos locales si ya existen
      } else {
        user = await getUserData();
        user[0]; // Caso inicial (mock API)
      }

      setUser(user); // Guarda el usuario en el estado
    } catch (error) {
      console.error("Error al cargar datos del usuario:", error);
    }
  }
    fetchUser();
  }, []);

  return (
    <>
      <Navbar />
      <div id="shipping_step_container" className="bf-ui-core-container bf-ui-core-container--flex-direction--column bf-ui-core-container--flex-align--center bf-ui-core-container--flex-text_align--left bf-ui-core-container--flex-justify--center bf-ui-core-container--flex-height--match_parent bf-ui-core-container--flex-width--auto bf-ui-core-container--flex-wrap--no-wrap bf-ui-core-container--background-gray070Solid" aria-hidden="false" data-js="container" data-id="shipping_step_container" data-testid="shipping_step_container">
        <div className="container mt-5 cont">

          <div className="row ">
            {/* Left Column - Shipping Info */}
            <div className="col-md-6 ">
              <h4 className="andes-typography mb-3">Elige como pagar</h4>
              <p className="mb-3 andes-typography andes-typography--type-body andes-typography--size-s andes-typography--color-primary andes-typography--weight-semibold">Recomendados
              </p>
              <ul className="list-group mb-3">

                <li className="pb-3 custm-l list-group-item d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label andes-typography--type-body andes-typography--size-m" for="flexRadioDefault2">
                     <img aria-hidden="true" alt="" src="https://http2.mlstatic.com/storage/buyingflow-core-assets-web/bf-assets/svg/bf_v6_pse.svg"></img> Transferencia  con PSE
                    </label>
                  </div>
                </li>

                <li className="pb-3 custm-l list-group-item d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label andes-typography--type-body andes-typography--size-m" for="flexRadioDefault2">
                      <img aria-hidden="true" alt="" src="https://http2.mlstatic.com/storage/buyingflow-core-assets-web/bf-assets/svg/bf_v6_master.svg"></img>Bancolombia
                    </label>
                  </div>
                </li>
                <li className="pb-3 custm-l list-group-item d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label andes-typography--type-body andes-typography--size-m" for="flexRadioDefault2">
                      <img aria-hidden="true" alt="" src="https://http2.mlstatic.com/storage/buyingflow-core-assets-web/bf-assets/svg/bf_v6_efecty.svg"></img>Efecty
                    </label>
                  </div>
                </li>
              </ul>
             <p className="mb-3 andes-typography andes-typography--type-body andes-typography--size-s andes-typography--color-primary andes-typography--weight-semibold">Tarjetas</p>

              <ul className="list-group">

                <li className="pb-3 custm-l list-group-item d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label andes-typography--type-body andes-typography--size-m" for="flexRadioDefault2">
                     <img aria-hidden="true" alt="" src="https://http2.mlstatic.com/storage/buyingflow-core-assets-web/bf-assets/svg/bf_v6_credito_noborde.svg"></img> Nuevas tarjeta de credito
                    </label>
                  </div>
                </li>

                <li className="pb-3 custm-l list-group-item d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label andes-typography--type-body andes-typography--size-m" for="flexRadioDefault2">
                     <img aria-hidden="true" alt="" src="https://http2.mlstatic.com/storage/buyingflow-core-assets-web/bf-assets/svg/bf_v6_debito_noborde.svg"></img>Nueva tarjeta de debito
                    </label>
                  </div>
                </li>
              
              </ul>
              <div className="d-flex justify-content-end">
                <button className="mt-3 a-button andes-button bf-ui-core-button bf-ui-core-button--margin--top-spacing16 bf-ui-core-button__simple bf-ui-core-button__hierarchy--loud bf-ui-core-button__size--large andes-button--large andes-button--loud" onClick={handleContinue}>Continuar</button>
              </div>
            </div>

            {/* Right Column - Purchase Summary */}
            <div className="col-md-6 ">
            <Summary gy="gy-4" col=""/>
                 <div className="list-group gy-2 ms-5 mt-5">
                     <ul className="list-group">
            
                          <li className="list-group-item">  <h5 className="andes-typography--type-body andes-typography--size-m" >Forma de entrega</h5></li>             
                            <li className="custm-l list-group-item d-flex justify-content-between align-items-center andes-typography--type-body andes-typography--size-m" >
                            Nombre
                              <span className="andes-typography--size-m">{user?.name || ''}</span>
                            </li>
                            <li className="custm-l list-group-item d-flex justify-content-between align-items-center andes-typography--type-body andes-typography--size-m" >
                            Direccion
                              <span className="andes-typography--size-m">{user?.address || ''}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center andes-typography--type-body andes-typography--size-m">
                              Pais
                              <span>{user?.country || ''}</span>
                            </li>
                           
                          </ul>
     </div>
               </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
