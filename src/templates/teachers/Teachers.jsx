import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { searchStudent } from "../../actions/tutors";
import "./Teachers.scss";

const Teacher = () => {
  const dispatch = useDispatch();

  const [dataStudent, setDataStudent] = useState([]);

  // const { user, dispatch } = useContext(AuthContex)

  const { user } = useSelector((state) => state.auth);
  console.log(user);

  const { id } = useSelector((state) => state.auth);
  console.log(id);

  useEffect(() => {
    dispatch(searchStudent(id, setDataStudent));
  }, [dispatch, id, setDataStudent]);

  // const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div>Hola {user} Bienvenido a la pagina profesores </div>
      <p>Tus estudiantes asignados son</p>
      {dataStudent[0] ? (
        dataStudent[0].map((student) => (
          <p key={student.documento_estudiante}>
            Nombre Estudiante: {student.nombres} Documento Estudiante:{" "}
            {student.documento_estudiante} Plan: {student.codigo_plan}{" "}
          </p>
        ))
      ) : (
        <></>
      )}

      <button className='buttonHome' onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Teacher;
