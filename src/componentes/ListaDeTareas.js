import React, { useState } from "react";
import "../hojas-de-estilo/ListaDeTareas.css";
import { TareaFormulario } from "./TareaFormulario";
import { Tarea } from "./Tarea";

export const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    /* verifico que la tarea no este vacia */
    if (tarea.texto.trim()) {
      tarea.texto =
        tarea.texto.trim(); /* le saco los espacios atras y adelante */
      const tareasActualizadas = [tarea, ...tareas];
      /* Agrego la nueva tarea al principio */
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    /* filtro las tareas que no coincidan con el id */
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea; /* map siempre necesita retornar algun valor */
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea /* tarea viaja como un objeto */) => (
          <Tarea
            texto={tarea.texto}
            completada={tarea.completada}
            key={
              tarea.id
            } /* key es necesario para react pero no viaja como prop */
            id={tarea.id} /* pongo id porque necesito el id para eliminar */
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
};

/* -le mando en las props (onSubmit) a TareaFormulario la funcion agregarTarea,
y luego TareaFormulario manda a traves de los argumentos la tareaNueva de nuevo a ListaDeTareas; 
esto permite la comunicacion entre los dos componentes, comunicandose a traves de los props y los argumentos*/
