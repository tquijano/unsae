import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";

export const startLogin = ( username, password ) => {
  return async ( dispatch ) => {
    console.log( username, password )
    // auth es el enpoint
    const resp = await fetchSinToken( 'auth', { username, password}, 'POST' );
    // const resp = await fetchSinToken( '', { username, password}, 'GET' );

    console.log(resp);
    const body = await resp.json();
    console.log(body);

    if (body.status){
      console.log(body.status)
      localStorage.setItem('Usuario', body.usuario_registrado);
      localStorage.setItem('Tipo Usuario', body.tipoUsuario);
      dispatch( login ({
        uid: body.tipoUsuario,
        user: body.usuario_registrado
      }))
    } else {
      // Swal.fire('Error', '404', 'error' )
      console.log('Usuario o contraseña incorrectos')
      // TODO: HACER MODAL EN CASO DE ERROR
    }

  }
  
}

// const startRegister = ( document, nombres, apellidos, username, state, sex, idUser, idDept  ) =>{
  // return (dispatch) => {

  // }
// }

const login =( user ) =>({
  type: types.authLogin,
  payload: user
})

export const startChecking =()=>{

    const user = localStorage.getItem('Usuario');
    const typeUser = localStorage.getItem('Tipo Usuario');
    return async ( dispatch ) => {

      if( typeUser !== 0){
        dispatch( login ({
          uid: typeUser,
          user: user
        }))
      }else{
        dispatch(checkinFinish())
      }
      // dispatch
    }
}

export const startLogout =() =>{
  return ( dispatch ) => {
    localStorage.clear();
    dispatch( logout() );
  }
}

const checkinFinish = () => ({
  type: types.authCheckingFinish
})

const logout = ( ) => ({
  type: types.authLogout
})
