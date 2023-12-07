import React from "react";
import Background from "./components/background";
import Foreground from "./components/Foreground";

const App = () => {
  return (
    <div className="realative w-full h-screen bg-zinc-700">
      <Background />
      <Foreground />
    </div>
  );
};

export default App;
