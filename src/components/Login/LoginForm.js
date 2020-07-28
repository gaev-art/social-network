import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../FormsConrols/FormControls";

let maxLength20 = maxLengthCreator(20)


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type="text"
                    placeholder='login'
                    component={Input}
                    name={'login'}
                    validate={[required,maxLength20]}/>
            </div>
            <div>
                <Field
                    type="password"
                    placeholder='password'
                    component={Input}
                    name={'password'}
                    validate={[required,maxLength20]}/>
            </div>
            <div>
                <Field
                    type="checkbox"
                    component={Input}
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