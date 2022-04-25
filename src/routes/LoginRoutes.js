import { Route, Routes } from 'react-router-dom';
import Coordinator from '../templates/coordinator/Coordinator';
import Students from '../templates/students/Students';
import Teachers from '../templates/teachers/Teachers';

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/Estudiante" element={<Students/>}/>
      <Route path="/Profesor" element={<Teachers/>}/>
      <Route path="/Coordinador" element={<Coordinator/>}/>
    </Routes>
  )
}

export default LoginRoutes