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
          href="/"
          target="_blank"
        >
          GitHub,
        </a>{" "}
        and is hosted on{" "}
        <a rel="noreferrer" href="/" target="_blank">
          {" "}
          Netlify.
        </a>
      </footer>
    </div>
  );
};

export default App;
