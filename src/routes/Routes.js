import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../templates/home/Home';
import LoginRoutes from './LoginRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" 
          element={
            // <PublicRoute>
              <Home/>
            // </PublicRoute>
          }
        />

        {/* <Route path="/Informacion-General" element={<GeneralInfo/>}/> */}
        {/* <Route path="/Legal" element={<Laws/>}/> */}
        

        <Route path="/*" 
          element={
            // <PrivateRoute>
              <LoginRoutes/>
            // </PrivateRoute>
          }
        />
        {/* <Route path="/*" element={<LoginRoutes/>}/> */}
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;
