import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";


function AddMessageForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name={"newMessageBody"}
                placeholder='Enter your message'
                component={'textarea'}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>;
}

let AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElement = state.messages.map(m => <Message key={m.id} message={m.message}/>);



    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <AddMessageFormRedux
                        onSubmit={addNewMessage}
                        />
                </div>
            </div>

        </div>
    )
};


export default Dialogs;

