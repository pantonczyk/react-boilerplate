import React from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import ApplicatonTabsNav from 'components/ApplicatonTabsNav';
import AssignedUsers from 'components/AssignedUsers';
import ApplicationOverview from 'components/ApplicationOverview';

const Application = () => {
    const { applicationID } = useParams();
    const { path } = useRouteMatch();

    return (
        <>
            <ApplicatonTabsNav />
            <PrivateRoute path={`${path}/overview`}>
                <ApplicationOverview applicationID={applicationID} />
            </PrivateRoute>

            <PrivateRoute path={`${path}/assign-users`}>
                <AssignedUsers applicationID={applicationID} />
            </PrivateRoute>

            <PrivateRoute path={`${path}/conversation`}>
                <h1>Ogólna konwersacja</h1>
            </PrivateRoute>

            <PrivateRoute path={`${path}/change-history`}>
                <h1>Historia zmian</h1>
            </PrivateRoute>
        </>
    );
};

export default Application;
