import React, { useState } from "react";
import Swal from "sweetalert2";
import "./CreateInformation.scss";

const CreateInformation = ({ data }) => {
  //En textInfo esta lo que se creo
  const [textInfo, setTextInfo] = useState("");
  const handleCreate = async () => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Crear Observación",
      inputPlaceholder: "Escriba su observación aqui...",
      inputAttributes: {
        "aria-label": "Escriba su observación aqui",
      },
      showCancelButton: true,
    });

    if (text) {
      console.log("data", data);
      setTextInfo(text);
      Swal.fire("Observacion exitosamente creada");
    }
  };
  return (
    <button className='createInformation_button' onClick={handleCreate}>
      Crear Observacion
    </button>
  );
};

export default CreateInformation;
