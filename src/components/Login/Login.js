import React from 'react';
import LoginReduxForm from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';


function Login(props) {

    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

const mapStateToProps=(state)=>({
     isAuth: state.auth.isAuth,
})


export default connect(mapStateToProps, {login})(Login);