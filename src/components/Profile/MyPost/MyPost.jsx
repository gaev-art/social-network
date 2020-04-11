import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {
        let postsData = [
            {id: 1, message: 'Hello!', likeCounts: '21'},
            {id: 2, message: 'My first message.', likeCounts: '15'},
            {id: 3, message: 'Yo', likeCounts: '999'}
        ]

    let postsElement = postsData.map( (p) => <Post message={p.message} likeCounts={p.likeCounts}/>)

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
                { postsElement }
            </div>
        </div>
    )
}

export default MyPost;