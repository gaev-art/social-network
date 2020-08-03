import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../utils/validators/validators';
import {Input} from '../common/FormsConrols/FormControls';
import style from '../common/FormsConrols/FormControls.module.css'

let maxLength20 = maxLengthCreator(20)


const LoginForm = ([handleSubmit, error]) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    type="text"
                    placeholder='login'
                    component={Input}
                    name={'login'}
                    validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field
                    type="password"
                    placeholder='password'
                    component={Input}
                    name={'password'}
                    validate={[required, maxLength20]}/>
            </div>
            <div>
                <Field
                    type="checkbox"
                    component={Input}
                    name={'rememberMe'}/>
                remember me
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm;