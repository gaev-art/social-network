import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElement = props.state.messages.map( m => <Message message={m.message} /> );

    let addMessageElement = React.createRef();

let addMessage=()=>{
    let newMessage = addMessageElement.current.value;
    addMessageElement.current.value = '';

    alert(newMessage)
}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <textarea ref={addMessageElement}></textarea>
                <button onClick={addMessage}>Отправить</button>
            </div>

        </div>
    )
};
export default Dialogs;

