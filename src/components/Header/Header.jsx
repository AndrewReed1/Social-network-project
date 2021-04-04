import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
      <header className={s.header}>
        <div className={s.logo}>
          <img src='https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png'/>
          <div className={s.name}>full moon club</div>
        </div>
        <div className={s.loginBlock}>
          {props.isAuth ? props.login :<NavLink to={'/login'}>Login</NavLink>}
        </div>
      </header>
    )
}

export default Header;