import React from 'react';
import { Formik } from 'formik';
import { func, object } from 'prop-types';
import { useTranslation } from 'react-i18next';

import Logo from 'images/logo.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import LanguageSwitch from 'components/LanguageSwitch';
import styles from './LoginContent.module.scss';

const LoginContent = ({ initialValues, validation, handleSubmit }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.login__background}>
            <div className={styles.login__header}>
                <img src={Logo} alt="Emplocity" />
                <LanguageSwitch />
            </div>

            <div className={styles.login__card}>
                <h1 className={styles.login__title}>
                    {t('login.content.title', 'Logowanie do Emplocity')}
                </h1>
                <p className={styles.login__subtitle}>
                    {t('login.content.subtitle', 'Wpisz swoje dane poniżej.')}
                </p>
                <div className={styles.login__form}>
                    <Formik
                        initialValues={initialValues}
                        validate={validation}
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
                            <form onSubmit={handleSubmit}>
                                <Input
                                    type="email"
                                    name="email"
                                    label={t('login.content.inputs.email', 'Twój e-mail')}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    error={touched.email && errors.email}
                                />
                                <Input
                                    type="password"
                                    name="password"
                                    label={t('login.content.inputs.password', 'Hasło')}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    error={touched.password && errors.password}
                                />

                                <Button
                                    textTransform="uppercase"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {t('login.content.loginButton', 'zaloguj')}
                                </Button>
                            </form>
                        )}
                    </Formik>

                    <a className={styles.login__link} href="#">
                        {t('login.content.forgotPasswordLink', 'nie pamiętam hasła')}
                    </a>
                </div>
            </div>
            <p className={styles.login__policy}>
                {t('login.content.policy', '©2001–2021 Wszelkie prawa zastrzeżone. Emplocity®.')}
                <a
                    className={styles.policy__link}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="#"
                >
                    {t('login.content.policyLink', ' Polityka prywatności')}
                </a>
            </p>
        </div>
    );
};

LoginContent.propTypes = {
    initialValues: object.isRequired,
    validation: func.isRequired,
    handleSubmit: func.isRequired,
};

export default LoginContent;
