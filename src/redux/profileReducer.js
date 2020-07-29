import {ProfileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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


//Thunks
export const getUsersProfile = (userId) => {
    return (dispatch) => {
        ProfileApi.setUserProfile(userId)
            .then(response => {
                debugger
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
                    debugger
                    dispatch(setStatusSuccess(status))
                }
            })
    }
}


export default profileReducer;