import React from 'react';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css';

const Profile = (props) => {
    debugger;
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.state.posts}/>
        </div>
    );
}

export default Profile;
