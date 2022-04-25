import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GeneralInfo from '../templates/generalInfo/GeneralInfo';
import Home from '../templates/home/Home';
import Legal from '../templates/legal/Legal';
import LoginRoutes from './LoginRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {

  const { checking } = useSelector( state => state.auth);

  console.log(checking)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Informacion-General" element={<GeneralInfo/>}/>
        <Route path="/Informacion-Legal" element={<Legal/>}/>
        <Route path="/" 
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
