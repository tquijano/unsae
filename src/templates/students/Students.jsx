import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { getHistoryTutorStudent } from "../../actions/historyTutor";
import { getPendingTutor } from "../../actions/pendingTutor";
import { searchTeacher } from "../../actions/tutors";
import TutorshipStudent from "../../molecules/tutoshipStudent/TutorshipStudent";
import "./Students.scss";

const Students = () => {
  const dispatch = useDispatch();

  const [dataTeacher, setDataTeacher] = useState([]);

  // const { user, dispatch } = useContext(AuthContex)

  const { user, id } = useSelector((state) => state.auth);
  console.log(user);
  useEffect(() => {
    dispatch(searchTeacher(id, setDataTeacher));
  }, [dispatch, id, setDataTeacher]);

  // const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  const handlePending = () => {
    dispatch(getPendingTutor(1, id));
  };

  const handleHistory = () => {
    dispatch(getHistoryTutorStudent(id));
  };
  //   const action = {
  //     type: types.logout
  //   }

  //   dispatch(action)

  //   navigate('/Home', {
  //     replace:true
  //   })
  // }
  return (
    <>
      <br />
      <br />
      <br />
      <div>Hola {user} Bienvenido a la pagina estudiantes </div>
      {dataTeacher[0] ? (
        dataTeacher[0].map((teacher) => (
          <p key={teacher.documento_docente}>
            Nombre Docente: {teacher.nombres}
          </p>
        ))
      ) : (
        <></>
      )}
      <p>
        Las tutorias me devuelven una lista con apellido docente, documento del
        estudiante, estado de la tutoria, fecha y nombre del docente
      </p>
      <button className='buttonHome' onClick={handlePending}>
        Ver Tutorias pendientes
      </button>
      <button className='buttonHome' onClick={handleHistory}>
        Ver Historial
      </button>
      <h1>Solicitar Tutoría</h1>
      <TutorshipStudent />
      <button className='buttonHome' onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Students;
