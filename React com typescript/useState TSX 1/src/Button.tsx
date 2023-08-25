import React from "react";

const Button = ({
  children,
  setTotal,
}: React.PropsWithChildren & {
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <button onClick={() => setTotal((total) => total + 1)}>{children}</button>
  );
};

export default Button;
