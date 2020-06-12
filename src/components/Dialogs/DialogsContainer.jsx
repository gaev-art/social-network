import React from 'react';
import {sendMessage, updateNewMessageBody} from "../../redux/dialogsReducer";
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

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewMessageBody: (body) => {
//             dispatch(updateNewMessageBody(body))
//         },
//         sendMessage: () => {
//             dispatch(sendMessage())
//         }
//     }
// };

const DialogsContainer = connect(mapStateToProps, {updateNewMessageBody, sendMessage})(Dialogs);


export default DialogsContainer;

