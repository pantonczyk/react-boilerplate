import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { bool, func } from 'prop-types';

import ME_QUERY from 'api/queries/me';
import { useAction } from 'common/hooks/useAction';
import { CurrentUserService } from 'store/services/currentUser.service';
import { currentUserSelector } from 'store/selectors/currentUser.selector';
import Sidebar from 'components/Sidebar';
import NavbarSubmenu from 'components/NavbarSubmenu';
import LanguageSwitch from 'components/LanguageSwitch';
import ArrowIcon from 'icons/menu_arrow_left_icon.svg';
import HamburgerButtonIcon from 'icons/hamburger_button_icon.svg';
import './Navbar.scss';

const Navbar = ({ isSidebarActive, handleToggleSidebar }) => {
    const currentUserActions = useAction(CurrentUserService);
    const { t } = useTranslation();

    useQuery(ME_QUERY, {
        onCompleted: (data) => {
            currentUserActions.loginUser(data.me);
        },
    });

    const firstName = useSelector(currentUserSelector.getFirstName);

    return (
        <>
            <Sidebar isSidebarActive={isSidebarActive} handleToggleSidebar={handleToggleSidebar} />
            <div className={`${isSidebarActive ? 'navbar__wrapper--active' : 'navbar__wrapper'}`}>
                <div className="navbar">
                    <img
                        className={'navbar__button'}
                        src={isSidebarActive ? ArrowIcon : HamburgerButtonIcon}
                        onClick={handleToggleSidebar}
                    />
                    <div className="navbar__items">
                        {firstName && (
                            <p className="navbar__greeting">
                                {t('navbar.greeting', 'Cześć, ')}
                                <span>{firstName}</span>
                            </p>
                        )}
                        <NavbarSubmenu />
                        <LanguageSwitch />
                    </div>
                </div>
            </div>
        </>
    );
};

Navbar.propTypes = {
    isSidebarActive: bool.isRequired,
    handleToggleSidebar: func.isRequired,
};

export default Navbar;
