import { useState } from "react";

// Botón que copia el correo al portapapeles y lo confirma en el propio botón.
// Si el navegador bloquea el portapapeles, cae al mailto de siempre.
export default function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button className="btn" onClick={copy}>
      {copied ? "✓ Correo copiado" : email}
    </button>
  );
}
