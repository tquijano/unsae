import { fetchSinToken } from "../helpers/fetch"


export const getDocentes = (setData) => {
    return async(dispatch) => {
        const resp = await fetchSinToken('bienestar/docentes');
        console.log(resp);
        const body = await resp.json();
        // console.log(body);
        if (body) {
            setData(datas => [...datas, body])
        } else {
            console.log('Algo ta mal')
        }
    }

}

export const getDataStudent = (id_estudiante) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`bienestar/planes?documentoEstudiante=${id_estudiante}`);
        console.log(resp);
        const body = await resp.json();
        console.log(body);
    }

}

export const tutorAsignement = ( student, teacher, plan  ) =>{
  return async (dispatch) => {
    console.log( student, teacher )
    // auth es el enpoint
    const resp = await fetchSinToken( 'asignamiento', { student, teacher}, 'POST' );

    console.log(resp);
    const body = await resp.json();
    console.log(body);

  }
}
