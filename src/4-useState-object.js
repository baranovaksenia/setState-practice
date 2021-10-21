import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "hi",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "hello" });
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </div>
  );
};

export default UseStateObject;
