import React from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { array, object, func } from 'prop-types';

import { goBack } from 'common/utils/routerFunctions';
import Input from 'components/Input';
import SelectInput from 'components/SelectInput';
import Button from 'components/Button';
import styles from './FormAdminEditUserContent.module.scss';

const FormAdminEditUserContent = ({ groups, initialValues, validationSchema, handleSubmit }) => {
    const { t } = useTranslation();
    const history = useHistory();
    const handleChangeSelectValue = (valueName, value, setFieldValue) => {
        setFieldValue(valueName, value);
    };

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
                    setFieldValue,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit} className={styles.form__content}>
                        <Input
                            type="text"
                            name="username"
                            label={t('formAdminEditUser.inputs.username', 'Nazwa użytkownika')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            error={touched.username && errors.username}
                        />
                        <Input
                            type="email"
                            name="email"
                            label={t('formAdminEditUser.inputs.email', 'Email')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            error={touched.email && errors.email}
                        />
                        <Input
                            type="password"
                            name="password"
                            label={t('formAdminEditUser.inputs.password', 'Hasło')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            error={touched.password && errors.password}
                        />
                        <Input
                            type="text"
                            name="firstName"
                            label={t('formAdminEditUser.inputs.firstName', 'Imię')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            error={touched.firstName && errors.firstName}
                        />

                        <Input
                            type="text"
                            name="lastName"
                            label={t('formAdminEditUser.inputs.lastName', 'Nazwisko')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            error={touched.lastName && errors.lastName}
                        />

                        <SelectInput
                            id="role"
                            name="role"
                            label={t('formAdminEditUser.inputs.groups.label', 'Uprawnienia')}
                            placeholder={t(
                                'formAdminEditUser.inputs.groups.placeholder',
                                'Wybierz typ użytkownika'
                            )}
                            options={groups}
                            optionMapKey="name"
                            value={values.role}
                            error={touched.role && errors.role}
                            onChange={(value) =>
                                handleChangeSelectValue('role', value, setFieldValue)
                            }
                            onBlur={handleBlur}
                        />
                        <div className={styles.form__button}>
                            <Button
                                textTransform="capitalize"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {t('formAdminEditUser.saveButton', 'Zapisz')}
                            </Button>
                            <Button
                                type="button"
                                variant="secondary"
                                textTransform="capitalize"
                                onClick={goBack(history)}
                            >
                                {t('formAdminEditUser.goBackButton', 'Powrót')}
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

FormAdminEditUserContent.propTypes = {
    groups: array,
    initialValues: object.isRequired,
    validationSchema: object.isRequired,
    handleSubmit: func.isRequired,
};

export default FormAdminEditUserContent;
