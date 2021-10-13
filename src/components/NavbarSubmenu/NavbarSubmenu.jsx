import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { useApolloClient } from '@apollo/client';

import { logout } from 'api/logout';
import { useAction } from 'common/hooks/useAction';
import { CurrentUserService } from 'store/services/currentUser.service';
import useComponentVisible from 'common/hooks/useComponentVisible';
import { redirectTo } from 'common/utils/routerFunctions';
import ArrowIcon from 'icons/menu_arrow_down_icon.svg';
import styles from './NavbarSubmenu.module.scss';

const NavbarSubmenu = () => {
    const { ref, isMenuOptionsVisible, handleClickToggleVisibility } = useComponentVisible(false);
    const { t } = useTranslation();
    const history = useHistory();
    const client = useApolloClient();
    const currentUserActions = useAction(CurrentUserService);

    return (
        <div ref={ref} className={styles.submenu} onClick={handleClickToggleVisibility}>
            <img src={ArrowIcon} alt="Show menu icon" />
            {isMenuOptionsVisible && (
                <ul className={styles.submenu__list}>
                    <li
                        className={styles.list__item}
                        onClick={redirectTo(history, '/user-profile')}
                    >
                        {t('navbar.submenu.profile', 'Twój profil')}
                    </li>
                    <li
                        className={styles.list__item}
                        onClick={logout(history, client, currentUserActions)}
                    >
                        {t('navbar.submenu.logout', 'Wyloguj')}
                    </li>
                </ul>
            )}
        </div>
    );
};

export default NavbarSubmenu;
