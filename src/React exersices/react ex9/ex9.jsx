
import { useEffect, useState } from "react";

const GitHubApi = () => {
  const [name, setName] = useState(""); 
  const [users, setUsers] = useState([]); 

  // si aad u aragtoo 30qof ugu horeysa kaliya usaeffectiga ayaad comment ka qaadi kareysaa👌🏻

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await fetch("https://api.github.com/users");
  //       const data = await response.json();
  //       setUsers(data);
  //       console.log(data)
  //     } catch (error) {
  //       console.error("error", error);
  //     }
  //   };
  //   fetchUserData();
  // }, []);

  
  const handleSearch = (e) => {
    setName(e.target.value);
  };


  const searchPerson = async () => {
    if (name.trim() === "") return;
    try {
      const response = await fetch(`https://api.github.com/users/${name}`);
      const data = await response.json();
      if (data.login) {
        setUsers([data]); 
      } else {
        alert("User Not Found");
      }
    } catch (error) {
      console.error("Error searching user", error);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Github User Search</h1>
      <input 
        type="text" 
        placeholder="Enter ur Username..." 
        value={name} 
        onChange={handleSearch} 
      />
      <button onClick={searchPerson}>Search</button>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginTop: "20px" }}>
        {users.map((u) => (
          <div key={u.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
            <img 
              src={u.avatar_url} 
              alt={u.login} 
              style={{ width: "100px", borderRadius: "50%" }} 
            />
            <h3>{u.login}</h3>
            <a href={u.html_url} target="_blank" rel="noreferrer">View Profile</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubApi;