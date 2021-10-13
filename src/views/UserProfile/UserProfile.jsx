import React from 'react';
import { useTranslation } from 'react-i18next';

import FormEditUser from 'components/Forms/FormEditUser';
import FormResetPassword from 'components/Forms/FormResetPassword';
import styles from './UserProfile.module.scss';

const UserProfile = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.userProfile}>
            <div className={styles.userProfile__card}>
                <div className={styles.card__form}>
                    <div className={styles.form__content}>
                        <FormEditUser />
                    </div>
                    <div className={styles.form__info}>
                        <p>
                            {t(
                                'userProfile.formEditUserInfo',
                                'Te informacje ujawniane są tylko innym osobom, mającym dostęp do konta twojej firmy w platformie Emplocity.'
                            )}
                        </p>
                    </div>
                </div>
                <span className={styles.card__line}></span>
                <div className={styles.card__form}>
                    <div className={styles.form__content}>
                        <FormResetPassword />
                    </div>
                    <div className={styles.form__info}>
                        <p>
                            {t(
                                'userProfile.formResetPasswordInfo',
                                'Hasło musi składać się z 8 znaków, w tym z wielkiej i małej litery, cyfry i jednego znaku specjalnego (np: @, $, !, *, #, ?, &, %).'
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
