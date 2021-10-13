import React, { useState, useMemo } from 'react';
import * as Yup from 'yup';
import { useQuery, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { object } from 'prop-types';

import GROUPS from 'api/queries/groups';
import EDIT_USER_ADMIN from 'api/mutations/editUserAdmin';
import { useNotifications } from 'common/hooks/useNotifications';
import { convertIdToGid } from 'common/utils/convertIdToGid';
import FormAdminEditUserContent from './FormAdminEditUserContent';

const FormAdminEditUser = ({ userData }) => {
    const { t } = useTranslation();
    const [groupsList, setGroupsList] = useState(null);
    const { addNotification } = useNotifications();
    const [editUserAdminMutation] = useMutation(EDIT_USER_ADMIN);

    const { data, loading, error } = useQuery(GROUPS);

    useMemo(() => {
        setGroupsList(data?.groups);
    }, [data]);

    if (loading) {
        return 'loading...';
    }
    if (error) {
        addNotification(
            'error',
            `${t('formAdminEditUser.errors.getGroups.title', 'Błąd')}`,
            `${t(
                'formAdminEditUser.errors.getGroups.message',
                'Ups! Wystąpił nieoczekiwany błąd. Nie udało sie pobrać listy uprawnień.'
            )}`
        );
    }

    const initialValues = {
        id: userData?.id,
        username: userData?.username,
        email: userData?.email,
        firstName: userData?.firstName,
        lastName: userData?.lastName,
        password: '',
        role: userData?.groups[0]?.name,
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string(),
        email: Yup.string().email(
            `${t('formAdminEditUser.validations.email', 'Wprowadź poprawny email')}`
        ),
        password: Yup.string().matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            `${t(
                'formAdminEditUser.validations.password',
                'Hasło musi składać się z 8 znaków, w tym z wielkiej i małej litery, cyfry i jednego znaku specjalnego'
            )}`
        ),
        firstName: Yup.string().matches(
            /^[\s\p{L}]+$/u,
            `${t('formAdminEditUser.validations.correctValue', 'Wprowadź poprawne dane')}`
        ),
        lastName: Yup.string().matches(
            /^[\s\p{L}]+$/u,
            `${t('formAdminEditUser.validations.correctValue', 'Wprowadź poprawne dane')}`
        ),
        role: Yup.string(),
    });

    const showSuccesNotification = () => {
        addNotification(
            'success',
            `${t('formAdminEditUser.notifications.title', 'Sukces')}`,
            `${t('formAdminEditUser.notifications.message', 'Dane użytkownika zostały zmienione.')}`
        );
    };

    const showErrorNotification = (error) => {
        addNotification('error', 'Błąd', `${error.message}`);
    };

    const editUser = ({ id, username, email, firstName, lastName, password, role }) => {
        const gid = convertIdToGid('UserNode', id);
        const roleId = groupsList.filter((item) => item.name === role)[0]?.id;
        const roleGid = convertIdToGid('GroupProxyNode', roleId);

        editUserAdminMutation({
            variables: {
                gid,
                username,
                email,
                password,
                firstName,
                lastName,
                roleGid,
            },
        })
            .then(showSuccesNotification)
            .catch(showErrorNotification);
    };

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            editUser(values);
            setSubmitting(false);
        }, 400);
    };

    return (
        <FormAdminEditUserContent
            groups={groupsList}
            initialValues={initialValues}
            validationSchema={validationSchema}
            handleSubmit={handleSubmit}
        />
    );
};

FormAdminEditUser.propTypes = {
    userData: object,
};

export default FormAdminEditUser;
