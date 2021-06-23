import React from 'react';
import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../assets/images/avatar.svg";

const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
            <div className={style.users_block}>
                <div className={style.users_photo}>
                    <div className={style.avatar}>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : avatar} alt="avatar"/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => { unfollow(user.id);
                                          {user.followed = false} }}>
                                Unfollow </button>
                            : <button disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => { follow(user.id); {user.followed = true} }}  >
                                Follow </button>}
                    </div>
                </div>
                <div>
                                <span>
                                    <div>Name: {user.name}</div>
                                    {user.status == null ? '' :  <div>Status: {user.status}</div>}

                                </span>
                    <span>
                                    <div>Country: {'user.location.country'}</div>
                                    <div>City: {'user.location.city'}</div>
                                </span>
                </div>
            </div>
    );
};

export default User;
