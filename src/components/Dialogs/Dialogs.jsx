import React from 'react';
import style from './Dialogs.module.css';
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
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {


    let dialogs = [
        {id: 1, name: 'Stas'},
        {id: 2, name: 'Dimon'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Ann'}
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine'},
        {id: 4, message: 'OK'},
        {id: 5, message: 'YOYOYOYO'}

    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
            </div>
        </div>
    );
};

export default Dialogs;
