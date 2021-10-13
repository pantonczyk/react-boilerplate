import { gql } from '@apollo/client';

const CREATE_USER = gql`
    mutation createUser(
        $username: String!
        $email: String!
        $password: String!
        $firstName: String!
        $lastName: String!
        $roleGid: ID!
    ) {
        createUser(
            username: $username
            email: $email
            password: $password
            firstName: $firstName
            lastName: $lastName
            roleGid: $roleGid
        ) {
            user {
                id
                username
                email
                password
                firstName
                lastName
                groups {
                    id
                    name
                }
            }
        }
    }
`;

export default CREATE_USER;
