import React from "react";
import useFetch from "./useFetch";

const App = () => {
  interface Data {
    descricao: string;
    id: string;
    nome: string;
    preco: number;
    quantidade: number;
  }
  const [id, setId] = React.useState("p001");
  const produtos = useFetch<Data[]>("https://data.origamid.dev/produtos");
  const produto = useFetch<Data>(`https://data.origamid.dev/produtos/${id}`);

  return (
    <section className="flex">
      <div>
        {produtos.data &&
          produtos.data.map((produto) => (
            <button onClick={() => setId(produto.id)} key={produto.id}>
              {produto.id}
            </button>
          ))}
      </div>
      <div>
        {produto.data && (
          <ul>
            <li>{produto.data.id}</li>
            <li>{produto.data.nome}</li>
            <li>{produto.data.descricao}</li>
            <li>{produto.data.quantidade}</li>
            <li>{produto.data.quantidade}</li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default App;
