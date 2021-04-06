import React from 'react';
import style from "./Users.module.css";
import avatar from "../../assets/images/avatar.svg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={style.container}>
            <div className={style.numberPages}>
                {pages.map(p => {
                    return (
                        <span className={ props.currentPage === p && style.selectedPage }
                              onClick={(e)=> { props.onPageChanged(p) } }>{p}
                            </span>
                    )
                })
                }
            </div>

            {
                props.users.map(u => {
                        return (
                            <div key={u.id} className={style.users_block}>
                                <div className={style.users_photo}>
                                    <div className={style.avatar}>
                                        <NavLink to={'/profile/' + u.id}>
                                            <img src={u.photos.small != null ? u.photos.small : avatar} alt="avatar"/>
                                        </NavLink>
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                                props.toggleFollowingProcess(true, u.id);
                                                props.toggleIsFetching(true);
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": '4fe004f6-3126-4f2c-96d6-4a1feb41787f'
                                                    }
                                                })
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {

                                                            props.unfollow(u.id)
                                                        }

                                                        props.toggleFollowingProcess(false, u.id);
                                                        props.toggleIsFetching(false);
                                                    });
                                            }}>Unfollow</button>
                                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                                props.toggleFollowingProcess(true, u.id);
                                                props.toggleIsFetching(true);
                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": '4fe004f6-3126-4f2c-96d6-4a1feb41787f'
                                                    }
                                                })
                                                    .then(response => {

                                                        if (response.data.resultCode === 0) {
                                                            props.follow(u.id);
                                                        }

                                                        props.toggleFollowingProcess(false, u.id);
                                                        props.toggleIsFetching(false);

                                                    });
                                            }}>Follow</button>}
                                    </div>
                                </div>
                                <div>
                                <span>
                                    <div>Name: {u.name}</div>
                                    {u.status == null ? '' :  <div>Status: {u.status}</div>}

                                </span>
                                    <span>
                                    <div>Country: {'u.location.country'}</div>
                                    <div>City: {'u.location.city'}</div>
                                </span>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
};

export default Users;