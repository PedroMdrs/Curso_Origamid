import React from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <p>total: {count}</p>
      <Button className="dssad" size="3rem" onClick={() => setCount(count + 1)}>
        Add
      </Button>
    </>
  );
}

export default App;
