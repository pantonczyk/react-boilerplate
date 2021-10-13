import React from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';

import './ApplicatonTabsNav.scss';

const ApplicatonTabsNav = () => {
    const { url } = useRouteMatch();

    return (
        <nav className="applicationNav">
            <NavLink
                to={`${url}/overview`}
                className="applicationNav__item"
                activeClassName="applicationNav__item--active"
            >
                Wniosek
            </NavLink>

            <NavLink
                to={`${url}/assign-users`}
                className="applicationNav__item"
                activeClassName="applicationNav__item--active"
            >
                Osoby przypisane
            </NavLink>

            <NavLink
                to={`${url}/conversation`}
                className="applicationNav__item"
                activeClassName="applicationNav__item--active"
            >
                Ogólna konwersacja
            </NavLink>

            <NavLink
                to={`${url}/change-history`}
                className="applicationNav__item"
                activeClassName="applicationNav__item--active"
            >
                Historia zmian
            </NavLink>
        </nav>
    );
};

export default ApplicatonTabsNav;
