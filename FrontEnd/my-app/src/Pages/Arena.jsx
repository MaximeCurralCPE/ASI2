import React from 'react';
import Button from 'react-bootstrap/Button';
import {Row, Col, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CardShort from '../Component/Cards/Card/CardShort';
import Chat from '../Component/Chat/Chat';
import { Game } from '../Component/Game/Game';
import { CardList } from '../Component/Cards/CardList/CardList';


export const Arena = () => {

    return (
        <>
        <Row>
            <Col sm={4}>
                <div className="container mt-1 mb-2">
                    <Chat 
                    />
                </div>
            </Col>
            <Col sm={4}>
                <div className="container mt-1 mb-2">
                <h1>ZONE DE JEU</h1>
                    <Game
                    />
                </div>
            </Col>
            <Col sm={4}>
                <div className="container mt-1 mb-2">
                    <CardList>
                    </CardList>
                </div>
            </Col>
        </Row>
            
        </>
    );
}
