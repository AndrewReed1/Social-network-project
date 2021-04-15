import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <NavLink to='/profile/'>
          <img src='https://astro-centre.ru/wp-content/uploads/2021/01/photo.png' />
        </NavLink>
        <div className={s.name}>{'ВКОНТАКТЕ'}</div>
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header;