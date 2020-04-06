import React from 'react';
import s from './Dialogs.module.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";


const DialogItem = (props) =>{
    let path = '/dialogs/' + props.id;
    return (
        <NavLink to={path} activeClassName={s.activeLink}>
            {props.name}
        </NavLink>

    )
}

export default DialogItem;

