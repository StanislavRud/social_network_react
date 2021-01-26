import React from 'react';
import FriendItem from "./FriendItem/FriendItem";
import style from './Friends.module.css'

const Friends = (props) => {
    let friends = props.friends.map(f => <FriendItem name={f.name} id={f.id} /> );
    return (
        <ul className={style.friends} >
            { friends }
        </ul>
    );
};

export default Friends;
