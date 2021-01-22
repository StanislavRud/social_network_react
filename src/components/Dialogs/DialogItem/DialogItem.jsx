import React from 'react';
import style from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.activeLink}>
                <img src="/147140.svg" alt="avatar" style={style.img}/>
                {props.name}
            </NavLink>
        </div>
    )
};

export default DialogItem;
