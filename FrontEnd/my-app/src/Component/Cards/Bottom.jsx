import React from "react";
import { CardList } from './CardList/CardList'
import { Panel } from "./Panel/Panel";
import { useSelector } from 'react-redux';

export const Bottom = () => {
    let current_card = useSelector(state => state.cardReducer.current_card);
    console.log('selected card: ', current_card);
    if (current_card == null) {
        return <div>
            <CardList></CardList>
        </div>;
    }
    return (
        <>
            <table>
                <tr>
                    <td>
                        <div className="container mt-1 mb-2">
                        <CardList />
                        </div>
                    </td>
                    <td>
                    <div>
                        <h1>Panel</h1>
                        <Panel card={current_card}></Panel>
                    </div>
                    </td>
                </tr>
            </table>            
        </>
    )
}