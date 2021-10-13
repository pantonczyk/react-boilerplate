import store from '../index';
import { currentUserActions } from 'store/actions/currentUser.action';

export class CurrentUserService {
    loginUser(userData) {
        store.dispatch(currentUserActions.loginUser(userData));
    }

    logoutUser() {
        store.dispatch(currentUserActions.logoutUser());
    }

    setUserData(userData) {
        store.dispatch(currentUserActions.setUserData(userData));
    }

    updateUserData(userData) {
        store.dispatch(currentUserActions.updateUserData(userData));
    }
}
