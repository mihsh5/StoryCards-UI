import React from "react";
import ReactDOM from "react-dom";
import StoryCards from "./StoryCards";
import "./styles.css";

function App() {
  return <StoryCards />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
