import React from "react";
import { CardList } from './CardList/CardList'
import { Panel } from "./Panel/Panel";

import { useSelector } from 'react-redux';
export const Bottom = () => {
    let current_card = useSelector(state => state.cardReducer.current_card);
    console.log(!current_card);
    if (current_card == null) {
        return <div>
            <h1>Card List</h1>
            <CardList></CardList>
        </div>;
    }
    return (
        <>
            <div>
                <h1>test</h1>
                <CardList></CardList>
            </div>
            <div>
                <h1>Panel</h1>
                <Panel card={current_card}></Panel>
            </div>
        </>
    )
}