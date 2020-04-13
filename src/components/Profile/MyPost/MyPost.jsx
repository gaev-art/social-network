import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {

    let postsElement = props.posts.map( (p) => <Post message={p.message} likeCounts={p.likeCounts}/>)

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