import s from './MyPosts.module.css';
import Post from './Posts/Post';
import React from 'react';

const MyPosts = (props) => {
    console.log(props.newPostText);
    const postArr = props.postsData.map((post) => (
        <Post post={post.post} likes={post.likes} />
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let newPostChange = () => {
        props.updateNewPost(newPostElement.current.value);
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
