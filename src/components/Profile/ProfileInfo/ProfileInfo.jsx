import React from 'react';
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.profileInfo}>
                <img src="https://promptinnov.com/wp-content/uploads/2016/03/techno-bg.jpg" alt="img"/>
            </div>
            <div className={style.description}>
                <img src="147140.svg" alt="avatar" />
                description
            </div>
        </div>
    );
};

export default ProfileInfo;
