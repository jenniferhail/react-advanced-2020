import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
// Second parameter can be empty so it only runs on the first render
// Or the second parameter can have dependencies, so it runs every time that dependency will change
// You can have as many useEffects as you want

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Call useEffect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  return (
    <>
      <h1>{value}</h1>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
