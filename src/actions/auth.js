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
      // Swal.fire('Error', '404', 'error' )
      console.log('Usuario o contraseña incorrectos')
      // TODO: HACER MODAL EN CASO DE ERROR
    }

  }
  
}

export const startStudentRegister = ( documento, nombres, apellidos, usuario_un, estado, sexo, id_tipo_usuario, codigo, fecha_ingreso, cursando, documento_nacional  ) =>{
  return async (dispatch) => {
    console.log( documento, nombres, apellidos, usuario_un, estado, sexo, id_tipo_usuario, codigo, fecha_ingreso, cursando, documento_nacional )
    // auth es el enpoint
    const resp = await fetchSinToken( 'ingresoEstudiante', { documento, nombres, apellidos, usuario_un, estado, sexo, id_tipo_usuario, codigo, fecha_ingreso, cursando, documento_nacional}, 'POST' );
    // const resp = await fetchSinToken( '', { username, password}, 'GET' );

    console.log(resp);
    const body = await resp.json();
    console.log(body);
    // if (body.status){
    //   console.log(body.status)
    //   localStorage.setItem('Usuario', body.usuario_registrado);
    //   localStorage.setItem('Tipo Usuario', body.tipoUsuario);
    //   dispatch( login ({
    //     uid: body.tipoUsuario,
    //     user: body.usuario_registrado
    //   }))
    // } else {
    //   // Swal.fire('Error', '404', 'error' )
    //   console.log('No se realizo el registro')
    // }
  }
}

export const startTeacherRegister = ( documento, nombres, apellidos, usuario_un, estado, sexo, id_tipo_usuario, id_departamento,  ) =>{
  return async (dispatch) => {
    console.log( documento, nombres, apellidos, usuario_un, estado, sexo, id_tipo_usuario, id_departamento )
    // auth es el enpoint
    const resp = await fetchSinToken( 'docente', { documento, nombres, apellidos, usuario_un, estado, sexo, id_tipo_usuario, id_departamento}, 'POST' );
    // const resp = await fetchSinToken( '', { username, password}, 'GET' );

    console.log(resp);
    const body = await resp.json();
    console.log(body);
    // if (body.status){
    //   console.log(body.status)
    //   localStorage.setItem('Usuario', body.usuario_registrado);
    //   localStorage.setItem('Tipo Usuario', body.tipoUsuario);
    //   dispatch( login ({
    //     uid: body.tipoUsuario,
    //     user: body.usuario_registrado
    //   }))
    // } else {
    //   // Swal.fire('Error', '404', 'error' )
    //   console.log('No se realizo el registro')
    // }
  }
}

export const startBienestarRegister = ( documento, nombres, apellidos, usuario_un, estado, sexo  ) =>{
  return async (dispatch) => {
    console.log( documento, nombres, apellidos, usuario_un, estado, sexo )
    // auth es el enpoint
    const resp = await fetchSinToken( 'bienestar', { documento, nombres, apellidos, usuario_un, estado, sexo}, 'POST' );
    // const resp = await fetchSinToken( '', { username, password}, 'GET' );

    console.log(resp);
    const body = await resp.json();
    console.log(body);
    // if (body.status){
    //   console.log(body.status)
    //   localStorage.setItem('Usuario', body.usuario_registrado);
    //   localStorage.setItem('Tipo Usuario', body.tipoUsuario);
    //   dispatch( login ({
    //     uid: body.tipoUsuario,
    //     user: body.usuario_registrado
    //   }))
    // } else {
    //   // Swal.fire('Error', '404', 'error' )
    //   console.log('No se realizo el registro')
    // }
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
