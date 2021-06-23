import React from 'react';
import style from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage,onPageChanged, totalUsersCount, pageSize, users, followingInProgress, follow, unfollow,...props}) => {

    return (
        <div className={style.container}>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       pageSize={pageSize}
                       totalUsersCount={totalUsersCount}
            />

            {users.map(u => {
                        return (
                            <User key={u.id} user={u}
                                  followingInProgress={followingInProgress}
                                  follow={follow}
                                  unfollow={unfollow} />
                        )
                    }
                )
            }
        </div>
    );
};

export default Users;
