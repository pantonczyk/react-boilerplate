import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { object } from 'prop-types';

import PrivateRoute from 'components/PrivateRoute';
import ApplicationOverviewNav from 'components/ApplicationOverviewNav';
import ApplicationOverviewDetails from 'components/ApplicationOverviewDetails';
import './ApplicationOverviewContent.scss';

const ApplicationOverviewContent = ({ applicationStructure }) => {
    const { path } = useRouteMatch();

    return (
        <div className="ApplicationOverview">
            <ApplicationOverviewNav applicationStructure={applicationStructure} />

            <main className="applicationOverview__main">
                <PrivateRoute path={`${path}/chapter/:chapterID/section/:sectionID`}>
                    <ApplicationOverviewDetails applicationStructure={applicationStructure} />
                </PrivateRoute>
            </main>
        </div>
    );
};

ApplicationOverviewContent.propTypes = {
    applicationStructure: object,
};

export default ApplicationOverviewContent;
