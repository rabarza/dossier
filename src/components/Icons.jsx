// Íconos mínimos dibujados a mano, en el trazo del sistema (2.5px, tinta).
const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function MailIcon() {
  return (
    <svg {...base}>
      <rect x="3" y="5" width="18" height="14" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg {...base}>
      <path d="M20 11.5a8 8 0 1 0-15 3.9L4 20l4.7-1.1a8 8 0 0 0 11.3-7.4z" />
      <path d="M9.2 9.8c.4 2.2 2.4 4.2 4.6 4.6" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg {...base}>
      <rect x="3" y="3" width="18" height="18" />
      <path d="M9 17c-3 1-3-2-4-2m8 4v-3c0-.8.2-1.3.5-1.7-2.5-.3-4.5-1.3-4.5-4.3 0-1 .3-1.7.8-2.3-.1-.3-.4-1.2.1-2.4 0 0 .7-.2 2.6.9a8.5 8.5 0 0 1 4 0c1.9-1.1 2.6-.9 2.6-.9.5 1.2.2 2.1.1 2.4.5.6.8 1.3.8 2.3 0 3-2 4-4.5 4.3.3.4.5 1 .5 1.7v3" transform="scale(0.72) translate(4.8 4.2)" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg {...base}>
      <rect x="3" y="3" width="18" height="18" />
      <path d="M8 11v6M8 8v.1M12 17v-4a2.2 2.2 0 0 1 4.4 0v4" />
    </svg>
  );
}
