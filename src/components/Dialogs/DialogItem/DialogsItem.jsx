import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import ava from '../../../img/men.png';
import newMessage from '../../../img/newMessage.png';


const DialogItem = (props) => {

    const path = '/dialogs/' + props.dialogs.id;

    const onClickHandler = () => {
        props.getMessages(props.dialogs.id)
    }


    return (
        <div>
            <NavLink to={path} activeClassName={s.activeLink}>
                <img
                    src={props.dialogs.photos.small != null ? props.dialogs.photos.small : ava}
                    className={s.img}
                    onClick={onClickHandler}/>
                {props.dialogs.userName}
                {props.dialogs.hasNewMessages > 0 &&
                <img src={newMessage} className={s.icon}/>}
            </NavLink>
        </div>

    )
}

export default DialogItem;

