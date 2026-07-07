// Mini-escenas esquemáticas del portal con buscador (propiedades como caso
// tipo). Mismas primitivas .m-* del sistema; marca neutra.

function Property({ dimmed, tag, heart, specs = "3 dorm · 2 baños · 85 m²" }) {
  return (
    <div className={`m-card${dimmed ? " dimmed" : ""}`}>
      <div className="m-thumb" />
      {tag && <span className={`m-flag${tag === "Vendida" ? " sold" : ""}`}>{tag}</span>}
      {heart && <span className={`m-heart${heart === "on" ? " on" : ""}`}>{heart === "on" ? "♥" : "♡"}</span>}
      <div className="m-line" style={{ width: "72%" }} />
      <div className="m-specs">{specs}</div>
      <div className="m-price">UF 4.200</div>
    </div>
  );
}

function FiltersScene() {
  return (
    <div className="m-scene">
      <div className="m-toolbar">
        <span className="m-chip ink">Ñuñoa ▾</span>
        <span className="m-chip ink">Departamento ▾</span>
        <span className="m-chip ink">UF 3.000–5.000 ▾</span>
        <span className="m-chip orange">Buscar</span>
      </div>
      <div className="m-grid">
        <Property />
        <Property />
        <Property dimmed />
      </div>
      <p className="m-caption">Los filtros se combinan y los resultados responden al instante.</p>
    </div>
  );
}

function MapScene() {
  return (
    <div className="m-scene m-split">
      <div className="m-map">
        <span className="m-pin" style={{ top: "22%", left: "18%" }}>UF 3.9</span>
        <span className="m-pin on" style={{ top: "48%", left: "52%" }}>UF 4.2</span>
        <span className="m-pin" style={{ top: "68%", left: "30%" }}>UF 4.8</span>
        <span className="m-pin" style={{ top: "30%", left: "72%" }}>UF 5.1</span>
      </div>
      <aside className="m-drawer">
        <div className="m-thumb" />
        <div className="m-line" style={{ width: "80%" }} />
        <div className="m-specs">3 dorm · 2 baños · 85 m²</div>
        <div className="m-price">UF 4.200</div>
        <span className="m-btn">Ver ficha</span>
      </aside>
    </div>
  );
}

function DetailScene() {
  return (
    <div className="m-scene m-split">
      <div className="m-gallery">
        <div className="m-thumb big" />
        <div className="m-gallery-strip">
          <div className="m-thumb tiny" />
          <div className="m-thumb tiny" />
          <div className="m-thumb tiny" />
          <div className="m-thumb tiny" />
        </div>
      </div>
      <aside className="m-drawer">
        <div className="m-drawer-title">Depto en Ñuñoa</div>
        <div className="m-specs">3 dorm · 2 baños · 85 m² · piso 7</div>
        <div className="m-line" style={{ width: "90%" }} />
        <div className="m-line" style={{ width: "75%" }} />
        <div className="m-price">UF 4.200</div>
        <span className="m-btn">Contactar</span>
      </aside>
    </div>
  );
}

function TagsScene() {
  return (
    <div className="m-scene">
      <div className="m-grid">
        <Property tag="Nueva" />
        <Property tag="Oportunidad" />
        <Property tag="Vendida" dimmed />
      </div>
      <p className="m-caption">Etiquetas administrables: destacadas, rebajadas, vendidas.</p>
    </div>
  );
}

function VisitScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel">
        <div className="m-panel-title">Agendar visita</div>
        <div className="m-toolbar">
          <span className="m-chip">Jue 9</span>
          <span className="m-chip orange">Vie 10</span>
          <span className="m-chip">Sáb 11</span>
        </div>
        <div className="m-form">
          <span className="m-input">tu@correo.cl</span>
          <span className="m-btn">Confirmar</span>
        </div>
        <span className="m-chip ok">✓ Visita agendada — te llegó el detalle al correo</span>
      </div>
    </div>
  );
}

function FavoritesScene() {
  return (
    <div className="m-scene">
      <div className="m-grid">
        <Property heart="on" />
        <Property heart="on" />
        <Property heart="off" />
      </div>
      <div className="m-comparebar">
        <span>2 propiedades guardadas</span>
        <span className="m-btn">Comparar lado a lado</span>
      </div>
    </div>
  );
}

function SortScene() {
  return (
    <div className="m-scene">
      <div className="m-toolbar between">
        <span className="m-chip ink">Ordenar: precio ↓</span>
        <span className="m-chip">128 resultados</span>
      </div>
      <div className="m-grid">
        <Property />
        <Property />
        <Property />
      </div>
      <div className="m-pager">
        <span className="on">1</span><span>2</span><span>3</span><span>…</span><span>11</span>
      </div>
    </div>
  );
}

function MobileScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-phone">
        <div className="m-phone-bar" />
        <div className="m-toolbar"><span className="m-chip ink">Ñuñoa ▾</span><span className="m-chip orange">Buscar</span></div>
        <div className="m-card"><div className="m-thumb" /><div className="m-line" style={{ width: "70%" }} /><div className="m-price">UF 4.200</div></div>
        <div className="m-card"><div className="m-thumb" /><div className="m-line" style={{ width: "60%" }} /></div>
      </div>
      <p className="m-caption">La mayoría busca desde el teléfono: ahí se diseña primero.</p>
    </div>
  );
}

const scenes = {
  filters: FiltersScene,
  map: MapScene,
  detail: DetailScene,
  tags: TagsScene,
  visit: VisitScene,
  favorites: FavoritesScene,
  sort: SortScene,
  mobile: MobileScene,
};

export default scenes;
