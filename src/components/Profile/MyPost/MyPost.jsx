import React from 'react';
import s from './MyPost.module.css'
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsConrols/FormControls';

let maxLength10 = maxLengthCreator(10)

function AddNewPost(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                validate={[required, maxLength10]}
                component={Textarea}
                name={'newPostText'}
                placeholder='Enter your post'/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPost)

const MyPost = React.memo((props) => {


    let postsElement = props.posts.map((p) =>
        <Post
            photo={props.photo}
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
});

export default MyPost;