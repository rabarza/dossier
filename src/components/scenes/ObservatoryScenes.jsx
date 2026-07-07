// Mini-escenas esquemáticas del observatorio de datos. Formato basado en
// observatorios reales (OIG-CEPAL, OCEC-UDP, ComunidadMujer): ejes temáticos,
// indicadores comparados, mapas, comparadores, descargas y publicaciones.
import CountUp from "../CountUp.jsx";

function ThemesScene() {
  return (
    <div className="m-scene">
      <div className="m-toolbar">
        <span className="m-chip orange">Autonomía económica</span>
        <span className="m-chip">Educación</span>
        <span className="m-chip">Salud</span>
        <span className="m-chip">Participación</span>
      </div>
      <div className="m-grid">
        <div className="m-stat-tile"><b><CountUp to={25} suffix="%" /></b><div className="m-specs">sin ingresos propios</div></div>
        <div className="m-stat-tile"><b><CountUp to={1.8} decimals={1} suffix="×" /></b><div className="m-specs">brecha salarial</div></div>
        <div className="m-stat-tile"><b><CountUp to={62} suffix="%" /></b><div className="m-specs">participación laboral</div></div>
      </div>
      <p className="m-caption">Cada eje temático agrupa sus indicadores, como en los observatorios de referencia.</p>
    </div>
  );
}

function IndicatorsScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Personas sin ingresos propios</div>
        <div className="m-compare-row">
          <span className="m-specs">Mujeres</span>
          <div className="m-hbar"><i style={{ width: "25%" }} /></div>
          <b className="m-figure">25%</b>
        </div>
        <div className="m-compare-row">
          <span className="m-specs">Hombres</span>
          <div className="m-hbar"><i style={{ width: "10%" }} className="alt" /></div>
          <b className="m-figure">10%</b>
        </div>
        <p className="m-caption">El indicador destacado se entiende en un vistazo, con su comparación.</p>
      </div>
    </div>
  );
}

function ChartsScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Evolución 2019–2026</div>
        <div className="m-bars">
          <i style={{ height: "42%" }} />
          <i style={{ height: "55%" }} />
          <i style={{ height: "48%" }} />
          <i style={{ height: "63%" }} className="hl" />
          <i style={{ height: "70%" }} />
          <i style={{ height: "76%" }} />
        </div>
        <div className="m-tip">2022 · 63% <em>— clic para ver el detalle</em></div>
      </div>
    </div>
  );
}

function TrendScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Evolución 2019–2026</div>
        <svg className="m-linechart" viewBox="0 0 300 110" aria-hidden="true">
          <line x1="8" y1="100" x2="292" y2="100" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="100" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
          <path d="M8,88 L56,74 L104,80 L152,56 L200,62 L248,34 L292,22" fill="none" stroke="#ff4d1c" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle className="m-linedot" cx="292" cy="22" r="5" fill="#ff4d1c" stroke="#141414" strokeWidth="2" />
        </svg>
        <span className="m-chip ok">✓ La serie se dibuja con los datos del período elegido</span>
      </div>
    </div>
  );
}

function AlertsScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-alert">El indicador regional cruzó el umbral definido (62% → 68%)</div>
        <div className="m-bars">
          <i style={{ height: "44%" }} />
          <i style={{ height: "52%" }} />
          <i style={{ height: "58%" }} />
          <i style={{ height: "74%" }} className="warn" />
        </div>
        <p className="m-caption">Los umbrales se definen una vez; el observatorio avisa solo.</p>
      </div>
    </div>
  );
}

function SourcesScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-flow">
        <div className="m-flow-sources">
          <span className="m-chip">Encuestas</span>
          <span className="m-chip">Registros públicos</span>
          <span className="m-chip">Planillas propias</span>
        </div>
        <span className="m-flow-arrow">→</span>
        <div className="m-stat-tile"><b>Observatorio</b><div className="m-specs">indicadores siempre al día</div></div>
      </div>
      <p className="m-caption">Se conecta a las fuentes — los indicadores se actualizan sin trabajo manual.</p>
    </div>
  );
}

