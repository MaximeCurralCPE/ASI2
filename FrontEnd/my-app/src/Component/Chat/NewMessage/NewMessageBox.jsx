import React, { useState } from 'react';
import { io } from 'socket.io-client';

const NewMessageBox = (socketChat) => {
  const [userName, setName] = useState('');

  var socketChat = io('http://localhost:80/chat');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    var reply = await socketChat.emit('myEvent1', 'user name is ${userName}');
    console.log(reply);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={userName}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button 
      onClick={handleSubmit}
      type="submit">Send</button>
    </form>
  );
};

export default NewMessageBox;

