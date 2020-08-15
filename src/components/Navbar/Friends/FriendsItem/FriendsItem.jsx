import React from 'react';
import s from './FriendsItem.module.css'
import {NavLink} from "react-router-dom";
import ava from '../../../../img/men.png';

const FriendsItem = (props) => {
    return (
        <div style={{
            'margin': '30px'
        }}>
            <NavLink to={`/profile/${props.user.id}`}>
                <img src={props.user.photos.small != null ? props.user.photos.small : ava} className={s.img}/>
            </NavLink>
                    <div>
                    {props.user.name}
                    </div>
            <div >
                {props.user.followed
                    ? <button
                        disabled={props.followingInProgress.some(id => id === props.user.id)}
                        onClick={() => {
                            props.unFollow(props.user.id)
                        }}>
                        UnFollow
                    </button>
                    : <button
                        disabled={props.followingInProgress.some(id => id === props.user.id)}
                        onClick={() => {
                            props.follow(props.user.id)
                        }}>
                        Follow
                    </button>
                }
            </div>
        </div>
    );
}

export default FriendsItem;