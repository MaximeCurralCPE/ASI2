import React, { useEffect } from "react";
import { MessageList } from "./Discussion/MessageList.jsx";
import { Row, Col } from "react-bootstrap";
import NewMessageBox from "./NewMessage/NewMessageBox.jsx";
import { io } from 'socket.io-client';


export const Chat = () => {
    
    let socketChat = io("http://localhost:3000");

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
}