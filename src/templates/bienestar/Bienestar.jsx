import React from "react";
import Tutor from "../../molecules/tutor/Tutor";
import RegisterBienestar from "../../organism/register/registerBienestar/RegisterBienestar";
import RegisterStudent from "../../organism/register/registerStudent/RegisterStudent";
import RegisterTeacher from "../../organism/register/registerTeacher/RegisterTeacher";

const Bienestar = () => {
  return (
    <div>
      <RegisterStudent />
      <Tutor />
      <RegisterTeacher />
      <RegisterBienestar />
    </div>
  );
};

export default Bienestar;
