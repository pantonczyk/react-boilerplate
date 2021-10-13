import React from 'react';
import { useTranslation } from 'react-i18next';
import { object } from 'prop-types';

import FormAdminEditUser from 'components/Forms/FormAdminEditUser';
import './AdminEditUserContent.scss';

const AdminEditUserContent = ({ userData }) => {
    const { t } = useTranslation();
    const { firstName = '', lastName = '' } = userData || {};

    return (
        <div className="editUser">
            <div className="editUser__card">
                <div className="editUser__form">
                    <h1 className="form__titile">
                        {t('adminEditUser.content.title', 'Profil użytkownika')}
                        &nbsp;
                        <span>
                            {firstName} {lastName}
                        </span>
                    </h1>
                    <FormAdminEditUser userData={userData} />
                </div>
            </div>
        </div>
    );
};

AdminEditUserContent.propTypes = {
    userData: object,
};

export default AdminEditUserContent;
