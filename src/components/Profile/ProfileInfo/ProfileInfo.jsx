import React from 'react';
import style from './ProfileInfo.module.css'
import avatar from "../../../assets/images/avatar.svg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={style.profileInfo}>
            </div>
            <div className={style.description}>
                <img src={profile.photos.large != null ? profile.photos.large : avatar} alt="avatar" />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div><h2>{profile.fullName}</h2></div>
                description
                <div>
                    <span>About me: </span>{profile.aboutMe}
                </div>
                <div>
                    <span>Looking for a job: </span>{profile.lookingForAJob === true ? 'YES' : 'NO'}
                </div>
                <div>
                    {profile.lookingForAJobDescription == null ? '' :  <span>Job Status: {profile.lookingForAJobDescription}</span>}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
