import React from 'react';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.stena}>
            <ProfileInfo/>
            <MyPost/>
        </div>
    );
}

export default Profile;