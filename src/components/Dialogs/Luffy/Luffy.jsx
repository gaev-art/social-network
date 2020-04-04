import React from 'react';
import s from './Luffy.module.css';
import {NavLink} from "react-router-dom";


const Luffy = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to='/dialogs/3'>Luffy</NavLink>
        </div>
    )
};
export default Luffy;

