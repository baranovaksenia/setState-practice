import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complex = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0 " }}>
        <h2>Simple Counter</h2>
        <h3>{value}</h3>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
        <button className="btn" onClick={complex}>
          complex
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
