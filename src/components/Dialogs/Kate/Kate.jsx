import React from 'react';
import s from './Kate.module.css';
import {NavLink} from "react-router-dom";


const Kate = (props) => {
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to='/dialogs/2'>Kate</NavLink>
        </div>
    )
};
export default Kate;

