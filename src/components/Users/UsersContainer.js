import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toddleIsFetching,
    unFollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {Api} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toddleIsFetching(true)
        Api.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.toddleIsFetching(false)
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
            })
    }
 
    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.toddleIsFetching(true)
        Api.getUsers(currentPage,this.props.pageSize)
            .then(response => {
                this.props.toddleIsFetching(false)
                this.props.setUsers(response.items)
            })
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toddleIsFetching,
})(UsersContainer);
