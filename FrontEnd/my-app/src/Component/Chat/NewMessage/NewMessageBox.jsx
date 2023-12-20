import React, { useState } from 'react';
import { io } from 'socket.io-client';

const NewMessageBox = () => {

    const [message, setMessage] = useState('');

    var socketChat = io('http://localhost:3000');
    socketChat.on('connect', () => {
        console.log(`[REACT] Socket ${socketChat.id} connected to the server`);
    });
    socketChat.on('connect_error', () => {
        console.log(`[REACT] Error connecting socket ${socketChat.id}to the server`);
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        socketChat.emit('msgToServer', `${message}`);
        console.log(`[REACT] sending message: ${message} on socket ${socketChat.id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your message:
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </label>
            <button
                onClick={handleSubmit}
                type="submit">Send
            </button>
        </form>
    );
};

export default NewMessageBox;

