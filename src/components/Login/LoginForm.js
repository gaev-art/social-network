import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../FormsConrols/FormControls";
import style from '../FormsConrols/FormControls.module.css'

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
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm;