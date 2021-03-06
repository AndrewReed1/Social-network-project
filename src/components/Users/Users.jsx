import React from 'react';
import userPhoto from '../../assets/img/user-logo.png';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return <div className={s.users_wrapper}>
        <div className={s.users_inner}>
            <div className={s.numbers_inner}>
                {pages.map(p => {
                    return <div className={s.numbers}><span className={props.currentPage === p && s.selectedPage}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span></div>
                })}
            </div>
        {props.users.map(u => <div key={u.id} className={s.user}> 
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.photo} src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {u.followed ?
                        <button className={s.button} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id);
                        }}>unFollow</button> :
                        <button className={s.button} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id);
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div className={s.name}><b>{u.name}</b></div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"Country"}</div>
                    <div>{"City"}</div>
                </span>
            </span>
        </div>)
        }
        </div>
    </div>
};

export default Users;