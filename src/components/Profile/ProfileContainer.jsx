import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile, setStatus, updateStatus,} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 6560
            // userId = 2
        }
        this.props.getUsersProfile(userId)
        this.props.setStatus(userId)

    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, {getUsersProfile, setStatus, updateStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)

