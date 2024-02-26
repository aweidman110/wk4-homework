import React from "react";
import Weather from "./Weather";

const App = () => {
  return (
    <div>
      <Weather />
      <br></br>
      <small>
        <a
          href="https://github.com/aweidman110/wk4-homework"
          rel="noreferrer"
          target="_blank"
        >
          Open-source code
        </a>
        , by{" "}
        <a
          href="https://github.com/aweidman110"
          rel="noreferrer"
          target="_blank"
        >
          Aika Weidman{" "}
        </a>
        from{" "}
        <a href="https://shecodes.io/" rel="noreferrer" target="_blank">
          She Codes
        </a>
      </small>
    </div>
  );
};

export default App;
