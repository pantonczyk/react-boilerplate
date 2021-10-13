import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider as ReduxProvider } from 'react-redux';

import { client } from 'api/client';
import store from 'store';
import { NotificationsProvider } from 'common/providers/NotificationsProvider';
import UserViewLayout from 'layouts/UserViewLayout';
import PrivateRoute from 'components/PrivateRoute';
import Login from '../Login';
import UserProfile from '../UserProfile';
import ManageUsers from '../ManageUsers';
import AdminEditUser from '../AdminEditUser';
import UserApplications from '../UserApplications';
import Application from '../Application';
import PageNotFound from '../PageNotFound';
import './main.scss';
import './normalize.scss';

const App = () => {
    const redirectTo = (path) => () => <Redirect to={path} />;

    return (
        <ReduxProvider store={store}>
            <ApolloProvider client={client}>
                <NotificationsProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" render={redirectTo('/login')} />
                            <Route path="/login" component={Login} />

                            <PrivateRoute
                                path={[
                                    '/user-profile',
                                    '/manage-users',
                                    '/users/:id',
                                    '/applications',
                                    '/applications/:id',
                                ]}
                            >
                                <UserViewLayout>
                                    <Switch>
                                        <PrivateRoute
                                            path="/user-profile"
                                            component={UserProfile}
                                        />
                                        <PrivateRoute
                                            exact
                                            path="/manage-users"
                                            component={ManageUsers}
                                        />
                                        <PrivateRoute path="/users/:id" component={AdminEditUser} />
                                        <PrivateRoute
                                            exact
                                            path="/applications"
                                            component={UserApplications}
                                        />
                                        <PrivateRoute
                                            path="/applications/:applicationID"
                                            component={Application}
                                        />
                                    </Switch>
                                </UserViewLayout>
                            </PrivateRoute>

                            <Route path="*" component={PageNotFound} />
                        </Switch>
                    </BrowserRouter>
                </NotificationsProvider>
            </ApolloProvider>
        </ReduxProvider>
    );
};

export default App;
