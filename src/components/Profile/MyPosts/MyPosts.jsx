import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea name="" id=""></textarea>
                <button>Add post</button>
            </div>
            <div className='posts'>
                <Post message="Hello" likesCount='20'/>
                <Post message="My First post!" likesCount='50'/>
            </div>
        </div>
    );
};

export default MyPosts;
