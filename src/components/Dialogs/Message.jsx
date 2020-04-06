import React from 'react';
import s from './Dialogs.module.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import DialogItem from "./DialogItem";

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}
export default Message;

