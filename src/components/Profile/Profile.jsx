import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';
import Preloader from '../common/Preloader/Preloader';

const Profile = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <ProfileInfo
                saveProfile={props.saveProfile}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}/>
            <MyPostContainer profile={props.profile}/>
        </div>
    );
}

export default Profile;
