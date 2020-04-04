import React from 'react';
import s from './Artem.module.css';
import {NavLink} from "react-router-dom";


const Artem = (props) => {
    return (
        <div className={s.dialog + '' + s.active}>
            <NavLink to='/dialogs/1'>Artem</NavLink>
        </div>

    )
};
export default Artem;

