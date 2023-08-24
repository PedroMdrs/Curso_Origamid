import React from "react";

type ButtonType = React.ComponentProps<"button"> & { size?: string };

const Button = ({ children, size, ...props }: ButtonType) => {
  return (
    <button style={{ fontSize: size }} {...props}>
      {children}
    </button>
  );
};

export default Button;
