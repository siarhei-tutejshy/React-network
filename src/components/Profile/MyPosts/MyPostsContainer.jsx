
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let newPostChange = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <MyPosts addPost={addPost} newPostChange={newPostChange} postsData={props.postsData} />
    );
};

export default MyPostsContainer;