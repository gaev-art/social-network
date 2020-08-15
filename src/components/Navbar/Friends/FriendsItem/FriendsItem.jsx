import React from 'react';
import s from './FriendsItem.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "../../../Dialogs/DialogItem/DialogsItem";

const FriendsItem = (props) => {
    let path = '/friends/' + props.id;
    return (
        <div className={s.item}>
        <NavLink to={path} activeClassName={s.activeLink}>
            {/*<img*/}
            {/*    src='https://avatars0.githubusercontent.com/u/61547416?s=460&u=f397123fa0fb933bd44b225a06a72e3f9ef36e4f&v=4'*/}
            {/*    className={s.img}/>*/}
            {props.name}
        </NavLink>
        </div>
    );
}

export default FriendsItem;