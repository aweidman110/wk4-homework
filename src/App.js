import React from "react";
import Weather from "./Weather";

const App = () => {
  return (
    <div>
      <Weather />
      <br></br>
      <br></br>
      <footer>
        This project was coded by{" "}
        <a
          rel="noreferrer"
          href="https://github.com/aweidman110"
          target="_blank"
        >
          Aika Weidman,
        </a>{" "}
        is open-sourced on{" "}
        <a
          rel="noreferrer"
          href="https://github.com/aweidman110/wk4-homework"
          target="_blank"
        >
          GitHub,
        </a>{" "}
        and is hosted on{" "}
        <a
          rel="noreferrer"
          href="https://react-wk4-homework.netlify.app/"
          target="_blank"
        >
          {" "}
          Netlify.
        </a>
      </footer>
    </div>
  );
};

export default App;
