import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {AddMessageFormRedux} from './AddMessageForm';
import Preloader from '../common/Preloader/Preloader';


const Dialogs = (props) => {


    let dialogsElement = props.dialogs.map(d => <DialogItem
        key={d.id}
        dialogs={d}
        getMessages={props.getMessages}
        userId={props.userId}/>);

    let messagesElement = props.messages.map(m => <Message
        key={m.id}
        message={m}
        userId={props.userId}
        deleteMessage={props.deleteMessage}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h3>Dialogs:</h3>
                {props.loadingDialogs ? <Preloader/> :
                    <div>
                        {dialogsElement}
                    </div>
                }
            </div>
            <div className={s.messages}>
                <h3>Messages:</h3>
                {props.messages.length < props.currentDialogsMessagesCount && <button>show prev</button>}
                {props.currentDialogsId && <div className={s.message}>
                    {props.loadingMessages ? <Preloader/> :
                        <div>
                            {messagesElement}
                        </div>}
                    <div>
                        <AddMessageFormRedux onSubmit={props.addNewMessage}/>
                    </div>
                </div>}
                {!props.currentDialogsId && <b>Please select dialog</b>}
            </div>
        </div>
    )
};


export default Dialogs;

