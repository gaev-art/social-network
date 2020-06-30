import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile,} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 6560
        }
       this.props.getUsersProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
    getUsersProfile,
})(WithUrlDataContainerComponent);
