export const ActionsType = {
    SET_USERS_LIST: 'SET_USERS_LIST',
    SET_ADD_NEW_USER: 'SET_ADD_NEW_USER',
    SET_UPDATE_USER: 'SET_UPDATE_USER',
    SET_REMOVE_USER: 'SET_REMOVE_USER',
};

export const systemUsersActions = {
    setUsersList: (usersList) => ({
        type: ActionsType.SET_USERS_LIST,
        payload: usersList,
    }),

    setAddNewUser: (user) => ({
        type: ActionsType.SET_ADD_NEW_USER,
        payload: user,
    }),

    setUdpateUser: (user) => ({
        type: ActionsType.SET_UPDATE_USER,
        payload: user,
    }),

    setRemoveUser: (user) => ({
        type: ActionsType.SET_REMOVE_USER,
        payload: user,
    }),
};
