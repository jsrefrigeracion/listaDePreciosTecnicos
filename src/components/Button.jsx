import { useMemo } from "react";

export const Button = ({ sucursal }) => {
  const sucursales = useMemo(
    () => ({
      "San Nicolas": "543364393333",
      Goya: "543777253680",
    }),
    []
  );
  const nume = sucursales[sucursal];
  const link = `https://wa.me/${nume}?text=Hola,%20buenos%20dias!%20me%20podrian%20armar%20el%20siguiente%20pedido:%20`;
  const verifNumero = (e) => {
    if (sucursal === "") {
      alert("Por favor, seleccione una sucursal");
      e.preventDefault();
    }
  };

  return (
    <a
      onClick={verifNumero}
      rel="stylesheet"
      href={link}
      target="_blank"
      className="button"
    >
      WhatsApp
    </a>
  );
};
