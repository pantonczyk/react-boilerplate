import React from 'react';

import styles from './LoadingCircle.module.scss';

const LoadingCircle = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.loader__circle} />
        </div>
    );
};

export default LoadingCircle;
