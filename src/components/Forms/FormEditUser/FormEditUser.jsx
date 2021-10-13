import React from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import ME_QUERY from 'api/queries/me';
import EDIT_USER from 'api/mutations/editUser';
import { useNotifications } from 'common/hooks/useNotifications';
import { useAction } from 'common/hooks/useAction';
import { CurrentUserService } from 'store/services/currentUser.service';
import { currentUserSelector } from 'store/selectors/currentUser.selector';
import FormEditUserContent from './FormEditUserContent';

const FormEditUser = () => {
    const { t } = useTranslation();
    const currentUserActions = useAction(CurrentUserService);
    const userData = useSelector(currentUserSelector.getAll);
    const { addNotification } = useNotifications();
    const [editUserMutation] = useMutation(EDIT_USER);

    const { loading, error } = useQuery(ME_QUERY, {
        onCompleted: (data) => {
            currentUserActions.setUserData(data.me);
        },
    });

    if (loading) {
        return 'loading...';
    }
    if (error) {
        addNotification(
            'error',
            `${t('formEditUser.errors.getUserData.title', 'Błąd')}`,
            `${t(
                'formEditUser.errors.getUserData.message',
                'Ups! Wystąpił nieoczekiwany błąd. Nie udało sie pobrać danych użytkownika.'
            )}`
        );
    }

    const initialValues = {
        username: userData?.username,
        email: userData?.email,
        firstName: userData?.firstName,
        lastName: userData?.lastName,
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email(
            `${t('formEditUser.validations.email', 'Wprowadź poprawny email')}`
        ),
        firstName: Yup.string().matches(
            /^[\s\p{L}]+$/u,
            `${t('formEditUser.validations.correctValue', 'Wprowadź poprawne dane')}`
        ),
        lastName: Yup.string().matches(
            /^[\s\p{L}]+$/u,
            `${t('formEditUser.validations.correctValue', 'Wprowadź poprawne dane')}`
        ),
    });

    const updateUserInState = (data) => {
        currentUserActions.updateUserData(data?.editUser?.user);
        addNotification(
            'success',
            `${t('formEditUser.notifications.title', 'Sukces')}`,
            `${t('formEditUser.notifications.message', 'Twoje dane zostały pomyślnie zmienone.')}`
        );
    };

    const showError = (error) => {
        addNotification('error', 'Błąd', `${error.message}`);
    };

    const editUser = ({ username, email, firstName, lastName }) => {
        editUserMutation({
            variables: {
                username,
                email,
                firstName,
                lastName,
            },
        })
            .then(({ data }) => updateUserInState(data))
            .catch(showError);
    };

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            editUser(values);
            setSubmitting(false);
        }, 400);
    };

    return (
        <FormEditUserContent
            initialValues={initialValues}
            validationSchema={validationSchema}
            handleSubmit={handleSubmit}
        />
    );
};
export default FormEditUser;
