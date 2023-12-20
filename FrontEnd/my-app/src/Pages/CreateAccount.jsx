import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const CreateAccount = () => {
    const [money, setMoney] = useState(0);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        const username  = document.querySelector('#formUsername').value;
        const password  = document.querySelector('#formPassword').value;
        const email     = document.querySelector('#formEmail').value;
        const surname   = document.querySelector('#formSurname').value;
        const lastName  = document.querySelector('#formLastName').value;
        const money     = document.querySelector('#formMoney').value;

        console.log(username, password, email, surname, lastName, money);


        
        const response = await fetch('http://localhost:80/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id:0,
                login: username,
                pwd: password,
                account:money,
                lastName: lastName,
                surName: surname,
                email: email,
                cardList:[0],

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
        <div>
            <h1>Create Account</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>

                
                <Form.Group controlId="formSurname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="surname"
                        placeholder="Enter Surname"
                    />
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="lastName"
                        placeholder="Enter Last Name"
                    />
                </Form.Group>
                
                <Form.Group controlId="formMoney">
                <Form.Label>Money</Form.Label>
                    <Form.Control
                        onChange={(e) => setMoney(e.target.value)}
                        type="range"
                        min={0}
                        max={500}
                        defaultValue={0}
                        
                    />
                    <Form.Label>{money}§</Form.Label>
                </Form.Group>
            </Form>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Create Account
                </Button>
        </div>
    );
};