function MapScene() {
  return (
    <div className="m-scene m-split">
      <div className="m-map">
        <span className="m-region" style={{ top: "12%", left: "22%", opacity: 0.35 }} />
        <span className="m-region" style={{ top: "38%", left: "40%", opacity: 0.65 }} />
        <span className="m-region on" style={{ top: "62%", left: "26%" }} />
        <span className="m-pin on" style={{ top: "58%", left: "52%" }}>68%</span>
      </div>
      <aside className="m-drawer">
        <div className="m-drawer-title">Por región</div>
        <div className="m-legend"><i style={{ opacity: 0.3 }} /> menor a 40%</div>
        <div className="m-legend"><i style={{ opacity: 0.6 }} /> 40 – 60%</div>
        <div className="m-legend"><i /> sobre 60%</div>
        <span className="m-chip ink">Ver ficha regional</span>
      </aside>
    </div>
  );
}

function CompareScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Comparador</div>
        <div className="m-toolbar">
          <span className="m-chip ink">Valparaíso ▾</span>
          <span className="m-specs">frente a</span>
          <span className="m-chip ink">Biobío ▾</span>
        </div>
        <div className="m-compare-row"><span className="m-specs">Indicador A</span><div className="m-hbar"><i style={{ width: "64%" }} /></div><div className="m-hbar"><i style={{ width: "48%" }} className="alt" /></div></div>
        <div className="m-compare-row"><span className="m-specs">Indicador B</span><div className="m-hbar"><i style={{ width: "39%" }} /></div><div className="m-hbar"><i style={{ width: "55%" }} className="alt" /></div></div>
      </div>
    </div>
  );
}

function DownloadsScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Descarga las series</div>
        <div className="m-bill"><span className="m-series">Participación laboral por región</span><span className="m-chip orange">↓ CSV</span></div>
        <div className="m-bill"><span className="m-series">Brecha salarial 2010–2026</span><span className="m-chip orange">↓ Excel</span></div>
        <div className="m-bill"><span className="m-series">Para sistemas: consulta automática</span><span className="m-chip ink">API</span></div>
        <p className="m-caption">
          Cualquiera puede descargar los datos detrás de los gráficos, citarlos y
          reutilizarlos — esa transparencia es la que da autoridad.
        </p>
      </div>
    </div>
  );
}

function ReportsScene() {
  return (
    <div className="m-scene">
      <div className="m-grid two">
        <div className="m-card article">
          <span className="m-chip orange">PDF</span>
          <div className="m-article-title">Informe trimestral · junio 2026</div>
          <div className="m-line" style={{ width: "78%" }} />
          <div className="m-specs">Descargado 1.240 veces</div>
        </div>
        <div className="m-card article">
          <span className="m-chip orange">PDF</span>
          <div className="m-article-title">Minuta: brechas por región</div>
          <div className="m-line" style={{ width: "66%" }} />
          <div className="m-specs">Publicado el 28 de junio</div>
        </div>
      </div>
      <p className="m-caption">Los informes se publican desde el mismo panel que el resto del sitio.</p>
    </div>
  );
}

function PoliciesScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Normativas y políticas</div>
        <div className="m-milestone"><span className="m-chip ink">2021</span><div className="m-line" style={{ width: "70%" }} /></div>
        <div className="m-milestone"><span className="m-chip ink">2023</span><div className="m-line" style={{ width: "58%" }} /></div>
        <div className="m-milestone"><span className="m-chip orange">2026</span><div className="m-line" style={{ width: "76%" }} /></div>
        <p className="m-caption">El marco normativo, ordenado y enlazado a las fuentes oficiales.</p>
      </div>
    </div>
  );
}

function NewsletterScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel">
        <div className="m-panel-title">Boletín del observatorio</div>
        <div className="m-form">
          <span className="m-input">tu@correo.cl</span>
          <span className="m-btn">Suscribirme</span>
        </div>
        <span className="m-chip ok">✓ Boletín de julio con 4 indicadores actualizados</span>
      </div>
    </div>
  );
}

const scenes = {
  themes: ThemesScene,
  indicators: IndicatorsScene,
  charts: ChartsScene,
  trend: TrendScene,
  alerts: AlertsScene,
  sources: SourcesScene,
  map: MapScene,
  compare: CompareScene,
  downloads: DownloadsScene,
  reports: ReportsScene,
  policies: PoliciesScene,
  newsletter: NewsletterScene,
};

export default scenes;
