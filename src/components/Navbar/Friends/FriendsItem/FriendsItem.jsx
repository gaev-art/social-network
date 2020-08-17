import React from 'react';
import s from './FriendsItem.module.css'
import {NavLink} from 'react-router-dom';
import ava from '../../../../img/men.png';
import {useDispatch} from 'react-redux';
import {getFriends} from '../../../../redux/usersReducer';

const FriendsItem = (props) => {

    const dispatch = useDispatch();
    const onClickHandler = React.useCallback(() => {
        props.unFollow(props.friend.id)
        dispatch(getFriends())
    }, [dispatch, props])

    return (
        <div style={{
            'margin': '30px'
        }}>
            <NavLink to={`/friends/${props.friend.id}`}>
                <img src={props.friend.photos.small != null ? props.friend.photos.small : ava} className={s.img}/>
            </NavLink>
                    <div>
                    {props.friend.name}
                    </div>
            <div>
                    <button
                        disabled={props.followingInProgress.some(id => id === props.friend.id)}
                        onClick={onClickHandler}>
                        UnFollow
                    </button>
                {/*<button onClick={props.openDialogs(props.friend.id)}>open dialog</button>*/}

            </div>
        </div>
    );
}

export default FriendsItem;