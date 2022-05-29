import React, { useState } from "react";
import Swal from "sweetalert2";

const CreateInformation = ({ data }) => {
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
    <div>
      <button onClick={handleCreate}>Crear Observacion</button>
      <h1>{textInfo ? textInfo : ""}</h1>
    </div>
  );
};

export default CreateInformation;
