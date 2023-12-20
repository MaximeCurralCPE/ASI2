/* import React from "react";
import { MessageList } from "./Discussion/MessageList.jsx";
import { Row, Col } from "react-bootstrap";
import NewMessageBox from "./NewMessage/NewMessageBox.jsx";
import { io } from 'socket.io-client';


export const Chat = () => {

    const socketChat = io("http://localhost:3000");

    socketChat.on('connection', () => {
        console.log(socketChat.id);
    })
    
      socketChat.on('connect', () => {
        console.log(socketChat.id);
    })


    return(
        <>
            <div className="container mt-1 mb-2">
                <MessageList
                chatSocket={socketChat} 
                />
            </div>
            <div className="container mt-1 mb-2">
                <NewMessageBox
                chatSocket={socketChat} 
                />
            </div>
        </> 
)
} */


import React from "react";
import { io } from 'socket.io-client';
import { MessageList } from "./Discussion/MessageList.jsx";
import NewMessageBox from "./NewMessage/NewMessageBox.jsx";




export const ChatComponent = () => {

    const socketChat = io("http://localhost:3000");

    socketChat.on('connection', () => {
        console.log(socketChat.id);
    })
    
      socketChat.on('connect', () => {
        console.log(socketChat.id);
    })

    return (
        <div>
            <div className="container mt-1 mb-2">
                <MessageList
                chatSocket={socketChat} 
                />
            </div>
            
            <div className="container mt-1 mb-2">
                <NewMessageBox
                    chatSocket={socketChat} 
                />
            </div>
        </div>
    );
};

export default ChatComponent;
