import { createSelector } from 'reselect';

export const systemUsersSelector = {
    getAll: createSelector(
        (state) => state.systemUsers,
        (systemUsers) => systemUsers.usersList
    ),
    getUser: (userID) =>
        createSelector(
            (state) => state.systemUsers,
            (systemUsers) => systemUsers.usersList.filter(({ id }) => id === userID)[0]
        ),
};
