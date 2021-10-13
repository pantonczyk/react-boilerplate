import store from '../index';
import { systemUsersActions } from 'store/actions/systemUsers.action';

export class SystemUsersService {
    setUsersList(usersList) {
        store.dispatch(systemUsersActions.setUsersList(usersList));
    }

    setAddNewUser(user) {
        store.dispatch(systemUsersActions.setAddNewUser(user));
    }

    setUdpateUser(user) {
        store.dispatch(systemUsersActions.setUdpateUser(user));
    }

    setRemoveUser(user) {
        store.dispatch(systemUsersActions.setRemoveUser(user));
    }
}
