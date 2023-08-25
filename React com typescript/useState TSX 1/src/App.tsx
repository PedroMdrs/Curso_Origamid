import React from "react";
import Button from "./Button";

const App = () => {
  const [total, setTotal] = React.useState(0);
  const [data, setData] = React.useState<null | User>(null);

  interface User {
    nome: string;
    profissao: string;
  }

  React.useEffect(() => {
    const user = {
      nome: "P",
      profissao: "blabla",
    };

    setTimeout(() => {
      setData(user);
    }, 1000);
  }, []);
  return (
    <div>
      <div>
        <p>Total: {total}</p>
        <Button setTotal={setTotal}>Add</Button>
      </div>
      <div>
        <p>Nome: {data?.nome}</p>
        <p>Profissao: {data?.profissao}</p>
      </div>
    </div>
  );
};

export default App;
