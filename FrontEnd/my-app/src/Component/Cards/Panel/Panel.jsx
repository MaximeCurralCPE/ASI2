import React from 'react';
import { useSelector } from 'react-redux';

export const Panel=(props)=>{

    let userID          = useSelector(state=> (state.userReducer.userID));
    userID              = userID +1;
    userID              = userID.toString();

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
        if (state == "market"){
            console.log('buying card ', props.card.id);
            console.log(props.card.id);        
            const response = fetch('http://localhost:80/api/store/buy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    //TODO: get user id
                    user_id: userID,
                    card_id: props.card.id,
                }),
            });
        }
        else if (state == "inventory"){
            console.log('selling card', props.card.id);
            console.log(props.card.id);        
            const response = fetch('http://localhost:80/api/store/sell', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    //TODO: get user id
                    user_id: userID,
                    card_id: props.card.id,
                }),
            });
        }
      };
    
    return (
        <div className="panel panel-default" >
            <div className="panel-heading">
                <h3 className="panel-title">card_panel {props.card.id} </h3>
            </div>
            <div className="panel-body">
            <div>
                <button onClick={handleButtonClick}>{action}</button> 
                </div>
            </div>
        </div>
);
}