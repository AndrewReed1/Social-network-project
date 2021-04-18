import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import mainLogo from '../../assets/img/main-logo.png';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div >
        <NavLink className={s.logo} to='/profile/'>
          <img src={mainLogo}/>
          <div className={s.name}>{'BootCamp'}</div>
        </NavLink>
      </div>
      <div className={s.loginBlock}>
        {props.isAuth
        ? <div>{props.login} <button className={s.button} onClick={props.logout}>Logout</button></div> : <NavLink className={s.button} to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header;