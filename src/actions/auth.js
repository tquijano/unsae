import Swal from "sweetalert2";
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
      localStorage.setItem('Identificacion', body.documento);
      localStorage.setItem('Tipo Usuario', body.tipoUsuario);
      dispatch( login ({
        uid: body.tipoUsuario,
        id: body.documento,
        user: body.usuario_registrado
      }))
    } else {
      Swal.fire({title:'QUsuario o contraseña incorrectos', icon: 'error' ,confirmButtonColor: '#005068'} )
    }

  }
  
}

export const startStudentRegister = ( documento, nombres, apellidos, usuario_un, estado, sexo, codigo, fecha_ingreso, cursando, documento_nacional, id_tipo_usuario  ) =>{
  return async (dispatch) => {
    console.log( documento, nombres, apellidos, usuario_un, estado, sexo, codigo, fecha_ingreso, cursando, documento_nacional, id_tipo_usuario )
    // auth es el enpoint
    const resp = await fetchSinToken( 'ingresoEstudiante', { documento, nombres, apellidos, usuario_un, estado, sexo, codigo, fecha_ingreso, cursando, documento_nacional, id_tipo_usuario}, 'POST' );
    // const resp = await fetchSinToken( '', { username, password}, 'GET' );

    console.log(resp);
    const body = await resp.json();
    console.log(body);
  }
}

export const startTeacherRegister = ( documento, nombres, apellidos, usuario_un, estado, sexo, id_tipo_usuario, id_departamento,  ) =>{
  return async (dispatch) => {
    console.log( documento, nombres, apellidos, usuario_un, estado, sexo, id_tipo_usuario, id_departamento )
    // auth es el enpoint
    const resp = await fetchSinToken( 'ingresoDocente', { documento, nombres, apellidos, usuario_un, estado, sexo, id_tipo_usuario, id_departamento}, 'POST' );
    // const resp = await fetchSinToken( '', { username, password}, 'GET' );

    console.log(resp);
    const body = await resp.json();
    console.log(body);

  }
}

export const startBienestarRegister = ( documento, nombres, apellidos, usuario_un, estado, sexo  ) =>{
  return async (dispatch) => {
    console.log( documento, nombres, apellidos, usuario_un, estado, sexo )
    // auth es el enpoint
    const resp = await fetchSinToken( 'ingresoBienestar', { documento, nombres, apellidos, usuario_un, estado, sexo}, 'POST' );
    // const resp = await fetchSinToken( '', { username, password}, 'GET' );

    console.log(resp);
    const body = await resp.json();
    console.log(body);

  }
}

const login =( user ) =>({
  type: types.authLogin,
  payload: user
})

export const startChecking =()=>{

    const user = localStorage.getItem('Usuario');
    const typeUser = localStorage.getItem('Tipo Usuario');
    const id = localStorage.getItem('Identificacion')
    return async ( dispatch ) => {

      if( typeUser !== 0){
        dispatch( login ({
          uid: typeUser,
          id: id,
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
