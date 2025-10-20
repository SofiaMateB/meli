import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
  onVerify: (token: string | null) => void;
}

export default function Captcha({ onVerify }: CaptchaProps) {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleChange = (value: string | null) => {
    setCaptchaValue(value);
    onVerify(value);
  };

  return (
    <div className="mt-3 d-flex justify-content-center">
      <ReCAPTCHA
        sitekey="6LdsXvArAAAAAJNx8b1rAb4IWmt2IKidxprlEbsM" // ⚠️ reemplaza con tu clave pública de Google reCAPTCHA
        onChange={handleChange}
      />
    </div>
  );
}
