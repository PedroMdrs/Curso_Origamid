import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IVenda } from "../Context/DataContext";

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const dadosGrafico = [{}];
  return (
    <div>
      <ResponsiveContainer width={"99%"} height={400}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pago"
            stroke="#a36af9"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#fbcb21"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="falha"
            stroke="#000000"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoVendas;
