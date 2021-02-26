import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={style.myPosts}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={ newPostElement } value={props.newPostText} />
                </div>
                <button onClick={ onAddPost }>Add post</button>
            </div>
            <div className={style.posts}>
                { postsElements }
            </div>
        </div>
    );
};

export default MyPosts;
