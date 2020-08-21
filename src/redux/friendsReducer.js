import {UsersApi} from '../api/api';


export const REMOVE_FRIENDS = 'SOCIAL_NETWORK/USERS/REMOVE_FRIENDS';
export const SET_FRIENDS = 'SOCIAL_NETWORK/USERS/SET_FRIENDS';
export const LOADING_FRIENDS = 'SOCIAL_NETWORK/USERS/LOADING_FRIENDS';



let initialState = {
    friends:[],
    loadingFriends:false,
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_FRIENDS:
            return {
                ...state,
                friends: state.friends.map(u => {
                    if (action.friendId === u.id) {
                        return {...u, followed: false}
                    }return u;
                })
            }
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.friends
            }
        case LOADING_FRIENDS:
            return {
                ...state,
                loadingFriends: !state.loadingFriends
            }
        default:
            return state;
    }
}


//AC
export const removeSuccess = (friendId) => ({type: REMOVE_FRIENDS, friendId});
export const setFriendsSuccess = (friends) => ({type: SET_FRIENDS, friends});
export const loadingFriends = () => ({type: LOADING_FRIENDS});





//Thunk
export const getFriends = () => async (dispatch) => {
    dispatch(loadingFriends())
    const response = await UsersApi.getFriends()
    dispatch(loadingFriends())
    dispatch(setFriendsSuccess(response.items))
}

export const removeFriend = (friendId) => async (dispatch) => {
    let response = await UsersApi.unFollow(friendId)
    if (response.data.resultCode === 0) {
        dispatch(removeSuccess(friendId))
        dispatch(getFriends(friendId))
    }

}

export default usersReducer