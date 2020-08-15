import React, {useEffect} from 'react';
import s from './Friends.module.css'
import FriendsItem from './FriendsItem/FriendsItem';
import {useDispatch} from 'react-redux';
import {getUsers} from '../../../redux/usersReducer';

const Friends = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers(26,100))  //!?????
    }, [dispatch]);

    let friendsElement = props.users
        .filter(f => f.followed !== false)
        .map(u => <FriendsItem
        key={u.id}
        user={u}
        {...props}/>);
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