import React, { useState} from 'react';




const NewMessageBox = ( { chatSocket, username } ) => {
  const [input, setInput] = useState('');
  

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
{/*       <button
        onClick={handleSubmit}
        type="button" className="btn btn-primary">Send</button> */}
      <button className="fluid ui right labeled icon button" 
        type="button"
        onClick={handleSubmit}>
        <i className="right arrow icon"></i>
          Send
      </button>
    </form>
  );
};

export default NewMessageBox;
