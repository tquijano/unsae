import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDataStudent, getDocentes } from "../../actions/tutors";

const Tutor = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(getDocentes(setData));
  }, [dispatch, setData]);


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

  console.log(data[0]);
  return (
    <div>
      {data[0] ?
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
            {data[0].map((teacher) => (
              <option value={teacher.documento} key={teacher.documento}> {teacher.nombres} </option>
            ))}
          </select>
        </>
        :
        <></>
      }
    </div>
  );
};

export default Tutor;
