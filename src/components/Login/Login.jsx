import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../Validators/Validators';
import { Input } from '../common/FormControllers/FormControllers';
import s from './Login.module.css';

let maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength30]} placeholder={'Login'} name={'login'} component={Input}/>
            </div>
            <div>
                <Field validate={[required, maxLength30]} placeholder={'Password'} name={'password'} component={Input}/>
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
        console.log(formData);
    }

    return (
        <div className={s.login_wrapper}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;