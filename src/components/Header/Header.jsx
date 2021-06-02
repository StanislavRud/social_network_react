import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <NavLink to='/' >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Cyberpunk_2077_logo.svg/1280px-Cyberpunk_2077_logo.svg.png"
                    alt="logo"/>
            </NavLink>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}

            </div>

        </header>
    )
}
export default Header;
