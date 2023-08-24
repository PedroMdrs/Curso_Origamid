import React, { ReactComponentElement, ReactNode } from "react";

type ButtonType = React.ComponentProps<"button"> & { size: string };

const Button = ({ children, size, onClick, ...props }: ButtonType) => {
  return (
    <button onClick={onClick} style={{ fontSize: size }} {...props}>
      {children}
    </button>
  );
};

export default Button;
