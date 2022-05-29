import React, { useState } from "react";
import Searcher from "../../../molecules/searcher/Searcher";
import CreateInformation from "../../../molecules/createInformation/CreateInformation";
import Students from "../../../templates/students/Students";
import "./ViewObservation.scss";
import ViewInformation from "../../../molecules/viewInformation/ViewInformation";

const ViewObservation = () => {
  const [searcher, setSearcher] = useState("");
  const Students = [
    {
      nombre: "estudiante 1",
      documento: 1234589,
      plan: 145,
      observaciones: "Crack eres el mejor 1",
    },
    {
      nombre: "estudiante 2",
      documento: 1234567,
      plan: 145,
      observaciones: "Crack eres el mejor 2",
    },
    {
      nombre: "estudiante 2",
      documento: 6712345,
      plan: 145,
      observaciones: "Crack eres el mejor 3",
    },
    {
      nombre: "estudiante 3",
      documento: 1238945,
      plan: 145,
      observaciones: "Crack eres el mejor 4",
    },
  ];

  return (
    <div>
      ViewObservation
      <Searcher setSearcher={setSearcher} />
      <table>
        <thead>
          <tr>
            <th>Nombre Estudiante</th>
            <th>Documento</th>
            <th>Plan</th>
            <th>Ver observaciones</th>
            <th>Crear observaciones</th>
          </tr>
        </thead>
        <tbody>
          {Students.filter((std) =>
            std.documento.toString().includes(searcher)
          ).map((student, index) => (
            <tr key={index}>
              <td>{student.nombre}</td>
              <td>{student.documento}</td>
              <td>{student.plan}</td>
              <td>
                <ViewInformation observacion={student.observaciones} />
              </td>
              <td>
                <CreateInformation data={student} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewObservation;
