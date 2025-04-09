import React, { useEffect, useRef } from "react";
import { useState } from "react";

import PlayButtons from "./buttons";

function ViewPort() {
    const [animate, setAnimate] = useState(false);
    const player = useRef(null)

    
      useEffect(()=>{
        const pl = player.current
        if(animate){
          pl.classList.add('hitting')
        }

        const handleAnimationEnd = ()=>{
          pl.classList.remove('hitting');
          setAnimate(false);
        }

        pl.addEventListener('animationend', handleAnimationEnd);
      },[animate]);
    
    
  return (
    <>
      <div className="h-96 w-140 bg-gray-600 mb-5 border-4 rounded-md border-l-red-400 border-r-amber-500 border-t-yellow-600 border-b-pink-300 relative">
        <div className="bg-white h-24 w-20 bottom-10 absolute left-20" ref={player}></div>
        <div className="bg-white h-24 w-20 top-10 absolute right-20"></div>
      </div>
      <PlayButtons setAnimate={setAnimate}/>
    </>
  );
}

export default ViewPort;
