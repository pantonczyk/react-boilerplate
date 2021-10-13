import React from 'react';
import { string } from 'prop-types';

import styles from './Checkbox.module.scss';

const Checkbox = ({ id, label, ...props }) => {
    return (
        <div className={styles.checkbox}>
            <input type="checkbox" className={styles.checkbox__field} id={id} {...props} />
            <label className={styles.checkbox__label} htmlFor={id}>
                <span>{label}</span>
            </label>
        </div>
    );
};

Checkbox.propTypes = {
    id: string.isRequired,
    label: string.isRequired,
};

export default Checkbox;
