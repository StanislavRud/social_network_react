import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
            <NavLink to='/' activeClassName={style.activeLink}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Cyberpunk_2077_logo.svg/1280px-Cyberpunk_2077_logo.svg.png"
                    alt="logo"/>
            </NavLink>

        </header>
    )
}
export default Header;
