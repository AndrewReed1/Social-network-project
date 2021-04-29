import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControllers/FormControllers';
import s from './Settings.module.css';
import networks from '../../assets/img/networks.png';
import { saveProfile } from '../../redux/profile-reducer';

const UsersDataFormik = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div className={s.header}><b>Personal info settings</b></div>
            <div className={s.formItemTextArea}>
                <div className={s.name_2}>Tell something about yourself: </div>
                <div>
                    <Field placeholder={'Write something...'} name={'aboutMe'} component={Textarea} className={s.textArea}/>
                </div>
            </div>
            <div className={s.formItem}>
                <div className={s.name}>Facebook: </div>
                <div>
                    <Field name={'facebook'} component={'input'} className={s.field}/>
                </div>
            </div>
            <div className={s.formItem}>
                <div className={s.name}>GitHub: </div>
                <div>
                    <Field name={'github'} component={'input'} className={s.field}/>
                </div>
            </div>
            <div className={s.formItem}>
                <div className={s.name}>Instagram: </div>
                <div>
                    <Field name={'instagram'} component={'input'} className={s.field}/>
                </div>
            </div>
            <div className={s.formItem}>
                <div className={s.name}>VK: </div>
                <div>
                    <Field name={'vk'} component={'input'} className={s.field}/>
                </div>
            </div>
            <div className={s.formItem}>
                <div className={s.name}>Are you looking for a job? </div>
                <div className={s.check}>
                    <Field type={'checkbox'} name={'lookingForAJob'} component={'input'} /> <div className={s.checkBox}>click on the box</div>
                </div>
            </div>
            <button className={s.button}>Set data</button>
        </form>
    )
};

const UsersDataReduxFormik = reduxForm({form: 'DataFormik'}) (UsersDataFormik);

const Settings = (props) => {

    const onSubmitData = (formData) => {
        debugger
        saveProfile(formData);
    };

    return (
        <div className={s.settings_wrapper}>
            <UsersDataReduxFormik onSubmit={onSubmitData}/>
            <div>
                <img className={s.img} src={networks} />
            </div>
        </div>
    )
};

export default Settings;