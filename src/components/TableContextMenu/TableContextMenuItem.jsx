import React from 'react';
import { func, oneOfType, arrayOf, node } from 'prop-types';

import styles from './TableContextMenu.module.scss';

const TableContextMenuItem = ({ onClick, children }) => {
    return (
        <li className={styles.list__item} onClick={onClick}>
            {children}
        </li>
    );
};

TableContextMenuItem.propTypes = {
    onClick: func,
    children: oneOfType([arrayOf(node), node]),
};

export default TableContextMenuItem;
