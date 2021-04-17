import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../Validators/Validators';
import { Input } from '../common/FormControllers/FormControllers';
import s from './Login.module.css';
import { login, logout } from '../../redux/auth-reducer';
import { Redirect } from 'react-router';

let maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength30]} placeholder={'Email'} name={'email'} component={Input}/>
            </div>
            <div>
                <Field validate={[required, maxLength30]} placeholder={'Password'} name={'password'} component={Input} type={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
                </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm( {form: 'login'} ) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.login_wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect( mapStateToProps, {login, logout} )(Login);