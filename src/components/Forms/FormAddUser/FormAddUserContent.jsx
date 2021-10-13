import React from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { array, object, func } from 'prop-types';

import Input from 'components/Input';
import SelectInput from 'components/SelectInput';
import Button from 'components/Button';
import styles from './FormAddUserContent.module.scss';

const FormAddUserContent = ({ groups, initialValues, validationSchema, handleSubmit }) => {
    const { t } = useTranslation();
    const handleChangeSelectValue = (valueName, value, setFieldValue) => {
        setFieldValue(valueName, value);
    };

    return (
        <div className={styles.form}>
            <h1 className={styles.form__title}>
                {t('formAddUser.title', 'Dodaj nowego użytkownika')}
            </h1>
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
                            label={t('formAddUser.inputs.username', 'Nazwa użytkownika')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            error={touched.username && errors.username}
                        />
                        <Input
                            type="email"
                            name="email"
                            label={t('formAddUser.inputs.email', 'Email')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            error={touched.email && errors.email}
                        />
                        <Input
                            type="password"
                            name="password"
                            label={t('formAddUser.inputs.password', 'Hasło')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            error={touched.password && errors.password}
                        />
                        <Input
                            type="text"
                            name="firstName"
                            label={t('formAddUser.inputs.firstName', 'Imię')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.firstName}
                            error={touched.firstName && errors.firstName}
                        />

                        <Input
                            type="text"
                            name="lastName"
                            label={t('formAddUser.inputs.lastName', 'Nazwisko')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            error={touched.lastName && errors.lastName}
                        />

                        <SelectInput
                            id="roleId"
                            name="roleId"
                            label={t('formAddUser.inputs.groups.label', 'Uprawnienia')}
                            placeholder={t(
                                'formAddUser.inputs.groups.placeholder',
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
                                {t('formAddUser.button', 'dodaj')}
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

FormAddUserContent.propTypes = {
    groups: array,
    initialValues: object.isRequired,
    validationSchema: object.isRequired,
    handleSubmit: func.isRequired,
};

export default FormAddUserContent;
