import React, { useState } from "react";
import Tutor from "../../molecules/tutor/Tutor";
import RegisterBienestar from "../../organism/register/registerBienestar/RegisterBienestar";
import RegisterStudent from "../../organism/register/registerStudent/RegisterStudent";
import RegisterTeacher from "../../organism/register/registerTeacher/RegisterTeacher";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import "./Bienestar.scss";
import Remission from "../../organism/remission/Remission";
import Observation from "../../organism/ observation/Observation";
import Navbar from "../../molecules/navbar/Navbar";
import ButtonLogout from "../../atoms/buttons/buttonLogout/ButtonLogout";

const Bienestar = () => {
  const [tabSelected, setTabSelected] = useState("0");

  const tabs = [
    {
      label: "Observaciones",
      name: "menu",
      value: "0",
    },
    {
      label: "Remisiones",
      name: "menu",
      value: "1",
    },
    {
      label: "Tutoria",
      name: "menu",
      value: "2",
    },
    {
      label: "Registro",
      name: "menu",
      value: "3",
    },
  ];
  return (
    <div className='bienestar'>
      <div className='bienestar_navbar'>
        <Navbar setTabSelected={setTabSelected} tabs={tabs} />
      </div>
      <div className='container_bienestar'>
        {tabSelected === "0" && <Observation />}
        {tabSelected === "1" && <Remission />}
        {tabSelected === "2" && (
          <>
            <h1> Asignar tutor </h1>
            <Tutor />
          </>
        )}
        {tabSelected === "3" && (
          <div className='bienestar_registro'>
            <RegisterStudent />
            <RegisterTeacher />
            <RegisterBienestar />
          </div>
        )}
        <ButtonLogout />
      </div>
    </div>
  );
};

export default Bienestar;
