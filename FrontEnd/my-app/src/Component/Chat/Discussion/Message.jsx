import React from "react";

export const Message = (props) => {
    return(
        <>
            <div>Message
                <h5>ID: {props.message.id}</h5>
                <h5>TEXT:{props.message.text}</h5>
            </div>
            <div class="ui raised segment">
                <a class="ui blue ribbon label">Eric</a>
                <span> 10:00:01</span>
                <p>good luck!</p>
            </div>
        </>
    )
}