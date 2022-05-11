import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getDataStudent,
  getDocentes,
  tutorAsignement,
} from "../../actions/tutors";

const Tutor = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getDocentes(setData));
  }, [dispatch, setData]);

  const [studentValue, setStudentValue] = useState(123);
  const [teacherValue, setTeacherValue] = useState("");
  const plan = "2321";

  const handleInputChange = (e) => {
    setStudentValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setTeacherValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDataStudent(studentValue));
    console.log("lo subi ", studentValue);
  };

  const handleSend = (e) => {
    e.preventDefault();
    // dispatch(tutorAsignement(studentValue, teacherValue, plan));
    console.log("Envie lo datos");
  };

  console.log(data[0]);
  return (
    <div>
      <p>Buscar Estudiante</p>
      <form onSubmit={handleSubmit}>
        <input
          id='estudiante'
          type='text'
          placeholder=' Ingresa a tu estudiante '
          name='documento'
          value={studentValue}
          onChange={handleInputChange}
        />
      </form>
      {data[0] ? (
        <>
          <select
            name='select'
            value={teacherValue}
            onChange={handleSelectChange}
          >
            <option> Selecciona un docente</option>
            {data[0].map((teacher) => (
              <option value={teacher.documento} key={teacher.documento}>
                {" "}
                {teacher.nombres}{" "}
              </option>
            ))}
          </select>
        </>
      ) : (
        <></>
      )}

      <p>
        El docente {teacherValue} se asignara al estudiante {studentValue} con
        el plan {plan}
      </p>
      <button className='buttonTutor' onClick={handleSend}>
        Enviar informacion
      </button>
    </div>
  );
};

export default Tutor;
