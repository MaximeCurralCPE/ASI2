import React from "react";
import { MessageList } from "./Discussion/MessageList.jsx";
import { Row, Col } from "react-bootstrap";
import NewMessageBox from "./NewMessage/NewMessageBox.jsx";



export const Chat = () => {

    

    return(
        <>
            <div className="container mt-1 mb-2">
                <MessageList />
            </div>
            <div className="container mt-1 mb-2">
                <NewMessageBox
                />
            </div>
        </> 
)
}