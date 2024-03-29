import React from 'react';
import style from "./Preloader.module.css";
import preloader from "../../../assets/images/preloader.svg";

let Preloader = () => {
    return (
        <div className={style.loading}><img src={preloader} alt={'loader'}/></div>
    );
};

export default Preloader;