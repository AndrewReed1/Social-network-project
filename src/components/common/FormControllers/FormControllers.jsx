import React from 'react';
import s from './FormControllers.module.css';

export const Textarea = ( {input, meta, ...props} ) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <textarea {...input} {...props}/>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div> 
        </div>
    )
}

export const Input = ( {input, meta, ...props} ) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <input {...input} {...props}/>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div> 
        </div>
    )
}