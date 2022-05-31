import React from "react";
import Swal from "sweetalert2";
import "./ViewInformation.scss";

const ViewInformation = ({ observacion }) => {
  console.log(observacion);
  const handleView = () => {
    Swal.fire({
      title: "Observaciones",
      text: `${observacion}`,
      confirmButtonColor: "#005068",
    });
  };
  return (
    <button className='viewInformation_button' onClick={handleView}>
      Ver Informacion
    </button>
  );
};

export default ViewInformation;
