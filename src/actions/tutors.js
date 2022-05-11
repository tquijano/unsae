import { fetchSinToken } from "../helpers/fetch"


export const getDocentes = ()=>{
  return async (dispatch)=>{
    const resp = await fetchSinToken( 'bienestar/docentes' );
    console.log(resp);
    const body = await resp.json();
    console.log(body);
  }

}

export const getDataStudent = ( id_estudiante )=>{
  return async (dispatch)=>{
    const resp = await fetchSinToken( `bienestar/planes?documentoEstudiante=${id_estudiante}` );
    console.log(resp);
    const body = await resp.json();
    console.log(body);
  }

}