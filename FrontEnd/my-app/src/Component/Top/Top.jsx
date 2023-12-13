import React, { useState } from 'react';


import { update_card_list , update_current_list } from '../../slices/cardSlice';
import { useDispatch,useSelector } from 'react-redux';

export const Top = (props) =>{
    const dispatch = useDispatch();
    let current_list = useSelector(state=> state.cardReducer.current_list);

    const marketData = [
        { id: 1, itemName: 'Item 1', price: 10 },
        { id: 2, itemName: 'Item 2', price: 20 },
        { id: 3, itemName: 'Item 3', price: 15 },
        // Ajoutez d'autres éléments au besoin
      ];
    const inventoryData = [
    { id: 'a', itemName: 'Inventory Item A', quantity: 5 },
    { id: 'b', itemName: 'Inventory Item B', quantity: 10 },
    { id: 'c', itemName: 'Inventory Item C', quantity: 8 },
    // Ajoutez d'autres éléments au besoin
    ];
    function handleOnChangeList(){
        
        console.log("infunction")
        //let new_list = []
        
        if (current_list == "market"){
            //new_list = inventoryData //TODO GET either marketlist or inventorylist
            dispatch(update_card_list(inventoryData));
            current_list = "inventory"
        }
        else if (current_list == "inventory"){
            
            dispatch(update_card_list(marketData));
            //new_list = marketData //TODO GET either marketlist or inventorylist
            current_list = "market"
        }
        dispatch(update_current_list(current_list)); 
        //dispatch(update_card_list(new_list));    
    }
    return (
        <div>
        <button onClick={handleOnChangeList}>Button</button> 
        <p>Text on the left</p>
        </div>
        );

}
