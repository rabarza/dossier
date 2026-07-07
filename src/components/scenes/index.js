// Registro de sets de escenas: el contenido (site.js) referencia un set por
// nombre (`sceneSet`) y cada escena por clave, sin importar componentes.
import ecommerce from "./EcommerceScenes.jsx";
import portal from "./PortalScenes.jsx";
import institutional from "./InstitutionalScenes.jsx";
import observatory from "./ObservatoryScenes.jsx";

const sceneSets = { ecommerce, portal, institutional, observatory };

export default sceneSets;
