import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.mainTime}>
                <p className={s.time}>{props.date}</p>
            </div>
            <div>
                <img
                    src={props.photo}/>
            </div>
            <div>{props.message}</div>
            <div className={s.mainLike}>
                <span className={s.like}>like {props.likeCounts}</span>
            </div>
        </div>

    )
}

export default Post;