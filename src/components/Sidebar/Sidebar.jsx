import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { bool, func } from 'prop-types';

import { checkIsMobileView } from 'common/utils/checkIsMobileView';
import Logo from 'images/logo_sidebar.svg';
import CloseIcon from 'icons/close_icon.svg';
import TeamIcon from 'icons/menu_team_icon.svg';
import ApplicationsIcon from 'icons/menu_applications_icon.svg';
import './Sidebar.scss';

const Sidebar = ({ isSidebarActive, handleToggleSidebar }) => {
    const { t } = useTranslation();
    const isMobile = checkIsMobileView();
    return (
        <div className={`${isSidebarActive ? 'sidebar--active' : 'sidebar'}`}>
            <div className="sidebar__header">
                <img src={Logo} className="header__logo" alt="Logo Emplocity" />
                <div className="header__button" onClick={handleToggleSidebar}>
                    <img src={CloseIcon} className="button__icon" alt="Close button" />
                </div>
            </div>

            <div className="sidebar__menu">
                <NavLink
                    to="/manage-users"
                    className="menu__item"
                    activeClassName="menu__item--active"
                    onClick={isMobile ? handleToggleSidebar : null}
                >
                    <img className="item__image" src={TeamIcon} alt="Team icon" />
                    <span> {t('sidebar.team', 'Zespół')}</span>
                </NavLink>
                <NavLink
                    to="/applications"
                    className="menu__item"
                    activeClassName="menu__item--active"
                    onClick={isMobile ? handleToggleSidebar : null}
                >
                    <img className="item__image" src={ApplicationsIcon} alt="Applications icon" />
                    <span> {t('sidebar.applications', 'Wnioski')}</span>
                </NavLink>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    isSidebarActive: bool.isRequired,
    handleToggleSidebar: func.isRequired,
};

export default Sidebar;
