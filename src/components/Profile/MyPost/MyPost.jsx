import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return (
            <div>
                my post
                <div>
                    new post
                </div>
                <div>
                    <Post message='Hello!'/>
                    <Post message='My first message.'/>
                    <Post/>
                </div>
            </div>
    )
}

export default MyPost;