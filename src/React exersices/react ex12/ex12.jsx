import { useState } from "react";


const Count = ()=>{

    const [count, setCount] = useState(0)

    const handleAdd = ()=>{
        const nextNum = count + 1
        setCount(nextNum)
    }
    const handleMines = ()=>{
        const prevNum = count - 1;
        setCount(prevNum)
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <button disabled={count == 0} onClick={handleMines}>decrement</button>
            <button  onClick={handleAdd}>increment</button>
            
        </div>
    )

}

export default Count;