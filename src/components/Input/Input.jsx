import React from 'react';
import { string } from 'prop-types';

import ErrorIcon from 'icons/error_icon.svg';
import styles from './Input.module.scss';

const Input = ({ type, name, label, placeholder, error, ...props }) => {
    return (
        <div className={styles.input}>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={`${placeholder}` || ''}
                className={styles.input__field}
                {...props}
            />
            <label className={styles.input__label} htmlFor={name}>
                {label}
            </label>
            <div className={styles.input__border} />
            {error && (
                <div className={styles.input__error}>
                    <img src={ErrorIcon} className={styles.error__image} />
                    <p className={styles.error__message}>{error}</p>
                </div>
            )}
        </div>
    );
};

Input.propTypes = {
    type: string.isRequired,
    name: string.isRequired,
    label: string,
    placeholder: string,
    error: string,
};

export default Input;
