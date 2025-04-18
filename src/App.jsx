import { useState } from "react";
import ViewPort from "./play_section/ViewPort";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen items-center w-screen">
        <h1 className="text-red-500 font-bold mb-8 top-1 ">WWE Turna!!</h1>
        <ViewPort />
      </div>
    </>
  );
}

export default App;
