import React from 'react';

import ApplicationOverviewNavItem from './ApplicationOverviewNavItem';
import './ApplicationOverviewNav.scss';

const ApplicationOverviewNav = ({ applicationStructure }) => {
    return (
        <nav className="applicationOverviewNav">
            {applicationStructure?.chapterSet.map((chapter) => (
                <ApplicationOverviewNavItem key={chapter.id} chapter={chapter} />
            ))}
        </nav>
    );
};

export default ApplicationOverviewNav;
