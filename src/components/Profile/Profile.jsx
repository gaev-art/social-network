import React from 'react';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPost
                newPostText={props.profilePage.newPostText}
                posts={props.profilePage.posts}
                dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;
