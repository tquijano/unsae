import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getStudentTutorship } from '../../actions/tutors';
import './TutorshipTeacher.scss'

const Tutorship = () => {
  
  
  const dispatch = useDispatch();
  const [dataStudentTutorship, setDataStudentTutorship] = useState([]);
  
  const {user, id} = useSelector((state)=>state.auth);
  console.log(user,id);
  useEffect(() => {
    dispatch(getStudentTutorship(id, setDataStudentTutorship));
  }, [dispatch, setDataStudentTutorship]);


  return (
    <div>
      {dataStudentTutorship[0] ? (
        <>
          <select
            name='select '
          // value={}
          // onChange={}
          >
            <option>Selecciona un Estudiante</option>
            {dataStudentTutorship[0].map((student)=>(
              <option value={student.documento_estudiante} key={student.documento_estudiante}>
                {student.apellidos}{" "}{student.nombres}
              </option>
            ))}
          </select>
        </>
      ) : (
        <>
        </>
      )}
    </div>
  )
}

export default Tutorship