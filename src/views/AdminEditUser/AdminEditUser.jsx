import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import USER_QUERY from 'api/queries/user';
import { useNotifications } from 'common/hooks/useNotifications';
import { convertIdToGid } from 'common/utils/convertIdToGid';
import AdminEditUserContent from './AdminEditUserContent';

const AdminEditUser = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const gid = convertIdToGid('UserNode', id);
    const [userData, setUserData] = useState();
    const { addNotification } = useNotifications();

    const { data, loading, error } = useQuery(USER_QUERY, {
        variables: {
            gid,
        },
    });

    useMemo(() => {
        setUserData(data?.user);
    }, [data]);

    if (loading) {
        return 'loading...';
    }

    if (error) {
        addNotification(
            'error',
            `${t('adminEditUser.errors.title', 'Błąd')}`,
            `${t(
                'adminEditUser.errors.message',
                'Ups! Wystąpił nieoczekiwany błąd. Spróbuj jeszcze raz.'
            )}`
        );
    }

    return <AdminEditUserContent userData={userData} />;
};

export default AdminEditUser;
