import SectionCatalogo from "./SectionCatalogo";
import { useState, useEffect } from "react";
import {
  Productos,
  ProductosRefrigeracion,
  ProductosLavaSeca,
  ProductosCalefaccion,
} from "../static/variables";

export const SectionFilter = ({ rubro }) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    if (rubro === "REFRIGERACION") {
      setProductos(ProductosRefrigeracion);
    } else if (rubro === "LAVASECA") {
      setProductos(ProductosLavaSeca);
    } else if (rubro === "CALEFACCION") {
      setProductos(ProductosCalefaccion);
    } else {
      setProductos(Productos);
    }
  }, [rubro]);
  return (
    <>
      {productos.length === 0 ? (
        <p>No hay productos que mostrar</p>
      ) : (
        productos.map((producto) => (
          <div className="catalogo-container">
            <div className="catalogo-header">
              <div className="catalogo-header-container">
                <h2 className="catalogo-header-title">{producto.titulo}</h2>
                <h2 className="catalogo-header-rubro">{producto.rubro}</h2>
              </div>
              <picture className="catalogo-img-container">
                <img src={producto.imagen} alt="" className="catalogo-img" />
              </picture>
            </div>
            {Object.values(producto.productosCodigo).map((grupo) => (
              <SectionCatalogo grupo={grupo} productos={producto.productos} />
            ))}
          </div>
        ))
      )}
    </>
  );
};
