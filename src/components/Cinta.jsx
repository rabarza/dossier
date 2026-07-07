// Cinta negra que desfila (marquee). Se duplica la lista para que el
// desplazamiento de -50% empalme sin salto.
export default function Cinta({ items }) {
  const doble = [...items, ...items];
  return (
    <div className="cinta" aria-hidden="true">
      <div className="pista">
        {doble.map((item, i) => (
          <span key={i}>{item} ·</span>
        ))}
      </div>
    </div>
  );
}
