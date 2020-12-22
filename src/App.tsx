import React from "react";
import { Lock, Content } from "./components";
import { usePreventTouchMove } from "./hooks";
import "./App.css";

function App() {
  usePreventTouchMove();
  return (
    <div className="App">
      {true && <Lock />}
      <Content />
    </div>
  );
}

export default App;
