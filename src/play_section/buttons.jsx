import React from "react";

function PlayButtons() {
  return (
    <>
      <div className="w-140 border-3 border-gray-400 h-36 rounded-lg gap-2 p-2 grid grid-cols-2">
        <button className="bg-blue-600">Mele attack</button>
        <button className="bg-green-600">Light attack</button>
        <button className="bg-amber-600">Special attack</button>
        <button className="bg-yellow-600">Finisher</button>
      </div>
    </>
  );
}

export default PlayButtons;
