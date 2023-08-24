import React from "react";

type inputType = React.ComponentProps<"input"> & {
  marginBottom?: string;
  label?: string;
};
const Input = ({ label, marginBottom, ...props }: inputType) => {
  return (
    <label htmlFor={label}>
      {label}
      <input
        style={{ marginBottom: marginBottom }}
        name={label}
        id={label}
        {...props}
      ></input>
    </label>
  );
};

export default Input;
