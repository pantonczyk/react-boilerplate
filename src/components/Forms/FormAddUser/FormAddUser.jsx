import React, { useMemo, useState } from 'react';
import * as Yup from 'yup';
import { useQuery, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import GROUPS from 'api/queries/groups';
import CREATE_USER from 'api/mutations/createUser';
import { useNotifications } from 'common/hooks/useNotifications';
import { convertIdToGid } from 'common/utils/convertIdToGid';
import { useAction } from 'common/hooks/useAction';
import { SystemUsersService } from 'store/services/systemUsers.service';
import FormAddUserContent from './FormAddUserContent';

const FormAddUser = () => {
    const { t } = useTranslation();
    const [groupsList, setGroupsList] = useState(null);
    const { addNotification } = useNotifications();
    const [createUserMutation] = useMutation(CREATE_USER);
    const systemUsersActions = useAction(SystemUsersService);

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
            `${t('formAddUser.errors.getGroups.title', 'Błąd')}`,
            `${t(
                'formAddUser.errors.getGroups.message',
                'Ups! Wystąpił nieoczekiwany błąd. Nie udało sie pobrać listy uprawnień.'
            )}`
        );
    }

    const initialValues = {
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        role: '',
    };

    const addUserToState = (newUser, resetForm) => {
        systemUsersActions.setAddNewUser(newUser);
        addNotification(
            'success',
            `${t('formAddUser.notifications.title', 'Sukces')}`,
            `${t('formAddUser.notifications.message', 'Pomyślnie dodano nowego użytkownika.')}`
        );
        resetForm({
            values: {
                username: '',
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                role: '',
            },
        });
    };

    const showError = (error) => {
        addNotification('error', 'Błąd', `${error.message}`);
    };

    const createUser = ({ username, email, password, firstName, lastName, role }, resetForm) => {
        const roleId = groupsList.filter((item) => item.name === role)[0].id;
        const roleGid = convertIdToGid('GroupProxyNode', roleId);

        createUserMutation({
            variables: {
                username,
                email,
                password,
                firstName,
                lastName,
                roleGid,
            },
        })
            .then(({ data }) => addUserToState(data.createUser.user))
            .catch(showError);
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required(
            `${t('formAddUser.validations.required', 'To pole jest wymagane')}`
        ),
        email: Yup.string()
            .email(`${t('formAddUser.validations.email', 'Wprowadź poprawny email')}`)
            .required(`${t('formAddUser.validations.required', 'To pole jest wymagane')}`),
        password: Yup.string()
            .required(`${t('formAddUser.validations.required', 'To pole jest wymagane')}`)
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                `${t(
                    'formAddUser.validations.password',
                    'Hasło musi składać się z 8 znaków, w tym z wielkiej i małej litery, cyfry i jednego znaku specjalnego'
                )}`
            ),
        firstName: Yup.string()
            .required(`${t('formAddUser.validations.required', 'To pole jest wymagane')}`)
            .matches(
                /^[\s\p{L}]+$/u,
                `${t('formAddUser.validations.correctValue', 'Wprowadź poprawne dane')}`
            ),
        lastName: Yup.string()
            .required(`${t('formAddUser.validations.required', 'To pole jest wymagane')}`)
            .matches(
                /^[\s\p{L}]+$/u,
                `${t('formAddUser.validations.correctValue', 'Wprowadź poprawne dane')}`
            ),
        role: Yup.string().required(
            `${t('formAddUser.validations.required', 'To pole jest wymagane')}`
        ),
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            createUser(values, resetForm);
            setSubmitting(false);
        }, 400);
    };

    return (
        <FormAddUserContent
            groups={groupsList}
            initialValues={initialValues}
            validationSchema={validationSchema}
            handleSubmit={handleSubmit}
        />
    );
};

export default FormAddUser;
