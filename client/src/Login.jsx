import React, { useState } from 'react';
import './Login.css';

function Login({ joinRoom }) {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const handleJoin = () => {
    if (username !== "" && room !== "") {
      joinRoom(username, room);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h3>Join Chat</h3>
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          placeholder="Room ID..."
          onChange={(event) => setRoom(event.target.value)}
        />
        <button onClick={handleJoin}>Join A Room</button>
      </div>
    </div>
  );
}

export default Login;
