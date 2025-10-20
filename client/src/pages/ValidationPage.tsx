import { useSearchParams, useNavigate } from "react-router-dom";
import { useI18n } from "../hooks/useI18n";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Captcha from "../components/Captcha";
import { getUserData } from "../api/users";
import { getCountries } from "../api/countries";
import { useFormik } from "formik";
import Select from "react-select";
import Footer from "../components/Footer";
import Summary from "../components/ResumAccount";
import * as Yup from "yup";
import "../styles/global.css";

export default function ValidationPage() {
  const { t } = useI18n();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [countries, setCountries] = useState<any[]>([]);
  const [captchaOk, setCaptchaOk] = useState(false);
  const referrer = searchParams.get("referrer") || "/";

  //Esquema de validación con Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es obligatorio"),
    address: Yup.string().required("La dirección es obligatoria"),
    country: Yup.string().required("El país es obligatorio"),
  });

  //Inicialización de Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      country: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (!captchaOk) {
        alert("Por favor, verifica el captcha antes de continuar.");
        return;
      }
      console.log("Datos validados:", values);
      navigate(`/confirmation?referrer=${referrer}&token=123`);
    },
  });

  //  Cargar datos iniciales
  useEffect(() => {
    async function fetchData() {
      const [user, countriesList] = await Promise.all([
        getUserData(),
        getCountries(),
      ]);

      formik.setValues({
        name: user[0].name || "",
        address: user[0].address || "",
        country: user[0].country || "",
      });

      setCountries(countriesList);
    }
    fetchData();
  }, []);

  const handleBack = () => navigate("/");

  return (
    <>
      <Navbar />
      <div
        id="shipping_step_container"
        className="bf-ui-core-container bf-ui-core-container--flex-direction--column bf-ui-core-container--flex-align--center bf-ui-core-container--flex-text_align--left bf-ui-core-container--flex-justify--center bf-ui-core-container--flex-height--match_parent bf-ui-core-container--flex-width--auto bf-ui-core-container--flex-wrap--no-wrap bf-ui-core-container--background-gray070Solid"
        aria-hidden="false"
      >
        <div className="container  cont mt-5 mb-3">
          <h4 className="andes-typography andes-typography--type-body andes-typography--size-m mb-3">Ya casi llegamos...Actualiza tus datos de contacto</h4>
          <div className="row">
            <div className="container card col-md-7 p-4">
             <div className="card-header">
              <h4 className=" andes-typography--type-body andes-typography--size-m">
                {t.validationTitle}
              </h4>
            </div>
              <form onSubmit={formik.handleSubmit} className="p-3">
                {/* Nombre */}
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    className={`form-control ${
                      formik.touched.name && formik.errors.name ? "is-invalid" : ""
                    }`}
                    name="name"
                    value={formik.values.name}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}

                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="invalid-feedback">{formik.errors.name}</div>
                  )}
                </div>

                {/* País */}
                <div className="mb-3">
                  <label className="form-label">País</label>
                  <Select
                    options={countries.map((c) => ({ value: c.name, label: c.name }))}
                    value={
                      formik.values.country
                        ? { value: formik.values.country, label: formik.values.country }
                        : null
                    }
                    onChange={(option) =>
                      formik.setFieldValue("country", option ? option.value : "")
                    }
                    onBlur={() => formik.setFieldTouched("country", true)}
                    placeholder="Selecciona un país"
                    isSearchable
                    classNamePrefix="select"
                  />
                  {formik.touched.country && formik.errors.country && (
                    <div className="text-danger small mt-1">{formik.errors.country}</div>
                  )}
                </div>

                {/* Dirección */}
                <div className="mb-3">
                  <label className="form-label">Dirección</label>
                  <input
                    className={`form-control ${
                      formik.touched.address && formik.errors.address
                        ? "is-invalid"
                        : ""
                    }`}
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.address && formik.errors.address && (
                    <div className="invalid-feedback">{formik.errors.address}</div>
                  )}
                </div>

                {/* Captcha */}
                <Captcha onVerify={() => setCaptchaOk(true)} />

                {/* Botones */}
                <div className="d-flex justify-content-between mt-4">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleBack}
                  >
                    {t.back}
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {t.confirm}
                  </button>
                </div>
              </form>
            </div>

            <Summary gy="gy-2" col="true" />
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
