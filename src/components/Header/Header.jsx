import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Cyberpunk_2077_logo.svg/1280px-Cyberpunk_2077_logo.svg.png"
                alt="logo"/>
        </header>
    )
}
export default Header;
