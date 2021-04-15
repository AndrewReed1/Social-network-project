import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <NavLink to='/profile/'>
          <img src='https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png' />
        </NavLink>
        <div className={s.name}>{'React & Redux'}</div>
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header;