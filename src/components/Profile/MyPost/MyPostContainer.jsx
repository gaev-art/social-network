import React from 'react';
import {addPost} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        photo: state.profilePage.profile.photos.large,
    }
}

const MyPostContainer = connect(mapStateToProps, {addPost})(MyPost);

export default MyPostContainer;