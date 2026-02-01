import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
const clarityScript = document.createElement("script");
clarityScript.async = true;
clarityScript.src = "https://www.clarity.ms/tag/valagswhnq";
document.head.appendChild(clarityScript);

const script = document.createElement("script");
script.src = "https://gc.zgo.at/count.js";
script.async = true;
script.dataset.goatcounter = "https://calcommunity.goatcounter.com/count";
document.head.appendChild(script);

createRoot(document.getElementById("root")!).render(<App />);
