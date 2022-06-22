import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateFormatter, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentTutorship,
  tutorshipAssignment,
} from "../../actions/tutors";
import es from 'date-fns/locale/es';
import "./TutorshipTeacher.scss";

const Tutorship = () => {
  const dispatch = useDispatch();
  const [dataStudentTutorship, setDataStudentTutorship] = useState([]);
  const { user, id } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getStudentTutorship(id, setDataStudentTutorship));
  }, [dispatch, setDataStudentTutorship]);

  const [studentValue, setStudentValue] = useState("");

  const handleSelectStudentChange = (e) => {
    setStudentValue(e.target.value);
  };

  const [dateSelected, setDateSelect] = useState("");

  const handleAssignment = (e) => {
    e.preventDefault();
    dispatch(
      tutorshipAssignment(
        id,
        studentValue,
        `${dateSelected.getFullYear()}-${dateSelected.getMonth() + 1
        }-${dateSelected.getDate()}`,
        "docente"
      )
    );
    // console.log(`Tutoria: profe: ${id} estudiante: ${studentValue} fecha:${ `${dateSelected.getFullYear()}-${dateSelected.getMonth() + 1}-${dateSelected.getDate()}`}`);
    console.log("-------------envie");
  };

  // const dateTest = (e) => {
  //   console.log(dateSelected);
  //   let dateTutorship = `${dateSelected.getFullYear()}-${dateSelected.getMonth()+1}-${dateSelected.getDate()}`
  //   console.log(dateTutorship);
  // }

  const footer = dateSelected ? (
    <p>{format(dateSelected, 'PPP', { locale: es })}</p>
  ) : (
    <p>Selecciona una fecha</p>
  );

  return (
    <div>
      {dataStudentTutorship[0] ? (
        <>
          <select
            name="select"
            value={studentValue}
            onChange={handleSelectStudentChange}
          >
            <option>Selecciona un Estudiante</option>
            {dataStudentTutorship[0].map((student) => (
              <option
                value={student.documento_estudiante}
                key={student.documento_estudiante}
              >
                {student.apellidos} {student.nombres}
              </option>
            ))}
          </select>
        </>
      ) : (
        <></>
      )}
      <DayPicker
        mode="single"
        selected={dateSelected}
        onSelect={setDateSelect}
        footer={footer}
      />
      <></>
      {/* <button onClick={dateTest}>TEST DATE</button> */}
      <button className="buttonTutorship" onClick={handleAssignment}>
        Asignar Tutoría
      </button>
    </div>
  );
};

export default Tutorship;