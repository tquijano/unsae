import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import { AuthContex } from '../../auth/authContext'
import { types } from '../../types/types'
import './Students.scss'

const Students = () => {

  // const { user, dispatch } = useContext(AuthContex)
  

  // const navigate = useNavigate();
  // const handleLogout = () =>{
    
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
    <br/>
    <br/>
    <br/>
    {/* <div>Hola {user.name} Bienvenido a la pagina estudiantes </div> */}
    {/* <button className="buttonHome"
         onClick={handleLogout}>
          Logout
        </button> */}
    </>
  )
}

export default Students