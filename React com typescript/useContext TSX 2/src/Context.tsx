import React from "react";
import { useUser } from "./UserContext";

const Context = () => {
  const context = useUser();
  return (
    <div>
      <p>Idade: {context?.data?.idade}</p>
      <p>ID: {context?.data?.id}</p>
      <p>Cursos: {context?.data?.cursos}</p>
      <p>Aulas: {context?.data?.aulas}</p>
      <p>Playback : {context?.data?.preferencias.playback}</p>
      <p>Qualidade : {context?.data?.preferencias.qualidade}</p>
      <p>Volume : {context?.data?.preferencias.volume}</p>
    </div>
  );
};

export default Context;
