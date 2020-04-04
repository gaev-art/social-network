import React from 'react';
import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' className={s.img}/>
            </div>
            <div>
                ava + description
            </div>
           <MyPost/>
        </div>
    );
}

export default Profile;