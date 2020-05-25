import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//
//             let state = store.getState().dialogsPage;
//
//             let addMessage = () => {
//                 store.dispatch(sendMessageCreator())
//             }
//
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body))
//
//             }
//
//             return <Dialogs
//                 updateNewMessageBodyCreator={onNewMessageChange}
//                 sendMessage={addMessage}
//                 dialogsPage={state}/>
//         }}
//     </StoreContext.Consumer>
//
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBodyCreator: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;

