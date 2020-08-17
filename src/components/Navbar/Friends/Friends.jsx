import React, {useEffect} from 'react';
import s from './Friends.module.css'
import FriendsItem from './FriendsItem/FriendsItem';
import {useDispatch} from 'react-redux';
import {getFriends} from '../../../redux/usersReducer';
import {startDialogs} from '../../../redux/dialogsReducer';

const Friends = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFriends())
    }, [dispatch]);

    const openDialogs = React.useCallback((friendsId) => {
        dispatch(startDialogs(friendsId))
    }, [dispatch,])

    let friendsElement = props.friends.map(f => {
       return <FriendsItem
           openDialogs={openDialogs}
            key={f.id}
            friend={f}
            {...props}/>
    });

    return (
        <div>
            <div className={s.friend}>
                {friendsElement}
            </div>
        </div>
    );
}

export default Friends;