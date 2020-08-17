import React from 'react';


const Message = (props) => {
    return (
        <div><b>{props.message.senderName}</b> : {props.message.body}</div>
    )
}


export default Message;

