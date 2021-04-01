import React from 'react';
import style from "./Users.module.css";
import avatar from "../../assets/images/avatar.svg";
import {NavLink} from "react-router-dom";


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
                                            ? <button onClick={() => {
                                                props.unfollow(u.id)
                                            }}>Unfollow</button>
                                            : <button onClick={() => {
                                                props.follow(u.id)
                                            }}>Follow</button>}
                                    </div>
                                </div>
                                <div>
                                <span>
                                    <div>Name: {u.name}</div>
                                    <div>Status: {u.status}</div>
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