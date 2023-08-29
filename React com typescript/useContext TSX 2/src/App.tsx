import React from "react";
import { UserStorage } from "./UserContext";
import Header from "./Header";
import Context from "./Context";

const App = () => {
  return (
    <UserStorage>
      <Header></Header>
      <Context></Context>
    </UserStorage>
  );
};

export default App;
