import React from 'react';
import s from './ProfileInfo.module.css';
import photo from './s.png'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                {/*<img src={photo} className={s.img}/>*/}
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;