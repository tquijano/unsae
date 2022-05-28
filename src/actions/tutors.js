import { fetchSinToken } from "../helpers/fetch"


export const getDocentes = (setDataTutor) => {
    return async(dispatch) => {
        const resp = await fetchSinToken('bienestar/docentes');
        console.log(resp);
        const body = await resp.json();
        // console.log(body);
        if (body) {
            setDataTutor(datas => [...datas, body])
        } else {
            console.log('Algo ta mal')
        }
    }

}

export const getDataStudent = (id_estudiante, setDataPlanValue) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`bienestar/planes?documentoEstudiante=${id_estudiante}`);
        console.log(resp);
        const body = await resp.json();
        console.log('body',body);
        if (body) {
            setDataPlanValue(datasP => [...datasP, body])
        }
    }
}

export const tutorAssignment = (documentoEstudiante, documentoDocente, codigoPlan) => {
    return async(dispatch) => {
        console.log(documentoEstudiante, documentoDocente, codigoPlan)
            // auth es el enpoint
        const resp = await fetchSinToken('ingresoTutor', { documentoEstudiante, documentoDocente, codigoPlan }, 'POST');

        console.log(resp);
        const body = await resp.json();
        console.log(body);

    }
}

export const searchStudent = ( teacher, setDataStudent ) =>{
  return async (dispatch) => {
    console.log( teacher )
    // auth es el enpoint
    const resp = await fetchSinToken( `ingresoTutor?documentoDocente=${teacher}` );

    console.log(resp);
    const body = await resp.json();
    console.log(body);
    if (body) {
      setDataStudent(datas => [...datas, body])
    } else {
        console.log('Algo ta mal')
    }
  }
}

export const searchTeacher = ( student, setDataTeacher ) =>{
    return async (dispatch) => {
      console.log( student )
      // auth es el enpoint
      const resp = await fetchSinToken(  `ingresoTutor?documentoEstudiante=${student}`);
  
      console.log(resp);
      const body = await resp.json();
      console.log(body);
      if (body) {
        setDataTeacher(datas => [...datas, body])
      } else {
          console.log('Algo ta mal')
      }
  
    }
  }