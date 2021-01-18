import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/1' activeClassName={style.activeLink}>Stas</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/2' activeClassName={style.activeLink}>Timoha</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/3' activeClassName={style.activeLink}>Dimon</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/4' activeClassName={style.activeLink}>Valera</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hello</div>
                <div className={style.message}>How are you?</div>
                <div className={style.message}>I am fine</div>
                <div className={style.message}>OK</div>
            </div>
        </div>
    );
};

export default Dialogs;
