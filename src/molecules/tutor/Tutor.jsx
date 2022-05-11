import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDocentes } from "../../actions/tutors";

const Tutor = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDocentes());
  }, [dispatch]);

  const teachers = [
    { documento: "12354", nombres: "lola" },
    { documento: "123545", nombres: "lolita" },
  ];
  return (
    <>
      <select name='select'>
        {teachers.map((teacher) => (
          <option value={teacher.documento}> {teacher.nombres} </option>
        ))}
      </select>
    </>
  );
};

export default Tutor;
