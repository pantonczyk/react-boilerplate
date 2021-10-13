import { combineReducers } from 'redux';

import { ActionsType as CurrentUserActionsType } from './actions/currentUser.action';
import { currentUserInitialState, currentUserStoreReducer } from './reducers/currentUser.reducer';
import { systemUsersInitialState, systemUsersStoreReducer } from './reducers/systemUsers.reducer';

export const initilalStoreState = {
    currentUser: currentUserInitialState,
    systemUsers: systemUsersInitialState,
};

export const appReducer = combineReducers({
    currentUser: currentUserStoreReducer,
    systemUsers: systemUsersStoreReducer,
});

export const rootReducer = (state, action) => {
    if (action.type === CurrentUserActionsType.LOGOUT_USER) {
        state = initilalStoreState;
    }

    return appReducer(state, action);
};
