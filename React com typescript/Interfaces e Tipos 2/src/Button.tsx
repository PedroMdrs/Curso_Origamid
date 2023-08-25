import React from "react";

interface Button {
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  total: number;
}
const Button = ({ total, setTotal }: Button) => {
  return (
    <button onClick={() => setTotal((t) => t + 1)}>Incrementar {total}</button>
  );
};

export default Button;
