import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Chat } from '../Component/Chat/Chat';

export const Arena = () => {
    return (
        <>
            <div className="container mt-1 mb-2">
                <Chat />
            </div>
        </>
    );
}