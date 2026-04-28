import { useState } from "react";

const ToggleBtn = () => {
  const [isBtn, setIsBtn] = useState(false);

  const handleBtn = () => {
    setIsBtn(!isBtn);
  };

  return (
    <div>
      <p>the button is {isBtn ? "ON" : "OFF"}</p>
      <button onClick={handleBtn}>Turn {isBtn ? "OFF" : "ON"}</button>
    </div>
  );
};

export default ToggleBtn;
