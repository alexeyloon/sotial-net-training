import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://d2zia2w5autnlg.cloudfront.net/46235/5ec33ee77313a-large' />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
}

export default Post;











