import React, { useState } from 'react';


import { update_selected_card } from '../../../slices/cardSlice';
import { useDispatch } from 'react-redux';

export const Card = (props) =>{
    const dispatch = useDispatch();

    function handleOnCardSelected(card_obj){
        dispatch(update_selected_card(card_obj));   
    }
    return (
        /* <div className="panel panel-default" onClick={() => handleOnCardSelected(props.card)}>
            <div className="panel-heading">
                <h3 className="panel-title">carte {props.card.id} description</h3>
            </div>
            <div className="panel-body">
                <div>
                    <h1>{props.card.itemName}</h1>
                    <h5>ID: {props.card.id} LABEL:{props.card.itemName}</h5>
                </div>

            </div>
        </div> */

        <div className="ui special cards">
            <div className="card" onClick={() => handleOnCardSelected(props.card)}>
                <div className="content">
                    <div className="ui grid">
                        <div className="three column row">
                            <div className="column">
                                <h7>card n° {props.card.id}</h7>
                            </div>
                            <div className="column">
                                <h5> {props.card.name}</h5>
                            </div>
                            <div className="column">
                                <h7>{props.card.price} $</h7>
                            </div>
                            <div className="column" style={{ textAlign: 'center' }}>
                                <a className="ui blue circular label">energy {props.card.energy}</a>
                            </div>
                            <div className="column" style={{ textAlign: 'center' }}>
                                <a className="ui green circular label">hp {props.card.hp}</a>
                            </div>
                            <div className="column" style={{ textAlign: 'center' }}>
                                <a className="ui orange circular label">defense {props.card.defence}</a>
                            </div>
                            <div className="column" style={{ textAlign: 'center' }}>
                                <a className="ui red circular label">attack {props.card.attack}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image imageCard">
                    <div className="ui fluid image">
                        <img
                            id="cardImgId"
                            className="ui centered image"
                            src={props.card.smallImgUrl}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Card