import { ActionsType } from '../actions/systemUsers.action';

export const systemUsersInitialState = {
    usersList: [],
};

export const systemUsersStoreReducer = (state = systemUsersInitialState, action) => {
    switch (action.type) {
        case ActionsType.SET_USERS_LIST:
            return {
                ...state,
                usersList: action.payload,
            };

        case ActionsType.SET_ADD_NEW_USER:
            return {
                ...state,
                usersList: [...state.usersList, action.payload],
            };

        case ActionsType.SET_UPDATE_USER:
            return {
                ...state,
                usersList: state.usersList.map((user) =>
                    user.id == action.payload.id
                        ? {
                              id: action.payload.id,
                              username: action.payload.username,
                              email: action.payload.email,
                              firstName: action.payload.firstName,
                              lastName: action.payload.lastName,
                              groups: [
                                  {
                                      id: action.payload.groups[0].id,
                                      name: action.payload.groups[0].name,
                                  },
                              ],
                          }
                        : user
                ),
            };

        case ActionsType.SET_REMOVE_USER:
            return {
                ...state,
                usersList: state.usersList.filter((user) => user.id !== action.payload.user.id),
            };

        default:
            return state;
    }
};
