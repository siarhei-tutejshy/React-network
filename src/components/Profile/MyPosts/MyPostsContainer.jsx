import { connect } from 'react-redux';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from '../../../redux/state/profile-reducer';
import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {
//     let addPost = () => {
//         props.dispatch(addPostActionCreator());
//     };

//     let newPostChange = (text) => {
//         props.dispatch(updateNewPostTextActionCreator(text));
//     };

//     return (
//         <MyPosts
//             addPost={addPost}
//             newPostChange={newPostChange}
//             postsData={props.postsData}
//         />
//     );
// };
let mapStateToProps = (state) => {
    console.log(state.profilePage.posts)
    return {
        postsData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },

        newPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
    };
};
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
