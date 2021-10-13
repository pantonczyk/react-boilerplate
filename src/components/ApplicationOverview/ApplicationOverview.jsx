import React, { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { string } from 'prop-types';

import { useNotifications } from 'common/hooks/useNotifications';
import { convertIdToGid } from 'common/utils/convertIdToGid';
import APPLICATION_STRUCTURE from 'api/queries/applicationStructure';
import ApplicationOverviewContent from './ApplicationOverviewContent';

const ApplicationOverview = ({ applicationID }) => {
    const { addNotification } = useNotifications();
    const [applicationStructure, setApplicationStructure] = useState(null);

    const applicationGid = useMemo(() => {
        return convertIdToGid('ApplicationNode', applicationID);
    }, [applicationID]);

    const { loading, error } = useQuery(APPLICATION_STRUCTURE, {
        variables: {
            gid: applicationGid,
        },
        onCompleted: (data) => {
            setApplicationStructure(data.applicationStructure);
        },
    });

    if (loading) {
        return 'loading...';
    }
    if (error) {
        addNotification(
            'error',
            'Błąd',
            'Ups! Wystąpił nieoczekiwany błąd. Nie udało sie pobrać danych użytkownika.'
        );
    }

    return <ApplicationOverviewContent applicationStructure={applicationStructure} />;
};

ApplicationOverview.propTypes = {
    applicationID: string.isRequired,
};

export default ApplicationOverview;
