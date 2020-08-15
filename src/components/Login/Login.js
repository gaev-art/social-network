import React from 'react';
import LoginReduxForm from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';


function Login(props) {

    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <>
            <h3>For test use:</h3>
            <div>Email: <strong>free@samuraijs.com</strong></div>
            <div>Password: <strong>free</strong></div>

            <h1>Login</h1>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})


export default connect(mapStateToProps, {login})(Login);