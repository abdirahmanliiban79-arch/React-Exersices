import { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState(""); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAuth = () => {
   
    setIsLoggedIn(!isLoggedIn);

  };
 
  return (
    <div style={{ padding: "14px" }}>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {name}!</h2>
        </div>
      ) : (
        <div>
          <h1>LOGIN</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleName}
          />
          <input type="password" placeholder="Enter your pass" /><br />
        </div>
      )}

      <button style={{ marginTop: "20px" }} onClick={handleAuth}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default LoginForm;