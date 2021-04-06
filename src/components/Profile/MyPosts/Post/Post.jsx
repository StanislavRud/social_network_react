import React from 'react';
import style from "./Post.module.css";
import avatar from './../../../../assets/images/avatar.svg'

const Post = (props) => {
    return (
            <div className={style.item}>
                <img src={avatar} alt="avatar" />
                {props.message}
                <div>
                    <span>Like</span> {props.likesCount}
                </div>
            </div>
    );
};

export default Post;
