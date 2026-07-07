// Mini-escenas esquemáticas del sitio institucional / figura pública.
// Secciones basadas en el registro de sitios parlamentarios chilenos
// (julio 2026). Varias tienen versiones de diseño (selector ‹ › en la ventana).
import CountUp from "../CountUp.jsx";

// Silueta humana dibujada (SVG propio) para los retratos esquemáticos.
function HumanAvatar({ size = 74 }) {
  return (
    <svg className="m-avatar-svg" style={{ width: size, height: size }} viewBox="0 0 80 80" aria-hidden="true">
      <circle cx="40" cy="40" r="37" fill="#f0ece0" stroke="currentColor" strokeWidth="3" />
      <circle cx="40" cy="31" r="12" fill="#fff" stroke="currentColor" strokeWidth="3" />
      <path d="M17 68 C 21 49, 59 49, 63 68" fill="#fff" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

/* ---------- Biografía: dos versiones de diseño ---------- */
function BioScene() {
  return (
    <div className="m-scene m-split">
      <div className="m-bio">
        <HumanAvatar />
        <div className="m-line" style={{ width: "60%" }} />
        <div className="m-specs">Diputada · Distrito de ejemplo</div>
      </div>
      <aside className="m-drawer">
        <div className="m-drawer-title">Trayectoria</div>
        <div className="m-milestone"><span className="m-chip ink">2014</span><div className="m-line" style={{ width: "72%" }} /></div>
        <div className="m-milestone"><span className="m-chip ink">2018</span><div className="m-line" style={{ width: "60%" }} /></div>
        <div className="m-milestone"><span className="m-chip orange">2026</span><div className="m-line" style={{ width: "80%" }} /></div>
      </aside>
    </div>
  );
}

function BioBannerScene() {
  return (
    <div className="m-scene">
      <div className="m-banner">
        <HumanAvatar size={64} />
        <div className="m-banner-text">
          <div className="m-line" style={{ width: "50%" }} />
          <div className="m-toolbar">
            <span className="m-chip ink">Distrito 9</span>
            <span className="m-chip">Comisión de Hacienda</span>
            <span className="m-chip">2 períodos</span>
          </div>
        </div>
      </div>
      <div className="m-quote">"El trabajo se demuestra en terreno, no en las redes."</div>
      <p className="m-caption">Misma biografía, otro patrón de diseño: banner con cita destacada.</p>
    </div>
  );
}

/* ---------- Proyectos de ley ---------- */
function BillsScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Proyectos de ley</div>
        <div className="m-bill">
          <div className="m-line" style={{ width: "62%" }} />
          <span className="m-chip ok">Publicada como ley</span>
        </div>
        <div className="m-bill">
          <div className="m-line" style={{ width: "70%" }} />
          <span className="m-chip orange">En tramitación</span>
        </div>
        <div className="m-bill">
          <div className="m-line" style={{ width: "54%" }} />
          <span className="m-chip">Ingresado</span>
        </div>
        <p className="m-caption">Cada proyecto con su estado real, tomado de la tramitación oficial.</p>
      </div>
    </div>
  );
}

/* ---------- Indicadores de gestión ---------- */
function ManagementScene() {
  return (
    <div className="m-scene">
      <div className="m-grid">
        <div className="m-stat-tile"><b><CountUp to={98} suffix="%" /></b><div className="m-specs">asistencia a sala</div></div>
        <div className="m-stat-tile"><b><CountUp to={14} /></b><div className="m-specs">proyectos presentados</div></div>
        <div className="m-stat-tile"><b><CountUp to={128} /></b><div className="m-specs">audiencias atendidas</div></div>
      </div>
      <p className="m-caption">Gestión con números a la vista — transparencia que se nota.</p>
    </div>
  );
}

/* ---------- Prensa: notas y videos ---------- */
function PressScene() {
  return (
    <div className="m-scene">
      <div className="m-grid two">
        <div className="m-card article">
          <div className="m-video">
            <div className="m-thumb" />
            <span className="m-play">▶</span>
            <span className="m-duration">2:14</span>
          </div>
          <div className="m-article-title">Entrevista en el matinal sobre la sequía</div>
          <div className="m-specs">Canal 9 · 2 de julio</div>
        </div>
        <div className="m-card article">
          <span className="m-chip ink">Prensa escrita</span>
          <div className="m-article-title">"La reforma que cambió la discusión hídrica"</div>
          <div className="m-line" style={{ width: "76%" }} />
          <div className="m-specs">El Diario · 28 de junio</div>
        </div>
      </div>
      <p className="m-caption">Notas escritas y videos conviven en el mismo archivo de prensa.</p>
    </div>
  );
}

/* ---------- Agenda ---------- */
function AgendaScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Agenda pública</div>
        <div className="m-milestone"><span className="m-chip orange">Mié 8</span><div><b className="m-event">Sesión de comisión</b><div className="m-specs">Congreso, Valparaíso</div></div></div>
        <div className="m-milestone"><span className="m-chip ink">Vie 10</span><div><b className="m-event">Reunión con dirigentes</b><div className="m-specs">Sede distrital</div></div></div>
        <div className="m-milestone"><span className="m-chip ink">Mar 14</span><div><b className="m-event">Visita a terreno</b><div className="m-specs">Por confirmar</div></div></div>
      </div>
    </div>
  );
}

