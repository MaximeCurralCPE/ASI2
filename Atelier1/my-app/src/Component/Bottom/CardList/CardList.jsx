import React, { Component } from 'react';
import {Card} from '../Card/Card';


export const LeftSide =(props)=>{
    //TODO flip flop ?
    let card_list = useSelector(state=> state.cardReducer.card_list);

    function getCardListRender(){
        let array_render=[];
       
        for(var i=0;i<card_list.leght;i++){
            
            array_render.push(
                <Card
                   card={card_list[i]}
                />
                );
        }
        return array_render;
    }

    const display_list = getCardListRender();
    return (
            <div>
               {display_list}
            </div>
    );
}