import React from 'react';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

import { goBack } from 'common/utils/routerFunctions';
import Button from 'components/Button';
import LanguageSwitch from 'components/LanguageSwitch';
import Logo from 'images/logo.svg';
import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
    const history = useHistory();
    const { t } = useTranslation();

    return (
        <div className={styles.pageNotFound__background}>
            <div className={styles.pageNotFound__header}>
                <img src={Logo} alt="Emplocity" />
                <LanguageSwitch />
            </div>
            <div className={styles.pageNotFound__content}>
                <p className={styles.pageNotFound__title}>
                    {t('pageNotFound.title', 'Ups.. Strony nie znaleziono!')}
                </p>
                <p className={styles.pageNotFound__message}>
                    <span>
                        {t('pageNotFound.message.span', 'Wygląda na to, że się zgubiłeś...')}
                    </span>
                    <br />
                    {t('pageNotFound.message.other', 'strona, której szukasz, jest niedostępna!')}
                </p>

                <Button textTransform="uppercase" onClick={goBack(history)}>
                    {t('pageNotFound.goBackButton', 'Powrót')}
                </Button>
            </div>

            <p className={styles.pageNotFound__policy}>
                {t('pageNotFound.policy', '©2001–2021 Wszelkie prawa zastrzeżone. Emplocity®.')}
                <a
                    className={styles.policy__link}
                    rel="noopener noreferrer"
                    target="_blank"
                    href="#"
                >
                    {t('pageNotFound.policyLink', 'Polityka prywatności')}
                </a>
            </p>
        </div>
    );
};

export default PageNotFound;