/* ---------- Noticias, columnas y opinión: dos versiones ---------- */
function NewsPhotoScene() {
  return (
    <div className="m-scene">
      <div className="m-grid two">
        <div className="m-card article">
          <div className="m-carousel">
            <div className="m-thumb" />
            <span className="m-car-arrow left">‹</span>
            <span className="m-car-arrow right">›</span>
            <span className="m-dots"><i className="on" /><i /><i /></span>
          </div>
          <span className="m-chip ink">Noticia</span>
          <div className="m-article-title">Nueva sede de atención abre sus puertas</div>
        </div>
        <div className="m-card article">
          <span className="m-chip ink">Columna</span>
          <div className="m-article-title">El agua del valle no puede seguir esperando</div>
          <div className="m-line" style={{ width: "82%" }} />
          <div className="m-line" style={{ width: "64%" }} />
        </div>
      </div>
      <p className="m-caption">Las fotos aceptan carrusel — varias imágenes por nota.</p>
    </div>
  );
}

function NewsListScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Últimas publicaciones</div>
        <div className="m-bill"><span className="m-chip ink">Noticia</span><div className="m-line" style={{ width: "58%" }} /><span className="m-specs">2 jul</span></div>
        <div className="m-bill"><span className="m-chip">Columna</span><div className="m-line" style={{ width: "48%" }} /><span className="m-specs">28 jun</span></div>
        <div className="m-bill"><span className="m-chip">Opinión</span><div className="m-line" style={{ width: "52%" }} /><span className="m-specs">15 jun</span></div>
        <p className="m-caption">Misma sección, otro patrón: listado compacto tipo archivo.</p>
      </div>
    </div>
  );
}

/* ---------- Boletín ---------- */
function NewsletterScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel">
        <div className="m-panel-title">Boletín distrital</div>
        <div className="m-form">
          <span className="m-input">tu@correo.cl</span>
          <span className="m-btn">Suscribirme</span>
        </div>
        <span className="m-chip ok">✓ Boletín de julio enviado a 3.180 vecinos</span>
      </div>
    </div>
  );
}

/* ---------- Atención ciudadana: seguimiento y buzón de iniciativas ---------- */
function CitizenScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Atención ciudadana</div>
        <div className="m-bill"><div className="m-line" style={{ width: "58%" }} /><span className="m-chip ok">Respondida</span></div>
        <div className="m-bill"><div className="m-line" style={{ width: "66%" }} /><span className="m-chip orange">En proceso</span></div>
        <div className="m-bill"><div className="m-line" style={{ width: "50%" }} /><span className="m-chip">Recibida</span></div>
        <p className="m-caption">Cada solicitud queda con número de seguimiento y estado visible.</p>
      </div>
    </div>
  );
}

function InitiativesScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel wide">
        <div className="m-panel-title">Buzón de iniciativas populares</div>
        <div className="m-bill"><span className="m-vote">▲ 234</span><div className="m-line" style={{ width: "56%" }} /><span className="m-chip orange">En estudio</span></div>
        <div className="m-bill"><span className="m-vote">▲ 187</span><div className="m-line" style={{ width: "48%" }} /><span className="m-chip">Nueva</span></div>
        <div className="m-bill"><span className="m-vote">▲ 96</span><div className="m-line" style={{ width: "52%" }} /><span className="m-chip">Nueva</span></div>
        <span className="m-btn">Proponer una iniciativa</span>
        <p className="m-caption">La ciudadanía propone y apoya; el equipo ve qué pide el distrito.</p>
      </div>
    </div>
  );
}

/* ---------- Redes y sitios integrados ---------- */
function SocialScene() {
  return (
    <div className="m-scene">
      <div className="m-grid">
        <div className="m-card"><div className="m-thumb" /><div className="m-line" style={{ width: "80%" }} /><div className="m-specs">♥ 1.2k · 84 comentarios</div></div>
        <div className="m-card"><div className="m-thumb" /><div className="m-line" style={{ width: "65%" }} /><div className="m-specs">♥ 890 · 45 comentarios</div></div>
        <div className="m-card"><div className="m-thumb" /><div className="m-line" style={{ width: "72%" }} /><div className="m-specs">♥ 2.4k · 210 comentarios</div></div>
      </div>
      <div className="m-toolbar center">
        <span className="m-chip">Instagram</span>
        <span className="m-chip">YouTube</span>
        <span className="m-chip">X</span>
        <span className="m-chip ink">camara.cl ↗</span>
        <span className="m-chip ink">votaciones oficiales ↗</span>
      </div>
      <p className="m-caption">Redes y sitios oficiales integrados — y el sitio propio como ancla de todo.</p>
    </div>
  );
}

const scenes = {
  bio: BioScene,
  bioBanner: BioBannerScene,
  bills: BillsScene,
  management: ManagementScene,
  press: PressScene,
  agenda: AgendaScene,
  newsPhoto: NewsPhotoScene,
  newsList: NewsListScene,
  newsletter: NewsletterScene,
  citizen: CitizenScene,
  initiatives: InitiativesScene,
  social: SocialScene,
};

export default scenes;
