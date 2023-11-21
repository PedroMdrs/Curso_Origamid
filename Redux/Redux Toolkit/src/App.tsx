import { useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div>
      <h1>total:</h1>
      <button>+</button>
    </div>
  );
};

export default App;
