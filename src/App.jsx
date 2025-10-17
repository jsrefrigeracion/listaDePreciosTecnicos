import "./css/App.css";
import SectionCatalogo from "./components/SectionCatalogo";
import Logo from "./assets/logo.png";
import { useState } from "react";
import { Button } from "./components/Button";
import { ProductosRefrigeracion } from "./RefAire";

function App() {
  const [sucursal, setSucursal] = useState("");

  return (
    <>
      <header>
        <img src={Logo} alt="" width={100} />
        <div>
          <h1>Lista de precios</h1>
          <p>Exclusiva para técnicos</p>
        </div>
      </header>

      <main>
        <div className="button-container">
          <select name="" id="" onChange={(e) => setSucursal(e.target.value)}>
            <option value="">Seleccionar sucursal...</option>
            <option value="San Nicolas">San Nicolás</option>
            <option value="Goya">Goya</option>
          </select>
          <Button sucursal={sucursal} />
        </div>

        {ProductosRefrigeracion.map((producto) => {
          return (
            <>
              <div>
                <div className="catalogo-header">
                  <div className="catalogo-header-container">
                    <h2 className="catalogo-header-title">{producto.titulo}</h2>
                    <h2 className="catalogo-header-rubro">{producto.rubro}</h2>
                  </div>
                  <picture className="catalogo-img-container">
                    <img
                      src={producto.imagen}
                      alt=""
                      className="catalogo-img"
                    />
                  </picture>
                </div>
                {Object.values(producto.productosCodigo).map((grupo) => (
                  <SectionCatalogo
                    grupo={grupo}
                    productos={producto.productos}
                  />
                ))}
              </div>
            </>
          );
        })}
      </main>
    </>
  );
}

export default App;
