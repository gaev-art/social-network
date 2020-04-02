import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div className={s.post}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;