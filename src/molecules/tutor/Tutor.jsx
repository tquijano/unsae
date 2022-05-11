import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDataStudent, getDocentes } from "../../actions/tutors";

const Tutor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDocentes());
  }, [dispatch]);

  const teachers = [
    { documento: "12354", nombres: "lola" },
    { documento: "123545", nombres: "lolita" },
  ];

  const [studentValue, setStudentValue] = useState(123);

  const handleInputChange = (e) => {
    setStudentValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(getDataStudent(studentValue));

    console.log("lo subi ", studentValue);
  };
  return (
    <>
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
      <select name='select'>
        {teachers.map((teacher) => (
          <option value={teacher.documento}> {teacher.nombres} </option>
        ))}
      </select>
    </>
  );
};

export default Tutor;
