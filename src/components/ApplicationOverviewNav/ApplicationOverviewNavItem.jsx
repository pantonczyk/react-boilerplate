import React from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';
import { object } from 'prop-types';

import { convertArabicToRoman } from 'common/utils/convertArabicToRoman';
import useCollapse from 'common/hooks/useCollapse';
import ArrowIcon from 'icons/small_arrow_icon.svg';
import './ApplicationOverviewNavItem.scss';

const ApplicationOverviewNavItem = ({ chapter }) => {
    const { url } = useRouteMatch();
    const { isExpanded, handleClickToggleExpanded } = useCollapse(false);

    const { id: chapterID = '', order = '', name = '', sectionSet = [] } = chapter || {};

    return (
        <div className="navItem">
            <div
                className={`navItem__chapter ${isExpanded && 'navItem__chapter--active'}`}
                onClick={handleClickToggleExpanded}
            >
                <span>
                    {convertArabicToRoman(order)}.{name}
                </span>

                <img
                    className={isExpanded ? 'chapter__arrowIcon--active' : ''}
                    src={ArrowIcon}
                    alt="Arrow icon"
                />
            </div>

            {isExpanded && (
                <div className="navItem__sections">
                    {sectionSet?.map(({ id, order, name }) => (
                        <NavLink
                            key={id}
                            to={`${url}/chapter/${chapterID}/section/${id}`}
                            className="sections__item"
                            activeClassName="sections__item--active"
                        >
                            {order}. {name}
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    );
};

ApplicationOverviewNavItem.propTypes = {
    chapter: object.isRequired,
};

export default ApplicationOverviewNavItem;
