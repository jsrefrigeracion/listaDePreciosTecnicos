import imgOfertas from "../static/img-ofertas";
import { useState } from "react";
export const SectionOfertas = ({ numRandom }) => {
  const [classname, setClassname] = useState("ofertas-container");
  return (
    <>
      <div className={classname}>
        <div className="ofertas-img-container">
          <button
            className="ofertas-close"
            onClick={() => setClassname("ofertas-container-none")}
          >
            X
          </button>
          <img src={imgOfertas[numRandom]} alt="" className="ofertas-img" />
        </div>
      </div>
    </>
  );
};
