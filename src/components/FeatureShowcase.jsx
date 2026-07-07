import { useState } from "react";

// Escaparate interactivo: lista de funcionalidades a la izquierda; al pasar
// el cursor (o tocar) una, la ventana de la derecha dibuja una mini-interfaz
// esquemática de cómo se vería. `scenes` es un mapa clave → componente.
export default function FeatureShowcase({ items, scenes, domain = "ejemplo.cl" }) {
  const [active, setActive] = useState(0);
  const Scene = scenes[items[active].scene];

  return (
    <div className="showcase">
      <ul className="showcase-list">
        {items.map((item, i) => (
          <li key={item.label}>
            <button
              className={i === active ? "active" : ""}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="showcase-stage">
        <div className="mock">
          <div className="mock-bar"><i /><i /><i /><span>{domain}</span></div>
          <div className="mock-body">
            <Scene />
          </div>
        </div>
        <p className="showcase-hint">
          Ilustraciones esquemáticas: muestran la idea — el diseño final se hace
          a la medida de cada marca.
        </p>
      </div>
    </div>
  );
}
