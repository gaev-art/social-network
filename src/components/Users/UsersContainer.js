import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    followSuccess,
    getUsers,
    toggleFollowingProgress,
    unFollow,
    unFollowSuccess
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from '../../redux/user-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : null}
                <Users{...this.props} onPageChanged={this.onPageChanged}/>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toddleIsFetching: (isFetching) => {
//             dispatch(toddleIsFetchingAC(isFetching))
//         },
//
//     }
// }

// export default connect(mapStateToProps, {
//     followSuccess,
//     unFollowSuccess,
//     toggleFollowingProgress,
//     getUsers,
//     follow,
//     unFollow,
// })(AuthRedirectComponent);


export default compose(
    connect(mapStateToProps, {
        followSuccess,
        unFollowSuccess,
        toggleFollowingProgress,
        getUsers,
        follow,
        unFollow,
    }),
)(UsersContainer)
