import React, { memo } from 'react';
import { Formik } from 'formik';
import { object, func } from 'prop-types';

import Input from 'components/Input';
import Button from 'components/Button';
import styles from './FormAssignUserContent.module.scss';

const FormAssignUserContent = ({ validationSchema, handleSubmit }) => {
    return (
        <div className={styles.form}>
            <h1 className={styles.form__title}>Zaproszenie do zespołu</h1>
            <Formik
                initialValues={{ email: '' }}
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
                        <div className={styles.form__inputs}>
                            <Input
                                type="text"
                                name="email"
                                label="E-mail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                error={touched.email && errors.email}
                            />
                        </div>
                        <div className={styles.form__button}>
                            <Button
                                variant="secondary"
                                textTransform="uppercase"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Dodaj
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};

FormAssignUserContent.propTypes = {
    validationSchema: object.isRequired,
    handleSubmit: func.isRequired,
};
export default memo(FormAssignUserContent);
