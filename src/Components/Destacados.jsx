import React from "react";
import DestacadosDescripcion from "./DestacadosDescripcion";

function Destacados(props) {
  const postredestacado = props.postredestacado;
  return (
    <div>
      <h2>Destacados</h2>
      {postredestacado.map((informacion) => {
        return <DestacadosDescripcion postredestacado={informacion} />;
      })}
    </div>
  );
}

export default Destacados;
