import { useState } from "react";


const Count = ()=>{

    const [count, setCount] = useState(0)
    const [reached, setReached] = useState(false)
    const handleAdd = ()=>{
        const nextNum = count + 1
        setCount(nextNum)
        if(nextNum == 10){
            setReached(true)
        }else{
            setReached(false)
        }
    }
    const handleMines = ()=>{
        const prevNum = count - 1;
        setCount(prevNum)
        if(count !== 10){
            setReached(false)
        }else{
            setReached(true)
        }
    }


    return (
        <div>
            <h2 style={{color : count >= 10 ? 'green' : count >= 6 ? "blue" : 'yellow' }}>Count : {count}</h2>
            <button disabled={count == 0} onClick={handleMines}>decrement</button>
            <button  onClick={handleAdd}>increment</button>
            {
                reached && <p>Congr You Reached The Score</p> 
            }
        </div>
    )

}

export default Count;