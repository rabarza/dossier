import MathDoodles from "../components/MathDoodles.jsx";
import Marquee from "../components/Marquee.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { MailIcon, WhatsAppIcon, GitHubIcon, LinkedInIcon } from "../components/Icons.jsx";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
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
            <a className="btn orange" href="#que-hago">En qué te puedo ayudar</a>
            <a className="btn" href={contact.whatsapp}>Escríbeme por WhatsApp</a>
          </div>
          <p className="contact-line">
            <a className="contact-item" href={`mailto:${contact.email}`}><MailIcon /> {contact.email}</a>
            <a className="contact-item" href={contact.whatsapp}><WhatsAppIcon /> {contact.phone}</a>
            <a className="contact-item" href={contact.github}><GitHubIcon /> rabarza</a>
            <a className="contact-item" href={contact.linkedin}><LinkedInIcon /> LinkedIn</a>
          </p>
        </header>
      </div>

      <Marquee items={marqueeItems} />

      {/* ---------- Qué hago ---------- */}
      <section id="que-hago">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">En qué te puedo <mark>ayudar</mark></h2>
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
            <h2 className="section-title">Lo que <mark>podemos construir</mark></h2>
            <p className="section-intro">
              Cada ficha muestra las características que tu web podría tener: ábrela,
              recorre la lista y mira cada pieza dibujada. Si lo tuyo mezcla varias
              fichas, mejor todavía — se arma a la medida.
            </p>
            <span className="sticker-note">✱ Ojo: todo esto es personalizable</span>
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
              href={`${contact.whatsapp.split("?")[0]}?text=${encodeURIComponent("Hola Rolando, quiero consultar por clases particulares")}`}
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
          <div>
            <a className="btn" href={contact.whatsapp}>Escríbeme por WhatsApp</a>
            <CopyEmailButton email={contact.email} />
          </div>
        </div>
      </div>

      <footer>
        Este sitio también es una muestra: diseñado y construido a mano por Rolando
        Abarza — incluidos los garabatos matemáticos del fondo.
      </footer>
    </>
  );
}
