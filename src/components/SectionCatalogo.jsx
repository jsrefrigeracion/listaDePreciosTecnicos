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
                {(
                  parseInt(catalogo.PrecioTecnico) -
                  (parseInt(catalogo.PrecioTecnico) % 50)
                ).toFixed(2)}
              </p>
            </div>
          )
        )}
      </div>
    </>
  );
}
