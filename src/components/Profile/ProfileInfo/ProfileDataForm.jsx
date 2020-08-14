import React from 'react';
import s from './ProfileInfo.module.css';
import {Input, Textarea} from '../../common/FormsConrols/FormControls';
import {Field, reduxForm} from 'redux-form';

const ProfileDataForm = (props) => {


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }


    return <form onSubmit={props.handleSubmit}>
        <input type={'file'} onChange={onMainPhotoSelected}/>
        <div><b>NickName</b>:
            <Field
                type="text"
                placeholder='Full name'
                component={Input}
                name={'fullName'}
            />
        </div>
        <div><b>About Me</b>:
            <Field
                type="text"
                placeholder='About Me'
                component={Textarea}
                name={'aboutMe'}
            />
        </div>
        <div><b>lookingForAJob</b>:
            <Field
                type="checkbox"
                component={Input}
                name={'lookingForAJob'}
            />
        </div>
        <div>
            <b>My professional skills</b> :
            <Field
                type="text"
                placeholder='My skills'
                component={Textarea}
                name={'lookingForAJobDescription'}
            />
        </div>

        <div><b>Contacts</b>:{Object.keys(props.profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}</b> :<Field
                type="text"
                placeholder={key}
                component={Input}
                name={'contacts.' + key}
            />
            </div>

            // <Contact
            //     key={key}
            //     contactTitle={key}
            //     contactValue={props.profile.contacts[key]}/>
        })}</div>
        {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>save</button>
            <button onClick={props.cancelEditMode}>cancel</button>
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataReduxForm