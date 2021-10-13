import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { getSession } from 'api/manageSession';

const httpLink = createHttpLink({
    uri: 'http://localhost:8000/graphql/',
});

const authLink = setContext((_, { headers }) => {
    const sesion = getSession();
    const token = sesion?.token;

    return {
        headers: {
            ...headers,
            authorization: token ? `JWT ${token}` : '',
        },
    };
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
