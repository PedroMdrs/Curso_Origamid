import React from "react";

const Checkbox = ({ label }: { label: string }) => {
  const [value, setValue] = React.useState(false);
  const handleClick: React.ChangeEventHandler<HTMLInputElement> = () => {
    setValue(!value);
  };
  return (
    <div>
      <label
        style={{
          padding: "1rem",
          border: value ? "2px solid green" : "2px solid red",
        }}
      >
        <input type="checkbox" checked={value} onChange={handleClick} /> {label}
      </label>
    </div>
  );
};

export default Checkbox;
