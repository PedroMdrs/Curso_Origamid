import React from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <Button size="5rem" onClick={() => setCount(count + 1)}>
        Add
      </Button>
    </>
  );
}

export default App;
