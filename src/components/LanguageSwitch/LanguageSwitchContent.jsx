import React from 'react';
import { useTranslation } from 'react-i18next';
import { bool, objectOf, string, func } from 'prop-types';

import './LanguageSwitchContent.scss';

const LanguageSwitchContent = ({
    languages,
    isDropdownVisible,
    handleChangeLanguage,
    handleShowDropdown,
}) => {
    const { i18n } = useTranslation();

    return (
        <div className="languages">
            <div
                className="languages__dropdown"
                onClick={handleShowDropdown(true)}
                onMouseLeave={handleShowDropdown(false)}
            >
                <span className="current__lang">{i18n.language}</span>

                {isDropdownVisible && (
                    <div className="dropdown__list">
                        {Object.keys(languages).map((language) => (
                            <span
                                className="dropdown__item"
                                key={language}
                                value={language}
                                onClick={handleChangeLanguage(language)}
                            >
                                <span>{language}</span>
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

LanguageSwitchContent.propTypes = {
    languages: objectOf(objectOf(string)),
    isDropdownVisible: bool.isRequired,
    handleChangeLanguage: func.isRequired,
    handleShowDropdown: func.isRequired,
};

export default LanguageSwitchContent;
