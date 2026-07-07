// Mini-escenas esquemáticas del ecommerce: cada una ilustra una funcionalidad
// dentro de la ventana del escaparate (FeatureShowcase). Marca neutra, sin
// capturas de plantillas: todo dibujado con las primitivas .m-* del sistema.

function Product({ heart, dimmed, selected }) {
  return (
    <div className={`m-card${dimmed ? " dimmed" : ""}${selected ? " selected" : ""}`}>
      <div className="m-thumb" />
      <div className="m-line" style={{ width: "70%" }} />
      <div className="m-price">$12.990</div>
      {heart && <span className={`m-heart${heart === "on" ? " on" : ""}`}>{heart === "on" ? "♥" : "♡"}</span>}
    </div>
  );
}

function AdminScene() {
  return (
    <div className="m-scene">
      <div className="m-toolbar">
        <span className="m-chip ink">Modo administrador</span>
        <span className="m-chip">Editar</span>
        <span className="m-chip">Foto</span>
        <span className="m-chip">Precio</span>
        <span className="m-chip orange">Guardar</span>
      </div>
      <div className="m-grid">
        <Product selected />
        <Product />
        <Product />
      </div>
      <p className="m-caption">El dueño edita el producto ahí mismo, sobre la tienda.</p>
    </div>
  );
}

function CartScene() {
  return (
    <div className="m-scene m-split">
      <div className="m-grid two">
        <Product />
        <Product />
      </div>
      <aside className="m-drawer">
        <div className="m-drawer-title">Tu carrito</div>
        <div className="m-row"><div className="m-thumb tiny" /><div className="m-line" style={{ width: 56 }} /><span className="m-qty">− 1 +</span></div>
        <div className="m-row"><div className="m-thumb tiny" /><div className="m-line" style={{ width: 44 }} /><span className="m-qty">− 2 +</span></div>
        <div className="m-total"><span>Total</span><b>$38.970</b></div>
        <span className="m-btn">Ir a pagar</span>
      </aside>
    </div>
  );
}

function WishlistScene() {
  return (
    <div className="m-scene">
      <div className="m-grid">
        <Product heart="on" />
        <Product heart="off" />
        <Product heart="off" />
      </div>
      <p className="m-caption">Cada cliente guarda sus favoritos y los retoma cuando vuelve.</p>
    </div>
  );
}

function NewsletterScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel">
        <div className="m-panel-title">Novedades y ofertas</div>
        <div className="m-form">
          <span className="m-input">tu@correo.cl</span>
          <span className="m-btn">Suscribirme</span>
        </div>
        <span className="m-chip ok">✓ Boletín enviado a 1.240 suscriptores</span>
      </div>
    </div>
  );
}

function CouponScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel">
        <div className="m-panel-title">Resumen del pedido</div>
        <div className="m-total soft"><span>Subtotal</span><span>$25.990</span></div>
        <div className="m-total soft orange-text"><span>Cupón BIENVENIDA10</span><span>−$2.599</span></div>
        <div className="m-total"><span>Total</span><b>$23.391</b></div>
        <div className="m-form">
          <span className="m-input">BIENVENIDA10</span>
          <span className="m-btn">Aplicar</span>
        </div>
      </div>
    </div>
  );
}

function ReviewsScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel">
        <div className="m-panel-title">Aro de cobre artesanal</div>
        <div className="m-stars">★★★★<span className="off">★</span> <em>4,2 · 18 reseñas</em></div>
        <div className="m-line" style={{ width: "92%" }} />
        <div className="m-line" style={{ width: "78%" }} />
        <span className="m-chip">Escribir una reseña</span>
      </div>
    </div>
  );
}

function BlogScene() {
  return (
    <div className="m-scene">
      <div className="m-grid two">
        <div className="m-card article">
          <span className="m-chip ink">Guía</span>
          <div className="m-article-title">Cómo elegir tu talla exacta</div>
          <div className="m-line" style={{ width: "85%" }} />
          <div className="m-line" style={{ width: "60%" }} />
        </div>
        <div className="m-card article">
          <span className="m-chip ink">Novedades</span>
          <div className="m-article-title">Llegó la colección de invierno</div>
          <div className="m-line" style={{ width: "80%" }} />
          <div className="m-line" style={{ width: "65%" }} />
        </div>
      </div>
      <p className="m-caption">El blog se escribe con un editor tan simple como un correo.</p>
    </div>
  );
}

function SearchScene() {
  return (
    <div className="m-scene m-split">
      <aside className="m-drawer">
        <div className="m-drawer-title">Filtrar</div>
        <div className="m-check on">Aros</div>
        <div className="m-check">Collares</div>
        <div className="m-check">Pulseras</div>
        <div className="m-slider"><i /></div>
        <span className="m-chip">$5.000 – $20.000</span>
      </aside>
      <div className="m-grid two">
        <Product />
        <Product />
        <Product dimmed />
        <Product dimmed />
      </div>
    </div>
  );
}

function PaymentsScene() {
  return (
    <div className="m-scene m-center">
      <div className="m-panel">
        <div className="m-panel-title">¿Cómo quieres pagar?</div>
        <div className="m-radio on">Webpay (débito y crédito)</div>
        <div className="m-radio">Mercado Pago</div>
        <div className="m-radio">Transferencia</div>
        <span className="m-btn">Pagar $23.391</span>
      </div>
    </div>
  );
}

function WhiteLabelScene() {
  return (
    <div className="m-scene">
      <div className="m-grid two">
        <div className="m-mini-store theme-a">
          <div className="m-mini-header">JOYAS ANA</div>
          <div className="m-mini-hero" />
          <div className="m-mini-row"><i /><i /><i /></div>
        </div>
        <div className="m-mini-store theme-b">
          <div className="m-mini-header">CAFÉ BRAVO</div>
          <div className="m-mini-hero" />
          <div className="m-mini-row"><i /><i /><i /></div>
        </div>
      </div>
      <p className="m-caption">Cada tienda se diseña desde la identidad de su dueño — no hay dos iguales.</p>
    </div>
  );
}

function VariantsScene() {
  return (
    <div className="m-scene">
      <div className="m-grid">
        <div className="m-card v-sharp">
          <div className="m-thumb" />
          <div className="m-line" style={{ width: "70%" }} />
          <div className="m-price">$12.990</div>
          <span className="m-tag">versión A</span>
        </div>
        <div className="m-card v-soft">
          <div className="m-thumb" />
          <div className="m-line" style={{ width: "70%" }} />
          <div className="m-price">$12.990</div>
          <span className="m-tag">versión B</span>
        </div>
        <div className="m-card v-dark">
          <div className="m-thumb" />
          <div className="m-line" style={{ width: "70%" }} />
          <div className="m-price">$12.990</div>
          <span className="m-tag">versión C</span>
        </div>
      </div>
      <p className="m-caption">El mismo componente, en la versión que le calce a tu marca.</p>
    </div>
  );
}

// Mapa de escenas: la clave se usa desde el contenido (site.js).
const scenes = {
  variants: VariantsScene,
  admin: AdminScene,
  cart: CartScene,
  wishlist: WishlistScene,
  newsletter: NewsletterScene,
  coupons: CouponScene,
  reviews: ReviewsScene,
  blog: BlogScene,
  search: SearchScene,
  payments: PaymentsScene,
  whitelabel: WhiteLabelScene,
};

export default scenes;
