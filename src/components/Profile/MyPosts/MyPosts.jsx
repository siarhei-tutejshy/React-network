import s from './MyPosts.module.css';
import Post from './Posts/Post';
import React from 'react';

const MyPosts = (props) => {
  const postArr = props.postsData.map(post => <Post post={post.post} likes={post.likes}/> )

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text)
  }



  console.log(postArr)
    return <div className = {s.content}>
    
     <div>
       My posts
       <div>
         <textarea ref={newPostElement}></textarea>
       </div>
       <div>
         <button onClick = {addPost}>add posts</button>
       </div>
       <div>
        {postArr}
       </div>
     </div>
  </div>
};

export default MyPosts;