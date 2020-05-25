import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

// const MyPostContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//
//                 let state = store.getState();
//
//
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//
//                 let onPostChange = (text) => {
//                     let action = updateNewPostActionCreator(text);
//                     store.dispatch(action)
//
//                 }
//
//                 return <MyPost
//                 updateNewPostText={onPostChange}
//                 addPost={addPost}
//                 posts={state.profilePage.posts}
//                 newPostText={state.profilePage.newPostText}/>}}
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;