import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src={props.photo}/>
            {props.message}
            <div>
                <span>like {props.likeCounts}</span>
            </div>
        </div>

    )
}

export default Post;