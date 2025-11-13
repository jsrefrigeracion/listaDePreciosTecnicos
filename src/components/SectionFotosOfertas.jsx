export const SectionFotosOfertas = ({ fotosOfertas }) => {
  return (
    <>
      <div className="fotos-ofertas-container">
        {fotosOfertas.map((foto) => (
          <img src={foto} alt="" className="fotos-ofertas" />
        ))}
      </div>
    </>
  );
};
