import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
           <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
           <MyPosts posts={props.posts}
            newPostText={props.newPostText}
            addPost={props.addPost}
            profile={props.profile}/>
        </div>
    )
};

export default Profile;