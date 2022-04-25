import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
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