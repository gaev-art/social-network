import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserDate, logout} from '../../redux/authReducer';


class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.getAuthUserDate()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {
    getAuthUserDate,
    logout
})(HeaderContainer);

