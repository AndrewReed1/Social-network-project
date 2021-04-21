import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

const ProfileHookContainer = (props) => {

    useEffect(() => {
        console.log('yo!');
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.authorizedUserId;
        };
        props.getUserProfile(userId);
        props.getStatus(userId);
    }, [props.match.params.userId, props.authorizedUserId]);

    return (
        <Profile {...props}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus} />
    )
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileHookContainer);