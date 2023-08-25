import React, { MouseEventHandler } from "react";

const Button = ({ children }: React.PropsWithChildren) => {
  const handleClick: React.MouseEventHandler = (e) => {
    console.log(e.pageX);
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
