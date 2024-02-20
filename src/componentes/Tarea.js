import React from "react";
import "../hojas-de-estilo/Tarea.css";

export const Tarea = ({ texto }) => {
  return (
    <div className="tarea-contenedor">
      <div className="tarea-texto">{texto}</div>
      <div className="tarea-icono">Eliminar</div>
    </div>
  );
};
