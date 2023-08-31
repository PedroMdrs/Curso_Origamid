import React from "react";
import "./style.css";
import Resumo from "./Pages/Resumo";
import Sidenav from "./Components/Sidenav";
import Header from "./Components/Header";
import { DataContextProvider } from "./Context/DataContext";
import Vendas from "./Pages/Vendas";
const App = () => {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav></Sidenav>
        <main>
          <Header></Header>
          <Resumo></Resumo>
          <Vendas></Vendas>
        </main>
      </div>
    </DataContextProvider>
  );
};

export default App;
