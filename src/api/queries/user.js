import { gql } from '@apollo/client';

const USER = gql`
    query user($gid: ID!) {
        user(gid: $gid) {
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
`;

export default USER;
