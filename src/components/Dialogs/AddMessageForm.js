import {maxLengthCreator, required} from '../../utils/validators/validators';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormsConrols/FormControls';
import React from 'react';

let maxLength100 = maxLengthCreator(100)


function AddMessageForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                name={"newMessageBody"}
                placeholder='Enter your message'
                component={Textarea}
                validate={[required,maxLength100]}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>;
}

export let AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)