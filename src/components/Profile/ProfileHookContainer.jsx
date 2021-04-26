import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { addPostActionCreator } from '../../redux/profile-reducer';

const ProfileHookContainer = (props) => {
    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.authorizedUserId;
        };
        props.getUserProfile(userId);
        props.getStatus(userId);
    }, [props.match.params.userId]);

    return (
        <Profile {...props}
            savePhoto={props.savePhoto}
            isOwner={!props.match.params.userId}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            posts={props.posts}
            newPostText={props.newPostText}
            addPost={props.addPostActionCreator} />
    )
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, addPostActionCreator}),
    withRouter,
    withAuthRedirect,
)(ProfileHookContainer);