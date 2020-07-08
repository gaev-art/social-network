import React from 'react';
import {sendMessage} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";


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

export default compose(
    connect(mapStateToProps, {sendMessage}),
    WithAuthRedirect
)(Dialogs);

