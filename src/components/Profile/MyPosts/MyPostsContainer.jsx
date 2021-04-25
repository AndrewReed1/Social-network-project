import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
       posts: state.profilePage.posts,
       newPostText: state.profilePage.newPostText,
       login: state.auth.login,
       profile: state.profilePage
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