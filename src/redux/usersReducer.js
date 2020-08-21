import {UsersApi} from '../api/api';

export const FOLLOW = 'SOCIAL_NETWORK/USERS/FOLLOW';
export const UN_FOLLOW = 'SOCIAL_NETWORK/USERS/UN-FOLLOW';
export const SET_USERS = 'SOCIAL_NETWORK/USERS/SET-USERS';
export const SET_FRIENDS = 'SOCIAL_NETWORK/USERS/SET_FRIENDS';
export const CURRENT_PAGE = 'SOCIAL_NETWORK/USERS/CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SOCIAL_NETWORK/USERS/SET_TOTAL_USERS_COUNT';
export const SET_PORTION_NUMBER = 'SOCIAL_NETWORK/USERS/SET_PORTION_NUMBER';
export const TOGGLE_IS_FETCHING = 'SOCIAL_NETWORK/USERS/TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'SOCIAL_NETWORK/USERS/TOGGLE_IS_FOLLOWING_PROGRESS';
export const LOADING_FRIENDS = 'SOCIAL_NETWORK/USERS/LOADING_FRIENDS';
export const SET_SEARCH_NAME = 'SOCIAL_NETWORK/USERS/SET_SEARCH_NAME';


let initialState = {
    users: [],
    friends: [],
    pageSize: 100,
    totalItemsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    loadingFriends: false,
    searchName: '',
    portionSize: 5,
    portionNumber: 1

}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userId === u.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userId === u.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_PORTION_NUMBER:
            return {
                ...state,
                portionNumber: action.portionNumber
            }
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.friends
            }
        case SET_SEARCH_NAME:
            return {
                ...state,
                searchName: action.searchName
            }
        case LOADING_FRIENDS:
            return {
                ...state,
                loadingFriends: !state.loadingFriends
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalItemsCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

//AC
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setPortionNumber = (portionNumber) => ({type: SET_PORTION_NUMBER, portionNumber});
export const setSearchNameSuccess = (searchName) => ({type: SET_SEARCH_NAME, searchName});
export const setCurrentPage = (currentPage) => ({type: CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (followingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
});


//Thunk
export const getUsers = (newPage) => async (dispatch, getState) => {
    dispatch(setCurrentPage(newPage))
    const {currentPage, pageSize, searchName} = getState().usersPage
    dispatch(toggleIsFetching(true))
    let response = await UsersApi.getUsers(currentPage || newPage, pageSize, searchName)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

export const searchName = (searchName) => async (dispatch, getState) => {
    dispatch(setSearchNameSuccess(searchName))
    dispatch(setCurrentPage(1))
    dispatch(setPortionNumber(1))
    const {currentPage} = getState().usersPage
    dispatch(getUsers(currentPage))
}

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await UsersApi.follow(userId)
    if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const unFollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await UsersApi.unFollow(userId)
    if (response.data.resultCode === 0) {
        dispatch(unFollowSuccess(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}
