import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
        newPostElement.current.value = '';
    };
    return (
        <div className={style.myPosts}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea ref={ newPostElement }></textarea>
                </div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={style.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;
