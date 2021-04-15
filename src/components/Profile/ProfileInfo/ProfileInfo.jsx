import React from 'react';
import style from './ProfileInfo.module.css'
import avatar from "../../../assets/images/avatar.svg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={style.profileInfo}>
                {/*<img src="https://promptinnov.com/wp-content/uploads/2016/03/techno-bg.jpg" alt="img"/>*/}
            </div>
            <div className={style.description}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : avatar} alt="avatar" />
                <ProfileStatus status={'Hello nigas!'}/>
                <div><h2>{props.profile.fullName}</h2></div>
                description
                <div>
                    <span>About me: </span>{props.profile.aboutMe}
                </div>
                <div>
                    <span>Looking for a job: </span>{props.profile.lookingForAJob === true ? 'YES' : 'NO'}
                </div>
                <div>
                    {props.profile.lookingForAJobDescription == null ? '' :  <span>Job Status: {props.profile.lookingForAJobDescription}</span>}

                </div>

            </div>
        </div>
    );
};

export default ProfileInfo;
