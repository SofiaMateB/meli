import { useEffect, useState } from "react";
import { translations, type Lang } from "../i18n/translations";

export function useI18n() {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    fetch("/api/lang")
      .then(res => res.json())
      .then(data => setLang(data.lang || "es"))
      .catch(() => setLang("es"));
  }, []);

  const t = translations[lang];
  return { t, lang };
}
