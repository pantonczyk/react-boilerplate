import React, { lazy, Suspense } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { array, bool, func } from 'prop-types';

import { redirectTo } from 'common/utils/routerFunctions';
import Button from 'components/Button';
import LoadingCircle from 'components/LoadingCircle';
import './ManageUsersContent.scss';

const FormAddUser = lazy(() => import('components/Forms/FormAddUser'));

const ManageUsersContent = ({ isFormVisible, handleFormVisibility, usersList }) => {
    const { t } = useTranslation();
    const history = useHistory();

    return (
        <div className="users">
            <div className="users__card">
                <div className="card__header">
                    <h1 className="card__title">
                        {t('manageUsers.content.title', 'Lista użytkowników')}
                    </h1>
                    <Button variant="secondary" type="submit" onClick={handleFormVisibility}>
                        {t('manageUsers.content.button', 'Dodaj użytkownika')}
                    </Button>
                </div>
                <div className="users__form">
                    <Suspense
                        fallback={
                            <div className="form__loading">
                                <LoadingCircle />
                            </div>
                        }
                    >
                        {isFormVisible && <FormAddUser />}
                    </Suspense>
                </div>
                <div className="users__table">
                    <div className="table__row table__header">
                        <div className="table__cell">
                            {t('manageUsers.content.table.username', 'Imię i nazwisko')}
                        </div>
                        <div className="table__cell">
                            {t('manageUsers.content.table.email', 'Email')}
                        </div>
                        <div className="table__cell">
                            {t('manageUsers.content.table.permissions', 'Grupa')}
                        </div>
                    </div>

                    {usersList?.map(({ email, firstName, lastName, id, groups }) => (
                        <div
                            className="table__row"
                            key={id}
                            onClick={redirectTo(history, `/users/${id}`)}
                        >
                            <div className="table__cell" data-title="Imię i nazwisko">
                                {firstName} {lastName}
                            </div>
                            <div className="table__cell" data-title="Email">
                                {email}
                            </div>
                            <div className="table__cell" data-title="Grupa">
                                {groups &&
                                    groups.map(({ id, name }) => <span key={id}>{name} </span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

ManageUsersContent.propTypes = {
    isFormVisible: bool.isRequired,
    handleFormVisibility: func.isRequired,
    usersList: array,
};

export default ManageUsersContent;
