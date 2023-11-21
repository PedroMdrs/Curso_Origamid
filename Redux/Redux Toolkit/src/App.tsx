import { useDispatch, useSelector } from "react-redux";
import { incrementar, reduzir } from "./store/contador";

const App = () => {
  const { contador } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(contador);
  return (
    <div>
      <h1>total: {contador.total}</h1>
      <button onClick={() => dispatch(incrementar())}>+</button>
      <button onClick={() => dispatch(reduzir())}>-</button>
    </div>
  );
};

export default App;
