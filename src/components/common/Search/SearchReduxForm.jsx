import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../FormsConrols/FormControls';
import {required} from '../../../utils/validators/validators';


export const SearchForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type="text"
                    placeholder='Enter name'
                    component={Input}
                    name={'search'}
                    validate={[required]}/>
            </div>
            <div style={{fontSize: '10px'}}>
                Сервер принимает только латинские буквы и цифры
            </div>
            <div>
                <button>Search</button>
            </div>
        </form>
    )
}

const SearchReduxForm = reduxForm({form: 'search'})(SearchForm)

export default SearchReduxForm;

