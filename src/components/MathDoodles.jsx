// Fondo de garabatos matemáticos dibujados a mano (SVG propio).
// Cada figura es un <g> independiente: mover, quitar o duplicar es trivial.
export default function MathDoodles() {
  return (
    <svg className="doodles-bg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fontFamily="Caveat, cursive">
        <g transform="translate(70,50) rotate(-8)">
          <ellipse cx="70" cy="72" rx="67" ry="71" />
          <ellipse cx="70" cy="72" rx="66" ry="22" strokeDasharray="7 8" />
          <ellipse cx="70" cy="72" rx="24" ry="70" strokeDasharray="7 8" />
          <line x1="70" y1="72" x2="128" y2="56" />
          <text x="88" y="52" fontSize="26" fill="currentColor" stroke="none">r</text>
          <text x="8" y="190" fontSize="34" fill="currentColor" stroke="none">
            V = <tspan fontSize="24">4</tspan>⁄<tspan fontSize="24">3</tspan> π r<tspan fontSize="22" baselineShift="super">3</tspan>
          </text>
        </g>
        <g transform="translate(455,45) rotate(-3)">
          <path d="M8,108 C 40,104 110,110 158,106" />
          <path d="M26,122 C 24,90 28,40 25,6" />
          <path d="M14,96 C 50,78 120,38 152,20" />
          <text x="40" y="-6" fontSize="40" fill="currentColor" stroke="none">y = mx + b</text>
        </g>
        {/* Ecuación de Bellman (con esperanza) — guiño a la tesis de RL */}
        <g transform="translate(825,140) rotate(4)">
          <text x="0" y="40" fontSize="31" fill="currentColor" stroke="none">V(s) = max E[ r + γ·V(s′) ]</text>
          <path d="M-2,56 C 60,62 200,58 320,60" />
        </g>
        <g transform="translate(620,250) rotate(4)">
          <path d="M2,6 C 60,2 120,4 166,0 C 170,56 168,110 172,162 C 110,166 54,164 6,168 C 2,112 6,60 2,6 Z" />
          <path d="M4,8 L 170,160" strokeDasharray="8 8" />
          <path d="M165,2 L 8,166" strokeDasharray="8 8" />
          <text x="30" y="212" fontSize="32" fill="currentColor" stroke="none">
            A = <tspan fontSize="24">d₁·d₂</tspan>⁄<tspan fontSize="24">2</tspan>
          </text>
        </g>
        <g transform="translate(320,330) rotate(6)">
          <ellipse cx="80" cy="22" rx="77" ry="21" />
          <path d="M3,24 C 5,66 2,106 4,148" />
          <path d="M157,22 C 159,64 156,106 158,146" />
          <path d="M4,148 a77,20 0 0 0 154,-2" />
          <path d="M4,148 a77,20 0 0 1 154,-2" strokeDasharray="7 8" />
          <line x1="80" y1="44" x2="80" y2="146" strokeDasharray="5 7" />
          <text x="88" y="105" fontSize="26" fill="currentColor" stroke="none">h</text>
          <text x="26" y="205" fontSize="33" fill="currentColor" stroke="none">
            V = π r<tspan fontSize="21" baselineShift="super">2</tspan> h
          </text>
        </g>
        <g transform="translate(80,430) rotate(-5)">
          <ellipse cx="72" cy="72" rx="71" ry="68" />
          <line x1="72" y1="72" x2="136" y2="46" />
          <text x="96" y="44" fontSize="26" fill="currentColor" stroke="none">r</text>
          <text x="26" y="185" fontSize="34" fill="currentColor" stroke="none">C = 2 π r</text>
        </g>
        <g transform="translate(890,330) rotate(-7)">
          <path d="M88,2 C 116,52 146,104 172,156 C 116,160 58,158 2,162 C 30,108 60,54 88,2 Z" />
          <text x="120" y="90" fontSize="26" fill="currentColor" stroke="none">a</text>
          <text x="34" y="212" fontSize="32" fill="currentColor" stroke="none">
            A = <tspan fontSize="24">√3</tspan>⁄<tspan fontSize="24">4</tspan> a<tspan fontSize="21" baselineShift="super">2</tspan>
          </text>
        </g>
        <g transform="translate(575,545) rotate(-4)">
          <text x="0" y="40" fontSize="44" fill="currentColor" stroke="none">∫ f(x) dx</text>
        </g>
        {/* Actualización de Q-learning (sin esperanza: usa la muestra) */}
        <g transform="translate(190,585) rotate(-3)">
          <text x="0" y="30" fontSize="26" fill="currentColor" stroke="none">Q(s,a) ← Q(s,a) + α·[ r + γ·max Q(s′,a′) − Q(s,a) ]</text>
        </g>
        <g transform="translate(1030,560) rotate(6)">
          <text x="0" y="34" fontSize="36" fill="currentColor" stroke="none">
            m = <tspan fontSize="26">Δy</tspan>⁄<tspan fontSize="26">Δx</tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}
