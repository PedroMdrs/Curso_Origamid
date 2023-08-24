import React, { ReactComponentElement, ReactNode } from "react";

type Buttontype = {
  children: ReactNode;
  onClick?: () => void;
  size?: "string";
};

const Button = ({ children, size, onClick, ...props }: Buttontype) => {
  return (
    <button onClick={onClick} style={{ fontSize: size }} {...props}>
      {children}
    </button>
  );
};

export default Button;
