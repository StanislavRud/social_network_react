import React from 'react';
import Friends from "../../Friends/Friends";
import style from './Sidebar.module.css'

const Sidebar = (props) => {
    return (
        <div className={style.sidebar}>
            <h3>Friends</h3>
            <Friends friends={props.state.friendsData}/>
        </div>
    );
};

export default Sidebar;
