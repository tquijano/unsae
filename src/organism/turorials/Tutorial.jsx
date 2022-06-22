import React, { useEffect } from "react";
import Searcher from "../../molecules/searcher/Searcher";
import Saludo from "../../assets/img/ola.gif";
import { useState } from "react";
import "./Tutorial.scss";
import Cards_tutor from "../../molecules/cards_tutor/Cards_tutor";
import { useDispatch } from "react-redux";
import {
  getHistoryTutor,
  getHistoryTutorStudent,
  getHistoryTutorTeacher,
} from "../../actions/historyTutor";
import { getPendingTutor } from "../../actions/pendingTutor";

const Tutorial = ({ id, user, data }) => {
  const dispatch = useDispatch();

  const [searcher, setSearcher] = useState("");
  const [cardSelected, setCardSelected] = useState(0);
  const [dataTutorialHistory, setDataTutorialHistory] = useState([]);
  const [dataTutorialPending, setDataTutorialPending] = useState([]);

  const cards = [
    { title: "Actual", color: "#30B3AB" },
    { title: "Historial", color: "#30B3AB" },
  ];

  useEffect(() => {
    data.length === 3
      ? dispatch(getPendingTutor(1, id, setDataTutorialPending)) &&
        dispatch(getHistoryTutorStudent(id, setDataTutorialHistory))
      : data.length === 5
      ? dispatch(getPendingTutor(1, id, setDataTutorialPending)) &&
        dispatch(getHistoryTutorTeacher(id, setDataTutorialHistory))
      : dispatch(getHistoryTutor(setDataTutorialHistory));
  }, [dispatch, setDataTutorialHistory]);
  return (
    <div className='tutorial'>
      <div className='tutorial_header'>
        <div className='tutorial_header--title'>
          <h1>Bienvenido {user} </h1>
          <img className='tutorial_img' src={Saludo} />
        </div>
        <Searcher setSearcher={setSearcher} />
      </div>

      {data.length === (3 || 5) && (
        <div className='tutorial_cards'>
          {cards.map(({ title, color }, index) => (
            <Cards_tutor
              setCardSelected={setCardSelected}
              value={index}
              title={title}
              color={color}
              key={index}
            />
          ))}
        </div>
      )}

      <table>
        <thead>
          <tr>
            {data.map((title, index) => (
              <th
                key={index}
                className={`tutorial-th--${
                  data.length === 3
                    ? "estudiantes"
                    : data.length === 5
                    ? "docentes"
                    : "bienestar"
                }`}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        {data.length === 3 &&
          (cardSelected === 0 ? (
            <>
              {dataTutorialPending[0] && (
                <tbody>
                  {dataTutorialPending[0]
                    .filter((std) =>
                      std.nombre_completo.toString().includes(searcher)
                    )
                    .map((student, index) => (
                      <tr key={index}>
                        <>
                          <td>{student.nombre_completo}</td>
                          <td>
                            {new Date(
                              student.fecha_de_la_tutoria
                            ).toLocaleDateString()}
                          </td>
                          <td>{student.estado}</td>
                        </>
                      </tr>
                    ))}
                </tbody>
              )}
            </>
          ) : (
            <>
              {dataTutorialHistory[0] && (
                <tbody>
                  {dataTutorialHistory[0]
                    .filter((std) =>
                      std.nombre_docente.toString().includes(searcher)
                    )
                    .map((student, index) => (
                      <tr key={index}>
                        <>
                          <td>
                            {student.nombre_docente +
                              " " +
                              student.apellido_docente}
                          </td>
                          <td>
                            {new Date(
                              student.fecha_de_la_tutoria
                            ).toLocaleDateString()}
                          </td>
                          <td>
                            {student.estado_tutoria === 5
                              ? "No realizada"
                              : "Realizada"}
                          </td>
                        </>
                      </tr>
                    ))}
                </tbody>
              )}
            </>
          ))}

        {/* // : (
        //   <>
        //     {dataTutorialPending[0] && (
        //       <tbody>
        //         {dataTutorialPending[0]
        //           .filter((std) =>
        //             std.documento_estudiante.toString().includes(searcher)
        //           )
        //           .map((student, index) => (
        //             <tr key={index}>
        //               <>
        //                 <td>{student.nombre_apellido_docente}</td>
        //                 <td>{student.documento_docente}</td>
        //                 <td>{student.nombre_apellido_estudiante}</td>
        //                 <td>{student.documento_estudiante}</td>
        //                 <td>{student.nombre_plan}</td>
        //                 <td>{student.tipo_remision}</td>
        //                 <td>{new Date(student.fecha).toLocaleDateString()}</td>
        //                 <td>
        //                   <Checkbox
        //                     state={student.atendida}
        //                     codigo={student.codigo_remision}
        //                     id={index}
        //                   />
        //                 </td>
        //               </>
        //             </tr>
        //           ))}
        //       </tbody>
        //     )}
        //   </>
        // )} */}
      </table>
    </div>
  );
};

export default Tutorial;