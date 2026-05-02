import { useState, useEffect } from "react";

const MouseTracker = ()=>{
   
  const [move, setMove] = useState({x : 0 , y : 0});
  useEffect(()=>{
    const handleMouseMove = (e) =>{
      setMove({x: e.clientX, y: e.clientY})
      window.addEventListener('mousemove', handleMouseMove)

    }

    return ()=>{
      window.addEventListener('mousemove', handleMouseMove)
    }
  },[])
 


  return(
   <div>
   <h3>mouse X : {move.x}</h3>
   <h3>mouse Y : {move.y}</h3>
   </div>
  )
}

export default MouseTracker;