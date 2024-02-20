import React from "react";
import "../hojas-de-estilo/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Tarea = ({ texto }) => {
  return (
    <div className="tarea-contenedor">
      <div className="tarea-texto">{texto}</div>
      <div className="tarea-icono">
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
};
