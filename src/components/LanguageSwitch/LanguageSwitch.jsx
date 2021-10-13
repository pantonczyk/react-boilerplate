import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { languages } from 'translations/languages';
import LanguageSwitchContent from './LanguageSwitchContent';

const LanguageSwitch = () => {
    const { i18n } = useTranslation();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleChangeLanguage = (language) => () => {
        i18n.changeLanguage(language);
        setIsDropdownVisible(false);
    };

    const handleShowDropdown = (value) => () => {
        setIsDropdownVisible(value);
    };

    return (
        <LanguageSwitchContent
            languages={languages}
            isDropdownVisible={isDropdownVisible}
            handleChangeLanguage={handleChangeLanguage}
            handleShowDropdown={handleShowDropdown}
        />
    );
};

export default LanguageSwitch;
