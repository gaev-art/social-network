import React from 'react';
import s from '../Friends.module.css'
import {NavLink} from 'react-router-dom';
import ava from '../../../../img/men.png';

const FriendsItem = (props) => {


    return (
        <div className={s.main}>
            <NavLink to={`/friends/${props.friend.id}`}>
                <img src={props.friend.photos.small != null ? props.friend.photos.small : ava} className={s.img}/>
            </NavLink>
            <div>
                {props.friend.name}
            </div>
            <div>
                <button
                    onClick={() => {
                        props.unFollowFriend(props.friend.id)
                    }}>
                    UnFollow
                </button>
                <button onClick={() => {
                    props.openDialogs(props.friend.id)
                }}>open dialog
                </button>

            </div>
        </div>
    );
}

export default FriendsItem;