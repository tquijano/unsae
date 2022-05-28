import React from "react";
import Tutor from "../../molecules/tutor/Tutor";
import RegisterBienestar from "../../organism/register/registerBienestar/RegisterBienestar";
import RegisterStudent from "../../organism/register/registerStudent/RegisterStudent";
import RegisterTeacher from "../../organism/register/registerTeacher/RegisterTeacher";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import "./Bienestar.scss";

const Bienestar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div className='bienestar'>
      <br />
      <br />
      <br />
      <br />
      <h1> Asignar tutor </h1>
      <Tutor />
      <br />
      <br />
      <div className='bienestar_registro'>
        <RegisterStudent />
        <RegisterTeacher />
        <RegisterBienestar />
      </div>
      <button className='buttonHome' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Bienestar;
