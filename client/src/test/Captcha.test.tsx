import { render, screen, fireEvent } from "@testing-library/react";
import Captcha from "../components/Captcha";

// 🧩 Mock del componente real de Google reCAPTCHA
jest.mock("react-google-recaptcha", () => {
  return function MockReCAPTCHA({ onChange }: any) {
    return (
      <button data-testid="mock-recaptcha" onClick={() => onChange("mock-token")}>
        Simular CAPTCHA
      </button>
    );
  };
});

describe("Captcha component", () => {
  test("ejecuta onVerify cuando se simula el captcha", () => {
    const onVerify = jest.fn();
    render(<Captcha onVerify={onVerify} />);

    const captchaButton = screen.getByTestId("mock-recaptcha");
    fireEvent.click(captchaButton);

    expect(onVerify).toHaveBeenCalledTimes(1);
  });
});
