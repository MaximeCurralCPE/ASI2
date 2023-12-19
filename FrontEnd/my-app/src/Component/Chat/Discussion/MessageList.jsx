import React, { useState, useEffect } from 'react';
import { Message } from './Message.jsx';

export const MessageList = ( {chatSocket} ) => {
    
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        chatSocket.on('MessageReply', (reply) => {
            setMessages( [...messages, reply]);
        });
    })


    const renderMessages = () => {
        console.log("Rendering messages", messages);
        return messages.map((message,index) => (
            console.log("Message", message),
            <Message 
                key={index} 
                message={message.message.toString()} 
                sender={message.sender.toString()}
            />
        ));
    };

    return (
        <div>
            <div>{renderMessages()}</div>
        </div>
    );
};