import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


function AddNewPost(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                component={"textarea"}
                name={'newPostText'}
                placeholder='Enter your post'/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux=reduxForm({form:'profileAddNewPostForm'})(AddNewPost)

const MyPost = (props) => {
    let postsElement = props.posts.map((p) =>
        <Post
            key={p.id}
            message={p.message}
            likeCounts={p.likeCounts}/>)


    let addPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <AddNewPostFormRedux
                onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPost;