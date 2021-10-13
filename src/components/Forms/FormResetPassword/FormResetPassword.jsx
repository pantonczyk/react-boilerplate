import React from 'react';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import RESET_PASSWORD from 'api/mutations/resetPassword';
import { useNotifications } from 'common/hooks/useNotifications';
import FormResetPasswordContent from './FormResetPasswordContent';

const FormResetPassword = () => {
    const { t } = useTranslation();
    const { addNotification } = useNotifications();
    const [resetPasswordMutation] = useMutation(RESET_PASSWORD);

    const initialValues = {
        password: '',
        confirmedPassword: '',
    };

    const validationSchema = Yup.object().shape({
        password: Yup.string()
            .required(`${t('formResetPassword.validations.required', 'To pole jest wymagane')}`)
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                `${t(
                    'formResetPassword.validations.password',
                    'Hasło musi składać się z 8 znaków, w tym z wielkiej i małej litery, cyfry i jednego znaku specjalnego'
                )}`
            ),
        confirmedPassword: Yup.string()
            .required(`${t('formResetPassword.validations.required', 'To pole jest wymagane')}`)
            .when('password', {
                is: (password) => password?.length,
                then: Yup.string().oneOf(
                    [Yup.ref('password')],
                    `${t(
                        'formResetPassword.validations.confirmedPassword',
                        'Hasła muszą być takie same.'
                    )}`
                ),
            }),
    });

    const showSuccesNotification = () => {
        addNotification(
            'success',
            `${t('formAdminEditUser.notifications.title', 'Sukces')}`,
            `${t('formAdminEditUser.notifications.message', 'Dane użytkownika zostały zmienione.')}`
        );
    };

    const resetInputForms = (resetForm) => {
        resetForm({
            values: {
                password: '',
                confirmedPassword: '',
            },
        });
    };

    const showErrorNotification = (error) => {
        addNotification('error', 'Błąd', `${error.message}`);
    };

    const resetPassword = ({ password, confirmedPassword }, resetForm) => {
        resetPasswordMutation({
            variables: {
                password,
                confirmedPassword,
            },
        })
            .then(showSuccesNotification)
            .then(resetInputForms(resetForm))
            .catch(showErrorNotification);
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            resetPassword(values, resetForm);
            setSubmitting(false);
        }, 400);
    };

    return (
        <FormResetPasswordContent
            initialValues={initialValues}
            validationSchema={validationSchema}
            handleSubmit={handleSubmit}
        />
    );
};
export default FormResetPassword;
