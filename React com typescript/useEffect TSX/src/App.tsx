import React from "react";

const App = () => {
  // use effect sempre deve retornar uma funcao no typescript
  function useeffectcall() {
    console.log("x");
    return () => {
      console.log("y");
    };
  }
  React.useEffect(useeffectcall, []);
  return <div>effcect</div>;
};

export default App;
