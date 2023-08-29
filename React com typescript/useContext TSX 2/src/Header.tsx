import React from "react";
import { useUser } from "./UserContext";

const Header = () => {
  const context = useUser();
  return <div>{context?.data?.nome}</div>;
};

export default Header;
