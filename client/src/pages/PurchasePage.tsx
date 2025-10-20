import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { getUserData } from "../api/users";
import { useI18n } from "../hooks/useI18n";
import "../styles/global.css";

import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que esto está importado
import Summary from "../components/ResumAccount";


export default function PurchasePage() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    getUserData().then(setUser);
  }, []);

  const handleContinue = () => {
    navigate(`/validate?referrer=/confirmation&token=123`);
  };

  if (!user) return <p className="text-center mt-5">Cargando...</p>;
  return (
    <>
      <Navbar />
      <div id="shipping_step_container" className="bf-ui-core-container bf-ui-core-container--flex-direction--column bf-ui-core-container--flex-align--center bf-ui-core-container--flex-text_align--left bf-ui-core-container--flex-justify--center bf-ui-core-container--flex-height--match_parent bf-ui-core-container--flex-width--auto bf-ui-core-container--flex-wrap--no-wrap bf-ui-core-container--background-gray070Solid" aria-hidden="false" data-js="container" data-id="shipping_step_container" data-testid="shipping_step_container">
            <div className="container mt-5 cont">
                  
                  <div className="row ">
                    {/* Left Column - Shipping Info */}
                    <div className="col-md-7 ">
                      <h4 className="andes-typography">Revisa cuándo llega tu compra</h4>
                           <p className="font-weight-normal p-2">
                            <img src="/icons/add.svg" width="18px" alt="icon" className="icon-style" />
                            <span className="text-bold">Envío a Calle 34 A SUR #99A-45</span>
                          </p>
                                              
                        <ul className="list-group">
            
                          <li className="fw-bold list-group-item d-flex justify-content-between align-items-center andes-typography--type-body andes-typography--size-m">
                            <div> Envio 1 <img src="https://http2.mlstatic.com/storage/buyingflow-core-assets-web/bf-assets/svg/bf_v6_full.svg" alt="" height="16px"></img></div>
                          <div className="andes-thumbnail andes-thumbnail--circle andes-thumbnail--40 bf-ui-core-thumbnail"><img aria-hidden="true" alt="Hidrolavadora Inalambrica De 2 Baterias De 48w Negro" src="https://http2.mlstatic.com/D_680549-MCO93547183234_102025-O.jpg" data-testid="MCO2724217040"/></div>

                          </li>             
                            <li className="pb-3 custm-l list-group-item d-flex justify-content-between align-items-center">
                          <div className="form-check">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                              <label className="form-check-label andes-typography--type-body andes-typography--size-m" for="flexRadioDefault2">
                              Mañana
                              </label>
                            </div>                         
                              <span className="text-success">Gratis</span>
                            </li>
                          
                          </ul>
                             <ul className="list-group mt-4">
            
                          <li className="fw-bold list-group-item d-flex justify-content-between align-items-center andes-typography--type-body andes-typography--size-m">Envio 2
                          <div className="andes-thumbnail andes-thumbnail--circle andes-thumbnail--40 bf-ui-core-thumbnail">
                            <img aria-hidden="true" alt="Vidrio Templado Curvo Uv Para Motorola Edge 40 Neo" src="https://http2.mlstatic.com/D_971991-MCO75810821292_042024-O.jpg" data-testid="MCO1416556501"/></div>

                          </li>             
                            <li className="pb-3 custm-l list-group-item d-flex justify-content-between align-items-center">
                          <div className="form-check">
                              <input className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" checked/>
                              <label className="form-check-label andes-typography--type-body andes-typography--size-m" for="flexRadioDefault2">
                              Mañana
                              </label>
                            </div>                         
                              <span>$10.600</span>
                            </li>
                          
                          </ul>
                          <div className="d-flex justify-content-end">
                           <button className="mt-3 a-button andes-button bf-ui-core-button bf-ui-core-button--margin--top-spacing16 bf-ui-core-button__simple bf-ui-core-button__hierarchy--loud bf-ui-core-button__size--large andes-button--large andes-button--loud" onClick={handleContinue}>Continuar</button>
                          </div>
                    </div>
                    
                

                    {/* Right Column - Purchase Summary */}
                 <Summary gy="gy-5" col="true"/>
                  </div>
                </div>
     </div>
           <Footer />

     </>
      );
}
