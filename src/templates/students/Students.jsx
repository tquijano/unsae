import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { startLogout } from '../../actions/auth'
// import { AuthContex } from '../../auth/authContext'
import { types } from '../../types/types'
import './Students.scss'

const Students = () => {
  const dispatch = useDispatch();

  // const { user, dispatch } = useContext(AuthContex)
   
  const {user} = useSelector(state => state.auth)
  console.log(user)
  

  // const navigate = useNavigate();
  const handleLogout = () =>{
    dispatch( startLogout() );
  }
    
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
    <div>Hola {user} Bienvenido a la pagina estudiantes </div>
    <button className="buttonHome"
      onClick={handleLogout}>
          Logout
        </button>
    </>
  )
}

export default Students