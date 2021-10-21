import React, { useState } from "react";

const ErrorExample = () => {
  const [text, setText] = useState("text1");

  const handleClick = () => {
    if (text === "text1") {
      setText("text2");
    } else {
      setText("text1");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change text
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
