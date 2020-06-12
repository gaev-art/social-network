import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";


const MyPost = (props) => {
    let postsElement = props.posts.map((p) =>
        <Post
            key={p.id}
            message={p.message}
            likeCounts={p.likeCounts}/>)

    let addPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = addPostElement.current.value;
        props.updateNewPost(text);


    }

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={addPostElement}
                        value={props.newPostText}
                        placeholder='Enter your post'/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPost;