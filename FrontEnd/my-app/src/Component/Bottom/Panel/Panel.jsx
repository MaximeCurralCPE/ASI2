import React from 'react';


export const Panel=(props)=>{
    
    return (
        <div className="panel panel-default" >
            <div className="panel-heading">
                <h3 className="panel-title">card_panel {props.card.id} description</h3>
            </div>
            <div className="panel-body">
                
            </div>
        </div>
);
}