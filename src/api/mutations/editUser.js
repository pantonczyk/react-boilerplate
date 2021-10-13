import { gql } from '@apollo/client';

const EDIT_USER = gql`
    mutation editUser(
        $username: String!
        $email: String!
        $firstName: String!
        $lastName: String!
    ) {
        editUser(username: $username, email: $email, firstName: $firstName, lastName: $lastName) {
            user {
                id
                username
                email
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

export default EDIT_USER;
