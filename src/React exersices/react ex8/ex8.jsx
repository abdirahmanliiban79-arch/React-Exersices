import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [value, setValue] = useState(30);
  const [sec, setSec] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let clearIntervalId;
    if (isRunning && sec > 0) {
      clearIntervalId = setInterval(() => {
        setSec((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(clearIntervalId);
  }, [isRunning, sec]);

  const handleStart = () => {
    if(sec > 0){
    setIsRunning(true);
    }
    
  };
  const handleStop = () => {
    setIsRunning(false)}
  const handleReset = () => {
    setIsRunning(false);
    setSec(value);
  };
  const handleChange = (e)=>{
    const value = Number(e.target.value);
    setValue(value);
    setSec(value);
    setIsRunning(false)
  }

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>
        Set time (sec):
        <input
          type="number"
          value={value}
          onChange={handleChange}
        />
      </p>
      <p>Time left : {sec} sec</p>
      <button disabled={isRunning} onClick={handleStart}>
        Start
      </button>
      <button disabled={!isRunning} onClick={handleStop}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CountdownTimer
