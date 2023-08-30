import React from "react";
import "./style.css";
import Resumo from "./Pages/Resumo";
import Sidenav from "./Components/Sidenav";
import Header from "./Components/Header";
import { DataContextProvider } from "./Context/DataContext";
const App = () => {
  return (
    <DataContextProvider>
      <div>
        <Sidenav></Sidenav>
        <main>
          <Header></Header>
          <Resumo></Resumo>;
        </main>
      </div>
    </DataContextProvider>
  );
};

export default App;
