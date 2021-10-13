import React, { useState, useMemo, useEffect } from 'react';
import NotificationsContainer from 'components/NotificationsContainer';

export const NotificationsContext = React.createContext({
    notificationList: [],
    addNotification: () => {},
    removeNotification: () => {},
});

export const NotificationsProvider = ({ children }) => {
    const [notificationList, setNotificationList] = useState([]);

    const addNotification = (variant, title, message) => {
        const notification = {
            variant,
            title,
            message,
        };

        setNotificationList((prevState) => [...prevState, notification]);
    };

    const removeNotification = (id) => {
        const notificationToDelete = notificationList.findIndex((e) => e.id === id);
        notificationList.splice(notificationToDelete, 1);
        setNotificationList([...notificationList]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (notificationList.length) {
                removeNotification(notificationList[0].id);
            }
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [notificationList]);

    const contextValue = useMemo(
        () => ({ addNotification, removeNotification }),
        [addNotification, removeNotification]
    );

    return (
        <NotificationsContext.Provider value={contextValue}>
            {children}
            <NotificationsContainer notificationsList={notificationList} />
        </NotificationsContext.Provider>
    );
};
