import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { searchStudent } from "../../actions/tutors";
import ButtonLogout from "../../atoms/buttons/buttonLogout/ButtonLogout";
import CreateRemission from "../../molecules/createRemission/CreateRemission";
import Navbar from "../../molecules/navbar/Navbar";
import Tutor from "../../molecules/tutor/Tutor";
import ViewStudents from "../../molecules/viewStudents/ViewStudents";
import Observation from "../../organism/ observation/Observation";
import Remission from "../../organism/remission/Remission";
// import Remission from "../../organism/remission/Remission";
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
  const [tabSelected, setTabSelected] = useState("0");

  return (
    <div className='docentes'>
      <div className='docentes_navbar'>
        <Navbar setTabSelected={setTabSelected} />
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
              <Tutor />
            </>
          )}
          {tabSelected === "3" && (
            <>
              <ViewStudents />
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
