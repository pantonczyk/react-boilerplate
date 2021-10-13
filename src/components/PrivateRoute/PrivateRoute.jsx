import React from 'react';
import { oneOfType, objectOf, any, func } from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { getSession } from 'api/manageSession';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const sesion = getSession();
    const accessToken = sesion?.token;
    return (
        <Route
            {...rest}
            render={(props) =>
                accessToken ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

PrivateRoute.propTypes = {
    component: oneOfType([objectOf(any), func]),
};

export default PrivateRoute;
