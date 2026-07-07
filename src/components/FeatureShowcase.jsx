import { useState } from "react";

// Escaparate interactivo: lista de funcionalidades a la izquierda; al pasar
// el cursor (o tocar) una, la ventana de la derecha dibuja una mini-interfaz
// esquemática. Un ítem puede declarar varias versiones de diseño
// (`scenes: [...]`): aparece el selector ‹ 1/2 › al pie de la ventana.
export default function FeatureShowcase({ items, scenes, domain = "ejemplo.cl" }) {
  const [active, setActive] = useState(0);
  const [variant, setVariant] = useState(0);

  const select = (i) => {
    setActive(i);
    setVariant(0);
  };

  const keys = items[active].scenes ?? [items[active].scene];
  const Scene = scenes[keys[Math.min(variant, keys.length - 1)]];

  return (
    <div className="showcase">
      <ul className="showcase-list">
        {items.map((item, i) => (
          <li key={item.label}>
            <button
              className={i === active ? "active" : ""}
              onMouseEnter={() => select(i)}
              onFocus={() => select(i)}
              onClick={() => select(i)}
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
          {keys.length > 1 && (
            <div className="mock-variants">
              <button
                aria-label="Versión anterior"
                onClick={() => setVariant((variant - 1 + keys.length) % keys.length)}
              >
                ‹
              </button>
              <span>versión {Math.min(variant, keys.length - 1) + 1} de {keys.length}</span>
              <button
                aria-label="Versión siguiente"
                onClick={() => setVariant((variant + 1) % keys.length)}
              >
                ›
              </button>
            </div>
          )}
        </div>
        <p className="showcase-hint">
          Ilustraciones esquemáticas: muestran la idea — el diseño final se hace
          a la medida de cada marca.
        </p>
      </div>
    </div>
  );
}
