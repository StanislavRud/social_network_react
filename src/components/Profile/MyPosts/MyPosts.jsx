import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    };

    return (
        <div className={style.myPosts}>
            <h2>My Posts</h2>
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={style.posts}>
                { postsElements }
            </div>
        </div>
    );
};


const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={'textarea'} placeholder={'Input your new Post'} />
            </div>
            <button type={'submit'}>Add post</button>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: 'addNewPost'})(AddNewPostForm);


export default MyPosts;
