import React from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { object, func } from 'prop-types';

import Button from 'components/Button';
import Input from 'components/Input';
import styles from './FormResetPasswordContent.module.scss';

const FormResetPasswordContent = ({ initialValues, handleSubmit, validationSchema }) => {
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
                            {t('formResetPassword.title', 'Zmiana hasła')}
                        </h1>
                        <Input
                            type="password"
                            name="password"
                            label={t('formResetPassword.inputs.password', 'Nowe hasło')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            error={touched.password && errors.password}
                            required
                        />
                        <Input
                            type="password"
                            name="confirmedPassword"
                            label={t(
                                'formResetPassword.inputs.confirmedPassword',
                                'Potwierdź hasło'
                            )}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmedPassword}
                            error={touched.confirmedPassword && errors.confirmedPassword}
                            required
                        />
                        <div className={styles.form__button}>
                            <Button
                                variant="secondary"
                                textTransform="capitalize"
                                type="submit"
                                variant="secondary"
                                disabled={isSubmitting}
                            >
                                {t('formResetPassword.button', 'Zaktualizuj')}
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

FormResetPasswordContent.propTypes = {
    initialValues: object.isRequired,
    validationSchema: object.isRequired,
    handleSubmit: func.isRequired,
};

export default FormResetPasswordContent;
