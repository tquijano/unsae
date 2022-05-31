import React from "react";
import ButtonLogout from "../../atoms/buttons/buttonLogout/ButtonLogout";
import "./Navbar.scss";

const Navbar = ({ setTabSelected }) => {
  const handleChange = (e) => {
    console.log("tab", e.target.value);
    console.log(typeof e.target.value);
    setTabSelected(e.target.value);
  };
  return (
    <nav className='menu_navbar'>
      <input
        label='Observaciones'
        type='radio'
        name='menu'
        value='0'
        className='tabMenu'
        onChange={handleChange}
        defaultChecked='true'
      />
      <input
        label='Remisiones'
        type='radio'
        name='menu'
        value='1'
        className='tabMenu'
        onChange={handleChange}
      />
      <input
        label='Tutoria'
        type='radio'
        name='menu'
        value='2'
        className='tabMenu'
        onChange={handleChange}
      />
      <input
        label='Registro'
        type='radio'
        name='menu'
        value='3'
        className='tabMenu'
        onChange={handleChange}
      />
      {/* <ButtonLogout /> */}
    </nav>
  );
};

export default Navbar;
