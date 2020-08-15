import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import ava from '../../../img/men.png';

const DialogItem = (props) =>{
    let path = '/dialogs/' + props.dialogs.id;



    return (
        <NavLink to={path}>
            <img
                src={props.dialogs.photos.small != null ? props.dialogs.photos.small : ava}
            className={s.img}/>
            {props.dialogs.userName}
        </NavLink>

    )
}

export default DialogItem;

