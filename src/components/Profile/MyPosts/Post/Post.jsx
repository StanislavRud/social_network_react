import React from 'react';
import style from "./Post.module.css";

const Post = (props) => {
    return (
            <div className={style.item}>
                <img src="147140.svg" alt="avatar" />
                {props.message}
                <div>
                    <span>Like</span> {props.likesCount}
                </div>
            </div>
    );
};

export default Post;
