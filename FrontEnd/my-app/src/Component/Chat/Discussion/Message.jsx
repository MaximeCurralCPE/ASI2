import React from "react";

export const Message = (props) => {

    console.log("Message", props.message);

    return(
        <>
            <div>
                <h5>{props.sender}</h5>
                <h6>{props.message}</h6>
            </div>
        </>
    )
}