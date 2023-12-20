import React from "react";
import { Top } from "../Component/Top/Top";
import { Bottom } from "../Component/Cards/Bottom";

export const Store = () => {
    return (
        <>
            <div className="container mt-1 mb-2">
                <Top />
            </div>

            <div className="container mt-1 mb-2">
                <Bottom />
            </div>
        </>
    );
}