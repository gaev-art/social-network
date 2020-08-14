import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import yes from '../../../img/true.png'
import no from '../../../img/false.png'
import ava from '../../../img/men.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataReduxForm from './ProfileDataForm';

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(  // need fix!!
            () => {
                setEditMode(false)
            }
        )
    }


    const cancelEditMode = () => {
        setEditMode(false)
    }


    return (
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large != null
                ? props.profile.photos.large : ava}/>
            {editMode
                ? <ProfileDataReduxForm
                    initialValues={props.profile}
                    profile={props.profile}
                    onSubmit={onSubmit}
                    cancelEditMode={cancelEditMode}/>
                : <ProfileData
                    profile={props.profile}
                    isOwner={props.isOwner}
                    goToEditMode={() => {
                        setEditMode(true)
                    }}/>}
            <ProfileStatusWithHooks
                status={props.status}
                updateStatus={props.updateStatus}/>
            {/*<ProfileStatus*/}
            {/*    status={props.status}*/}
            {/*    updateStatus={props.updateStatus}*/}
            {/*/>*/}


        </div>
    );
}


const ProfileData = (props) => {
    return <div>
        {props.isOwner &&
        <div>
            <button onClick={props.goToEditMode}>edit</button>
        </div>}
        <div><b>Full mame</b>:{props.profile.fullName}</div>
        <div><b>About Me</b>:{props.profile.aboutMe}</div>
        <div><b>Looking for a job</b>:
            <img src={props.profile.lookingForAJob ? yes : no}
                 className={s.icon}/></div>
        {props.profile.lookingForAJob &&
        <div>
            <b>My professional skill</b> : {props.profile.lookingForAJobDescription}
        </div>}

        <div><b>Contacts</b>:{Object.keys(props.profile.contacts)
            // .filter(key=>props.profile.contacts[key] !==null || '') ??
            .map(key => {
                debugger
            return <Contact
                key={key}
                contactTitle={key}
                contactValue={props.profile.contacts[key]}/>
        })}</div>
    </div>
}


export const Contact = (props) => {
    return <div className={s.contact}>
        <b>{props.contactTitle}</b>:<a href={props.contactValue}>{props.contactValue}</a>
    </div>
}

export default ProfileInfo;