import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hello', likesCount: 10},
        {id: 2, message: 'How are you?', likesCount: 20}
    ];

    return (
        <div className={style.myPosts}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea name="" id=""></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
};

export default MyPosts;
