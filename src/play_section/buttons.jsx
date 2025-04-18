import React, { useEffect, useRef, useState } from "react";

function PlayButtons({setAnimate}) {
  
  const handleClick = (btnType)=>{
    console.log(`Clicked ${btnType} button`);
    setAnimate(btnType);
  }

  return (
    <>
      <div className="w-140 border-3 border-gray-400 h-36 rounded-lg gap-2 p-2 grid grid-cols-2">
        <button className="bg-blue-600" onClick={()=>{handleClick('mele')}}>
          Mele attack
        </button>
        <button className="bg-green-600" onClick={()=>{handleClick('reversal')}}>
          Reversal
        </button>
        <button className="bg-amber-600" onClick={()=>{handleClick('special')}}>
          Special attack
        </button>
        <button className="bg-yellow-600" onClick={()=>{handleClick('finisher')}}>
          Finisher
        </button>
      </div>
    </>
  );
}

export default PlayButtons;
