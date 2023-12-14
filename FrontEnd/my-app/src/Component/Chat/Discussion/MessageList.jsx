import React, { Component } from 'react';
import { Message } from './Message.jsx';

export const MessageList = (props) => {

    const messages = [
        { id: 1, text: 'Hello' },
        { id: 2, text: 'How are you?' },
        { id: 3, text: 'Im good, thanks!' },
    ];

    const renderMessages = () => {
        return messages.map((message) => (
            <Message message={message} />
        ));
    };

    return (
        <div>
            <div>{renderMessages()}</div>
            <script src="/socket.io/socket.io.js"></script>
            <script>
                var socket = io();
                socket.emit('myEvent1', "Hello World");
                socket.on('myEvent2', function(data){alert(data)});
            </script>
        </div>
    );
};