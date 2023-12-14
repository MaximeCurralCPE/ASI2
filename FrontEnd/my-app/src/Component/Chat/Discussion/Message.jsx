import React from "react";

export const Message = (props) => {
    return(
        <>
            <div>
                <h3>Message</h3>
                <h6>ID: {props.message.id}</h6>
                <h6>TEXT:{props.message.text}</h6>
            </div>
        </>
    )
}