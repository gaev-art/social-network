import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {

    let postsElement = props.posts.map((p) => <Post message={p.message} likeCounts={p.likeCounts}/>)

    let addPostElement = React.createRef();

    let addPost = () => {
        let text = addPostElement.current.value;
        // addPostElement.current.value='';
        props.addPost(text);
    }
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={addPostElement}></textarea>
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