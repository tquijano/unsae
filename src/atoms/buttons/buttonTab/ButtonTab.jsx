import React from "react";

const ButtonTab = ({ label, name, value, handleChange, defaultChecked }) => {
  return (
    <input
      label={label}
      type='radio'
      name={name}
      value={value}
      className='tabMenu'
      onChange={handleChange}
      defaultChecked='true'
    />
  );
};

export default ButtonTab;
