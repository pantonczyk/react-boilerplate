import React, { useState } from 'react';
import { string, array, func } from 'prop-types';

import useComponentVisible from 'common/hooks/useComponentVisible';
import ErrorIcon from 'icons/error_icon.svg';
import styles from './SelectInput.module.scss';

const SelectInput = ({
    id,
    value = '',
    error,
    name,
    label,
    placeholder,
    options,
    optionMapKey,
    onChange,
    ...props
}) => {
    const { ref, isMenuOptionsVisible, handleClickToggleVisibility } = useComponentVisible(false);
    const [inputValue, setInputValue] = useState(value);

    const handleSelectValue = (value) => () => {
        setInputValue(value);
        onChange(value);
        handleClickToggleVisibility;
    };

    return (
        <div ref={ref} className={styles.select} onClick={handleClickToggleVisibility}>
            <div className={styles.select__input}>
                <input
                    type="text"
                    id={id}
                    name={name}
                    placeholder={placeholder || ' '}
                    value={inputValue}
                    readOnly
                    className={styles.input__field}
                    {...props}
                />
                <label className={styles.input__label} htmlFor={id}>
                    {label}
                </label>
            </div>
            {error && (
                <div className={styles.input__error}>
                    <img src={ErrorIcon} className={styles.error__image} />
                    <p className={styles.error__message}>{error}</p>
                </div>
            )}
            {isMenuOptionsVisible && options && (
                <div className={styles.select__options}>
                    <ul className={styles.options__list}>
                        {options?.map((option) => (
                            <li
                                key={option[optionMapKey]}
                                onClick={handleSelectValue(option[optionMapKey])}
                                className={styles.options__item}
                            >
                                {option[optionMapKey]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

SelectInput.propTypes = {
    id: string,
    name: string.isRequired,
    label: string.isRequired,
    placeholder: string,
    options: array,
    optionMapKey: string,
    onChange: func,
    error: string,
};

export default SelectInput;
