import { useContext } from 'react';
import { NotificationsContext } from 'common/providers/NotificationsProvider';

export const useNotifications = () => {
    const { addNotification, removeNotification } = useContext(NotificationsContext);
    return { addNotification, removeNotification };
};

export default useNotifications;
