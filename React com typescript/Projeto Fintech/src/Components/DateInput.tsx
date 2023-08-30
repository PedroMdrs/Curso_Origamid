import React from "react";

type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};
const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input name={label} type="date" id="inicio" {...props} />
    </div>
  );
};

export default DateInput;
