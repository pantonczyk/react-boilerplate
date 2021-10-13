import { gql } from '@apollo/client';

const ALL_USERS = gql`
    query allUsers {
        allUsers {
            id
            username
            firstName
            lastName
            email
            groups {
                id
                name
            }
        }
    }
`;

export default ALL_USERS;
