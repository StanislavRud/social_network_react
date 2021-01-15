import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://wroom.ru/i/cars2/moskvich_2140_1_2.jpg" alt="img"/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;
