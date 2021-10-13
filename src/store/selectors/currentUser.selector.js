import { createSelector } from 'reselect';

export const currentUserSelector = {
    getAll: createSelector(
        (state) => state.currentUser,
        (currentUser) => currentUser.currentUserData
    ),
    getFirstName: createSelector(
        (state) => state.currentUser,
        (currentUser) => currentUser.currentUserData.firstName
    ),
};
