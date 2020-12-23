import React, { useState } from "react";
import { Lock, Content } from "./components";
import { usePreventTouchMove } from "./hooks";
import "./App.css";

function App() {
  const [showLock, setShowLock] = useState(true)
  usePreventTouchMove();
  return (
    <div className="App">
      {false && <Lock setShowLock={setShowLock}/>}
      <Content />
    </div>
  );
}

export default App;
