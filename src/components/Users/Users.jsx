import React from 'react';
import style from './Users.module.css';
import * as axios from "axios";
import avatar from '../../assets/images/avatar.svg';


class Users extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={style.container}>
                <div className={style.numberPages}>
                    {pages.map(p => {
                        return (
                            <span className={ this.props.currentPage === p && style.selectedPage }
                                  onClick={(e)=> { this.onPageChanged(p) } }>{p}
                            </span>
                        )
                    })
                    }
                </div>

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
