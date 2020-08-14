import {ProfileApi} from '../api/api';
import {stopSubmit} from 'redux-form';

const ADD_POST = 'SOCIAL_NETWORK/PROFILE/ADD-POST';
const SET_USER_PROFILE = 'SOCIAL_NETWORK/PROFILE/SET_USER_PROFILE';
const SET_STATUS = 'SOCIAL_NETWORK/PROFILE/SET_STATUS';
const DELETE_POST = 'SOCIAL_NETWORK/PROFILE/DELETE_POST';
const SAVE_PHOTO = 'SOCIAL_NETWORK/PROFILE/SAVE_PHOTO';

let initialState = {
    posts: [
        {id: 1, message: 'Hello!', likeCounts: '21'},
        {id: 2, message: 'My first message.', likeCounts: '15'},
        {id: 3, message: 'Yo', likeCounts: '999'}
    ],
    profile: null,
    status: ''

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: action.newPostText,
                likeCounts: '0'
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO:
            return {
                ...state,
                profile: {
                    ...state.profile,
                photos:action.file
                }
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state;

    }
}

// AC
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setStatusSuccess = (status) => ({
    type: SET_STATUS, status
})
export const deletePost = (postId) => ({
    type: DELETE_POST, postId
})
export const savePhotoSuccess = (file) => ({
    type: SAVE_PHOTO, file
})


//Thunks
export const getUsersProfile = (userId) => async (dispatch) => {
    let response = await ProfileApi.setUserProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const setStatus = (userId) => async (dispatch) => {
    let response = await ProfileApi.setStatus(userId)
    dispatch(setStatusSuccess(response.data))

}
export const updateStatus = (status) => async (dispatch) => {
    let response = await ProfileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusSuccess(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await ProfileApi.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}


export const saveProfile = (profile) => async (dispatch, getState) => {
   const userId= getState().auth.id

    let response = await ProfileApi.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUsersProfile(userId))
    } else {
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('editProfile', {_error: messages}))
        return Promise.reject(messages)
    }
}


export default profileReducer;