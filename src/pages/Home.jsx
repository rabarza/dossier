import MathDoodles from "../components/MathDoodles.jsx";
import Marquee from "../components/Marquee.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import {
  contact, navigation, hero, marqueeItems, whatIDo, services,
  dataScience, credentials, teaching, process, faqs,
} from "../content/site.js";

const DEMO_URL = `${import.meta.env.BASE_URL}demo/`;

export default function Home() {
  return (
    <>
      {/* ---------- Navegación ---------- */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <a className="brand" href="#inicio">Rolando Abarza</a>
          <div className="links">
            {navigation.map((item) => (
              <a key={item.anchor} href={item.anchor}>{item.label}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* ---------- Héroe: la página es la persona, no un eslogan ---------- */}
      <div className="with-doodles" id="inicio">
        <MathDoodles />
        <header className="container hero">
          <h1>Rolando<br />Abarza</h1>
          <span className="chip-outline">{hero.chip}</span>
          <p>{hero.paragraph}</p>
          <div>
            <a className="btn orange" href="#que-hago">Qué hago</a>
            <a className="btn" href={`mailto:${contact.email}`}>Escríbeme</a>
          </div>
          <p className="contact-line">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            {" · "}
            <a href={contact.phoneHref}>{contact.phone}</a>
            {" · "}
            <a href={contact.github}>github.com/rabarza</a>
            {" · "}
            <a href={contact.linkedin}>LinkedIn</a>
          </p>
        </header>
      </div>

      <Marquee items={marqueeItems} />

      {/* ---------- Qué hago ---------- */}
      <section id="que-hago">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Qué <mark>hago</mark></h2>
          </div>
          <div className="blocks four">
            {whatIDo.map((item) => (
              <a className="block linked" href={item.anchor} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="go">Ver más ↓</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Lo que puedo construir (servicios) ---------- */}
      <section id="construir" className="section-tinted">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Lo que puedo <mark>construirte</mark></h2>
            <p className="section-intro">
              Cada ficha se abre y muestra lo que incluye — con capturas de versiones
              reales funcionando, no promesas. Si lo que necesitas mezcla varias,
              también se puede: todo esto es a medida.
            </p>
          </div>
          <div className="services">
            {services.map((service) => (
              <ServiceCard service={service} demoUrl={DEMO_URL} key={service.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Ciencia de datos y optimización ---------- */}
      <section id="datos">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Ciencia de datos y <mark>optimización</mark></h2>
            <p className="section-intro">
              Mi trabajo diario: sistemas que empresas de retail y distribución usan
              para decidir qué comprar, cuánto y cuándo.
            </p>
          </div>
          <div className="blocks">
            {dataScience.map((item) => (
              <article className="block" key={item.title}>
                <span className="stat">{item.stat}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="blocks" style={{ marginTop: 22 }}>
            {credentials.map((item) => (
              <article className="block light" key={item.title}>
                <span className="stat">{item.stat}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Docencia ---------- */}
      <section id="docencia" className="section-tinted">
        <div className="container teaching">
          <div>
            <h2 className="section-title">Docencia y <mark>tutorías</mark></h2>
            <p className="section-intro">{teaching.text}</p>
            <a
              className="btn orange"
              href={`mailto:${contact.email}?subject=Tutorías`}
              style={{ marginTop: 18, display: "inline-block" }}
            >
              Consultar por clases
            </a>
          </div>
          <ul className="check-list">
            {teaching.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Método ---------- */}
      <section id="metodo">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Cómo <mark>trabajo</mark></h2>
            <p className="section-intro">Proceso simple, con avances visibles desde la primera semana.</p>
          </div>
          <div className="steps">
            {process.map((step) => (
              <article className="step" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Preguntas frecuentes ---------- */}
      <section id="preguntas">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Lo que siempre <mark>me preguntan</mark></h2>
          </div>
          <div className="notes two">
            {faqs.map((faq) => (
              <article className="note" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Cierre ---------- */}
      <div className="container closing-wrap" id="contacto">
        <div className="closing">
          <h2>¿Conversamos?</h2>
          <p>Una reunión corta basta para mostrar todo esto funcionando.</p>
          <a className="btn" href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>

      <footer>
        Este sitio también es una muestra: diseñado y construido a mano por Rolando
        Abarza — incluidos los garabatos matemáticos del fondo.
      </footer>
    </>
  );
}
