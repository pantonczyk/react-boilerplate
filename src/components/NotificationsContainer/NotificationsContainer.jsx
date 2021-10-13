import React from 'react';
import { arrayOf, shape, oneOf, string } from 'prop-types';

import { useNotifications } from 'common/hooks/useNotifications';
import Notification from 'components/Notification';
import styles from './NotificationsContainer.module.scss';

const NotificationsContainer = ({ notificationsList }) => {
    const { removeNotification } = useNotifications();

    const handleRemoveNotification = (id) => () => {
        removeNotification(id);
    };

    return (
        <div className={styles.notification__list}>
            {notificationsList?.map(({ variant, title, message }, id) => (
                <Notification
                    key={id}
                    variant={variant}
                    title={title}
                    message={message}
                    handleRemoveNotification={handleRemoveNotification(id)}
                />
            ))}
        </div>
    );
};

NotificationsContainer.propTypes = {
    notificationsList: arrayOf(
        shape({
            variant: oneOf(['success', 'error']).isRequired,
            title: string.isRequired,
            message: string.isRequired,
        })
    ).isRequired,
};

export default NotificationsContainer;
