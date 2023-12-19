import React, { useEffect, useState } from 'react';
import { update_card_list , update_current_list, update_selected_card } from '../../slices/cardSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Top = (props) =>{
    const navigate      = useNavigate();
    const dispatch      = useDispatch();
    let current_list    = useSelector(state=> state.cardReducer.current_list);
    let userID          = useSelector(state=> (state.userReducer.userID));
    userID              = userID +1;
    userID              = userID.toString();

    useEffect(() => {
        getInitCardsToSell();
    }, []);

    const getInitCardsToSell = async () => {
        let inventoryData = await getUserCards();
        dispatch(update_card_list(inventoryData));
    }

    const getCardsToSell = async () => {

        let retData = null;

        const response = await fetch('http://localhost:80/api/cards_to_sell', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            retData = await response.json();
        }
        else {
            console.error('There was an error!', await response.text());
        }

        return retData;
    }

    
    const getUserCards = async () => {    
            let retData     = null;
            let inventory   = [];
            let card        = null;
            
            const response = await fetch('http://localhost:80/api/user/'+userID, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                retData = await response.json();
                inventory = await Promise.all(retData.cardList.map(async cardID => {
                    const reponseForCard = await fetch('http://localhost:80/api/card/'+cardID.toString(), {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    card = await reponseForCard.json();                  
                    return card;
                }));
            }
            else {
                console.error('There was an error!', await response.text());
            }
    
            return inventory;
    }

    const handleOnClick = async (e) => {
        navigate('/arena');
    }

    
    async function handleOnChangeList(){
        
        let currentCard = null
        dispatch(update_selected_card(currentCard));
        if (current_list == "market"){
            let inventoryData = await getUserCards();
            dispatch(update_card_list(inventoryData));
            current_list = "inventory"
        }
        else if (current_list == "inventory"){
            let marketData = await getCardsToSell();
            dispatch(update_card_list(marketData));
            current_list = "market"
        }
        dispatch(update_current_list(current_list)); 
        //dispatch(update_card_list(new_list));    
    }
    return (
        <div>
        <button onClick={handleOnClick}>Arena</button>
        <button onClick={handleOnChangeList}>Change list</button> 
        </div>
        );

}
