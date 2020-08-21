import {SendMessage} from '../../utils/validators/validators';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormsConrols/FormControls';
import React from 'react';


function AddMessageForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name={'newMessageBody'}
                placeholder='Enter your message'
                component={Textarea}
                validate={[SendMessage]}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>;
}

export let AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)