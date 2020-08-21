import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import ava from '../../../img/men.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';
import {ProfileData} from './ProfileData';

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
                ? props.profile.photos.large : ava} className={s.avatar}/>
            {editMode
                ? <ProfileDataForm
                    initialValues={props.profile}
                    profile={props.profile}
                    onSubmit={onSubmit}
                    cancelEditMode={cancelEditMode}
                    savePhoto={props.savePhoto}/>
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


export default ProfileInfo;