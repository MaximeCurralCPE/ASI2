import React, { useState } from 'react';
import {Label} from './containers/label';
import {Visual} from './containers/visual';

import { update_selected_card } from '../../slices/cardSlice';
import { useDispatch } from 'react-redux';

export const Card = (props) =>{

    const dispatch = useDispatch();

    function handleOnCardSelected(card_obj){
        dispatch(update_selected_card(card_obj));   
    }
    return (
        <div className="panel panel-default" onClick={()=>{handleOnCardSelected(props.card)}}>
            <div className="panel-heading">
                <h3 className="panel-title">card {props.id} description</h3>
            </div>
            <div className="panel-body">
                <Label 
                    title={props.card.title} 
                    id={props.card.id} 
                />
                <Visual 
                    type={props.card.visual_type} 
                    src={props.card.visual_src} 
                />
            </div>
        </div>
        );

}
