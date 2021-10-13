import React, { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';

import ALL_APPLICATIONS from 'api/queries/allApplications';
import { useNotifications } from 'common/hooks/useNotifications';
import UserApplicationsContent from './UserApplicationsContent';

const UserApplications = () => {
    const { addNotification } = useNotifications();
    const [applicationsList, setApplicationsList] = useState([]);

    const { data, loading, error } = useQuery(ALL_APPLICATIONS);

    useMemo(() => {
        setApplicationsList(data?.allApplications);
    }, [data]);

    if (loading) {
        return 'loading...';
    }

    if (error) {
        addNotification('error', 'Błąd', `${error.message}`);
    }

    return <UserApplicationsContent applicationsList={applicationsList} />;
};

export default UserApplications;
