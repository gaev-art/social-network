import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://avatars0.githubusercontent.com/u/61547416?s=460&u=f397123fa0fb933bd44b225a06a72e3f9ef36e4f&v=4'/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>

    )
}

export default Post;