import React from "react";
import { useUser } from "./UserContext";

const Header = () => {
  const context = useUser();
  return <div>{context?.nome}</div>;
};

export default Header;
