import {ProfileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
    posts: [
        {id: 1, message: 'Hello!', likeCounts: '21'},
        {id: 2, message: 'My first message.', likeCounts: '15'},
        {id: 3, message: 'Yo', likeCounts: '999'}
    ],
    profile: null,
    status:''

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
            case DELETE_POST:
            return {
                ...state,
               posts: state.posts.filter(p=>p.id!==action.postId)
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


//Thunks
export const getUsersProfile = (userId) => {
    return (dispatch) => {
        ProfileApi.setUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const setStatus = (userId) => {
    return (dispatch) => {
        ProfileApi.setStatus(userId)
            .then(response => {
                dispatch(setStatusSuccess(response.data))
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileApi.updateStatus(status)
            .then(response => {
                if(response.data.resultCode===0) {
                    dispatch(setStatusSuccess(status))
                }
            })
    }
}


export default profileReducer;