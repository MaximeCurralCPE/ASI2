import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const navigate = useNavigate();


    const handleLoginClick = () => {
        console.log('Login Clicked');
        navigate('/login');
    };

    const handleCreateAccountClick = () => {
        console.log('Create Account Clicked');
        navigate('/create-account');
    };

    return (
        <div>
            <h1 >Welcome to the Home Page</h1>
            <Button variant="primary" onClick={handleLoginClick} className="mr-2">Login</Button>
            <Button variant="secondary" onClick={handleCreateAccountClick}>Create Account</Button>
        </div>
    );
};
