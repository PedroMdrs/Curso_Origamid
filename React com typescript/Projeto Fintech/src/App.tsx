import React from "react";
import "./style.css";
import Resumo from "./Pages/Resumo";
import Sidenav from "./Components/Sidenav";
import Header from "./Components/Header";
const App = () => {
  return (
    <div>
      <Sidenav></Sidenav>
      <main>
        <Header></Header>
        <Resumo></Resumo>;
      </main>
    </div>
  );
};

export default App;
