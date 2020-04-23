import React from 'react';
import s from './FriendsItem.module.css'

const FriendsItem = (props) => {
    return (
        <div>
            <img
                src='https://avatars0.githubusercontent.com/u/61547416?s=460&u=f397123fa0fb933bd44b225a06a72e3f9ef36e4f&v=4'
                className={s.img}/>
            {props.name}
        </div>
    );
}

export default FriendsItem;