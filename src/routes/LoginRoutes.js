import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Coordinator from '../templates/coordinator/Coordinator';
import Students from '../templates/students/Students';
import Teachers from '../templates/teachers/Teachers';

const LoginRoutes = () => {

  const userType = useSelector( state => state.auth)

  console.log('userType', userType)

  return (
    <Routes>
      <Route path="/Estudiante" element={<Students/>}/>
      {/* <Route path="/Profesor" element={<Teachers/>}/>
      <Route path="/Coordinador" element={<Coordinator/>}/> */}
    </Routes>
  )
}

export default LoginRoutes