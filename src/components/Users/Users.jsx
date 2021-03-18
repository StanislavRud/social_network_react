import React from 'react';
import style from './Users.module.css';
import * as axios from "axios";

const Users = (props) => {


    // if (props.users.length === 0) {
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //         props.setUsers(response.data.items)
    //     });
    // }

    if (props.users.length === 0) {

        props.setUsers([
                {"name":"steshko","id":15835,"uniqueUrlName":null,"photos":{"small":null,"large":null},"status":null,"followed":false},
                {"name":"vladmdev","id":15834,"uniqueUrlName":null,"photos":{"small":null,"large":null},"status":null,"followed":false},
                {"name":"romastepanyuk","id":15833,"uniqueUrlName":null,"photos":{"small":null,"large":null},"status":null,"followed":false}
            ]
        );
    }

    return <div className={style.container}>
            {
                props.users.map(u => {
                        return (
                            <div key={u.id} className={style.users_block}>
                                <div className={style.users_photo}>
                                    <div className={style.avatar}>
                                        <img src={ u.photos.small != null ? u.photos.small : '147140.svg'} alt="avatar"/>
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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
};

export default Users;
