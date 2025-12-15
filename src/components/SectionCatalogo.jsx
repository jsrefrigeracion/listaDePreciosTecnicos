import redondearPrecio from "../static/formulas";
export default function SectionCatalogo({ grupo, productos }) {
  let catalogoListado = [];
  grupo.map((codigo) => {
    let producto = productos.filter(
      (producto) => producto.Codigo == parseInt(codigo)
    );
    catalogoListado.push(producto[0]);
  });

  return (
    <>
      <div className="catalogo">
        {catalogoListado.map((catalogo) =>
          !catalogo ? null : (
            <div key={catalogo.IdArticulo} className="catalogo-item">
              <h2>{catalogo.Nombre}</h2>
              <p>
                $
                {redondearPrecio(catalogo.PrecioTecnico).toFixed(2)}
              </p>
            </div>
          )
        )}
      </div>
    </>
  );
}
