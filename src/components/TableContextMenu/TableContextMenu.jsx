import React from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';

import useComponentVisible from 'common/hooks/useComponentVisible';
import ContextMenuIcon from 'icons/context_menu_icon.svg';
import styles from './TableContextMenu.module.scss';

const TableContextMenu = ({ children }) => {
    const { ref, isMenuOptionsVisible, handleClickToggleVisibility } = useComponentVisible(false);
    return (
        <div ref={ref} className={styles.contextMenu} onClick={handleClickToggleVisibility}>
            <img src={ContextMenuIcon} alt="Context menu icon" />
            {isMenuOptionsVisible && <ul className={styles.contextMenu__list}>{children}</ul>}
        </div>
    );
};

TableContextMenu.propTypes = {
    children: oneOfType([arrayOf(node), node]),
};

export default TableContextMenu;
