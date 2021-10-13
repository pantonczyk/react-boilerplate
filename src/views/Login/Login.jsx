import React from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { createSession } from 'api/manageSession';
import TOKEN_AUTH from 'api/mutations/tokenAuth';
import { useNotifications } from 'common/hooks/useNotifications';
import LoginContent from './LoginContent';

const Login = () => {
    const history = useHistory();
    const [tokenAuth] = useMutation(TOKEN_AUTH);
    const { addNotification } = useNotifications();
    const { t } = useTranslation();

    const initialValues = {
        email: '',
        password: '',
    };

    const signIn = async (values) => {
        const { email, password } = values;

        const { data } = await tokenAuth({
            variables: {
                email,
                password,
            },
        });

        const { success = '', errors = '', token = '', refreshToken = '' } = data?.tokenAuth || {};

        if (success) {
            const session = { token: token, refreshToken: refreshToken };
            createSession(session);
            history.push('/user-profile');
        }
        if (errors) {
            addNotification(
                'error',
                `${t('login.notification.title', 'Błąd')}`,
                `${t(
                    'login.notification.message',
                    'Ups! Wystąpił nieoczekiwany błąd. Spróbuj jeszcze raz.'
                )}`
            );
        }
    };

    const validation = (values) => {
        const errors = {};
        if (!values.email.length) {
            errors.email = `${t('login.errors.email', 'Wpisz email')}`;
        }
        if (values.email && !values.password.length) {
            errors.password = `${t('login.errors.password', 'Wpisz hasło')}`;
        }
        return errors;
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            signIn(values);
            setSubmitting(false);
            resetForm({
                values: {
                    email: values.email,
                    password: '',
                },
            });
        }, 400);
    };

    return (
        <LoginContent
            initialValues={initialValues}
            validation={validation}
            handleSubmit={handleSubmit}
        />
    );
};

export default Login;
