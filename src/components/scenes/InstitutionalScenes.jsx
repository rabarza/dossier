// Mini-escenas esquemáticas del sitio institucional / figura pública.
// Secciones basadas en el registro de sitios parlamentarios chilenos
// (julio 2026): biografía, proyectos de ley, prensa, agenda, columnas,
// boletín, atención ciudadana y redes.

function BioScene() {
  return (
    <div className="m-scene m-split">
      <div className="m-bio">
        <div className="m-avatar" />
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

function PressScene() {
  return (
    <div className="m-scene">
      <div className="m-grid two">
        <div className="m-card article">
          <span className="m-chip ink">Prensa</span>
          <div className="m-article-title">"La reforma que cambió la discusión hídrica"</div>
          <div className="m-specs">El Diario · 2 de julio</div>
        </div>
        <div className="m-card article">
          <span className="m-chip ink">Entrevista</span>
          <div className="m-article-title">Conversación en Radio Sur sobre el presupuesto</div>
          <div className="m-specs">Radio Sur · 28 de junio</div>
        </div>
      </div>
      <p className="m-caption">Apariciones en prensa, ordenadas y siempre al día.</p>
    </div>
  );
}

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

function ColumnsScene() {
  return (
    <div className="m-scene">
      <div className="m-grid two">
        <div className="m-card article">
          <span className="m-chip ink">Columna</span>
          <div className="m-article-title">El agua del valle no puede seguir esperando</div>
          <div className="m-line" style={{ width: "84%" }} />
          <div className="m-line" style={{ width: "62%" }} />
        </div>
        <div className="m-card article">
          <span className="m-chip ink">Opinión</span>
          <div className="m-article-title">Lo que aprendimos de la cuenta pública</div>
          <div className="m-line" style={{ width: "78%" }} />
          <div className="m-line" style={{ width: "58%" }} />
        </div>
      </div>
      <p className="m-caption">Columnas y opinión con un editor tan simple como un correo.</p>
    </div>
  );
}

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

function SocialScene() {
  return (
    <div className="m-scene">
      <div className="m-grid">
        <div className="m-card"><div className="m-thumb" /><div className="m-line" style={{ width: "80%" }} /><div className="m-specs">♥ 1.2k · 84 comentarios</div></div>
        <div className="m-card"><div className="m-thumb" /><div className="m-line" style={{ width: "65%" }} /><div className="m-specs">♥ 890 · 45 comentarios</div></div>
        <div className="m-card"><div className="m-thumb" /><div className="m-line" style={{ width: "72%" }} /><div className="m-specs">♥ 2.4k · 210 comentarios</div></div>
      </div>
      <p className="m-caption">Las redes se integran al sitio — y el sitio no depende de ellas.</p>
    </div>
  );
}

const scenes = {
  bio: BioScene,
  bills: BillsScene,
  press: PressScene,
  agenda: AgendaScene,
  columns: ColumnsScene,
  newsletter: NewsletterScene,
  citizen: CitizenScene,
  social: SocialScene,
};

export default scenes;
