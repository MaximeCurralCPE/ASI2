import React from "react";

export const Message = (props) => {

    console.log("Message", props.message);

    return(
        <>
            <div>
            <a className="ui blue ribbon label">{props.sender}</a>
                <h6>{props.message}</h6>
            </div>
        </>
    )
}