import {ProfileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {id: 1, message: 'Hello!', likeCounts: '21'},
        {id: 2, message: 'My first message.', likeCounts: '15'},
        {id: 3, message: 'Yo', likeCounts: '999'}
    ],
    newPostText: '',
    profile: null,

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likeCounts: '0'
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;

    }
}


export const addPost = () => ({type: ADD_POST})

export const updateNewPost = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

//////////////////////////////////////////////////////////////////
export const getUsersProfile = (userId) => {
    return (dispatch) => {
        ProfileApi.setUserProfile(userId)
            .then(response => {
               dispatch(setUserProfile(response.data))
            })
    }
}





export default profileReducer;