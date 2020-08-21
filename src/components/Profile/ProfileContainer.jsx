import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUsersProfile, savePhoto, saveProfile, setStatus, updateStatus,} from '../../redux/profileReducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import s from './Profile.module.css'
import {WithAuthRedirect} from '../../Hoc/WithAuthRedirect';

class ProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUsersProfile(userId)
        this.props.setStatus(userId)
    }


    componentDidMount() {
        this.refreshProfile()

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <div className={s.profile}>
                <Profile
                    {...this.props}
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}
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
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

export default compose(
    connect(mapStateToProps, {getUsersProfile, setStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)

