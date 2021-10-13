import { gql } from '@apollo/client';

const EDIT_USER_ADMIN = gql`
    mutation editUserAdmin(
        $gid: ID!
        $email: String!
        $username: String!
        $password: String!
        $firstName: String!
        $lastName: String!
        $roleGid: ID!
    ) {
        editUserAdmin(
            gid: $gid
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

export default EDIT_USER_ADMIN;
