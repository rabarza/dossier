import Garabatos from "../components/Garabatos.jsx";
import Cinta from "../components/Cinta.jsx";
import {
  contacto, cintaItems, capacidades, proyectos,
  masAlla, respaldo, metodo, preguntas,
} from "../content/dossier.js";

const DEMO_URL = `${import.meta.env.BASE_URL}demo/`;

export default function Dossier() {
  return (
    <>
      {/* ---------- Héroe ---------- */}
      <div className="con-mate">
        <Garabatos />
        <header className="lienzo heroe">
          <span className="chip-borde">Dossier · desarrollo web · {contacto.ciudad}</span>
          <h1>
            Rolando Abarza<br />
            <mark>hace sitios</mark><br />
            que funcionan
          </h1>
          <p>
            De sitios institucionales a aplicaciones interactivas completas, con la
            ingeniería que empresas reales usan a diario.
          </p>
          <div>
            <a className="btn naranja" href={DEMO_URL}>Ver demostración</a>
            <a className="btn" href={`mailto:${contacto.correo}`}>Escríbeme</a>
          </div>
          <p className="contactos">
            <a href={`mailto:${contacto.correo}`}>{contacto.correo}</a>
            {" · "}
            <a href={contacto.telefonoEnlace}>{contacto.telefono}</a>
            {" · "}
            <a href={contacto.github}>github.com/rabarza</a>
            {" · "}
            <a href={contacto.linkedin}>LinkedIn</a>
          </p>
        </header>
      </div>

      <Cinta items={cintaItems} />

      {/* ---------- Capacidades ---------- */}
      <section id="capacidades">
        <div className="lienzo">
          <div className="cabeza-seccion">
            <h2 className="titulo-seccion">Lo que puedo <mark>construir</mark></h2>
            <p className="intro-seccion">
              No solo páginas estáticas: aplicaciones funcionales, con lógica, datos y
              flujos de trabajo detrás. Y la primera no es solo una idea — se puede
              visitar y probar funcionando.
            </p>
          </div>
          <div className="notas">
            {capacidades.map((c) => (
              <article className="nota" key={c.titulo}>
                <h3>{c.titulo}</h3>
                <p>{c.texto}</p>
                {c.demo && (
                  <div className="extra">
                    <a className="chip-tinta" href={DEMO_URL}>Ver demo navegable →</a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Proyectos ---------- */}
      <section id="proyectos">
        <div className="lienzo">
          <div className="cabeza-seccion">
            <h2 className="titulo-seccion">Cosas que <mark>ya construí</mark></h2>
            <p className="intro-seccion">
              Capturas reales de proyectos míos funcionando: diseño de interfaz,
              catálogos administrables, sitios de contenido y paneles de datos.
            </p>
          </div>
          {proyectos.map((p) => (
            <article className="obra" key={p.titulo}>
              <div>
                <span className="chip-tinta">{p.rol}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
                <p className="detalle">{p.detalle}</p>
              </div>
              <div className="marco">
                <img src={p.imagen} alt={p.alt} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Además de la web ---------- */}
      <section id="ademas">
        <div className="lienzo">
          <div className="cabeza-seccion">
            <h2 className="titulo-seccion">Datos, automatización <mark>e IA</mark></h2>
            <p className="intro-seccion">
              Mi día a día profesional es construir sistemas que procesan datos y toman
              decisiones. Esa caja de herramientas también queda disponible.
            </p>
          </div>
          <div className="bloques">
            {masAlla.map((b) => (
              <article className="bloque" key={b.titulo}>
                <h3>{b.titulo}</h3>
                <p>{b.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Respaldo ---------- */}
      <section id="respaldo">
        <div className="lienzo">
          <div className="cabeza-seccion">
            <h2 className="titulo-seccion">Ingeniería <mark>verificable</mark></h2>
          </div>
          <div className="bloques">
            {respaldo.map((r) => (
              <article className="bloque" key={r.titulo}>
                <span className="dato">{r.dato}</span>
                <h3>{r.titulo}</h3>
                <p>{r.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Método ---------- */}
      <section id="metodo">
        <div className="lienzo">
          <div className="cabeza-seccion">
            <h2 className="titulo-seccion">Cómo <mark>trabajaríamos</mark></h2>
            <p className="intro-seccion">Proceso simple, con avances visibles desde la primera semana.</p>
          </div>
          <div className="pasos">
            {metodo.map((m) => (
              <article className="paso" key={m.titulo}>
                <h3>{m.titulo}</h3>
                <p>{m.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Preguntas frecuentes ---------- */}
      <section id="preguntas">
        <div className="lienzo">
          <div className="cabeza-seccion">
            <h2 className="titulo-seccion">Lo que un equipo <mark>siempre pregunta</mark></h2>
          </div>
          <div className="notas dos">
            {preguntas.map((q) => (
              <article className="nota" key={q.pregunta}>
                <h3>{q.pregunta}</h3>
                <p>{q.respuesta}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Cierre ---------- */}
      <div className="lienzo cierre-envoltura">
        <div className="cierre">
          <h2>¿Conversamos?</h2>
          <p>Una reunión corta basta para mostrar todo esto funcionando.</p>
          <a className="btn" href={`mailto:${contacto.correo}`}>{contacto.correo}</a>
        </div>
      </div>

      <footer>
        Este dossier también es una muestra: diseñado y construido a mano por Rolando
        Abarza — incluidos los garabatos matemáticos del fondo.
      </footer>
    </>
  );
}
