import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { tutoringProvided } from "../../../actions/pendingTutor";
import { tutorshipAssignment } from "../../../actions/tutors";
import "./ButtonState.scss";

const ButtonState = ({ id, doc, date, estado_tutoria }) => {
  const dispatch = useDispatch();

  const handleProvidedRealize = () => {
    Swal.fire({
      title:
        "¿Esta seguro que desea cambiar el estado de la tutoria a realizada?",
      text: "NO podra revertir esta acción!!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#005068",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, ya la realice!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(tutoringProvided(2, id, doc, date));
      }
    });
  };

  const handleProvidedCancel = () => {
    Swal.fire({
      title:
        "¿Esta seguro que desea cambiar el estado de la tutoria a Cancelada?",
      text: "NO podra revertir esta acción!!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#005068",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, ya la Cancele!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(tutorshipAssignment(id, doc, date, "docente", 3));
      }
    });
  }
  return (
    <div className="buttonState_container">
      <p>{estado_tutoria}</p>
      <div className="buttonState_container--buttons">
        <button className='buttonState' onClick={handleProvidedRealize}>
          <span className="text">Realizada</span>
          <i className="icon">✓</i>
        </button>
        <button className="buttonState" onClick={handleProvidedCancel}>
          <span className="text">Cancelarla</span>
          <i className="icon">✓</i>
        </button>
      </div>
    </div>
  );
};

export default ButtonState;
