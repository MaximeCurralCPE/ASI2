import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        const email = document.querySelector('#formBasicEmail').value;
        const password = document.querySelector('#formBasicPassword').value;
    
        const response = await fetch('http://localhost:8083/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
    
        if (!response.ok) {
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
                        <Form.Label >Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button onClick={handleSubmit} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
        </Container>
    );
};

