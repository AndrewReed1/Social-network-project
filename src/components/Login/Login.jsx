import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../Validators/Validators';
import { Input } from '../common/FormControllers/FormControllers';
import s from './Login.module.css';
import { login, logout } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';
import style from '../../components/common/FormControllers/FormControllers.module.css';

let maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength30]} placeholder={'Email'} name={'email'} component={Input} />
            </div>
            <div>
                <Field validate={[required, maxLength30]} placeholder={'Password'} name={'password'} component={Input} type={'password'} />
            </div>
            <div>
                <Field className={s.rememberMe} type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
            </div>
                {props.error ? <div className={style.form_summery_error}>{props.error}</div>: ''}
            <div>
                <button className={s.button}>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm( {form: 'login'} ) (LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.login_wrapper}>
            <div className={s.greeting}>Welcome to <b>BootCamp</b> SocialNetwork!</div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect( mapStateToProps, { login, logout } )(Login);