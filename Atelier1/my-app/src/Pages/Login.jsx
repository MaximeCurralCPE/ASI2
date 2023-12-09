import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

export const Login = () => {

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
        if (response.status === 403) {
            setLoginState("is-invalid");
        }
        else if (!response.ok) {
            console.error('There was an error!', await response.text());
        } else {
            const data = await response.json();
            console.log(data);
            navigate('/store');
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

