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

export const getDataStudent = (id_estudiante, setPlanValue) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`bienestar/planes?documentoEstudiante=${id_estudiante}`);
        console.log(resp);
        const body = await resp.json();
        console.log(body);
        if (body) {
            setPlanValue(datasP => [...datasP, body])
        }
    }
}

export const tutorAssignment = (student, teacher, plan) => {
    return async(dispatch) => {
        console.log(student, teacher)
            // auth es el enpoint
        const resp = await fetchSinToken('asignamiento', { student, teacher }, 'POST');

        console.log(resp);
        const body = await resp.json();
        console.log(body);

    }
}