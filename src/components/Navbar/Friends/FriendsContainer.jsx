import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from '../../../redux/user-selectors';
import {
    follow,
    followSuccess,
    getUsers,
    toggleFollowingProgress,
    unFollow,
    unFollowSuccess
} from '../../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        friends:state.usersPage.friends,
    }
};



const FriendsContainer = connect(mapStateToProps, { followSuccess,
    unFollowSuccess,
    toggleFollowingProgress,
    getUsers,
    follow,
    unFollow,})(Friends)

export default FriendsContainer;