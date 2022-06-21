import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryTutorTeacher } from "../../actions/historyTutor";
import { getPendingTutor, tutoringProvided } from "../../actions/pendingTutor";
import { searchStudent } from "../../actions/tutors";
import ButtonLogout from "../../atoms/buttons/buttonLogout/ButtonLogout";
import Navbar from "../../molecules/navbar/Navbar";
import Tutor from "../../molecules/tutor/Tutor";
import Observation from "../../organism/ observation/Observation";
import Remission from "../../organism/remission/Remission";
// import Remission from "../../organism/remission/Remission";
import "./Teachers.scss";

const Teacher = () => {
  const dispatch = useDispatch();

  const [dataStudent, setDataStudent] = useState([]);

  // const { user, dispatch } = useContext(AuthContex)

  const { user, id } = useSelector((state) => state.auth);
  console.log(user);
  console.log(id);

  useEffect(() => {
    dispatch(searchStudent(id, setDataStudent));
  }, [dispatch, id, setDataStudent]);

  // const navigate = useNavigate();
  const [tabSelected, setTabSelected] = useState("0");

  const handleHistory = () => {
    dispatch(getHistoryTutorTeacher(id));
  };

  const handleProvided = () => {
    dispatch(tutoringProvided(2, id, 10013, "2022-08-22"));
  };
  const handlePending = () => {
    dispatch(getPendingTutor(2, id));
  };

  //TODO: Cambiar el handleHistory
  const tabs = [
    {
      label: "Remisiones",
      name: "menuTeacher",
      value: "0",
    },
    {
      label: "Observaciones",
      name: "menuTeacher",
      value: "1",
    },
    {
      label: " Mis Tutorias",
      name: "menuTeacher",
      value: "2",
    },
    {
      label: "Registro",
      name: "menuTeacher",
      value: "3",
    },
  ];

  return (
    <div className='docentes'>
      <div className='docentes_navbar'>
        <Navbar setTabSelected={setTabSelected} tabs={tabs} />
      </div>
      {dataStudent[0] ? (
        <div className='docentes_container'>
          {tabSelected === "0" && (
            <Remission type='Docentes' data={dataStudent[0]} />
          )}
          {tabSelected === "1" && <Observation type='Docentes' />}
          {tabSelected === "2" && (
            <>
              <h1> Asignar tutor </h1>
              <button className='buttonHome' onClick={handleHistory}>
                Ver Historial tutorias docente
              </button>
              <button className='buttonHome' onClick={handlePending}>
        Ver Tutorias pendientes
      </button>
              <button className='buttonHome' onClick={handleProvided}>
                Cambiar estado tutoria
              </button>
              <Tutor />
            </>
          )}
          {tabSelected === "3" && (
            <>
              {dataStudent[0].map((student) => (
                <p key={student.documento_estudiante}>
                  Nombre Estudiante: {student.nombres} Documento Estudiante:{" "}
                  {student.documento_estudiante} Plan: {student.codigo_plan}{" "}
                </p>
              ))}
            </>
          )}

          <ButtonLogout />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Teacher;
