import React from 'react';
import s from './Dialogs.module.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import DialogItem from "./DialogItem";
import Message from "./Message";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name ='Artem' id='1'/>
                <DialogItem name ='Kate' id='2'/>
                <DialogItem name ='Luffy' id='3'/>
            </div>
            <div className={s.messages}>
                <Message message="yo"/>
                <Message message="ky-ky"/>
                <Message message="gaf-gaf"/>
            </div>
        </div>
    )
};
export default Dialogs;

