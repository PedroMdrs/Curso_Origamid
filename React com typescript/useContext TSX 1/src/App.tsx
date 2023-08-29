import React from "react";
import { UIContextProvider } from "./UIContext";
import Header from "./Header";

const App = () => {
  return (
    <UIContextProvider>
      <Header></Header>
    </UIContextProvider>
  );
};

export default App;
