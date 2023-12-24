import { Row, Col } from "react-bootstrap";
import NewMessageBox from "./NewMessage/NewMessageBox.jsx";
import { io } from 'socket.io-client';
import React , { useEffect, useState } from "react";
import { MessageList } from "./Discussion/MessageList.jsx";
import { useSelector } from 'react-redux';


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


export const ChatComponent = () => {

    //const socketChat = io("http://localhost:3000");
    const [socketChat,setSocketChat] =useState(undefined)

    let userID = useSelector(state => (state.userReducer.userID));
    userID = userID + 1;
    userID = userID.toString();
    const [username, setUsername] = useState('');


    const getUsername = async () => {
        const response = await fetch('http://localhost:80/api/user/' + userID, {
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

    useEffect(() => {
        getUsername();
        let socketChat_tmp = io("http://localhost:3000");

        socketChat_tmp.on('connection', () => {
            //console.log(socketChat.id);
        })
    
        socketChat_tmp.on('connect', () => {
            //console.log(socketChat.id);
        })
        setSocketChat(socketChat_tmp)
    }, []);

    
    return (
        <div>
            <div className="container mt-1 mb-2">
                <MessageList
                    chatSocket={socketChat}
                    username={username}
                />
            </div>

            <div className="container mt-1 mb-2">
                <NewMessageBox
                    chatSocket={socketChat}
                    username={username}
                />
            </div>
        </div>
    );
};

export default ChatComponent;
