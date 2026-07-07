import { Routes, Route } from "react-router-dom";
import Dossier from "./pages/Dossier.jsx";

// Rutas del sitio. Cuando existan blogs u otras secciones, se agregan aquí:
// <Route path="/blog" element={<Blog />} /> etc.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dossier />} />
    </Routes>
  );
}
