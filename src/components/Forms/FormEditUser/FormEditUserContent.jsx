import React from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { object, func } from 'prop-types';

import Button from 'components/Button';
import Input from 'components/Input';
import styles from './FormEditUserContent.module.scss';

const FormEditUserContent = ({ initialValues, handleSubmit, validationSchema }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.form}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit} className={styles.form__content}>
                        <h1 className={styles.form__title}>
                            {t('formEditUser.title', 'Twoje dane')}
                        </h1>
                        <Input
                            type="text"
                            name="username"
                            label={t('formEditUser.inputs.username', 'Nazwa użytkownika')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            error={touched.username && errors.username}
                        />
                        <Input
                            type="email"
                            name="email"
                            label={t('formEditUser.inputs.email', 'Email')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            error={touched.email && errors.email}
                        />
                        <Input
                            type="text"
                            name="firstName"
                            label={t('formEditUser.inputs.firstName', 'Imię')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            error={touched.firstName && errors.firstName}
                        />
                        <Input
                            type="text"
                            name="lastName"
                            label={t('formEditUser.inputs.lastName', 'Nazwisko')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            error={touched.lastName && errors.lastName}
                        />
                        <div className={styles.form__button}>
                            <Button
                                variant="secondary"
                                textTransform="capitalize"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {t('formEditUser.saveButton', 'Zapisz')}
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

FormEditUserContent.propTypes = {
    initialValues: object.isRequired,
    validationSchema: object.isRequired,
    handleSubmit: func.isRequired,
};

export default FormEditUserContent;
