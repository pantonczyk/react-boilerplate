import React, { useMemo, useState, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { string, func } from 'prop-types';
import * as Yup from 'yup';

import { useNotifications } from 'common/hooks/useNotifications';
import { convertIdToGid } from 'common/utils/convertIdToGid';
import ALL_USERS from 'api/queries/allUsers';
import ASSIGN_USER from 'api/mutations/assignUser';
import FormAssignUserContent from './FormAssignUserContent';

const FormAssignUser = ({ applicationID, handleAssignUser }) => {
    const [usersList, setUsersList] = useState([]);
    const { addNotification } = useNotifications();
    const [assignUserMutation] = useMutation(ASSIGN_USER);

    const { data } = useQuery(ALL_USERS);

    useMemo(() => {
        setUsersList(data?.allUsers);
    }, [data]);

    const validationSchema = useCallback(
        Yup.object().shape({
            email: Yup.string().email('Wprowadź poprawny email').required('To pole jest wymagane'),
        }),
        []
    );

    const addUserToState = (data, resetForm) => {
        handleAssignUser(data?.assignUser?.assignment);
        addNotification('success', 'Sukces', 'Pomyślnie dodano nowego użytkownika.');
        resetForm({
            values: {
                email: '',
            },
        });
    };

    const showError = (error) => {
        addNotification('error', 'Błąd', `${error.message}`);
    };

    const assignUser = ({ email }, resetForm) => {
        const applicationGid = convertIdToGid('ApplicationNode', applicationID);
        const userID = usersList.filter((item) => item.email === email)[0].id;
        const userGid = convertIdToGid('UserNode', userID);

        assignUserMutation({
            variables: {
                applicationGid,
                userGid,
            },
        })
            .then(({ data }) => addUserToState(data, resetForm))
            .catch(showError);
    };

    const handleSubmit = useCallback(
        (values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
                assignUser(values, resetForm);
                setSubmitting(false);
            }, 400);
        },
        [usersList]
    );

    return (
        <FormAssignUserContent validationSchema={validationSchema} handleSubmit={handleSubmit} />
    );
};

FormAssignUser.propTypes = {
    applicationID: string.isRequired,
    handleAssignUser: func.isRequired,
};

export default FormAssignUser;
