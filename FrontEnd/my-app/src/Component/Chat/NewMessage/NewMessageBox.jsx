import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const NewMessageBox = ( {chatSocket} ) => {
  const [input, setInput] = useState('');
  let userID          = useSelector(state=> (state.userReducer.userID));
  userID              = userID +1;
  userID              = userID.toString();
  const [username, setUsername] = useState('');
  

  const getUsername = async () => {  
    const response = await fetch('http://localhost:80/api/user/'+userID, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.status === 200) {
      let serverReply = await response.json();
      console.log("serverReply", serverReply);
      setUsername(serverReply.login);

    }
    else {
        console.error('There was an error!', await response.text());
    }

  };

  const handleSubmit = async (e) => {
    const message = document.querySelector('#messageInput').value;

    let data = {
      "message": message,
      "sender": username
    };

    chatSocket.emit('Message', data);
    setInput('');
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  getUsername();

  return (
    <form onSubmit={handleKeyDown}>
      <div className="form-group">
        <label htmlFor="nameInput">Enter message</label>
        <input
          id="messageInput"
          type="text"
          className="form-control"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button 
      onClick={handleSubmit}
      type="button" className="btn btn-primary">Send</button>
    </form>
  );
};

export default NewMessageBox;
