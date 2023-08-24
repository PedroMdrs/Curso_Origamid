import React from "react";
import Button from "./Button";
import Input from "./Input";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Input type="date" marginBottom="1rem" label={"nome"}></Input>
    </>
  );
}

export default App;
