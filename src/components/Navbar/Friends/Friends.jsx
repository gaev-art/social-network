import React from 'react';
import s from './Friends.module.css'
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {

    let friendsElement = props.friends.map( f => <FriendsItem key={f.id} name={f.name} id={f.id}/> );

    return (
        <div>
            <div className={s.item}>Friends</div>
            <div className={s.friend}>
                {friendsElement}
            </div>
        </div>
    );
}

export default Friends;