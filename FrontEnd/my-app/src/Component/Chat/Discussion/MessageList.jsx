import React, { useState, useEffect } from 'react';
import { Message } from './Message.jsx';

export const MessageList = ( { chatSocket, username }) => {
    
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if(chatSocket != undefined){
        chatSocket.on('MessageReply', (reply) => {
            let tempMessages = messages;
            tempMessages.push(reply);
            setMessages(previous => [...previous, reply]);
            console.log("messages", messages);
        });
        }
    }, [chatSocket])


    const renderMessages = () => {
        return messages.map((message,index) => (
            <Message 
                key             ={index} 
                message         ={message.message} 
                sender          ={message.sender}
                currentUser     ={username}
            />
        ));
    };

    return (
        <div>
            <div>{renderMessages()}</div>
        </div>
    );
};