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

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}



const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Luffy'}
    ]

    let messages = [
        {id: 1, message: 'yo'},
        {id: 2, message: 'ky-ky'},
        {id: 3, message: 'gaf-gaf'}
    ]

    let dialogsElement = dialogs.map( d => <DialogItem name={d.name} id={d.id}b/> );
    let messagesElement = messages.map( m => <Message message={m.message} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
};
export default Dialogs;

