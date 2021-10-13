import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import ALL_USERS from 'api/queries/allUsers';
import { useNotifications } from 'common/hooks/useNotifications';
import { useAction } from 'common/hooks/useAction';
import { SystemUsersService } from 'store/services/systemUsers.service';
import { systemUsersSelector } from 'store/selectors/systemUsers.selector';
import ManageUsersContent from './ManageUsersContent';

const ManageUsers = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const { addNotification } = useNotifications();
    const { t } = useTranslation();
    const systemUsersActions = useAction(SystemUsersService);
    const usersList = useSelector(systemUsersSelector.getAll);

    const handleFormVisibility = () => {
        setIsFormVisible((prevState) => !prevState);
    };

    const { loading, error } = useQuery(ALL_USERS, {
        onCompleted: (data) => {
            systemUsersActions.setUsersList(data.allUsers);
        },
    });

    if (loading) {
        return 'loading...';
    }

    if (error) {
        addNotification(
            'error',
            `${t('manageUsers.errors.title', 'Błąd')}`,
            `${t(
                'manageUsers.errors.message',
                'Ups! Wystąpił nieoczekiwany błąd. Spróbuj jeszcze raz.'
            )}`
        );
    }

    return (
        <ManageUsersContent
            isFormVisible={isFormVisible}
            handleFormVisibility={handleFormVisibility}
            usersList={usersList}
        />
    );
};

export default ManageUsers;
