import React from "react";
import { useUi } from "./UIContext";

const Header = () => {
  const { dark, setDark } = useUi();
  return (
    <h1>
      {dark ? "dark" : "light"}
      <button onClick={() => setDark((n) => !n)}>change</button>
    </h1>
  );
};

export default Header;
