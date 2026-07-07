// Mini-escenas esquemáticas del panel de datos e indicadores. Los números
// cuentan hacia arriba al aparecer (CountUp) para que la métrica "viva".
import CountUp from "../CountUp.jsx";

function KpisScene() {
  return (
    <div className="m-scene">
      <div className="m-grid">
        <div className="m-stat-tile"><b><CountUp to={38.4} decimals={1} prefix="$" suffix="M" /></b><div className="m-specs">ventas del mes <span className="m-trend up">↑ 12%</span></div></div>
        <div className="m-stat-tile"><b><CountUp to={1842} /></b><div className="m-specs">pedidos <span className="m-trend up">↑ 6%</span></div></div>
        <div className="m-stat-tile"><b><CountUp to={3.1} decimals={1} suffix="%" /></b><div className="m-specs">devoluciones <span className="m-trend down">↓ 0,8%</span></div></div>
      </div>
      <p className="m-caption">Lo importante primero: cifras grandes que se actualizan solas.</p>
    </div>
  );
}

function KpisBarsScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Los mismos indicadores, en barras</div>
        <div className="m-compare-row"><span className="m-specs">Ventas</span><div className="m-hbar"><i style={{ width: "78%" }} /></div><b className="m-figure"><CountUp to={38.4} decimals={1} prefix="$" suffix="M" /></b></div>
        <div className="m-compare-row"><span className="m-specs">Pedidos</span><div className="m-hbar"><i style={{ width: "62%" }} /></div><b className="m-figure"><CountUp to={1842} /></b></div>
        <div className="m-compare-row"><span className="m-specs">Devol.</span><div className="m-hbar"><i style={{ width: "9%" }} className="alt" /></div><b className="m-figure"><CountUp to={3.1} decimals={1} suffix="%" /></b></div>
        <p className="m-caption">Otro patrón de diseño para el mismo dato — se elige el que le calce al equipo.</p>
      </div>
    </div>
  );
}

function TrendLineScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Evolución mensual</div>
        <svg className="m-linechart" viewBox="0 0 300 110" aria-hidden="true">
          <line x1="8" y1="100" x2="292" y2="100" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="100" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
          <path d="M8,88 L56,74 L104,80 L152,56 L200,62 L248,34 L292,22" fill="none" stroke="#ff4d1c" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle className="m-linedot" cx="292" cy="22" r="5" fill="#ff4d1c" stroke="#141414" strokeWidth="2" />
        </svg>
        <span className="m-chip ok">✓ La línea se dibuja con los datos del período elegido</span>
      </div>
    </div>
  );
}

function LiveScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Ventas por semana</div>
        <div className="m-bars">
          <i style={{ height: "38%" }} />
          <i style={{ height: "52%" }} />
          <i style={{ height: "47%" }} />
          <i style={{ height: "66%" }} />
          <i style={{ height: "58%" }} />
          <i style={{ height: "74%" }} className="hl" />
        </div>
        <span className="m-chip ok">✓ Actualizado hace 5 minutos, sin planillas a mano</span>
      </div>
    </div>
  );
}

function FiltersScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-toolbar">
          <span className="m-chip">Mes</span>
          <span className="m-chip orange">Trimestre</span>
          <span className="m-chip">Año</span>
          <span className="m-chip ink">Sucursal: Centro ▾</span>
        </div>
        <div className="m-bars">
          <i style={{ height: "44%" }} />
          <i style={{ height: "61%" }} />
          <i style={{ height: "53%" }} className="hl" />
          <i style={{ height: "70%" }} />
        </div>
        <p className="m-caption">Cambias el filtro y todo el panel responde.</p>
      </div>
    </div>
  );
}

function AlertsScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-alert">Inventario de la sucursal Norte bajo el mínimo (12 unidades)</div>
        <div className="m-bars">
          <i style={{ height: "58%" }} />
          <i style={{ height: "44%" }} />
          <i style={{ height: "22%" }} className="warn" />
          <i style={{ height: "51%" }} />
        </div>
        <p className="m-caption">Los umbrales se definen una vez; el panel avisa solo.</p>
      </div>
    </div>
  );
}

function DrillScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Trimestre 2 → detalle</div>
        <div className="m-bill"><div className="m-line" style={{ width: "56%" }} /><b className="m-figure">$14,2M</b></div>
        <div className="m-bill"><div className="m-line" style={{ width: "48%" }} /><b className="m-figure">$11,7M</b></div>
        <div className="m-bill"><div className="m-line" style={{ width: "40%" }} /><b className="m-figure">$8,9M</b></div>
        <p className="m-caption">Un clic en el gráfico abre el desglose que lo explica.</p>
      </div>
    </div>
  );
}

function ExportScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel">
        <div className="m-panel-title">Informe mensual</div>
        <div className="m-toolbar">
          <span className="m-chip orange">Exportar Excel</span>
          <span className="m-chip orange">Exportar PDF</span>
        </div>
        <span className="m-chip ok">✓ Listo para la reunión de directorio</span>
      </div>
    </div>
  );
}

function RolesScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Acceso por roles</div>
        <div className="m-bill"><span className="m-specs">Dirección</span><span className="m-chip ink">Ve todo</span></div>
        <div className="m-bill"><span className="m-specs">Jefa de tienda</span><span className="m-chip">Solo su sucursal</span></div>
        <div className="m-bill"><span className="m-specs">Contabilidad</span><span className="m-chip">Solo finanzas</span></div>
      </div>
    </div>
  );
}

function SourcesScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-flow">
        <div className="m-flow-sources">
          <span className="m-chip">Planillas</span>
          <span className="m-chip">Base de datos</span>
          <span className="m-chip">Sistema de ventas</span>
        </div>
        <span className="m-flow-arrow">→</span>
        <div className="m-stat-tile"><b>Panel</b><div className="m-specs">una sola fuente de verdad</div></div>
      </div>
      <p className="m-caption">El panel se conecta a lo que ya usas — nadie digita dos veces.</p>
    </div>
  );
}

const scenes = {
  kpis: KpisScene,
  kpisBars: KpisBarsScene,
  trend: TrendLineScene,
  live: LiveScene,
  filters: FiltersScene,
  alerts: AlertsScene,
  drill: DrillScene,
  export: ExportScene,
  roles: RolesScene,
  sources: SourcesScene,
};

export default scenes;
