import { ActionsType } from '../actions/currentUser.action';

export const currentUserInitialState = {
    currentUserData: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
    },
};

export const currentUserStoreReducer = (state = currentUserInitialState, action) => {
    switch (action.type) {
        case ActionsType.LOGIN_USER:
            return {
                ...state,
                currentUserData: action.payload,
            };

        case ActionsType.SET_USER_DATA:
            return {
                ...state,
                currentUserData: action.payload,
            };

        case ActionsType.UPDATE_USER_DATA:
            return {
                ...state,
                currentUserData: action.payload,
            };

        default:
            return state;
    }
};
