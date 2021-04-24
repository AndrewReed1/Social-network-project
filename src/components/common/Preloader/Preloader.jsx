import React from 'react';
import loader from '../../../assets/img/loader.gif';
import s from './Preloader.module.css';

const Preloader = () => {
    return <div className={s.reloader_wrapper}>
        <img alt='' width='60px' height='60px' src={loader} />
    </div>
};

export default Preloader;