import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
       posts: state.profilePage.posts,
       newPostText: state.profilePage.newPostText,
       profile: state.profilePage.profile
    }
};

const mapDispatchProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchProps) (MyPosts);

export default MyPostsContainer;