import { useState } from "react";

// Ficha expandible de un servicio: cerrada muestra título y resumen;
// abierta, la lista de funcionalidades, la evidencia y las capturas.
export default function ServiceCard({ service, demoUrl }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={`service-card${open ? " open" : ""}`}>
      <button
        className="service-head"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div>
          <h3>{service.title}</h3>
          <p>{service.summary}</p>
        </div>
        <span className="toggle" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className={`service-panel${service.images ? "" : " no-shots"}`}>
          <div>
            <ul className="check-list">
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <p className="evidence">{service.evidence}</p>
            {service.demo && (
              <a className="chip-ink" href={demoUrl}>Probar la demo navegable →</a>
            )}
          </div>
          {service.images && (
            <div className="service-shots">
              {service.images.map((image) => (
                <div className="frame" key={image}>
                  <img src={image} alt={service.alt} loading="lazy" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
