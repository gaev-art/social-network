import React, {useEffect} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsConrols/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {useDispatch} from 'react-redux';
import {getDialogs, getMessages} from '../../redux/dialogsReducer';

let maxLength100 = maxLengthCreator(100)


function AddMessageForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name={"newMessageBody"}
                placeholder='Enter your message'
                component={Textarea}
                validate={[required,maxLength100]}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>;
}

let AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


const Dialogs = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDialogs())
        dispatch(getMessages())

    }, [dispatch]);


    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} dialogs={d} id={d.id}/>);
    let messagesElement = state.messages.map(m => <Message key={m.id} message={m}/>);



    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
        dispatch(getMessages())
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

