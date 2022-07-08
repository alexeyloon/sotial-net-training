import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post";

const MyPosts = (props) => {

  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'It is my first magic?', likesCount: 23 },

  ]

  let postsElements =
    posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  return (

    <div className={classes.postsBlock}>
      <h3> My post </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>


  );
}

export default MyPosts;











