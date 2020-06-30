import React from 'react';
import s from './ProfileInfo.module.css';
import photo from './s.png'
import Preloader from "../../Preloader/Preloader";
import yes from '../../../img/true.png'
import no from '../../../img/false.png'
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {/*<img src={photo} className={s.img}/>*/}
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                lookingForAJob:
                <img src={props.profile.lookingForAJob ? yes : no}/>
                {/*ava + description*/}
                <ProfileStatus status={'yo'}/>
            </div>
        </div>
    );
}

export default ProfileInfo;