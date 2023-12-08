import React, { useState } from 'react';


import { update_card_list , update_current_list } from '../../slices/cardSlice';
import { useDispatch } from 'react-redux';

export const Card = (props) =>{
    const dispatch = useDispatch();
    let current_list = useSelector(state=> state.cardReducer.current_list);

    function handleOnChangeList(){

        if (current_list == "market"){
            new_current_list = "inventory"
        }
        else if (current_list == "inventory"){
            new_current_list = "market"
        }

        new_list = [] //TODO GET either marketlist or inventorylist

        dispatch(update_selected_list(new_current_list)); 
        dispatch(update_card_list(new_list));    
    }
    return (
        <div></div>
        );

}
