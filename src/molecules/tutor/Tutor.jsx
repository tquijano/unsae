import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getDataStudent,
  getDocentes,
  tutorAssignment,
} from "../../actions/tutors";

const Tutor = () => {
  const dispatch = useDispatch();
  const [dataTutor, setDataTutor] = useState([]);

  useEffect(() => {
    dispatch(getDocentes(setDataTutor));
  }, [dispatch, setDataTutor]);

  const [studentValue, setStudentValue] = useState(123);
  const [teacherValue, setTeacherValue] = useState("");
  const [planValue, setPlanValue] = useState([]);


  const handleInputChange = (e) => {
    setStudentValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setTeacherValue(e.target.value);
  };

  const handleSelectPlanChange = (e) =>{
    setPlanValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDataStudent(studentValue, setPlanValue));
    console.log("lo subi ", studentValue);
    console.log(planValue);
  };

  const handleSend = (e) => {
    e.preventDefault();
    // dispatch(tutorAsignement(studentValue, teacherValue, plan));
    console.log("Envie lo datos");
  };

  // console.log(dataTutor[0]);
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
      {dataTutor[0] ? (
        <>
          <select
            name='select'
            value={teacherValue}
            onChange={handleSelectChange}
          >
            <option> Selecciona un docente</option>
            {dataTutor[0].map((teacher) => (
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

      {planValue[0] ?
        <>
          <select
            name='select'
            // value={planValue}
            onChange={handleSelectPlanChange}
          >
            <option>Seleccionar un plan</option>
            {planValue[0].map((plan) => (
              <option value={plan.codigo} key={plan.codigo}>
                {" "}
                {plan.codigo}{" "}
              </option>
            ))}
          </select>
        </> :
        <></>
      }

      <p>
        El docente {teacherValue} se asignara al estudiante {studentValue} con
        el plan {}
      </p>
      <button className='buttonTutor' onClick={handleSend}>
        Enviar informacion
      </button>
    </div>
  );
};

export default Tutor;
