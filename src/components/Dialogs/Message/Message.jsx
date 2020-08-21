import React from 'react';
import s from './Message.module.css'


const Message = (props) => {


    const data = new Date(props.message.addedAt).toLocaleString()

    const onClickHandler = (e) => {
        props.deleteMessage(props.message.id)

    }

    return (
        <div id='main' className={s.main}>
            <div className={s.message}>
                <div className={s.mainBtn}>
                    <button
                        className={s.deleteBtn}
                        onClick={onClickHandler}>x
                    </button>
                </div>
                <b className={s.name}>{props.message.senderName}:</b>{props.message.body}
                <div className={s.mainTime}>
                    <p className={s.time}>{data}</p>
                </div>

            </div>
        </div>
    )
}


export default Message;

