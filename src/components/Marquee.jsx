// Cinta negra que desfila (marquee). La lista se duplica para que el
// desplazamiento de -50% empalme sin salto.
export default function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {doubled.map((item, i) => (
          <span key={i}>{item} ·</span>
        ))}
      </div>
    </div>
  );
}
