import { useState , useEffect } from "react";

const SimpleTest = ()=>{

  const [title, setTitle] = useState ('');
  const [greeting, setGreeting] = useState('Hello')
  useEffect(()=>{
        if(!title){
            document.title = 'Welcome!'
        }else{
            document.title = `${greeting}, ${title}`
        }
    
  },[title , greeting])

  return(
    <div>
      <h2>Enter Your Name</h2>
      <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>

      <h2>Choose a Greeting</h2>
      <input type="text" value={greeting} onChange={(e)=> setGreeting(e.target.value)}/>
    </div>
  )
}

export default SimpleTest;