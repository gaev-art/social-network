import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type="text"
                    placeholder='login'
                    component={'input'}
                    name={'login'}/>
            </div>
            <div>
                <Field
                    type="text"
                    placeholder='password'
                    component={'input'}
                    name={'password'}/>
            </div>
            <div>
                <Field
                    type="checkbox"
                    component={'input'}
                    name={'rememberMe'}/>
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'contact'})(LoginForm)

export default LoginReduxForm;