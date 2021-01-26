import React from 'react';
import style from './FriendItem.module.css'
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <li>
            <NavLink to={path} activeClassName={style.activeLink}>
                <img src="/147140.svg" alt="avatar" style={style.img}/>
                <p>{props.name}</p>
            </NavLink>
            {/*<NavLink to={path} activeClassName={style.activeLink}>*/}
            {/*    */}
            {/*    {props.name}*/}
            {/*</NavLink>*/}
        </li>
    );
};

export default FriendItem;
