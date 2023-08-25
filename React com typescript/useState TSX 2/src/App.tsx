import React from "react";
import Input from "./Input";

const App = () => {
  interface Data {
    id: string;
    nome: string;
    preco: number;
    status: string;
    pagamento: string;
    parcelas: number | null;
    data: string;
  }
  const [data, setData] = React.useState<null | Data[]>(null);
  const [inicio, setInicio] = React.useState<string>("");
  const [final, setFinal] = React.useState<string>("");

  React.useEffect(() => {
    async function fetchData(url: string): Promise<Data[] | undefined> {
      try {
        const data = await fetch(url);
        if (data.ok) {
          const json = await data.json();
          return json;
        }
      } catch (error) {
        throw new Error(`${error}`);
      }
    }
    if (inicio !== "" && final !== "") {
      fetchData(
        `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
      ).then((data) => {
        if (data) setData(data);
      });
    }
  }, [inicio, final]);

  return (
    <div>
      <Input value={inicio} setState={setInicio} label={"Inicio"}></Input>
      <Input value={final} setState={setFinal} label={"Final"}></Input>
      <ul>
        {data &&
          data.map((item) => (
            <li key={item.id}>
              {item.nome} : {item.status}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
