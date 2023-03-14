import React from "react";
import ReactDOM from "react-dom/client";
import Banner from "./Banner";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Terminal from "./Terminal";
import TerminalEntry from "./TerminalEntry";
import Word from "./Word";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Terminal>
      <TerminalEntry>
        <Banner>
          <Word style={{ color: "goldenrod" }}>Wheat</Word> Hoarder
        </Banner>
      </TerminalEntry>
    </Terminal>
  </React.StrictMode>
);

reportWebVitals();
