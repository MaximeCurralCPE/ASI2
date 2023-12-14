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

    return <div>{renderMessages()}</div>;
};