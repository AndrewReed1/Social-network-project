import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import mainLogo from '../../assets/img/main-logo.png';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <NavLink to='/profile/'>
          <img src={mainLogo}/>
        </NavLink>
        <div className={s.name}>{'BootCamp'}</div>
      </div>
      <div className={s.loginBlock}>
        {props.isAuth
        ? <div>{props.login} <button className={s.button} onClick={props.logout}>Logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header;