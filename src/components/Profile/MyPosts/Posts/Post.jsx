import s from './Post.module.css';

const Post = (props) => {
    return <div className = {s.content}>
   
       <div>
         <div>{props.post} likes:{props.likes}</div>
       </div>
     
  </div>
};

export default Post;