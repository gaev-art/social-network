import React from 'react';
import Dialogs from './Dialogs';
import {WithAuthRedirect} from '../../Hoc/WithAuthRedirect';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {
    deleteMessage,
    getMessages,
    init,
    sendMessage,
    setLoadingMessagesSuccess,
    updateDialog
} from '../../redux/dialogsReducer';


class DialogsContainer extends React.Component {

    componentDidMount() {
        this.props.init(this.props.userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userId != this.props.userId) {
            this.props.updateDialog(this.props.userId)
        }
    }

    addNewMessage = (values) => {
        this.props.sendMessage(this.props.userId, values.newMessageBody)
    }

    deleteMessage = (messageId) => {
        this.props.deleteMessage(messageId)
    }


    render() {
        return (
            <>
                <Dialogs
                    currentDialogsId={this.props.currentDialogsId}
                    getMessages={getMessages}
                    deleteMessage={this.deleteMessage}
                    addNewMessage={this.addNewMessage}
                    {...this.props}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    currentDialogsId: state.dialogsPage.currentDialogsId,
    loadingMessages: state.dialogsPage.loadingMessages,
    loadingDialogs: state.dialogsPage.loadingDialogs,
    currentDialogsMessagesCount: state.dialogsPage.currentDialogsMessagesCount,

})
export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {init, updateDialog, getMessages, sendMessage, deleteMessage, setLoadingMessagesSuccess})
)(DialogsContainer);

