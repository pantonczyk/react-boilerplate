import React, { useState, useMemo } from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';

import { checkIsDesktopView } from 'common/utils/checkIsDesktopView';
import Navbar from 'components/Navbar';
import './UserViewLayout.scss';

const UserViewLayout = ({ children }) => {
    const [isSidebarActive, setisSidebarActive] = useState(true);
    const [windowWidth, setWindowWitdth] = useState(window.innerWidth);

    const handleWindowSizeChange = () => {
        setWindowWitdth(window.innerWidth);
    };

    const handleToggleSidebar = () => {
        setisSidebarActive((prevState) => !prevState);
    };

    useMemo(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        const isDesktop = checkIsDesktopView();
        setisSidebarActive(isDesktop);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, [windowWidth]);

    return (
        <>
            <Navbar isSidebarActive={isSidebarActive} handleToggleSidebar={handleToggleSidebar} />
            <div
                className={`${
                    isSidebarActive ? 'userLayout__content--active' : 'userLayout__content'
                }`}
            >
                {children}
            </div>
        </>
    );
};

UserViewLayout.propTypes = {
    children: oneOfType([arrayOf(node), node]),
};

export default UserViewLayout;
