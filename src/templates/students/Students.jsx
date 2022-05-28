import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { searchTeacher } from "../../actions/tutors";
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
      <button className='buttonHome' onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Students;
