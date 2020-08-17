import React, {useEffect} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import {useDispatch} from 'react-redux';
import {getMessages, init} from '../../redux/dialogsReducer';
import {AddMessageFormRedux} from './AddMessageForm';


const Dialogs = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(init(props.userId))
    }, [dispatch, props.userId])

    const onClickHandler = React.useCallback((userId) => {
        dispatch(getMessages(userId))

    }, [dispatch])


    const state = props.dialogsPage
    let dialogsElement = state.dialogs.map(d => <DialogItem onClickHandler={onClickHandler} key={d.id} dialogs={d}
                                                            userId={props.userId}/>);
    let messagesElement = state.messages.map(m => <Message key={m.id} message={m}/>);


    let addNewMessage = (values) => {
        props.sendMessage(props.userId, values.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <h3>Dialogs:</h3>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <h3>Messages:</h3>
                {props.dialogsPage.currentDialogsId && <>
                    <div>{messagesElement}</div>
                    <AddMessageFormRedux
                        onSubmit={addNewMessage}
                    />
                </>}
                {!props.dialogsPage.currentDialogsId && <b>
                    Please select dialog
                </b>}
            </div>
        </div>
    )
};


export default Dialogs;

