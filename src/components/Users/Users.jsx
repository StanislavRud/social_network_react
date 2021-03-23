import React from 'react';
import style from './Users.module.css';
import * as axios from "axios";
import avatar from '../../assets/images/avatar.svg';


class Users extends React.Component {

    constructor(props) {
        super(props);


        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }


    render() {
        return (
            <div className={style.container}>

                {
                    this.props.users.map(u => {
                            return (
                                <div key={u.id} className={style.users_block}>
                                    <div className={style.users_photo}>
                                        <div className={style.avatar}>
                                            <img src={u.photos.small != null ? u.photos.small : avatar} alt="avatar"/>
                                        </div>
                                        <div>
                                            {u.followed
                                                ? <button onClick={() => {
                                                    this.props.unfollow(u.id)
                                                }}>Unfollow</button>
                                                : <button onClick={() => {
                                                    this.props.follow(u.id)
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
        )
    }
}

export default Users;
