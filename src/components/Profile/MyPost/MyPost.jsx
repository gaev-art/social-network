import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {
        let postsData = [
            {id: 1, message: 'Hello!', likeCounts: '21'},
            {id: 2, message: 'My first message.', likeCounts: '15'},
            {id: 3, message: 'Yo', likeCounts: '999'}
        ]
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
                <Post message={postsData[0].message} likeCounts={postsData[0].likeCounts}/>
                <Post message={postsData[1].message} likeCounts={postsData[1].likeCounts}/>
                <Post message={postsData[2].message} likeCounts={postsData[2].likeCounts}/>
            </div>
        </div>
    )
}

export default MyPost;