import React from 'react';

import { useSelector } from 'react-redux';

export const Panel=(props)=>{
    let card = useSelector(state => state.cardReducer.current_card);
    return (
        <div className="panel panel-default" >
            <div className="panel-heading">
                <h3 className="panel-title">card_panel {card.id} description</h3>
            </div>
            <div className="panel-body">
                
            </div>
        </div>
);
}