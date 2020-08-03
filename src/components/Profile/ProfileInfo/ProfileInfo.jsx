import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import yes from '../../../img/true.png'
import no from '../../../img/false.png'
import ava from '../../../img/men.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

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
                <img src={props.profile.photos.large!= null ? props.profile.photos.large : ava}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                lookingForAJob:
                <img src={props.profile.lookingForAJob ? yes : no}
                   className={s.icon}/>
                {/*ava + description*/}
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}/>
                    {/*<ProfileStatus*/}
                    {/*    status={props.status}*/}
                    {/*    updateStatus={props.updateStatus}*/}
                    {/*/>*/}
            </div>
        </div>
    );
}


export default ProfileInfo;