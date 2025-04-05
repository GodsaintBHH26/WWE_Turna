import React from "react";

import PlayButtons from "./buttons";

function ViewPort() {
  return (
    <>
      <div className="h-96 w-140 bg-gray-600 mb-5 border-4 rounded-md border-l-red-400 border-r-amber-500 border-t-yellow-600 border-b-pink-300"></div>
      <PlayButtons/>
    </>
  );
}

export default ViewPort;
