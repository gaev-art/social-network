import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


const DialogsContainer = () => {

return <StoreContext.Consumer>
        {(store) => {

            let state = store.getState().dialogsPage;

            let addMessage = () => {
                store.dispatch(sendMessageCreator())
            }

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body))

            }

        return <Dialogs
            updateNewMessageBodyCreator={onNewMessageChange}
            sendMessage={addMessage}
            dialogsPage={state}/> }}
    </StoreContext.Consumer>

};
export default DialogsContainer;

