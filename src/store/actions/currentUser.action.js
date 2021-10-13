export const ActionsType = {
    LOGIN_USER: 'LOGIN_USER',
    LOGOUT_USER: 'LOGOUT_USER',
    UPDATE_USER_DATA: 'UPDATE_USER_DATA',
    SET_USER_DATA: 'SET_USER_DATA',
};

export const currentUserActions = {
    loginUser: (userData) => ({
        type: ActionsType.LOGIN_USER,
        payload: userData,
    }),

    logoutUser: () => ({
        type: ActionsType.LOGOUT_USER,
    }),

    setUserData: (userData) => ({
        type: ActionsType.SET_USER_DATA,
        payload: userData,
    }),

    updateUserData: (userData) => ({
        type: ActionsType.UPDATE_USER_DATA,
        payload: userData,
    }),
};
