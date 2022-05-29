import React from 'react'
import Students from '../../../templates/students/Students'
import './ViewObservation.scss'

const ViewObservation = () => {

  const Students = [
    {nombre: 'estudiante 1',
     documento: 12345,
     plan: 145,
  },{nombre: 'estudiante 2',
  documento: 1234567,
  plan: 145,
},{nombre: 'estudiante 2',
documento: 6712345,
plan: 145,
},{nombre: 'estudiante 3',
documento: 1238945,
plan: 145,
},
  ]

  return (
    <div>ViewObservation
      <table>
        <tr>
          <th>Nombre Estudiante</th>
          <th>Documento</th>
          <th>Plan</th>
          <th>Ver observaciones</th>
          <th>Crear observaciones</th>
        </tr>
        {Students.map((student, index)=>
          <tr key={index}>
            <td>{student.nombre}</td>
            <td>{student.documento}</td>
            <td>{student.plan}</td>
            <td><a>View</a></td>
            <td>Crear observacion</td>
          </tr>
        )}
      </table>
    </div>
  )
}

export default ViewObservation