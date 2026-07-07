// Mini-escenas esquemáticas del panel de datos e indicadores.

function KpisScene() {
  return (
    <div className="m-scene">
      <div className="m-grid">
        <div className="m-stat-tile"><b>$38,4M</b><div className="m-specs">ventas del mes <span className="m-trend up">↑ 12%</span></div></div>
        <div className="m-stat-tile"><b>1.842</b><div className="m-specs">pedidos <span className="m-trend up">↑ 6%</span></div></div>
        <div className="m-stat-tile"><b>3,1%</b><div className="m-specs">devoluciones <span className="m-trend down">↓ 0,8%</span></div></div>
      </div>
      <p className="m-caption">Lo importante primero: cifras grandes, con su tendencia.</p>
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
  live: LiveScene,
  filters: FiltersScene,
  alerts: AlertsScene,
  drill: DrillScene,
  export: ExportScene,
  roles: RolesScene,
  sources: SourcesScene,
};

export default scenes;
