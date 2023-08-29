import React from "react";
import { useUser } from "./UserContext";

const Context = () => {
  const context = useUser();
  return (
    <div>
      <p>Idade: {context?.idade}</p>
      <p>ID: {context?.id}</p>
      <p>Cursos: {context?.cursos}</p>
      <p>Aulas: {context?.aulas}</p>
      <p>Playback : {context?.preferencias.playback}</p>
      <p>Qualidade : {context?.preferencias.qualidade}</p>
      <p>Volume : {context?.preferencias.volume}</p>
    </div>
  );
};

export default Context;
