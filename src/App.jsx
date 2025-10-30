import "./css/App.css";
import Logo from "/logo.png";
import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { SectionFilter } from "./components/SectionFilter";
import { SectionOfertas } from "./components/SectionOfertas";
import imgOfertas from "./static/img-ofertas";
function App() {
  const [sucursal, setSucursal] = useState("");
  const [rubro, setRubro] = useState("Sin rubro");
  const [numRandom, setNumRandom] = useState(0);
  useEffect(() => {
    setNumRandom(Math.floor(Math.random() * imgOfertas.length));
  }, []);
  console.log(numRandom);
  return (
    <>
      <header>
        <img src={Logo} alt="" width={100} />
        <div>
          <h1>Lista de precios</h1>
          <p>Exclusiva para técnicos</p>
        </div>
      </header>
      <SectionOfertas numRandom={numRandom} />

      <main>
        <div className="button-container">
          <select name="" id="" onChange={(e) => setRubro(e.target.value)}>
            <option value="Sin rubro">Seleccionar rubro...</option>
            <option value="REFRIGERACION">REFRIGERACIÓN</option>
            <option value="LAVASECA">LAVA - SECA</option>
            <option value="CALEFACCION">CALEFACCION</option>
          </select>
          <select name="" id="" onChange={(e) => setSucursal(e.target.value)}>
            <option value="">Seleccionar sucursal...</option>
            <option value="San Nicolas">San Nicolás</option>
            <option value="Goya">Goya</option>
          </select>
          <Button sucursal={sucursal} />
        </div>

        <SectionFilter rubro={rubro} />
      </main>
    </>
  );
}

export default App;
