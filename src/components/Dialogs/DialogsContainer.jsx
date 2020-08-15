import React from 'react';
import {sendMessage} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {WithAuthRedirect} from '../../Hoc/WithAuthRedirect';
import {compose} from 'redux';
import {getCurrentPage, getPageSize} from '../../redux/user-selectors';


let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage,
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
    }
};

export default compose(
    connect(mapStateToProps, {sendMessage}),
    WithAuthRedirect
)(Dialogs);

