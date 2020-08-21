import s from './ProfileInfo.module.css';
import React from 'react';

export const Contact = (props) => {
    return <div className={s.contact}>
        <b>{props.contactTitle}</b>:<a href={props.contactValue}>{props.contactValue}</a>
    </div>
}