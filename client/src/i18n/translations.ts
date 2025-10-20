export type Lang = "es" | "pt" | "en";

export const translations: Record<Lang, any> = {
  es: {
    buyTitle: "Compra de producto",
    continue: "Continuar",
    back: "Atrás",
    validationTitle: "Actualización de datos",
    confirm: "Confirmar compra",
    captcha: "Completa el captcha",
    success: "Compra confirmada con éxito",
    error: "Error en la validación"
  },
  pt: {
    buyTitle: "Compra de produto",
    continue: "Continuar",
    back: "Voltar",
    validationTitle: "Validação de dados",
    confirm: "Confirmar compra",
    captcha: "Complete o captcha",
    success: "Compra confirmada com sucesso",
    error: "Erro na validação"
  },
  en: {
    buyTitle: "Product purchase",
    continue: "Continue",
    back: "Back",
    validationTitle: "Data validation",
    confirm: "Confirm purchase",
    captcha: "Complete the captcha",
    success: "Purchase confirmed successfully",
    error: "Validation error"
  }
};
