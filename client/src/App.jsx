import { useState } from 'react';
import './App.css';
import io from 'socket.io-client';
import Login from './Login';
import Chat from './Chat';

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = (user, roomID) => {
    setUsername(user);
    setRoom(roomID);
    socket.emit("join_room", roomID);
    setShowChat(true);
  };

  return (
    <div className="App">
      {!showChat ? (
        <Login joinRoom={joinRoom} />
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
