import React, { useState } from 'react';


import { update_selected_card } from '../../../slices/cardSlice';
import { useDispatch } from 'react-redux';

export const Card = (props) =>{
    console.log(props.card)
    const dispatch = useDispatch();

    function handleOnCardSelected(card_obj){
        dispatch(update_selected_card(card_obj));   
    }
    return (
        <div className="panel panel-default" onClick={() => handleOnCardSelected(props.card)}>
        <div className="panel-heading">
            <h3 className="panel-title">carte {props.card.id} description</h3>
        </div>
        <div className="panel-body">
        <div>
        <h1>{props.card.itemName}</h1>
        <h5>ID: {props.card.id} LABEL:{props.card.itemName}</h5>        
        </div>
        
        </div>
    </div>
    );

}
export default Card