import React from "react";
import { CardList } from './CardList/CardList'
import { Panel } from "./Panel/Panel";

import { useSelector } from 'react-redux';
export const Bottom = () => {
    let card = useSelector(state => state.cardReducer.current_card);

    if(card.id == undefined){
        return <div>Bottom
        <h1>Card List</h1>
        <CardList></CardList>
        </div>;
      }
    return(
        <>
            <div>Bottom
                <h1>test</h1>
            <CardList></CardList>
            </div>
            <div>
                <h1>Panel</h1>
                <Panel card={card}></Panel>
            </div>
        </>
    )
}