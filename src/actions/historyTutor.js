import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch";

export const getHistoryTutorStudent= ( documento_estudiante ) => {
  return async(dispatch) => {
      const resp = await fetchSinToken(`estudiante/tutorias/historial?documentoEstudiante=${documento_estudiante}`);
      console.log(resp);
      const body = await resp.json();
      // console.log(body);
      if (body) {
        console.log('salio bien', body)
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