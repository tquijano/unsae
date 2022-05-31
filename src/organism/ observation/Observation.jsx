import React, { useState } from "react";
import Searcher from "../../molecules/searcher/Searcher";
import CreateInformation from "../../molecules/createInformation/CreateInformation";
import "./Observation.scss";
import ViewInformation from "../../molecules/viewInformation/ViewInformation";
import { useSelector } from "react-redux";
import Saludo from "../../assets/img/ola.gif";

const Observation = () => {
  const { user } = useSelector((state) => state.auth);
  const [searcher, setSearcher] = useState("");
  const Students = [
    {
      nombre: "tania Gissell quijano gonzalez",
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
    <div className='observation'>
      <div className='observation_header'>
        <div className='observation_header--title'>
          <h1>Bienvenido {user} </h1>
          <img className='observation_img' src={Saludo} />
        </div>
        <Searcher setSearcher={setSearcher} />
      </div>
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

export default Observation;
