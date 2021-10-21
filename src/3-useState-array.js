import React from "react";
import { data } from "./data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <>
      {people.map((person) => {
        const { name, id } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>2</button>
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>1</button>
    </>
  );
};

export default UseStateArray;
