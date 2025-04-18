import React, { useEffect, useRef } from "react";
import { useState } from "react";

import PlayButtons from "./buttons";

function ViewPort() {
    const [animate, setAnimate] = useState('');
    const player = useRef(null)

    
      useEffect(()=>{
        const pl = player.current
        if(!pl) return;
        if(['mele', 'reversal', 'special', 'finisher'].includes(animate)){
          pl.classList.add('[animation:hitting_1s_ease-in]');
          pl.classList.remove('animate-movement');
        }

        const handleAnimationEnd = ()=>{
          pl.classList.remove('[animation:hitting_0.5s_ease-in]');
          pl.classList.add('animate-movement');
          setAnimate('');
        }

        pl.addEventListener('animationend', handleAnimationEnd);

        return()=>{
          pl.removeEventListener('animationend', handleAnimationEnd);
        };
      },[animate]);
    
    
  return (
    <>
      <div className="h-96 w-140 bg-gray-600 mb-5 border-4 rounded-md border-l-red-400 border-r-amber-500 border-t-yellow-600 border-b-pink-300 relative">
        <div className="bg-red-300 h-24 w-20 bottom-10 absolute left-20 animate-movement [animation-duration:4s] " ref={player}></div>
        <div className="bg-white h-24 w-20 top-10 absolute right-20 animate-movement " ></div>
      </div>
      <PlayButtons setAnimate={setAnimate}/>
    </>
  );
}

export default ViewPort;
