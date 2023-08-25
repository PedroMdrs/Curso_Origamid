import React, { ComponentProps } from "react";

type setDate = {
  label: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
};
const Input = ({
  label,
  setState,
  ...props
}: ComponentProps<"input"> & setDate) => {
  return (
    <div>
      <label>
        {label}
        <input
          type="date"
          onChange={({ target }) => setState(target.value)}
          name={label}
          id={label}
          {...props}
        />
      </label>
    </div>
  );
};
export default Input;
