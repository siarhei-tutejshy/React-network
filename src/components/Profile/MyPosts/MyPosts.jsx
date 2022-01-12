import s from './MyPosts.module.css';
import Post from './Posts/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state/profile-reducer';


const MyPosts = (props) => {
    console.log(props.dispatch);
    const postArr = props.postsData.map((post) => (
        <Post post={post.post} likes={post.likes} />
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let newPostChange = () => {
        props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value));
    };

    return (
        <div className={s.content}>
            <div>
                My posts
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={newPostChange}
                        value={props.newPostText}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>add posts</button>
                </div>
                <div>{postArr}</div>
            </div>
        </div>
    );
};

export default MyPosts;
