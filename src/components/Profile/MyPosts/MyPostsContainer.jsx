import { connect } from 'react-redux';
import {
    addPost,
    addPostActionCreator,
    updateNewPostText,
    updateNewPostTextActionCreator,
} from '../../../redux/state/profile-reducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {

    return {
        postsData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};






export default connect(mapStateToProps,{updateNewPostText,addPost})(MyPosts);
