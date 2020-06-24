import {UsersApi} from "../api/api";

export const FOLLOW = 'FOLLOW';
export const UN_FOLLOW = 'UN-FOLLOW';
export const SET_USERS = 'SET-USERS';
export const CURRENT_PAGE = 'CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}


const usersReducer = (state = initialState, action) => {
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
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
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


export const followSuccess = (userId) => ({type: FOLLOW, userId});

export const unFollowSuccess = (userId) => ({type: UN_FOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({
    type: CURRENT_PAGE,
    currentPage
});

export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

export const toggleFollowingProgress = (followingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userId
});
///////////////////////////////////////////////////////////////
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true))
        UsersApi.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(response.items))
                dispatch(setTotalUsersCount(response.totalCount))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        UsersApi.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        UsersApi.unFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export default usersReducer