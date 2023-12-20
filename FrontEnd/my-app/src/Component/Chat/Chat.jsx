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
            <div className="ui segment">
                <div className="ui top attached label">
                    <div className="ui two column grid">
                        <div className="column">Chat</div>
                        <div className="column">
                            <div className="ui two column grid">
                                <div className="column">Eric Smith</div>
                                <div className="column">
                                    <i className="user circle icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui fluid search selection dropdown">
                <input type="hidden" name="country" />
                <i className="dropdown icon"></i>
                <div className="default text">Select User</div>
                <div className="menu">
                    <div className="item" data-value="jd">
                        <i className="jd user circle icon"></i>John Doe
                    </div>
                    <div className="item" data-value="er">
                        <i className="er user circle icon"></i>Eric Smith
                    </div>
                </div>
            </div>
            <div className="ui segment">
                <div className="ui raised segment">
                    <a className="ui blue ribbon label">Eric</a>
                    <p>good luck!</p>
                </div>
                <div className="ui raised segment">
                    <a className="ui green right ribbon label">Me</a>
                    <p>You gonna die!</p>
                </div>
                <div className="ui raised segment">
                    <a className="ui blue ribbon label">Eric</a>
                    <p>Not sure</p>
                </div>
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
