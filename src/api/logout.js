import { deleteSession } from 'api/manageSession';

export const logout = (history, client, currentUserActions) => () => {
    currentUserActions.logoutUser();
    deleteSession();
    client.clearStore();
    history.push('/login');
};
