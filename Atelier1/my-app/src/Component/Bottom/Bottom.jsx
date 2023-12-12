import React from "react";
import { CardList } from './CardList/CardList'
import { Panel } from "./Panel/Panel";
export const Bottom = () => {
    return(
        <>
            <div>Bottom
                <h1>test</h1>
            <CardList></CardList>
            </div>
            <div>panel
                <h1>test</h1>
            <Panel></Panel>
            </div>
        </>
    )
}