import React, { Fragment } from "react";

const ErrorExample = () => {
  let title = "Random title";
  const handleClick = () => {
    title = "Hello people";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
