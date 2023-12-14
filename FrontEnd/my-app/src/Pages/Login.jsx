import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateUserID } from '../slices/userSlice';

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginState, setLoginState] = useState("is-neutral");


    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        const username = document.querySelector('#formBasicEmail').value;
        const password = document.querySelector('#formBasicPassword').value;
    
        const response = await fetch('http://localhost:80/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        // If the reply is good, then we can navigate to the home page
        if (response.status === 200) {
            const data = await response.json();
            console.log("ID");
            console.log(data);
            dispatch(updateUserID(data)); // Update the user ID in the store
            navigate('/store');
        }
        else if (response.status === 403) {
            setLoginState("is-invalid");
        }
        else {
            console.error('There was an error!', await response.text());
        }
    };

    return (
        
        <Container className="bg-light">
                <h1>Login</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label >Login</Form.Label>
                        <Form.Control className={loginState} type="email" placeholder="Enter login" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className={loginState} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button onClick={handleSubmit} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </Container>
    );
};

