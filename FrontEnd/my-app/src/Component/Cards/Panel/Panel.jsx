import React from 'react';

import { useSelector } from 'react-redux';

    

export const Panel=(props)=>{
    let state = useSelector(state => state.cardReducer.current_list);
    console.log(state);
    let action;
    if (state == "market"){
        console.log('market');
        action = "Buy";
    }
    else if (state == "inventory"){
        console.log('inventory');
        action = "Sell";
    }
    const handleButtonClick = () => {
        console.log('Button clicked!');
        if (state == "market"){
            console.log('Buy');
        }
        else if (state == "inventory"){
            console.log('sell');
        }
      };
    
    return (
        <div className="panel panel-default" >
            <div className="panel-heading">
                <h3 className="panel-title">card_panel {props.card.id} </h3>
            </div>
            <div className="panel-body">
            <div>
                <button onButtonClick={handleButtonClick}>{action}</button> 

                
                </div>
            </div>
        </div>
);
}