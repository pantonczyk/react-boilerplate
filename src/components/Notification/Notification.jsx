import React from 'react';
import { oneOf, string, func } from 'prop-types';

import SuccessIcon from 'icons/success_icon.svg';
import ErrorIcon from 'icons/error_icon.svg';
import './Notification.scss';

const Notification = ({ variant, title, message, handleRemoveNotification }) => {
    let icon;
    switch (variant) {
        case 'success':
            icon = SuccessIcon;
            break;
        case 'error':
            icon = ErrorIcon;
            break;
        default:
            return null;
    }

    return (
        <div className={`notification notification--${variant}`}>
            <img src={icon} className={'notification__icon'} alt={`${variant} icon`} />
            <div className={'notification__content'}>
                <p className={'notification__title'}>{title}</p>
                <p>{message}</p>
            </div>
            <button onClick={handleRemoveNotification} className={'notification__close'}>
                X
            </button>
        </div>
    );
};

Notification.propTypes = {
    variant: oneOf(['success', 'error']).isRequired,
    title: string.isRequired,
    message: string.isRequired,
    handleRemoveNotification: func.isRequired,
};

export default Notification;
