import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch"

export const getTypesRemission = (setTypesRemission) => {
  return async(dispatch) => {
      const resp = await fetchSinToken('remisionesDocente');
      console.log(resp);
      const body = await resp.json();
      console.log(body);
      if (body) {
          setTypesRemission(datas => [...datas, body])
      } else {
          console.log('Algo ta mal')
      }
  }

}
export const getStudentsTeacher = (documento_docente, setDataRemissionTeacher) => {
    console.log(documento_docente)
    return async(dispatch) => {
        const resp = await fetchSinToken(`observaciones?documento=${documento_docente}`);
        console.log(resp);
        const body = await resp.json();
        console.log(body);
        if (body) {
            setDataRemissionTeacher([body])
        } else {
            console.log('Algo ta mal')
        }
    }

}
export const getRemissionsTeacher= (documento_docente, setDataRemission) => {
  return async(dispatch) => {
      const resp = await fetchSinToken(`remisionesDocente/estudiante?documentoDocente=${documento_docente}`);
      console.log(resp);
      const body = await resp.json();
      console.log('remisiones profe',body);
      if (body) {
          setDataRemission([body])
      } else {
          console.log('Algo ta mal')
      }
  }

}

export const getRemissions= ( setDataRemission ) => {
  return async(dispatch) => {
      const resp = await fetchSinToken('bienestar/remisiones');
      console.log(resp);
      const body = await resp.json();
      // console.log(body);
      if (body) {
          setDataRemission( [body])
      } else {
          console.log('Algo ta mal')
      }
  }

}

export const createRemission = (documento_docente, documento_estudiante,codigo_plan, motivo_remision, codigo_tipo_remision) => {
  console.log('Create remision',documento_docente, documento_estudiante,codigo_plan, motivo_remision, codigo_tipo_remision )
  return async(dispatch) => {
      console.log(documento_docente, documento_estudiante,codigo_plan, motivo_remision, codigo_tipo_remision);
      const resp = await fetchSinToken('remisionesDocente', { documento_docente, documento_estudiante,codigo_plan, motivo_remision, codigo_tipo_remision }, 'POST');

      console.log(resp);
      const body = await resp.json();
      console.log('create obervation',body);
      if (body.status == true) {
      Swal.fire("Remision exitosamente creada");

    } else {
        console.log('Algo ta mal')
    }

  }
}
