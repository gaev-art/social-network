import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hello!' likeCounts='21'/>
                <Post message='My first message.' likeCounts='15'/>
                <Post message='yo' likeCounts='99999'/>
            </div>
        </div>
    )
}

export default MyPost;