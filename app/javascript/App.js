import React from "react";
import { Routes, Route } from "react-router-dom";
import Greetings from "./components/Greetings";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Greetings />
    </div>
  );
}

export default App;